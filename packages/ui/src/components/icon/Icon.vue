<script setup lang="ts">
import {Icon as Iconify} from '@iconify/vue/dist/offline';
import {loadIcon} from '@iconify/vue';
import {computed, defineComponent, h, ref, shallowRef, watch} from 'vue';
import {type DefaultSizes, defaultSizes} from '@morpheme/theme/defaultTheme';
import {getItem, setItem} from './storage';

export type Props = {
  name: string;
  size?: DefaultSizes | string | number;
  noCache?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  noCache: false,
});

const isFetching = ref(false);
const icon = shallowRef();

const isMorphemeIcons = computed(() => {
  return (
    props.name.startsWith('untitled:') ||
    props.name.startsWith('remix:') ||
    props.name.startsWith('iconsax:') ||
    props.name.startsWith('vuesax:')
  );
});

function normalizeName(name: string) {
  name = String(name)
    .replace('untitled:', '')
    .replace('remix:', '')
    .replace('iconsax:', '')
    .replace('vuesax:', '');

  return toKebabCase(name);
}

function toKebabCase(string: string) {
  return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
}

function createIconComponent(content: string) {
  return defineComponent({
    setup() {
      return () =>
        h('span', {
          innerHTML: content,
          class: classes.value,
          style: style.value,
          ...ariaProps,
        });
    },
  });
}

async function loadIconComponent() {
  isFetching.value = true;
  if (isMorphemeIcons.value) {
    const [collection, name] = props.name.split(':');
    const [variant, iconName] = name.split('/');
    const variantName = collection === 'iconsax' ? `/${variant}` : '';
    const formattedName = normalizeName(iconName || name);
    const storageName = `morphemeicons-${collection}${variantName}-${formattedName}`;
    const cachedIcon = getItem(storageName);

    if (cachedIcon && !props.noCache) {
      icon.value = createIconComponent(cachedIcon);
      isFetching.value = false;
    } else {
      try {
        const res = await fetch(
          `https://cdn.jsdelivr.net/npm/morphemeicons@0.2.0/${collection}${variantName}/${formattedName}.svg`,
        );
        const content = await res.text();
        setItem(storageName, content);
        icon.value = createIconComponent(
          res.status === 200 ? content : props.name,
        );
      } catch (e: any) {
        console.warn(`Icon ${props.name} not found`);
        icon.value = createIconComponent(props.name);
      } finally {
        isFetching.value = false;
      }
    }
  } else {
    icon.value = await loadIcon(props.name).catch(() => {});
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
  return {};
});

loadIconComponent();

const ariaProps = {
  'aria-hidden': true,
};
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
