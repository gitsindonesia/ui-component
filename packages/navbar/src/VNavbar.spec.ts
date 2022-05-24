import {mount} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import VNavbar from './VNavbar.vue';

describe('VNavbar', () => {
  test('mount component', () => {
    expect(VNavbar).toBeTruthy();

    const wrapper = mount(VNavbar, {
      props: {
        modelValue: true,
      },
    });

    expect(wrapper.vm.modelValue).toBe(true);
  });
});
