import {describe, it, expect} from 'vitest';

import {mount} from '@vue/test-utils';
import Steps from '../Steppers.vue';
import type {StepItem} from '../types';

describe('Steps', () => {
  it('renders properly', () => {
    const items: StepItem[] = [
      {
        label: 'Item 1',
      },
      {
        label: 'Item 2',
      },
      {
        label: 'Item 3',
      },
    ];
    const wrapper = mount(Steps, {props: {items, modelValue: 0}});
    expect(wrapper.text()).toContain('Item 1');
  });
});
