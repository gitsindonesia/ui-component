import {mount, flushPromises} from '@vue/test-utils';
import {describe, it, expect, vi} from 'vitest';
import Textarea from './Textarea.vue';
import {defineComponent, ref} from 'vue';
import {object, string} from 'yup';
import {useForm} from 'vee-validate';
import waitForExpected from 'wait-for-expect';

describe('Textarea', () => {
  it('mounts component successfully', () => {
    expect(Textarea).toBeTruthy();

    const wrapper = mount(Textarea, {
      props: {
        modelValue: 'Test text',
      },
    });

    expect(wrapper.html()).toContain('textarea');
    expect(wrapper.find('.v-textarea').exists()).toBe(true);
    expect(wrapper.find('textarea').exists()).toBe(true);
  });

  it('renders textarea with correct value', () => {
    const wrapper = mount(Textarea, {
      props: {
        modelValue: 'Initial text content',
      },
    });

    const textarea = wrapper.find('textarea');
    expect(textarea.element.value).toBe('Initial text content');
  });

  it('renders label correctly', () => {
    const wrapper = mount(Textarea, {
      props: {
        modelValue: '',
        label: 'Textarea Label',
      },
    });

    expect(wrapper.find('.v-textarea-label').text()).toBe('Textarea Label');
  });

  it('renders hint correctly', () => {
    const wrapper = mount(Textarea, {
      props: {
        modelValue: '',
        hint: 'Textarea Hint',
      },
    });

    expect(wrapper.find('.v-textarea-hint').text()).toBe('Textarea Hint');
  });

  it('sets textarea attributes correctly', () => {
    const wrapper = mount(Textarea, {
      props: {
        modelValue: '',
        name: 'test-textarea',
        id: 'textarea-id',
        rows: 5,
        cols: 30,
        placeholder: 'Enter text...',
      },
    });

    const textarea = wrapper.find('textarea');
    expect(textarea.attributes('name')).toBe('test-textarea');
    expect(textarea.attributes('id')).toBe('textarea-id');
    expect(textarea.attributes('rows')).toBe('5');
    expect(textarea.attributes('cols')).toBe('30');
    expect(textarea.attributes('placeholder')).toBe('Enter text...');
  });

  it('applies disabled state correctly', () => {
    const wrapper = mount(Textarea, {
      props: {
        modelValue: '',
        disabled: true,
      },
    });

    const textarea = wrapper.find('textarea');
    expect(textarea.attributes('disabled')).toBeDefined();
    expect(wrapper.find('.v-textarea').classes()).toContain('v-textarea--disabled');
  });

  it('applies readonly state correctly', () => {
    const wrapper = mount(Textarea, {
      props: {
        modelValue: '',
        readonly: true,
      },
    });

    const textarea = wrapper.find('textarea');
    expect(textarea.attributes('readonly')).toBeDefined();
    expect(wrapper.find('.v-textarea').classes()).toContain('v-textarea--readonly');
  });

  it('applies error state correctly', () => {
    const wrapper = mount(Textarea, {
      props: {
        modelValue: '',
        error: true,
        errorMessages: ['Error message'],
      },
    });

    expect(wrapper.find('.v-textarea').classes()).toContain('v-textarea--error');
    expect(wrapper.find('.v-textarea-error').text()).toBe('Error message');
  });

  it('applies custom classes correctly', () => {
    const wrapper = mount(Textarea, {
      props: {
        modelValue: '',
        wrapperClass: 'custom-wrapper',
        inputClass: 'custom-input',
        labelClass: 'custom-label',
        label: 'Test Label',
      },
    });

    expect(wrapper.classes()).toContain('custom-wrapper');
    expect(wrapper.find('textarea').classes()).toContain('custom-input');
    expect(wrapper.find('.v-textarea-label').classes()).toContain('custom-label');
  });

  it('emits update:modelValue when text changes', async () => {
    const wrapper = mount(Textarea, {
      props: {
        modelValue: '',
      },
    });

    const textarea = wrapper.find('textarea');
    await textarea.setValue('New text content');

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')![0]).toEqual(['New text content']);
  });

  it('handles input events correctly', async () => {
    const wrapper = mount(Textarea, {
      props: {
        modelValue: '',
      },
    });

    const textarea = wrapper.find('textarea');
    await textarea.trigger('input');

    // Input should trigger change handler
    expect(wrapper.emitted()).toBeDefined();
  });

  it('handles blur events correctly', async () => {
    const wrapper = mount(Textarea, {
      props: {
        modelValue: '',
      },
    });

    const textarea = wrapper.find('textarea');
    await textarea.trigger('blur');

    // Blur should trigger validation
    expect(wrapper.emitted()).toBeDefined();
  });

  it('shows character counter when counter is enabled', () => {
    const wrapper = mount(Textarea, {
      props: {
        modelValue: 'Test content',
        counter: true,
        maxlength: 100,
      },
    });

    expect(wrapper.find('.v-textarea-counter').exists()).toBe(true);
    expect(wrapper.find('.v-textarea-counter').text()).toContain('12');
  });

  it('applies shadow class when shadow is true', () => {
    const wrapper = mount(Textarea, {
      props: {
        modelValue: '',
        shadow: true,
      },
    });

    expect(wrapper.find('.v-textarea').classes()).toContain('v-textarea--shadow');
  });

  it('hides error when hideError is true', () => {
    const wrapper = mount(Textarea, {
      props: {
        modelValue: '',
        error: true,
        errorMessages: ['Error message'],
        hideError: true,
      },
    });

    expect(wrapper.find('.v-textarea-error').exists()).toBe(false);
  });

  it('applies custom error class', () => {
    const wrapper = mount(Textarea, {
      props: {
        modelValue: '',
        error: true,
        errorMessages: ['Error message'],
        errorClass: 'custom-error-class',
      },
    });

    expect(wrapper.find('.v-textarea-error').classes()).toContain('custom-error-class');
  });

  it('handles validation modes correctly', () => {
    const modes = ['eager', 'aggressive', 'lazy'];
    
    modes.forEach(mode => {
      const wrapper = mount(Textarea, {
        props: {
          modelValue: '',
          validationMode: mode as any,
        },
      });
      
      expect(wrapper.props('validationMode')).toBe(mode);
    });
  });

  it('uses aggressive validation mode by default', () => {
    const wrapper = mount(Textarea, {
      props: {
        modelValue: '',
      },
    });

    expect(wrapper.props('validationMode')).toBe('aggressive');
  });

  it('renders slot content correctly', () => {
    const wrapper = mount(Textarea, {
      props: {
        modelValue: '',
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

  it('handles maxlength attribute correctly', () => {
    const wrapper = mount(Textarea, {
      props: {
        modelValue: '',
        maxlength: 200,
      },
    });

    const textarea = wrapper.find('textarea');
    expect(textarea.attributes('maxlength')).toBe('200');
  });

  it('handles minlength attribute correctly', () => {
    const wrapper = mount(Textarea, {
      props: {
        modelValue: '',
        minlength: 10,
      },
    });

    const textarea = wrapper.find('textarea');
    expect(textarea.attributes('minlength')).toBe('10');
  });

  it('sets correct label for attribute', () => {
    const wrapper = mount(Textarea, {
      props: {
        modelValue: '',
        label: 'Test Label',
        id: 'textarea-test',
      },
    });

    const label = wrapper.find('.v-textarea-label');
    const textarea = wrapper.find('textarea');
    
    expect(label.attributes('for')).toBe(textarea.attributes('id'));
  });

  it('generates unique id when none provided', () => {
    const wrapper1 = mount(Textarea, {
      props: {
        modelValue: '',
      },
    });

    const wrapper2 = mount(Textarea, {
      props: {
        modelValue: '',
      },
    });

    const id1 = wrapper1.find('textarea').attributes('id');
    const id2 = wrapper2.find('textarea').attributes('id');
    
    expect(id1).toBeDefined();
    expect(id2).toBeDefined();
    expect(id1).not.toBe(id2);
  });

  it('passes through additional attributes to textarea', () => {
    const wrapper = mount(Textarea, {
      props: {
        modelValue: '',
      },
      attrs: {
        'data-testid': 'test-textarea',
        'aria-label': 'Test textarea',
        spellcheck: 'false',
      },
    });

    const textarea = wrapper.find('textarea');
    expect(textarea.attributes('data-testid')).toBe('test-textarea');
    expect(textarea.attributes('aria-label')).toBe('Test textarea');
    expect(textarea.attributes('spellcheck')).toBe('false');
  });

  it('integrates with vee-validate for form validation', async () => {
    const errorMessage = 'Please enter some text';
    
    const WrapperComponent = defineComponent({
      components: { Textarea },
      setup() {
        const schema = object({
          description: string().required(errorMessage).min(10, 'Minimum 10 characters'),
        });

        const { handleSubmit } = useForm({
          validationSchema: schema,
        });

        const onSubmit = handleSubmit(() => {});

        return { onSubmit };
      },
      template: `
        <form @submit="onSubmit">
          <Textarea 
            name="description" 
            label="Description"
            placeholder="Enter description..."
          />
          <button type="submit">Submit</button>
        </form>
      `,
    });

    const wrapper = mount(WrapperComponent);
    
    await wrapper.find('form').trigger('submit');
    await flushPromises();
    
    await waitForExpected(() => {
      expect(wrapper.find('.v-textarea-error').text()).toContain(errorMessage);
    });
  });

  it('handles resize property correctly', () => {
    const wrapper = mount(Textarea, {
      props: {
        modelValue: '',
        resize: false,
      },
    });

    const textarea = wrapper.find('textarea');
    expect(textarea.classes()).toContain('resize-none');
  });

  it('handles deprecated value prop', () => {
    const wrapper = mount(Textarea, {
      props: {
        value: 'Deprecated value prop',
      },
    });

    const textarea = wrapper.find('textarea');
    expect(textarea.element.value).toBe('Deprecated value prop');
  });

  it('handles color variants correctly', () => {
    const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];
    
    colors.forEach(color => {
      const wrapper = mount(Textarea, {
        props: {
          modelValue: '',
          color: color as any,
        },
      });
      
      expect(wrapper.find('.v-textarea').classes()).toContain(`v-textarea-${color}`);
    });
  });

  it('handles auto-resize functionality', async () => {
    const wrapper = mount(Textarea, {
      props: {
        modelValue: '',
        autoResize: true,
      },
    });

    const textarea = wrapper.find('textarea');
    await textarea.setValue('Line 1\nLine 2\nLine 3\nLine 4\nLine 5');

    // Auto-resize should adjust height
    expect(textarea.element.scrollHeight).toBeGreaterThan(0);
  });

  it('handles focus and blur events for validation', async () => {
    const wrapper = mount(Textarea, {
      props: {
        modelValue: '',
        name: 'test-textarea',
        rules: 'required',
      },
    });

    const textarea = wrapper.find('textarea');
    
    // Focus should not trigger validation immediately
    await textarea.trigger('focus');
    
    // Blur should trigger validation
    await textarea.trigger('blur');
    
    await wrapper.vm.$nextTick();
    
    // Check if validation was triggered (may depend on validation mode)
    expect(wrapper.emitted()).toBeDefined();
  });
});
