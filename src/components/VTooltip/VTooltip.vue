<script setup>
import { ref, toRefs } from "vue";
import { createPopper } from "@popperjs/core";

const props = defineProps({
  placement: {
    type: String,
    default: "top",
  },
  options: {
    type: Object,
    default: () => ({}),
  },
  activatorClass: {
    type: String,
    default: "",
  },
  tooltipClass: {
    type: String,
    default:
      "inline-block shadow px-3 py-2 rounded bg-[#000] text-white p-2 rounded max-w-[300px]",
  },
});

const { color, bgColor } = toRefs(props);

const show = ref(false);
const target = ref(null);
const tooltip = ref(null);

const onMouseOver = () => {
  show.value = true;
  const offset = {
    top: [0, 20],
    "top-start": [0, 20],
    "top-end": [0, 20],
    bottom: [0, 20],
    "bottom-start": [0, 20],
    "bottom-end": [0, 20],
    right: [0, 10],
    "right-start": [0, 10],
    "right-end": [0, 10],
    left: [0, 10],
    "left-start": [0, 10],
    "left-end": [0, 10],
  };
  createPopper(target.value, tooltip.value, {
    placement: props.placement,
    modifiers: [
      {
        name: "offset",
        options: {
          offset: offset[props.placement],
        },
      },
    ],
    ...props.options,
  });
};

const onMouseOut = () => {
  show.value = false;
};

const on = ref({
  mouseover: onMouseOver,
  mouseout: onMouseOut,
});
</script>

<template>
  <span
    id="tooltipActivator"
    ref="target"
    aria-describedby="tooltip"
    :class="activatorClass"
  >
    <slot name="activator" :on="on" />
  </span>

  <span
    id="tooltip"
    ref="tooltip"
    role="tooltip"
    :class="['tooltip', tooltipClass]"
    :style="{ display: show ? 'block' : 'none' }"
  >
    <slot />
    <div id="arrow" data-popper-arrow></div>
  </span>
</template>

<style>
#arrow,
#arrow::before {
  position: absolute;
  width: 8px;
  height: 8px;
  background: inherit;
  box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.1);
}

#arrow {
  visibility: hidden;
}

#arrow::before {
  visibility: visible;
  content: "";
  transform: rotate(45deg);
}

.tooltip[data-popper-placement^="top"] > #arrow {
  bottom: -4px;
}

.tooltip[data-popper-placement^="bottom"] > #arrow {
  top: -4px;
}

.tooltip[data-popper-placement^="left"] > #arrow {
  right: -4px;
}

.tooltip[data-popper-placement^="right"] > #arrow {
  left: -4px;
}
</style>
