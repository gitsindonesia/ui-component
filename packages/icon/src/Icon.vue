<script setup lang="ts">
import { Icon as Iconify } from '@iconify/vue/dist/offline';
import { loadIcon } from '@iconify/vue';
import { computed, ref, watch } from 'vue';
import { type DefaultSizes, defaultSizes } from '@morpheme/theme/defaultTheme';

export type Props = {
  name: string;
  size?: DefaultSizes | string | number;
};

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
});

const isFetching = ref(false);
const icon = ref();

const isMorphemeIcons = computed(() => {
  return props.name.startsWith('untitled:') || props.name.startsWith('remix:') || props.name.startsWith('iconsax:') || props.name.startsWith('vuesax:')
})

function normalizeName(name: string) {
  name = name.replace('untitled:', '')
    .replace('remix:', '')
    .replace('iconsax:', '')
    .replace('vuesax:', '')
    .replace('-icon', '')

  return toPascalCase(name) + 'Icon'
}

function toPascalCase(string: string) {
  return `${string}`
    .toLowerCase()
    .replace(new RegExp(/[-_]+/, 'g'), ' ')
    .replace(new RegExp(/[^\w\s]/, 'g'), '')
    .replace(
      new RegExp(/\s+(.)(\w*)/, 'g'),
      ($1, $2, $3) => `${$2.toUpperCase() + $3}`
    )
    .replace(new RegExp(/\w/), s => s.toUpperCase());
}

async function loadIconComponent() {
  isFetching.value = true;

  if (props.name.startsWith('untitled:')) {
    const icons = await import('@morphemeicons/vue/untitled/esm/index')
    icon.value = (icons as any)[normalizeName(props.name)];
  }
  else if (props.name.startsWith('remix:')) {
    const icons = await import('@morphemeicons/vue/remix/esm/index')
    icon.value = (icons as any)[normalizeName(props.name)];
  }
  else if (props.name.startsWith('iconsax') || props.name.startsWith('vuesax')) {
    const [, name] = props.name.split(':')
    const [variant, iconName] = name.split('/')
    switch (variant) {
      case 'outline': {
        const icons = await import('@morphemeicons/vue/iconsax/outline/esm/index')
        icon.value = (icons as any)[normalizeName(iconName)];
      }
      break;
      case 'bulk': {
        const icons = await import('@morphemeicons/vue/iconsax/bulk/esm/index')
        icon.value = (icons as any)[normalizeName(iconName)];
      }
      break;
      case 'broken': {
        const icons = await import('@morphemeicons/vue/iconsax/broken/esm/index')
        icon.value = (icons as any)[normalizeName(iconName)];
      }
      break;
      case 'linear': {
        const icons = await import('@morphemeicons/vue/iconsax/linear/esm/index')
        icon.value = (icons as any)[normalizeName(iconName)];
      }
      break;
      case 'solid': {
        const icons = await import('@morphemeicons/vue/iconsax/solid/esm/index')
        icon.value = (icons as any)[normalizeName(iconName)];
      }
      break;
      case 'twotone': {
        const icons = await import('@morphemeicons/vue/iconsax/twotone/esm/index')
        icon.value = (icons as any)[normalizeName(iconName)];
      }
      break;
      default:
        console.error(`Variant ${variant} is not supported`)
      break;
    }
  }
  else {
    icon.value = await loadIcon(props.name).catch(() => { });
  }
  isFetching.value = false;
}

watch(() => props.name, loadIconComponent);

const classes = computed(() => {
  return `v-icon v-icon--${props.size}`;
});

const style = computed(() => {
  if (!defaultSizes.includes(String(props.size))) {
    return {
      width: props.size,
      height: props.size,
    };
  }
  return {}
});

loadIconComponent();

const ariaProps = {
  'aria-hidden': true
}
</script>

<template>
  <span v-if="isFetching" :class="classes" :style="style" v-bind="ariaProps" />
  <component
    v-else-if="isMorphemeIcons"
    :is="icon"
    :class="classes"
    :style="style"
    v-bind="ariaProps"
  />
  <Iconify
    v-else-if="icon"
    :icon="icon"
    :class="classes"
    :style="style"
    v-bind="ariaProps"
  />
  <span v-else v-bind="ariaProps">{{ name }}</span>
</template>
