import {mount} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import VNavDrawer from './VNavDrawer.vue';

describe('VNavDrawer', () => {
  test('mount component', () => {
    expect(VNavDrawer).toBeTruthy();

    const wrapper = mount(VNavDrawer, {
      props: {
        modelValue: true,
      },
    });

    expect(wrapper.vm.modelValue).toBe(true);
  });
});
