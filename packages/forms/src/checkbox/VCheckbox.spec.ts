import {mount} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import VCheckbox from './VCheckbox.vue';

describe('VCheckbox', () => {
  test('mount component', () => {
    expect(VCheckbox).toBeTruthy();

    const wrapper = mount(VCheckbox, {
      props: {
        modelValue: false,
        label: 'Text',
      },
    });

    expect(wrapper.text()).toContain('Text');
  });
});
