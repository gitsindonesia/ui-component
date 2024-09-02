import {mount} from '@vue/test-utils';

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
