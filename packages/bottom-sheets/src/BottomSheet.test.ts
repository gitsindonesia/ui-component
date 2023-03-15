import {describe, it, expect, beforeEach, afterEach} from 'vitest';

import {mount} from '@vue/test-utils';
import BottomSheet from './BottomSheet.vue';
import {defineComponent, ref} from 'vue';

describe('BottomSheet', () => {
  it('renders properly', () => {
    const wrapper = mount(BottomSheet, {
      props: {
        modelValue: true,
      },
      slots: {
        default: 'Hello BottomSheet',
      },
    });

    expect(wrapper.html()).toContain('<!--teleport start-->');
    expect(wrapper.html()).toContain('<!--teleport end-->');
    expect(wrapper.vm.modelValue).toBeTruthy();
  });

  describe('toggle', () => {
    it('is open the bottom sheet', async () => {
      const WrapperComponent = defineComponent({
        components: {
          BottomSheet,
        },
        setup() {
          const isOpen = ref();
          return {
            isOpen,
          };
        },
        template: `<div><button id="trigger" @click="isOpen = !isOpen">Toggle</button><BottomSheet v-model="isOpen">Test</BottomSheet></div>`,
      });
      const wrapper = mount(WrapperComponent, {
        global: {
          stubs: {
            teleport: true,
          },
        },
      });
      const buttonTrigger = wrapper.find('#trigger');

      await buttonTrigger.trigger('click');

      expect(wrapper.html()).toContain('v-bottom-sheet-overlay');
      expect(wrapper.html()).toContain('v-bottom-sheet');
    });

    it('close the bottom sheet on overlay clicked', async () => {
      const wrapper = mount(BottomSheet, {
        global: {
          stubs: {
            teleport: true,
          },
        },
        props: {
          modelValue: true,
        },
      });

      const overlay = wrapper.find('.v-bottom-sheet-overlay');

      await overlay.trigger('click');

      expect(wrapper.html()).toContain('v-bottom-sheet-overlay');
      expect(wrapper.html()).toContain('v-bottom-sheet');
    });
  });
});
