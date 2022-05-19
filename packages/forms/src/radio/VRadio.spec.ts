import {mount} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import VRadio from './VRadio.vue';

describe('VRadio', () => {
  test('mount component', () => {
    expect(VRadio).toBeTruthy();

    const wrapper = mount(VRadio, {
      props: {
        modelValue: 'Text',
      },
    });

    expect(wrapper.html()).toContain('input');
  });
});
