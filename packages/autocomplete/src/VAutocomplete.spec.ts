import {mount} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import VAutocomplete from './VAutocomplete.vue';

describe('VAutocomplete', () => {
  test('mount component', () => {
    expect(VAutocomplete).toBeTruthy();

    const wrapper = mount(VAutocomplete, {
      props: {
        modelValue: undefined,
        searchBy: 'text',
        displayText: 'text',
        placeholder: 'Search...',
        label: '',
        rules: '',
        items: [
          {
            text: 'Item 1',
            value: 1,
          },
          {
            text: 'Item 2',
            value: 2,
          },
        ],
        noDataText: 'No data.',
        notFoundText: 'Nothing found.',
        clearable: false,
      },
    });

    expect(wrapper.html()).toContain('Search...');
    expect(wrapper.find('input').exists()).toBe(true);
    wrapper.find('input').setValue('ite');
  });
});
