<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import AlphaColor from './AlphaColor';

export default defineComponent({
  props: {
    fill: {
      type: Number,
      default: 0,
    },
    points: {
      type: Array as PropType<any[]>,
      default() {
        return [];
      },
    },
    size: {
      type: Number,
      default: 50,
    },
    starId: {
      type: Number,
      required: true,
    },
    activeColor: {
      type: String,
      required: true,
    },
    inactiveColor: {
      type: String,
      required: true,
    },
    borderColor: {
      type: String,
      default: '#000',
    },
    activeBorderColor: {
      type: String,
      default: '#000',
    },
    borderWidth: {
      type: Number,
      default: 0,
    },
    roundedCorners: {
      type: Boolean,
      default: false,
    },
    rtl: {
      type: Boolean,
      default: false,
    },
    glow: {
      type: Number,
      default: 0,
    },
    glowColor: {
      type: String,
      default: null,
      required: false,
    },
    animate: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['star-mouse-move', 'star-selected'],
  data() {
    return {
      starPoints: [19.8, 2.2, 6.6, 43.56, 39.6, 17.16, 0, 17.16, 33, 43.56],
      grad: '',
      glowId: '',
      isStarActive: true,
    };
  },
  computed: {
    starPointsToString() {
      return this.starPoints.join(',');
    },
    gradId() {
      return 'url(#' + this.grad + ')';
    },
    starSize() {
      // Adjust star size when rounded corners are set with no border, to account for the 'hidden' border
      const size =
        this.roundedCorners && this.borderWidth <= 0
          ? this.size - this.border
          : this.size;
      return size + this.border;
    },
    starFill() {
      return this.rtl ? 100 - this.fill + '%' : this.fill + '%';
    },
    border() {
      return this.roundedCorners && this.borderWidth <= 0
        ? 6
        : this.borderWidth;
    },
    getBorderColor() {
      if (this.roundedCorners && this.borderWidth <= 0) {
        // create a hidden border
        return this.fill <= 0 ? this.inactiveColor : this.activeColor;
      }

      return this.fill <= 0 ? this.borderColor : this.activeBorderColor;
    },
    maxSize() {
      return this.starPoints.reduce(function (a, b) {
        return Math.max(a, b);
      });
    },
    viewBox() {
      return '0 0 ' + this.maxSize + ' ' + this.maxSize;
    },
    shouldAnimate() {
      return this.animate && this.isStarActive;
    },
    strokeLinejoin() {
      return this.roundedCorners ? 'round' : 'miter';
    },
  },
  created() {
    this.starPoints = this.points.length ? this.points : this.starPoints;
    this.calculatePoints();
    this.grad = this.getRandomId();
    this.glowId = this.getRandomId();
  },
  methods: {
    mouseMoving($event: any) {
      if ($event.touchAction !== 'undefined') {
        this.$emit('star-mouse-move', {
          event: $event,
          position: this.getPosition($event),
          id: this.starId,
        });
      }
    },
    touchStart() {
      this.$nextTick(() => {
        this.isStarActive = true;
      });
    },
    touchEnd() {
      this.$nextTick(() => {
        this.isStarActive = false;
      });
    },
    getPosition($event: any) {
      // calculate position in percentage.
      const starWidth = (92 / 100) * this.size;
      const offset = this.rtl
        ? Math.min($event.offsetX, 45)
        : Math.max($event.offsetX, 1);
      const position = Math.round((100 / starWidth) * offset);

      return Math.min(position, 100);
    },
    selected($event: any) {
      this.$emit('star-selected', {
        id: this.starId,
        position: this.getPosition($event),
      });
    },
    getRandomId() {
      return Math.random().toString(36).substring(7);
    },
    calculatePoints() {
      this.starPoints = this.starPoints.map((point, i) => {
        const offset = i % 2 === 0 ? this.border * 1.5 : 0;
        return (this.size / this.maxSize) * point + offset;
      });
    },
    getColor(color: string) {
      return new AlphaColor(color).parseAlphaColor().color;
    },
    getOpacity(color: string) {
      return new AlphaColor(color).parseAlphaColor().opacity;
    },
  },
});
</script>

<template>
  <svg
    :class="[
      'v-star-rating-star',
      {'v-star-rating-star-rotate': shouldAnimate},
    ]"
    :height="starSize"
    :width="starSize"
    :viewBox="viewBox"
    @mousemove="mouseMoving"
    @click="selected"
    @touchstart="touchStart"
    @touchend="touchEnd"
  >
    <linearGradient :id="grad" x1="0" x2="100%" y1="0" y2="0">
      <stop
        :offset="starFill"
        :stop-color="rtl ? getColor(inactiveColor) : getColor(activeColor)"
        :stop-opacity="
          rtl ? getOpacity(inactiveColor) : getOpacity(activeColor)
        "
      />
      <stop
        :offset="starFill"
        :stop-color="rtl ? getColor(activeColor) : getColor(inactiveColor)"
        :stop-opacity="
          rtl ? getOpacity(activeColor) : getOpacity(inactiveColor)
        "
      />
    </linearGradient>

    <filter
      :id="glowId"
      height="130%"
      width="130%"
      filterUnits="userSpaceOnUse"
    >
      <feGaussianBlur :stdDeviation="glow" result="coloredBlur" />
      <feMerge>
        <feMergeNode in="coloredBlur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <polygon
      v-show="glowColor && glow > 0 && fill > 0"
      :points="starPointsToString"
      :fill="gradId"
      :stroke="glowColor"
      :filter="'url(#' + glowId + ')'"
      :stroke-width="border"
    />

    <polygon
      :points="starPointsToString"
      :fill="gradId"
      :stroke="getBorderColor"
      :stroke-width="border"
      :stroke-linejoin="strokeLinejoin"
    />
    <polygon :points="starPointsToString" :fill="gradId" />
  </svg>
</template>
