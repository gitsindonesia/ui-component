import {mount} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import VRadioGroup from './VRadioGroup.vue';

describe('VRadioGroup', () => {
  test('mount component', () => {
    expect(VRadioGroup).toBeTruthy();

    const wrapper = mount(VRadioGroup, {
      props: {
        modelValue: '',
        items: [
          {
            text: 'Item 1',
            value: '1',
          },
          {
            text: 'Item 2',
            value: '2',
          },
        ],
      },
    });

    expect(wrapper.text()).toContain('Item 1');
    expect(wrapper.text()).toContain('Item 2');
  });
});
