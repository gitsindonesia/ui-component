<script lang="ts">
import {defineComponent} from 'vue';
import Star from './RatingStar.vue';

export default defineComponent({
  components: {
    Star,
  },
  props: {
    increment: {
      type: Number,
      default: 1,
    },
    rating: {
      type: Number,
      default: 0,
    },
    roundStartRating: {
      type: Boolean,
      default: true,
    },
    activeColor: {
      type: [String, Array],
      default: '#ffd055',
    },
    inactiveColor: {
      type: String,
      default: '#d8d8d8',
    },
    maxRating: {
      type: Number,
      default: 5,
    },
    starPoints: {
      type: Array,
      default() {
        return [];
      },
    },
    starSize: {
      type: Number,
      default: 24,
    },
    showRating: {
      type: Boolean,
      default: false,
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
    textClass: {
      type: String,
      default: '',
    },
    inline: {
      type: Boolean,
      default: false,
    },
    borderColor: {
      type: String,
      default: '#999',
    },
    activeBorderColor: {
      type: [String, Array],
      default: null,
    },
    borderWidth: {
      type: Number,
      default: 0,
    },
    roundedCorners: {
      type: Boolean,
      default: false,
    },
    padding: {
      type: Number,
      default: 0,
    },
    rtl: {
      type: Boolean,
      default: false,
    },
    fixedPoints: {
      type: Number,
      default: null,
    },
    glow: {
      type: Number,
      default: 0,
    },
    glowColor: {
      type: String,
      default: '#fff',
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    activeOnClick: {
      type: Boolean,
      default: false,
    },
    animate: {
      type: Boolean,
      default: false,
    },
    hint: {
      type: String,
      default: '',
    },
  },
  emits: ['update:rating', 'hover:rating'],

  data(): {
    step: number;
    fillLevel: any[];
    currentRating: number;
    selectedRating: number;
    ratingSelected: boolean;
  } {
    return {
      step: 0,
      fillLevel: [],
      currentRating: 0,
      selectedRating: 0,
      ratingSelected: false,
    };
  },
  computed: {
    formattedRating() {
      return this.fixedPoints === null
        ? this.currentRating
        : this.currentRating.toFixed(this.fixedPoints);
    },
    shouldRound() {
      return this.ratingSelected || this.roundStartRating;
    },
    margin() {
      return this.padding + this.borderWidth;
    },
    activeColors() {
      if (Array.isArray(this.activeColor)) {
        return this.padColors(
          this.activeColor,
          this.maxRating,
          this.activeColor.slice(-1)[0],
        );
      }

      return new Array(this.maxRating).fill(this.activeColor);
    },
    currentActiveColor() {
      if (!this.activeOnClick) {
        return this.currentRating > 0
          ? this.activeColors[Math.ceil(this.currentRating) - 1]
          : this.inactiveColor;
      }
      return this.selectedRating > 0
        ? this.activeColors[Math.ceil(this.selectedRating) - 1]
        : this.inactiveColor;
    },
    activeBorderColors() {
      if (Array.isArray(this.activeBorderColor)) {
        return this.padColors(
          this.activeBorderColor,
          this.maxRating,
          this.activeBorderColor.slice(-1)[0],
        );
      }
      const borderColor = this.activeBorderColor
        ? this.activeBorderColor
        : this.borderColor;
      return new Array(this.maxRating).fill(borderColor);
    },
    currentActiveBorderColor() {
      if (!this.activeOnClick) {
        return this.currentRating > 0
          ? this.activeBorderColors[Math.ceil(this.currentRating) - 1]
          : this.borderColor;
      }
      return this.selectedRating > 0
        ? this.activeBorderColors[Math.ceil(this.selectedRating) - 1]
        : this.borderColor;
    },
    roundedRating() {
      const inv = 1.0 / this.increment;
      return Math.min(
        this.maxRating,
        Math.ceil(this.currentRating * inv) / inv,
      );
    },
  },
  watch: {
    rating(val) {
      this.currentRating = val;
      this.selectedRating = val;
      this.createStars(this.shouldRound);
    },
  },
  created() {
    this.step = this.increment * 100;
    this.currentRating = this.rating;
    this.selectedRating = this.currentRating;
    this.createStars(this.roundStartRating);
  },
  methods: {
    setRating($event: any, persist: any) {
      if (!this.readOnly) {
        const position = this.rtl
          ? (100 - $event.position) / 100
          : $event.position / 100;
        this.currentRating = Number(($event.id + position - 1).toFixed(2));
        this.currentRating =
          this.currentRating > this.maxRating
            ? this.maxRating
            : this.currentRating;
        if (persist) {
          this.createStars(true, true);
          this.selectedRating =
            this.clearable && this.currentRating === this.selectedRating
              ? 0
              : this.currentRating;
          this.$emit('update:rating', this.selectedRating);
          this.ratingSelected = true;
        } else {
          this.createStars(true, !this.activeOnClick);
          this.$emit('hover:rating', this.currentRating);
        }
      }
    },
    resetRating() {
      if (!this.readOnly) {
        this.currentRating = this.selectedRating;
        this.createStars(this.shouldRound);
      }
    },
    createStars(round = true, applyFill = true) {
      this.currentRating = round ? this.roundedRating : this.currentRating;
      for (let i = 0; i < this.maxRating; i++) {
        let level = 0;
        if (i < this.currentRating) {
          level =
            this.currentRating - i > 1 ? 100 : (this.currentRating - i) * 100;
        }
        if (applyFill) {
          this.fillLevel[i] = Math.round(level);
        }
      }
    },
    padColors(array: any, minLength: any, fillValue: any) {
      return Object.assign(new Array(minLength).fill(fillValue), array);
    },
  },
});
</script>

<template>
  <div
    :class="[
      'v-star-rating',
      {'v-star-rating-rtl': rtl},
      {'v-star-rating-inline': inline},
    ]"
    :aria-label="`Rated ${selectedRating} stars out of ${maxRating}`"
  >
    <div class="sr-only">
      <slot name="screen-reader" :rating="selectedRating" :stars="maxRating">
        <span>Rated {{ selectedRating }} stars out of {{ maxRating }}</span>
      </slot>
    </div>

    <div class="v-star-rating-stars" @mouseleave="resetRating">
      <span
        v-for="n in maxRating"
        :key="n"
        :class="[{'v-star-rating-pointer': !readOnly}, 'v-star-rating-star']"
        :style="{'margin-right': margin + 'px'}"
      >
        <star
          :fill="fillLevel[n - 1]"
          :size="starSize"
          :points="starPoints"
          :star-id="n"
          :step="step"
          :active-color="currentActiveColor"
          :inactive-color="inactiveColor"
          :border-color="borderColor"
          :active-border-color="currentActiveBorderColor"
          :border-width="borderWidth"
          :rounded-corners="roundedCorners"
          :rtl="rtl"
          :glow="glow"
          :glow-color="glowColor"
          :animate="animate"
          @star-selected="setRating($event, true)"
          @star-mouse-move="setRating"
        />
      </span>
      <span v-if="showRating" :class="['v-star-rating-rating-text', textClass]">
        {{ formattedRating }}</span
      >
    </div>
    <p v-if="hint" class="v-star-rating-hint">
      <slot name="hint">
        {{ hint }}
      </slot>
    </p>
  </div>
</template>
