import {mount} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import Autocomplete from './Autocomplete.vue';

describe('Autocomplete', () => {
  test('mount component', () => {
    expect(Autocomplete).toBeTruthy();

    const wrapper = mount(Autocomplete, {
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
