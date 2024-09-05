import { mount } from '@vue/test-utils';
import VSelect from './VSelect.vue';

describe('VSelect', () => {
  it('renders the placeholder when no option is selected', () => {
    const wrapper = mount(VSelect, {
      props: {
        placeholder: 'Select',
        items: [{ text: 'Option 1', value: 1 }, { text: 'Option 2', value: 2 }],
      },
    });

    expect(wrapper.find('.v-select-selected').text()).toBe('Select');
  });

  it('renders the selected option text', async () => {
    const wrapper = mount(VSelect, {
      props: {
        value: 1,
        items: [{ text: 'Option 1', value: 1 }, { text: 'Option 2', value: 2 }],
      },
    });

    expect(wrapper.find('.v-select-selected').text()).toBe('Option 1');

    await wrapper.setProps({ modelValue: 2 });

    expect(wrapper.find('.v-select-selected').text()).toBe('Option 2');
  });

  it('emits the selected option value on change', async () => {
    const wrapper = mount(VSelect, {
      props: {
        items: [{ text: 'Option 1', value: 1 }, { text: 'Option 2', value: 2 }],
      },
    });

    await wrapper.find('.v-select-button').trigger('click');
    await wrapper.find('.v-select-option').trigger('click');

    expect(wrapper.emitted('change')).toBeTruthy();
    expect(wrapper.emitted('change')[0][0]).toBe(1);
  });

  it('filters options based on search query', async () => {
    const wrapper = mount(VSelect, {
      props: {
        items: [{ text: 'Option 1', value: 1 }, { text: 'Option 2', value: 2 }],
        searchable: true,
      },
    });

    await wrapper.find('.v-select-button').trigger('click');
    await wrapper.find('.v-select-searchable input').setValue('Option 1');

    expect(wrapper.findAll('.v-select-option')).toHaveLength(1);
    expect(wrapper.find('.v-select-option').text()).toBe('Option 1');
  });

  it('renders error message when error prop is true', () => {
    const wrapper = mount(VSelect, {
      props: {
        error: true,
        errorMessages: ['Error message'],
      },
    });

    expect(wrapper.find('.v-select-error').text()).toBe('Error message');
  });
});
