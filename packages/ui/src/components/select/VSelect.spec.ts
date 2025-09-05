import { mount, flushPromises } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import VSelect from './VSelect.vue';
import { defineComponent } from 'vue';
import { object, string } from 'yup';
import { useForm } from 'vee-validate';
import waitForExpected from 'wait-for-expect';

const defaultItems = [
  { text: 'Option 1', value: 1 },
  { text: 'Option 2', value: 2 },
  { text: 'Option 3', value: 3 },
];

const complexItems = [
  { label: 'First Item', id: 'item1', disabled: false },
  { label: 'Second Item', id: 'item2', disabled: true },
  { label: 'Third Item', id: 'item3', disabled: false },
];

describe('VSelect', () => {
  it('renders the placeholder when no option is selected', () => {
    const wrapper = mount(VSelect, {
      props: {
        placeholder: 'Select an option',
        items: defaultItems,
      },
    });

    expect(wrapper.find('.v-select-selected').text()).toBe('Select an option');
  });

  it('renders the selected option text', async () => {
    const wrapper = mount(VSelect, {
      props: {
        value: 1,
        items: defaultItems,
      },
    });

    expect(wrapper.find('.v-select-selected').text()).toBe('Option 1');

    await wrapper.setProps({ modelValue: 2 });
    expect(wrapper.find('.v-select-selected').text()).toBe('Option 2');
  });

  it('emits the selected option value on change', async () => {
    const wrapper = mount(VSelect, {
      props: {
        items: defaultItems,
      },
    });

    await wrapper.find('.v-select-button').trigger('click');
    await wrapper.find('.v-select-option').trigger('click');

    expect(wrapper.emitted('change')).toBeTruthy();
    expect(wrapper.emitted('change')![0][0]).toBe(1);
  });

  it('filters options based on search query', async () => {
    const wrapper = mount(VSelect, {
      props: {
        items: defaultItems,
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

  it('applies color classes correctly', () => {
    const wrapper = mount(VSelect, {
      props: {
        items: defaultItems,
        color: 'secondary',
      },
    });

    expect(wrapper.find('.v-select').classes()).toContain('v-select-secondary');
  });

  it('defaults to primary color', () => {
    const wrapper = mount(VSelect, {
      props: {
        items: defaultItems,
      },
    });

    expect(wrapper.find('.v-select').classes()).toContain('v-select-primary');
  });

  it('applies disabled state correctly', () => {
    const wrapper = mount(VSelect, {
      props: {
        items: defaultItems,
        disabled: true,
      },
    });

    expect(wrapper.find('.v-select-button').attributes('disabled')).toBeDefined();
    expect(wrapper.find('.v-select').classes()).toContain('v-select--disabled');
  });

  it('applies readonly state correctly', () => {
    const wrapper = mount(VSelect, {
      props: {
        items: defaultItems,
        readonly: true,
      },
    });

    expect(wrapper.find('.v-select').classes()).toContain('v-select--readonly');
  });

  it('applies custom classes correctly', () => {
    const wrapper = mount(VSelect, {
      props: {
        items: defaultItems,
        wrapperClass: 'custom-wrapper',
        btnClass: 'custom-button',
        labelClass: 'custom-label',
        label: 'Test Label',
      },
    });

    expect(wrapper.classes()).toContain('custom-wrapper');
    expect(wrapper.find('.v-select-button').classes()).toContain('custom-button');
    expect(wrapper.find('.v-select-label').classes()).toContain('custom-label');
  });

  it('handles clearable functionality', async () => {
    const wrapper = mount(VSelect, {
      props: {
        items: defaultItems,
        clearable: true,
        modelValue: 1,
      },
    });

    await wrapper.find('.v-select-button').trigger('click');
    await wrapper.find('.v-select-clear').trigger('click');

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')![0][0]).toBe('');
  });

  it('uses custom item text and value properties', () => {
    const wrapper = mount(VSelect, {
      props: {
        items: complexItems,
        itemText: 'label',
        itemValue: 'id',
        modelValue: 'item1',
      },
    });

    expect(wrapper.find('.v-select-selected').text()).toBe('First Item');
  });

  it('returns object when returnObject is true', async () => {
    const wrapper = mount(VSelect, {
      props: {
        items: defaultItems,
        returnObject: true,
      },
    });

    await wrapper.find('.v-select-button').trigger('click');
    await wrapper.find('.v-select-option').trigger('click');

    expect(wrapper.emitted('change')![0][0]).toEqual(defaultItems[0]);
  });

  it('renders label correctly', () => {
    const wrapper = mount(VSelect, {
      props: {
        items: defaultItems,
        label: 'Select Label',
      },
    });

    expect(wrapper.find('.v-select-label').text()).toBe('Select Label');
  });

  it('renders hint correctly', () => {
    const wrapper = mount(VSelect, {
      props: {
        items: defaultItems,
        hint: 'Select Hint',
      },
    });

    expect(wrapper.find('.v-select-hint').text()).toBe('Select Hint');
  });

  it('hides error when hideError is true', () => {
    const wrapper = mount(VSelect, {
      props: {
        items: defaultItems,
        error: true,
        errorMessages: ['Error message'],
        hideError: true,
      },
    });

    expect(wrapper.find('.v-select-error').exists()).toBe(false);
  });

  it('applies size classes correctly', () => {
    const sizes = ['sm', 'md', 'lg'];
    
    sizes.forEach(size => {
      const wrapper = mount(VSelect, {
        props: {
          items: defaultItems,
          size: size as any,
        },
      });
      
      expect(wrapper.find('.v-select').classes()).toContain(`v-select--${size}`);
    });
  });

  it('handles search functionality with custom search props', async () => {
    const wrapper = mount(VSelect, {
      props: {
        items: defaultItems,
        searchable: true,
        searchPlaceholder: 'Custom search...',
        searchSize: 'lg',
        searchProps: {
          class: 'search-input-custom',
        },
      },
    });

    await wrapper.find('.v-select-button').trigger('click');
    
    const searchInput = wrapper.find('.v-select-searchable input');
    expect(searchInput.attributes('placeholder')).toBe('Custom search...');
    expect(searchInput.classes()).toContain('search-input-custom');
  });

  it('emits search event when searching', async () => {
    const wrapper = mount(VSelect, {
      props: {
        items: defaultItems,
        searchable: true,
      },
    });

    await wrapper.find('.v-select-button').trigger('click');
    await wrapper.find('.v-select-searchable input').setValue('test search');

    expect(wrapper.emitted('search')).toBeTruthy();
    expect(wrapper.emitted('search')![0][0]).toBe('test search');
  });

  it('shows check icon for selected items', async () => {
    const wrapper = mount(VSelect, {
      props: {
        items: defaultItems,
        modelValue: 1,
        checkIcon: 'ri:check-line',
      },
    });

    await wrapper.find('.v-select-button').trigger('click');
    
    const selectedOption = wrapper.find('.v-select-option--selected');
    expect(selectedOption.exists()).toBe(true);
    expect(selectedOption.find('.v-select-option-check').exists()).toBe(true);
  });

  it('hides check icon when hideCheckIcon is true', async () => {
    const wrapper = mount(VSelect, {
      props: {
        items: defaultItems,
        modelValue: 1,
        hideCheckIcon: true,
      },
    });

    await wrapper.find('.v-select-button').trigger('click');
    
    const selectedOption = wrapper.find('.v-select-option--selected');
    expect(selectedOption.find('.v-select-option-check').exists()).toBe(false);
  });

  it('applies shadow class when shadow is true', () => {
    const wrapper = mount(VSelect, {
      props: {
        items: defaultItems,
        shadow: true,
        shadowClass: 'custom-shadow',
      },
    });

    expect(wrapper.find('.v-select').classes()).toContain('custom-shadow');
  });

  it('handles transition prop correctly', async () => {
    const wrapper = mount(VSelect, {
      props: {
        items: defaultItems,
        transition: 'slide',
      },
    });

    await wrapper.find('.v-select-button').trigger('click');
    
    const optionsContainer = wrapper.find('.v-select-options');
    expect(optionsContainer.exists()).toBe(true);
  });

  it('handles disabled items correctly', async () => {
    const itemsWithDisabled = [
      { text: 'Enabled', value: 1, disabled: false },
      { text: 'Disabled', value: 2, disabled: true },
    ];

    const wrapper = mount(VSelect, {
      props: {
        items: itemsWithDisabled,
      },
    });

    await wrapper.find('.v-select-button').trigger('click');
    
    const disabledOption = wrapper.findAll('.v-select-option')[1];
    expect(disabledOption.classes()).toContain('v-select-option--disabled');
  });

  it('handles validation with vee-validate', async () => {
    const errorMessage = 'Please select an option';
    
    const WrapperComponent = defineComponent({
      components: { VSelect },
      setup() {
        const schema = object({
          select: string().required(errorMessage),
        });

        const { handleSubmit } = useForm({
          validationSchema: schema,
        });

        const onSubmit = handleSubmit(() => {});

        return { onSubmit };
      },
      template: `
        <form @submit="onSubmit">
          <VSelect 
            name="select" 
            :items="[{text: 'Option 1', value: '1'}]"
            label="Select Field"
          />
          <button type="submit">Submit</button>
        </form>
      `,
    });

    const wrapper = mount(WrapperComponent);
    
    await wrapper.find('form').trigger('submit');
    await flushPromises();
    
    await waitForExpected(() => {
      expect(wrapper.find('.v-select-error').text()).toContain(errorMessage);
    });
  });

  it('uses eager validation mode correctly', () => {
    const wrapper = mount(VSelect, {
      props: {
        items: defaultItems,
        validationMode: 'eager',
      },
    });

    // Test that the component accepts the eager validation mode
    expect(wrapper.props('validationMode')).toBe('eager');
  });

  it('uses aggressive validation mode by default', () => {
    const wrapper = mount(VSelect, {
      props: {
        items: defaultItems,
      },
    });

    // Test that the default validation mode is aggressive
    expect(wrapper.props('validationMode')).toBe('aggressive');
  });

  it('renders slot content correctly', () => {
    const wrapper = mount(VSelect, {
      props: {
        items: defaultItems,
        hint: 'Default hint',
      },
      slots: {
        hint: '<em class="custom-hint">Custom hint content</em>',
        'prepend-inner': '<span class="prepend-content">Prepend</span>',
        'append-inner': '<span class="append-content">Append</span>',
      },
    });

    expect(wrapper.find('.custom-hint').text()).toBe('Custom hint content');
    expect(wrapper.find('.prepend-content').text()).toBe('Prepend');
    expect(wrapper.find('.append-content').text()).toBe('Append');
  });

  it('handles top placement correctly', () => {
    const wrapper = mount(VSelect, {
      props: {
        items: defaultItems,
        top: true,
      },
    });

    expect(wrapper.find('.v-select').classes()).toContain('v-select--top');
  });

  it('handles empty items array', () => {
    const wrapper = mount(VSelect, {
      props: {
        items: [],
        placeholder: 'No options',
      },
    });

    expect(wrapper.find('.v-select-selected').text()).toBe('No options');
  });

  it('handles undefined/null values correctly', () => {
    const wrapper = mount(VSelect, {
      props: {
        items: defaultItems,
        modelValue: undefined,
      },
    });

    expect(wrapper.find('.v-select-selected').text()).toBe('Select');
  });

  it('handles update:value event (deprecated)', async () => {
    const wrapper = mount(VSelect, {
      props: {
        items: defaultItems,
        value: 1,
      },
    });

    await wrapper.find('.v-select-button').trigger('click');
    await wrapper.findAll('.v-select-option')[1].trigger('click');

    expect(wrapper.emitted('update:value')).toBeTruthy();
  });

  it('applies error class correctly', () => {
    const wrapper = mount(VSelect, {
      props: {
        items: defaultItems,
        error: true,
        errorClass: 'custom-error-class',
      },
    });

    expect(wrapper.find('.v-select-error').classes()).toContain('custom-error-class');
  });

  it('handles complex object items correctly', () => {
    const complexItems = [
      { 
        text: 'Complex Item 1', 
        value: 'complex1', 
        name: 'Complex Item 1', 
        id: 'complex1', 
        meta: { category: 'A' } 
      },
      { 
        text: 'Complex Item 2', 
        value: 'complex2', 
        name: 'Complex Item 2', 
        id: 'complex2', 
        meta: { category: 'B' } 
      },
    ];

    const wrapper = mount(VSelect, {
      props: {
        items: complexItems,
        itemText: 'name',
        itemValue: 'id',
        modelValue: 'complex1',
        returnObject: true,
      },
    });

    expect(wrapper.find('.v-select-selected').text()).toBe('Complex Item 1');
  });
});
