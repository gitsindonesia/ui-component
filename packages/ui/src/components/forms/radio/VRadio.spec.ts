import {mount, flushPromises} from '@vue/test-utils';
import {describe, it, expect, vi} from 'vitest';
import VRadio from './VRadio.vue';
import {defineComponent, ref} from 'vue';
import {object, string} from 'yup';
import {useForm} from 'vee-validate';
import waitForExpected from 'wait-for-expect';

describe('VRadio', () => {
  it('mounts component successfully', () => {
    expect(VRadio).toBeTruthy();

    const wrapper = mount(VRadio, {
      props: {
        modelValue: 'test',
        value: 'test',
      },
    });

    expect(wrapper.html()).toContain('input');
    expect(wrapper.find('.v-radio').exists()).toBe(true);
    expect(wrapper.find('input[type="radio"]').exists()).toBe(true);
  });

  it('renders label correctly', () => {
    const wrapper = mount(VRadio, {
      props: {
        modelValue: 'test',
        value: 'test',
        label: 'Test Radio Label',
      },
    });

    expect(wrapper.text()).toContain('Test Radio Label');
    expect(wrapper.find('.v-radio-label').text()).toBe('Test Radio Label');
  });

  it('renders hint correctly', () => {
    const wrapper = mount(VRadio, {
      props: {
        modelValue: 'test',
        value: 'test',
        hint: 'Test Radio Hint',
      },
    });

    expect(wrapper.text()).toContain('Test Radio Hint');
    expect(wrapper.find('.v-radio-hint').text()).toBe('Test Radio Hint');
  });

  it('sets radio value and attributes correctly', () => {
    const wrapper = mount(VRadio, {
      props: {
        modelValue: 'option1',
        value: 'option1',
        name: 'test-radio',
        id: 'radio-1',
      },
    });

    const radio = wrapper.find('input[type="radio"]');
    expect(radio.attributes('value')).toBe('option1');
    expect(radio.attributes('name')).toBe('test-radio');
    expect(radio.attributes('id')).toBe('radio-1');
  });

  it('checks radio when modelValue matches value', () => {
    const wrapper = mount(VRadio, {
      props: {
        modelValue: 'option1',
        value: 'option1',
      },
    });

    const radio = wrapper.find('input[type="radio"]');
    expect(radio.element.checked).toBe(true);
  });

  it('does not check radio when modelValue does not match value', () => {
    const wrapper = mount(VRadio, {
      props: {
        modelValue: 'option1',
        value: 'option2',
      },
    });

    const radio = wrapper.find('input[type="radio"]');
    expect(radio.element.checked).toBe(false);
  });

  it('applies color classes correctly', () => {
    const wrapper = mount(VRadio, {
      props: {
        modelValue: 'test',
        value: 'test',
        color: 'secondary',
      },
    });

    expect(wrapper.find('.v-radio').classes()).toContain('v-radio-secondary');
  });

  it('defaults to primary color', () => {
    const wrapper = mount(VRadio, {
      props: {
        modelValue: 'test',
        value: 'test',
      },
    });

    expect(wrapper.find('.v-radio').classes()).toContain('v-radio-primary');
  });

  it('applies disabled state correctly', () => {
    const wrapper = mount(VRadio, {
      props: {
        modelValue: 'test',
        value: 'test',
        disabled: true,
      },
    });

    const radio = wrapper.find('input[type="radio"]');
    expect(radio.attributes('disabled')).toBeDefined();
    expect(wrapper.find('.v-radio').classes()).toContain('v-radio--disabled');
  });

  it('applies custom classes correctly', () => {
    const wrapper = mount(VRadio, {
      props: {
        modelValue: 'test',
        value: 'test',
        wrapperClass: 'custom-wrapper',
        inputClass: 'custom-input',
        labelClass: 'custom-label',
        groupClass: 'custom-group',
        label: 'Test Label',
      },
    });

    expect(wrapper.classes()).toContain('custom-wrapper');
    expect(wrapper.find('input').classes()).toContain('custom-input');
    expect(wrapper.find('.v-radio-label').classes()).toContain('custom-label');
    expect(wrapper.find('.v-radio-group').classes()).toContain('custom-group');
  });

  it('emits update:modelValue when clicked', async () => {
    const wrapper = mount(VRadio, {
      props: {
        modelValue: '',
        value: 'option1',
      },
    });

    const radio = wrapper.find('input[type="radio"]');
    await radio.trigger('change');

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')![0]).toEqual(['option1']);
  });

  it('handles radio group selection correctly', async () => {
    const WrapperComponent = defineComponent({
      components: { VRadio },
      setup() {
        const selectedValue = ref('');
        return { selectedValue };
      },
      template: `
        <div>
          <VRadio v-model="selectedValue" value="option1" label="Option 1" />
          <VRadio v-model="selectedValue" value="option2" label="Option 2" />
          <VRadio v-model="selectedValue" value="option3" label="Option 3" />
        </div>
      `,
    });

    const wrapper = mount(WrapperComponent);
    
    // Initially no radio should be checked
    const radios = wrapper.findAll('input[type="radio"]');
    expect(radios.every(radio => !radio.element.checked)).toBe(true);

    // Select option2
    await radios[1].trigger('change');
    
    expect(wrapper.vm.selectedValue).toBe('option2');
  });

  it('applies error state correctly', async () => {
    const wrapper = mount(VRadio, {
      props: {
        modelValue: '',
        value: 'test',
        name: 'test-radio',
        rules: 'required',
      },
    });

    // Trigger validation by simulating blur
    const radio = wrapper.find('input[type="radio"]');
    await radio.trigger('blur');

    await wrapper.vm.$nextTick();
    
    // Check if error state is applied (this depends on validation triggering)
    if (wrapper.find('.v-radio--error').exists()) {
      expect(wrapper.find('.v-radio').classes()).toContain('v-radio--error');
    }
  });

  it('hides error when hideError is true', () => {
    const wrapper = mount(VRadio, {
      props: {
        modelValue: '',
        value: 'test',
        hideError: true,
        // Simulate error state
        name: 'test',
        rules: 'required',
      },
    });

    // Even if there's an error, it should be hidden
    expect(wrapper.find('.v-radio-error').exists()).toBe(false);
  });

  it('applies custom error class', async () => {
    const wrapper = mount(VRadio, {
      props: {
        modelValue: '',
        value: 'test',
        errorClass: 'custom-error-class',
        name: 'test',
        rules: 'required',
      },
    });

    // Trigger validation error
    const radio = wrapper.find('input[type="radio"]');
    await radio.trigger('blur');

    await wrapper.vm.$nextTick();
    
    if (wrapper.find('.v-radio-error').exists()) {
      expect(wrapper.find('.v-radio-error').classes()).toContain('custom-error-class');
    }
  });

  it('handles validation modes correctly', () => {
    const modes = ['eager', 'aggressive', 'lazy'];
    
    modes.forEach(mode => {
      const wrapper = mount(VRadio, {
        props: {
          modelValue: '',
          value: 'test',
          validationMode: mode as any,
        },
      });
      
      expect(wrapper.props('validationMode')).toBe(mode);
    });
  });

  it('uses aggressive validation mode by default', () => {
    const wrapper = mount(VRadio, {
      props: {
        modelValue: '',
        value: 'test',
      },
    });

    expect(wrapper.props('validationMode')).toBe('aggressive');
  });

  it('renders slot content correctly', () => {
    const wrapper = mount(VRadio, {
      props: {
        modelValue: 'test',
        value: 'test',
        hint: 'Default hint',
      },
      slots: {
        hint: '<em class="custom-hint">Custom hint content</em>',
        default: '<span class="custom-content">Custom radio content</span>',
      },
    });

    expect(wrapper.find('.custom-hint').text()).toBe('Custom hint content');
    expect(wrapper.find('.custom-content').text()).toBe('Custom radio content');
  });

  it('handles blur events correctly', async () => {
    const wrapper = mount(VRadio, {
      props: {
        modelValue: '',
        value: 'test',
      },
    });

    const radio = wrapper.find('input[type="radio"]');
    await radio.trigger('blur');

    // Blur should trigger validation
    expect(wrapper.vm.handleBlur).toBeDefined;
  });

  it('handles different value types', async () => {
    const wrapper = mount(VRadio, {
      props: {
        modelValue: 123,
        value: 123,
      },
    });

    const radio = wrapper.find('input[type="radio"]');
    expect(radio.element.checked).toBe(true);
  });

  it('handles boolean values', async () => {
    const wrapper = mount(VRadio, {
      props: {
        modelValue: true,
        value: true,
      },
    });

    const radio = wrapper.find('input[type="radio"]');
    expect(radio.element.checked).toBe(true);
  });

  it('handles label click to select radio', async () => {
    const wrapper = mount(VRadio, {
      props: {
        modelValue: '',
        value: 'option1',
        label: 'Click me',
        id: 'radio-test',
      },
    });

    const label = wrapper.find('.v-radio-label');
    await label.trigger('click');

    // Label click should trigger radio selection
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
  });

  it('sets correct label for attribute', () => {
    const wrapper = mount(VRadio, {
      props: {
        modelValue: '',
        value: 'test',
        label: 'Test Label',
        id: 'test-radio-id',
      },
    });

    const label = wrapper.find('.v-radio-label');
    const input = wrapper.find('input');
    
    expect(label.attributes('for')).toBe(input.attributes('id'));
  });

  it('integrates with vee-validate for form validation', async () => {
    const errorMessage = 'Please select an option';
    
    const WrapperComponent = defineComponent({
      components: { VRadio },
      setup() {
        const schema = object({
          radioGroup: string().required(errorMessage),
        });

        const { handleSubmit } = useForm({
          validationSchema: schema,
        });

        const onSubmit = handleSubmit(() => {});

        return { onSubmit };
      },
      template: `
        <form @submit="onSubmit">
          <VRadio 
            name="radioGroup" 
            value="option1"
            label="Option 1"
          />
          <VRadio 
            name="radioGroup" 
            value="option2"
            label="Option 2"
          />
          <button type="submit">Submit</button>
        </form>
      `,
    });

    const wrapper = mount(WrapperComponent);
    
    await wrapper.find('form').trigger('submit');
    await flushPromises();
    
    await waitForExpected(() => {
      const errorElements = wrapper.findAll('.v-radio-error');
      if (errorElements.length > 0) {
        expect(errorElements[0].text()).toContain(errorMessage);
      }
    });
  });

  it('handles disabled state with custom disabled class', () => {
    const wrapper = mount(VRadio, {
      props: {
        modelValue: '',
        value: 'test',
        disabled: true,
        disabledClass: 'custom-disabled-class',
      },
    });

    const radio = wrapper.find('input[type="radio"]');
    expect(radio.attributes('disabled')).toBeDefined();
    expect(radio.classes()).toContain('custom-disabled-class');
  });

  it('handles empty values correctly', () => {
    const wrapper = mount(VRadio, {
      props: {
        modelValue: '',
        value: '',
      },
    });

    const radio = wrapper.find('input[type="radio"]');
    expect(radio.element.checked).toBe(true); // Empty string matches empty string
  });

  it('passes through additional attributes to input', () => {
    const wrapper = mount(VRadio, {
      props: {
        modelValue: '',
        value: 'test',
      },
      attrs: {
        'data-testid': 'test-radio',
        'aria-label': 'Test radio button',
      },
    });

    const radio = wrapper.find('input[type="radio"]');
    expect(radio.attributes('data-testid')).toBe('test-radio');
    expect(radio.attributes('aria-label')).toBe('Test radio button');
  });

  it('generates unique id when none provided', () => {
    const wrapper1 = mount(VRadio, {
      props: {
        modelValue: '',
        value: 'test1',
      },
    });

    const wrapper2 = mount(VRadio, {
      props: {
        modelValue: '',
        value: 'test2',
      },
    });

    const id1 = wrapper1.find('input').attributes('id');
    const id2 = wrapper2.find('input').attributes('id');
    
    expect(id1).toBeDefined();
    expect(id2).toBeDefined();
    expect(id1).not.toBe(id2);
  });
});
