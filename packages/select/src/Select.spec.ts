import {mount} from '@vue/test-utils';
import Select from './Select.vue';

const items = [
  {text: 'Option 1', value: 1},
  {text: 'Option 2', value: 2},
];

describe('Select', () => {
  it('renders the placeholder when no option is selected', () => {
    const wrapper = mount(Select, {
      props: {
        placeholder: 'Select',
        items,
      },
    });

    expect(wrapper.find('.v-select-selected').text()).toBe('Select');
  });

  it('renders the selected option text', async () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: items[0],
        items,
      },
    });

    expect(wrapper.find('.v-select-selected').text()).toBe('Option 1');

    await wrapper.setProps({modelValue: items[1]});

    expect(wrapper.find('.v-select-selected').text()).toBe('Option 2');
  });

  it('emits the selected option value on change', async () => {
    const wrapper = mount(Select, {
      props: {
        items,
      },
    });

    await wrapper.find('.v-select-button').trigger('click');
    await wrapper.find('.v-select-option').trigger('click');

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
  });

  it('filters options based on search query', async () => {
    const wrapper = mount(Select, {
      props: {
        items,
        searchable: true,
      },
    });

    await wrapper.find('.v-select-button').trigger('click');
    await wrapper.find('.v-select-input input').setValue('Option 1');

    expect(wrapper.findAll('.v-select-option')).toHaveLength(1);
    expect(wrapper.find('.v-select-option').text()).toBe('Option 1');
  });

  it('renders error message when error prop is true', () => {
    const wrapper = mount(Select, {
      props: {
        error: true,
        errorMessage: 'Error message',
      },
    });
    expect(wrapper.html()).toContain('v-select--error');
  });
});
