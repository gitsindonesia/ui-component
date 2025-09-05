import {mount} from '@vue/test-utils';

import VInputRange from './VInputRange.vue';

describe('VInputRange', () => {
  test('mount component', () => {
    expect(VInputRange).toBeTruthy();

    const wrapper = mount(VInputRange, {
      props: {
        modelValue: {min: 0, max: 0},
      },
    });

    expect(wrapper.html()).toContain('relative');
  });
});
