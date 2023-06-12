<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import type { DefaultColors } from "@morpheme/theme/defaultTheme";
import { useVModel } from "@vueuse/core";
import { provide, ref, watch } from "vue";
import { VBottomNavigationInjectionKey } from "./api";

const props = withDefaults(
  defineProps<{
    modelValue?: boolean;
    color?: DefaultColors;
    grow?: boolean;
    fixed?: boolean;
    defaultActive?: number;
    transition?: string;
  }>(),
  {
    color: "primary",
    modelValue: true,
    fixed: true,
    defaultActive: 0,
    transition: "slide-up",
  }
);

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const modelValue = useVModel(props, "modelValue", emit);

function toggle() {
  modelValue.value = !modelValue.value;
}

function open() {
  modelValue.value = true;
}

function close() {
  modelValue.value = false;
}

const slider = ref<HTMLDivElement>();
const active = ref<HTMLButtonElement>();
const items = ref<HTMLButtonElement[]>([]);

function registerItem(el: HTMLButtonElement) {
  if (hasItem(el)) return;

  items.value.push(el);
}

function hasItem(el: HTMLButtonElement) {
  return items.value.includes(el);
}

function unregisterItem(el: HTMLButtonElement) {
  const index = items.value.findIndex((item) => item == el);
  if (index > -1) {
    items.value.splice(index, 1);
  }
}

function setActive(el: HTMLButtonElement) {
  active.value = el;
}

function isActive(el: HTMLButtonElement) {
  return active.value == el;
}

function setSliderPosition(el: HTMLButtonElement) {
  if (slider.value) {
    slider.value.style.left = `${el.offsetLeft}px`;
    slider.value.style.width = `${el.offsetWidth}px`;
    slider.value.style.height = `${el.offsetHeight}px`;
    slider.value.style.display = "block";
  }
}

watch(
  active,
  (val) => {
    if (slider.value) {
      if (val instanceof HTMLButtonElement) {
        setSliderPosition(val);
      } else {
        setSliderPosition((val as any)?.$el);
      }
    }
  },
  { immediate: true }
);

function setInitalActive() {
  active.value = items.value[props.defaultActive];
}

watch(
  items,
  () => {
    setInitalActive();
  },
  { immediate: true, deep: true }
);

const api = {
  modelValue,
  items,
  active,
  toggle,
  open,
  close,
  registerItem,
  unregisterItem,
  hasItem,
  setActive,
  isActive,
  setSliderPosition,
};

provide(VBottomNavigationInjectionKey, api);
</script>

<template>
  <Transition :name="transition">
    <header
      v-show="modelValue"
      class="v-bottom-navigation"
      :class="[
        `v-bottom-navigation-${color}`,
        {
          'v-bottom-navigation--grow': grow,
          'v-bottom-navigation--fixed': fixed,
        },
      ]"
      v-bind="$attrs"
    >
      <div class="v-bottom-navigation__content">
        <slot />
      </div>
      <div ref="slider" class="v-bottom-navigation__slider" />
    </header>
  </Transition>
</template>
