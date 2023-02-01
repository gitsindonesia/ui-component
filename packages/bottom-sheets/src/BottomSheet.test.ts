import {describe, it, expect} from 'vitest';

import {mount} from '@vue/test-utils';
import BottomSheet from './BottomSheet.vue';

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
});
