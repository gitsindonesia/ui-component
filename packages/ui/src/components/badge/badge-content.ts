import {defineComponent, h} from 'vue';

export const VBadgeContent = defineComponent({
  name: 'VBadgeContent',
  setup(_props, {slots}) {
    return () => h('div', {class: 'badge-content'}, slots.default?.());
  },
});
