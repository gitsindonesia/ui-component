import {mount} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import VMultiSelect from './VMultiSelect.vue';

describe('VMultiSelect', () => {
  test('mount component', () => {
    expect(VMultiSelect).toBeTruthy();

    const wrapper = mount(VMultiSelect, {
      props: {
        placeholder: 'Search...',
      },
    });

    expect(wrapper.html()).toContain('Search...');
  });
});
