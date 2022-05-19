import {mount} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import VInputRange from './VInputRange.vue';

describe('VInputRange', () => {
  test('mount component', () => {
    expect(VInputRange).toBeTruthy();

    const wrapper = mount(VInputRange, {
      props: {
        modelValue: 0,
      },
    });

    expect(wrapper.html()).toContain('relative');
  });
});
