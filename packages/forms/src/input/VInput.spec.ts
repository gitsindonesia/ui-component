import {mount} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import VInput from './VInput.vue';

describe('VInput', () => {
  test('mount component', () => {
    expect(VInput).toBeTruthy();

    const wrapper = mount(VInput, {
      props: {
        modelValue: 'Text',
      },
    });

    expect(wrapper.html()).toContain('relative');
  });
});
