import {mount} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import VPagination from './VPagination.vue';

describe('VPagination', () => {
  test('mount component', () => {
    expect(VPagination).toBeTruthy();

    const wrapper = mount(VPagination, {
      props: {
        modelValue: 1,
      },
    });

    expect(wrapper.vm.modelValue).toBe(1);
  });
});
