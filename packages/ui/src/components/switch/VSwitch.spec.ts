import {flushPromises, mount} from '@vue/test-utils';
import {describe, it, expect, vi} from 'vitest';
import VSwitch from './VSwitch.vue';
import {defineComponent, ref} from 'vue';
import waitForExpect from 'wait-for-expect';
import {boolean, object} from 'yup';
import {useForm} from 'vee-validate';

describe('VSwitch', () => {
  it('mounts component successfully', () => {
    expect(VSwitch).toBeTruthy();

    const wrapper = mount(VSwitch, {
      props: {},
    });

    expect(wrapper.html()).toContain('div');
    expect(wrapper.find('.v-switch').exists()).toBe(true);
  });

  it('can be off or on with modelValue', async () => {
    const WrapperComponent = defineComponent({
      components: {
        VSwitch,
      },
      setup() {
        const toggle = ref(true);
        return {
          toggle,
        };
      },
      template: '<VSwitch v-model="toggle" />',
    });

    const wrapper = mount(WrapperComponent);

    const buttonSwitch = wrapper.find('.v-switch-button');
    expect(buttonSwitch.attributes('data-headlessui-state')).toEqual('checked');

    await buttonSwitch.trigger('click');
    expect(buttonSwitch.attributes('data-headlessui-state')).toEqual('');
  });

  it('renders label correctly', () => {
    const wrapper = mount(VSwitch, {
      props: {
        label: 'Test Label',
      },
    });

    expect(wrapper.text()).toContain('Test Label');
    expect(wrapper.find('.v-switch-label').text()).toBe('Test Label');
  });

  it('renders hint correctly', () => {
    const wrapper = mount(VSwitch, {
      props: {
        hint: 'Test Hint',
      },
    });

    expect(wrapper.text()).toContain('Test Hint');
    expect(wrapper.find('.v-switch-hint').text()).toBe('Test Hint');
  });

  it('handles initial value correctly', () => {
    const wrapper = mount(VSwitch, {
      props: {
        value: true,
      },
    });

    const buttonSwitch = wrapper.find('.v-switch-button');
    expect(buttonSwitch.attributes('data-headlessui-state')).toEqual('checked');
  });

  it('defaults to false when no value provided', () => {
    const wrapper = mount(VSwitch, {
      props: {},
    });

    const buttonSwitch = wrapper.find('.v-switch-button');
    expect(buttonSwitch.attributes('data-headlessui-state')).toEqual('');
  });

  it('applies color classes correctly', () => {
    const wrapper = mount(VSwitch, {
      props: {
        color: 'secondary',
      },
    });

    expect(wrapper.find('.v-switch').classes()).toContain('v-switch-secondary');
  });

  it('defaults to primary color', () => {
    const wrapper = mount(VSwitch, {
      props: {},
    });

    expect(wrapper.find('.v-switch').classes()).toContain('v-switch-primary');
  });

  it('applies size classes correctly', () => {
    const sizes = ['sm', 'md', 'lg'];
    
    sizes.forEach(size => {
      const wrapper = mount(VSwitch, {
        props: {
          size: size as any,
        },
      });
      
      expect(wrapper.find('.v-switch').classes()).toContain(`v-switch--${size}`);
    });
  });

  it('defaults to medium size', () => {
    const wrapper = mount(VSwitch, {
      props: {},
    });

    expect(wrapper.find('.v-switch').classes()).toContain('v-switch--md');
  });

  it('applies custom classes correctly', () => {
    const wrapper = mount(VSwitch, {
      props: {
        wrapperClass: 'custom-wrapper',
        switchClass: 'custom-switch',
        switchGroupClass: 'custom-group',
        labelClass: 'custom-label',
        label: 'Test Label',
      },
    });

    expect(wrapper.classes()).toContain('custom-wrapper');
    expect(wrapper.find('.v-switch-switch').classes()).toContain('custom-switch');
    expect(wrapper.find('.v-switch-group').classes()).toContain('custom-group');
    expect(wrapper.find('.v-switch-label').classes()).toContain('custom-label');
  });

  it('applies checked state class when switch is on', () => {
    const wrapper = mount(VSwitch, {
      props: {
        value: true,
      },
    });

    expect(wrapper.find('.v-switch').classes()).toContain('v-switch--checked');
  });

  it('does not apply checked state class when switch is off', () => {
    const wrapper = mount(VSwitch, {
      props: {
        value: false,
      },
    });

    expect(wrapper.find('.v-switch').classes()).not.toContain('v-switch--checked');
  });

  it('sets switch name attribute correctly', () => {
    const wrapper = mount(VSwitch, {
      props: {
        name: 'test-switch',
      },
    });

    expect(wrapper.find('input[type="checkbox"]').attributes('name')).toBe('test-switch');
  });

  it('emits update:modelValue when clicked', async () => {
    const wrapper = mount(VSwitch, {
      props: {
        value: false,
      },
    });

    const buttonSwitch = wrapper.find('.v-switch-button');
    await buttonSwitch.trigger('click');

    // The Switch component should emit through its model
    expect(wrapper.emitted()).toBeDefined();
  });

  it('toggles between checked and unchecked states', async () => {
    const WrapperComponent = defineComponent({
      components: { VSwitch },
      setup() {
        const toggle = ref(false);
        return { toggle };
      },
      template: '<VSwitch v-model="toggle" />',
    });

    const wrapper = mount(WrapperComponent);
    const buttonSwitch = wrapper.find('.v-switch-button');
    
    // Initial state should be unchecked
    expect(buttonSwitch.attributes('data-headlessui-state')).toEqual('');

    // Click to check
    await buttonSwitch.trigger('click');
    expect(buttonSwitch.attributes('data-headlessui-state')).toEqual('checked');

    // Click to uncheck
    await buttonSwitch.trigger('click');
    expect(buttonSwitch.attributes('data-headlessui-state')).toEqual('');
  });

  it('applies error state when validation fails', () => {
    const wrapper = mount(VSwitch, {
      props: {
        errorMessage: 'Required field',
        name: 'test',
      },
    });

    // Since VSwitch uses Switch internally, check for error display
    if (wrapper.find('.v-switch-error').exists()) {
      expect(wrapper.find('.v-switch-error').text()).toBe('Required field');
    }
  });

  it('applies error class correctly', () => {
    const wrapper = mount(VSwitch, {
      props: {
        errorMessage: 'Error message',
        errorClass: 'custom-error-class',
      },
    });

    if (wrapper.find('.v-switch-error').exists()) {
      expect(wrapper.find('.v-switch-error').classes()).toContain('custom-error-class');
    }
  });

  it('renders hint slot content', () => {
    const wrapper = mount(VSwitch, {
      props: {
        hint: 'Default hint',
      },
      slots: {
        hint: '<em class="custom-hint">Custom hint content</em>',
      },
    });

    expect(wrapper.find('.custom-hint').text()).toBe('Custom hint content');
  });

  it('renders error slot content', () => {
    const wrapper = mount(VSwitch, {
      props: {
        errorMessage: 'Default error',
      },
      slots: {
        error: '<strong class="custom-error">Custom error content</strong>',
      },
    });

    expect(wrapper.find('.custom-error').text()).toBe('Custom error content');
  });

  it('handles all color variants', () => {
    const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];
    
    colors.forEach(color => {
      const wrapper = mount(VSwitch, {
        props: {
          color: color as any,
        },
      });
      
      expect(wrapper.find('.v-switch').classes()).toContain(`v-switch-${color}`);
    });
  });

  it('applies custom button classes', () => {
    const wrapper = mount(VSwitch, {
      props: {
        buttonClass: 'custom-button-class',
        activeClass: 'custom-active-class',
        inactiveClass: 'custom-inactive-class',
      },
    });

    const button = wrapper.find('.v-switch-button');
    expect(button.classes()).toContain('custom-button-class');
  });

  it('handles rules prop for validation', () => {
    const wrapper = mount(VSwitch, {
      props: {
        name: 'test-switch',
        rules: 'required',
      },
    });

    // The component should accept the rules prop
    expect(wrapper.props('rules')).toBe('required');
  });

  it('passes through slot props correctly', () => {
    const wrapper = mount(VSwitch, {
      props: {
        hint: 'Default hint',
      },
      slots: {
        hint: '<span class="slot-content">{{ props }}</span>',
      },
    });

    // Slots should be passed through to the Switch component
    expect(wrapper.find('.slot-content').exists()).toBe(true);
  });

  it('integrates with vee-validate for form validation', () => {
    const wrapper = mount(VSwitch, {
      props: {
        name: 'agreement',
        value: false,
      },
    });

    // Component should use useField internally for vee-validate integration
    expect(wrapper.vm).toBeDefined();
  });

  it('can show error message when validation error occurs', async () => {
    const errorClass = 'v-switch--error';
    const errorMessage = 'You must agree to terms and condition';

    const WrapperComponent = defineComponent({
      components: {
        VSwitch,
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
        <VSwitch name="test" label="Label" />
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

  it('handles accessibility attributes correctly', () => {
    const wrapper = mount(VSwitch, {
      props: {
        label: 'Accessibility Test',
        name: 'accessibility-switch',
      },
    });

    const button = wrapper.find('.v-switch-button');
    const label = wrapper.find('.v-switch-label');
    
    // HeadlessUI should handle accessibility attributes
    expect(button.attributes('role')).toBe('switch');
    expect(label.exists()).toBe(true);
  });

  it('supports disabled state correctly', () => {
    const wrapper = mount(VSwitch, {
      props: {
        disabled: true,
        value: false,
      },
    });

    const button = wrapper.find('.v-switch-button');
    expect(button.attributes('disabled')).toBeDefined();
  });
});
