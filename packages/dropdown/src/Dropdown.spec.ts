import {mount} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import Dropdown from './Dropdown.vue';

describe('Dropdown', () => {
  test('mount component', () => {
    expect(Dropdown).toBeTruthy();

    const wrapper = mount(Dropdown, {
      props: {
        label: 'Text',
      },
    });

    expect(wrapper.text()).toContain('Text');
  });
});
