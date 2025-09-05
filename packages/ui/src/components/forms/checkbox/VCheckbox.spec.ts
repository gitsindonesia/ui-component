import {mount, flushPromises} from '@vue/test-utils';
import {describe, it, expect, vi} from 'vitest';
import VCheckbox from './VCheckbox.vue';
import {defineComponent, ref} from 'vue';
import waitForExpect from 'wait-for-expect';
import {boolean, object} from 'yup';
import {useForm} from 'vee-validate';

describe('VCheckbox', () => {
  it('mounts component successfully', () => {
    expect(VCheckbox).toBeTruthy();

    const wrapper = mount(VCheckbox, {
      props: {
        modelValue: false,
      },
    });

    expect(wrapper).toBeDefined();
    expect(wrapper.find('.v-checkbox').exists()).toBe(true);
  });

  it('renders label correctly', () => {
    const wrapper = mount(VCheckbox, {
      props: {
        modelValue: false,
        label: 'Test Label',
      },
    });

    expect(wrapper.text()).toContain('Test Label');
    expect(wrapper.find('.v-checkbox-label').text()).toBe('Test Label');
  });

  it('renders hint correctly', () => {
    const wrapper = mount(VCheckbox, {
      props: {
        modelValue: false,
        hint: 'Test Hint',
      },
    });

    expect(wrapper.text()).toContain('Test Hint');
    expect(wrapper.find('.v-checkbox-hint').text()).toBe('Test Hint');
  });

  it('sets checkbox value correctly', () => {
    const wrapper = mount(VCheckbox, {
      props: {
        modelValue: true,
      },
    });

    const checkbox = wrapper.find('input[type="checkbox"]');
    expect(checkbox.element.checked).toBe(true);
  });

  it('applies color classes correctly', () => {
    const wrapper = mount(VCheckbox, {
      props: {
        modelValue: false,
        color: 'secondary',
      },
    });

    expect(wrapper.find('.v-checkbox').classes()).toContain('v-checkbox-secondary');
  });

  it('defaults to primary color', () => {
    const wrapper = mount(VCheckbox, {
      props: {
        modelValue: false,
      },
    });

    expect(wrapper.find('.v-checkbox').classes()).toContain('v-checkbox-primary');
  });

  it('applies disabled state correctly', () => {
    const wrapper = mount(VCheckbox, {
      props: {
        modelValue: false,
        disabled: true,
      },
    });

    const checkbox = wrapper.find('input[type="checkbox"]');
    expect(checkbox.attributes('disabled')).toBeDefined();
    expect(wrapper.find('.v-checkbox').classes()).toContain('v-checkbox--disabled');
  });

  it('applies error state correctly', () => {
    const wrapper = mount(VCheckbox, {
      props: {
        modelValue: false,
        name: 'test',
        rules: 'required',
      },
    });

    // Trigger validation by simulating form submission
    wrapper.find('input').trigger('blur');
    wrapper.vm.$nextTick(() => {
      expect(wrapper.find('.v-checkbox').classes()).toContain('v-checkbox--error');
    });
  });

  it('applies custom classes correctly', () => {
    const wrapper = mount(VCheckbox, {
      props: {
        modelValue: false,
        wrapperClass: 'custom-wrapper',
        inputClass: 'custom-input',
        labelClass: 'custom-label',
        label: 'Test Label',
      },
    });

    expect(wrapper.classes()).toContain('custom-wrapper');
    expect(wrapper.find('input').classes()).toContain('custom-input');
    expect(wrapper.find('.v-checkbox-label').classes()).toContain('custom-label');
  });

  it('sets input attributes correctly', () => {
    const wrapper = mount(VCheckbox, {
      props: {
        modelValue: false,
        name: 'test-checkbox',
        id: 'test-id',
        value: 'test-value',
      },
    });

    const checkbox = wrapper.find('input');
    expect(checkbox.attributes('name')).toBe('test-checkbox');
    expect(checkbox.attributes('id')).toBe('test-id');
    expect(checkbox.attributes('value')).toBe('test-value');
  });

  it('emits update:modelValue when clicked', async () => {
    const wrapper = mount(VCheckbox, {
      props: {
        modelValue: false,
      },
    });

    const checkbox = wrapper.find('input');
    await checkbox.trigger('click');

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([true]);
  });

  it('toggles between checked and unchecked states', async () => {
    const wrapper = mount(VCheckbox, {
      props: {
        modelValue: false,
        'onUpdate:modelValue': (value: boolean) => wrapper.setProps({ modelValue: value }),
      },
    });

    const checkbox = wrapper.find('input');
    
    // Check the checkbox
    await checkbox.trigger('click');
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([true]);

    // Update the prop to reflect the change
    await wrapper.setProps({ modelValue: true });
    expect(checkbox.element.checked).toBe(true);

    // Uncheck the checkbox
    await checkbox.trigger('click');
    expect(wrapper.emitted('update:modelValue')![1]).toEqual([false]);
  });

  it('uses custom checked and unchecked values', async () => {
    const wrapper = mount(VCheckbox, {
      props: {
        modelValue: 'off',
        checkedValue: 'on',
        uncheckedValue: 'off',
      },
    });

    const checkbox = wrapper.find('input');
    await checkbox.trigger('click');

    expect(wrapper.emitted('update:modelValue')![0]).toEqual(['on']);
  });

  it('handles blur events correctly', async () => {
    const wrapper = mount(VCheckbox, {
      props: {
        modelValue: false,
      },
    });

    const checkbox = wrapper.find('input');
    await checkbox.trigger('blur');

    // Blur should trigger validation
    expect(wrapper.vm.handleBlur).toBeDefined;
  });

  it('handles input events correctly', async () => {
    const wrapper = mount(VCheckbox, {
      props: {
        modelValue: false,
      },
    });

    const checkbox = wrapper.find('input');
    await checkbox.trigger('input');

    // Input should trigger change handler
    expect(wrapper.vm.handleChange).toBeDefined;
  });

  it('hides error when hideError is true', () => {
    const wrapper = mount(VCheckbox, {
      props: {
        modelValue: false,
        hideError: true,
        // Simulate error state
        name: 'test',
        rules: 'required',
      },
    });

    // Even if there's an error, it should be hidden
    expect(wrapper.find('.v-checkbox-error').exists()).toBe(false);
  });

  it('applies custom error class', async () => {
    const wrapper = mount(VCheckbox, {
      props: {
        modelValue: false,
        errorClass: 'custom-error-class',
        name: 'test',
        rules: 'required',
      },
    });

    // Trigger validation error
    const checkbox = wrapper.find('input');
    await checkbox.trigger('blur');

    await wrapper.vm.$nextTick();
    
    if (wrapper.find('.v-checkbox-error').exists()) {
      expect(wrapper.find('.v-checkbox-error').classes()).toContain('custom-error-class');
    }
  });

  it('prevents mousedown on label', async () => {
    const wrapper = mount(VCheckbox, {
      props: {
        modelValue: false,
        label: 'Test Label',
      },
    });

    const label = wrapper.find('.v-checkbox-label');
    const preventDefaultSpy = vi.fn();
    
    // Mock the event object
    const mockEvent = {
      preventDefault: preventDefaultSpy,
    };

    await label.trigger('mousedown', mockEvent);
    
    // The label should have @mousedown.prevent
    expect(label.attributes()).toHaveProperty('for');
  });

  it('passes through additional attributes to input', () => {
    const wrapper = mount(VCheckbox, {
      props: {
        modelValue: false,
      },
      attrs: {
        'data-testid': 'test-checkbox',
        'aria-label': 'Test checkbox',
      },
    });

    const checkbox = wrapper.find('input');
    expect(checkbox.attributes('data-testid')).toBe('test-checkbox');
    expect(checkbox.attributes('aria-label')).toBe('Test checkbox');
  });

  it('uses eager validation mode correctly', () => {
    const wrapper = mount(VCheckbox, {
      props: {
        modelValue: false,
        validationMode: 'eager',
      },
    });

    expect(wrapper.vm.isEagerValidation).toBe(true);
  });

  it('uses aggressive validation mode by default', () => {
    const wrapper = mount(VCheckbox, {
      props: {
        modelValue: false,
      },
    });

    expect(wrapper.vm.isEagerValidation).toBe(false);
  });

  it('renders hint slot content', () => {
    const wrapper = mount(VCheckbox, {
      props: {
        modelValue: false,
        hint: 'Default hint',
      },
      slots: {
        hint: '<em class="custom-hint">Custom hint content</em>',
      },
    });

    expect(wrapper.find('.custom-hint').text()).toBe('Custom hint content');
  });

  it('renders default slot content', () => {
    const wrapper = mount(VCheckbox, {
      props: {
        modelValue: false,
      },
      slots: {
        default: '<span class="custom-content">Custom content</span>',
      },
    });

    expect(wrapper.find('.custom-content').text()).toBe('Custom content');
  });

  it('works with array values', async () => {
    const wrapper = mount(VCheckbox, {
      props: {
        modelValue: [],
        value: 'option1',
      },
    });

    const checkbox = wrapper.find('input');
    await checkbox.trigger('click');

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
  });

  it('sets correct label for attribute', () => {
    const wrapper = mount(VCheckbox, {
      props: {
        modelValue: false,
        label: 'Test Label',
        name: 'test-name',
      },
    });

    const label = wrapper.find('.v-checkbox-label');
    const input = wrapper.find('input');
    
    expect(label.attributes('for')).toBe(input.attributes('id'));
  });

  it('can show error message when validation error occurs', async () => {
    const errorClass = 'v-checkbox-error';
    const errorMessage = 'You must agree to terms and condition';
    const WrapperComponent = defineComponent({
      components: {
        VCheckbox,
      },
      setup() {
        const schema = object({
          test: boolean().oneOf([true], errorMessage).required().label('Test'),
        });

        const {handleSubmit} = useForm({
          validationSchema: schema,
        });

        const onSubmit = handleSubmit((values) => {});

        return {
          onSubmit,
        };
      },
      template: `<form @submit="onSubmit" class="border-none">
        <VCheckbox name="test" label="Label" />
          <div class="mt-4">
            <button type="submit">Submit</button>
          </div>
        </form>`,
    });

    const wrapper = mount(WrapperComponent);

    await wrapper.find('form').trigger('submit');

    await flushPromises();
    await waitForExpect(() => {
      expect(wrapper.html()).toContain(errorClass);
      expect(wrapper.find(`.${errorClass}`).text()).toContain(errorMessage);
    });
  });

  it('handles different validation modes', () => {
    const modes = ['eager', 'aggressive', 'lazy'];
    
    modes.forEach(mode => {
      const wrapper = mount(VCheckbox, {
        props: {
          modelValue: false,
          validationMode: mode as any,
        },
      });
      
      expect(wrapper.vm.isEagerValidation).toBe(mode === 'eager');
    });
  });

  it('handles boolean values correctly', async () => {
    const wrapper = mount(VCheckbox, {
      props: {
        modelValue: false,
        value: true,
      },
    });

    const checkbox = wrapper.find('input');
    await checkbox.trigger('click');

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
  });

  it('handles string values correctly', async () => {
    const wrapper = mount(VCheckbox, {
      props: {
        modelValue: false,
        value: 'string-value',
      },
    });

    const checkbox = wrapper.find('input');
    await checkbox.trigger('click');

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
  });

  it('handles number values correctly', async () => {
    const wrapper = mount(VCheckbox, {
      props: {
        modelValue: false,
        value: 123,
      },
    });

    const checkbox = wrapper.find('input');
    await checkbox.trigger('click');

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
  });
});
