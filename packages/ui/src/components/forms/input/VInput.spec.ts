import {mount, flushPromises} from '@vue/test-utils';
import {describe, it, expect, vi} from 'vitest';
import {defineComponent, ref} from 'vue';
import VInput from './VInput.vue';
import waitForExpect from 'wait-for-expect';
import {string, object} from 'yup';
import {useForm} from 'vee-validate';

// Mock Icon component
const mockIcon = {
  name: 'Icon',
  template: '<span class="icon" :class="$attrs.class"><slot /></span>',
  props: ['name', 'size', 'class']
};

// Mock ErrorMessage component
const mockErrorMessage = {
  name: 'ErrorMessage',
  template: '<div class="error-message" :class="$attrs.class"><slot /></div>',
  props: ['class']
};

const defaultGlobal = {
  stubs: {
    Icon: mockIcon,
    ErrorMessage: mockErrorMessage
  }
};

describe('VInput', () => {
  it('mounts component successfully', () => {
    expect(VInput).toBeTruthy();

    const wrapper = mount(VInput, {
      global: defaultGlobal,
      props: {
        modelValue: 'Text',
      },
    });

    expect(wrapper.html()).toContain('v-input');
  });

  it('renders label when provided', () => {
    const wrapper = mount(VInput, {
      global: defaultGlobal,
      props: {
        label: 'Test Label',
      },
    });

    expect(wrapper.text()).toContain('Test Label');
    expect(wrapper.find('.v-input-label').text()).toBe('Test Label');
  });

  it('renders as text when text prop is true', () => {
    const wrapper = mount(VInput, {
      global: defaultGlobal,
      props: {
        modelValue: 'test value',
        text: true,
      },
    });

    expect(wrapper.find('.v-input-text').text()).toBe('test value');
    expect(wrapper.find('input').exists()).toBe(false);
  });

  it('renders input control when text prop is false', () => {
    const wrapper = mount(VInput, {
      global: defaultGlobal,
      props: {
        modelValue: 'test value',
        text: false,
      },
    });

    expect(wrapper.find('input.v-input-control').exists()).toBe(true);
    expect(wrapper.find('.v-input-text').exists()).toBe(false);
  });

  it('sets input value correctly', () => {
    const wrapper = mount(VInput, {
      global: defaultGlobal,
      props: {
        modelValue: 'test value',
      },
    });

    const input = wrapper.find('input');
    expect(input.element.value).toBe('test value');
  });

  it('sets input type correctly', () => {
    const wrapper = mount(VInput, {
      global: defaultGlobal,
      props: {
        type: 'password',
      },
    });

    const input = wrapper.find('input');
    expect(input.attributes('type')).toBe('password');
  });

  it('sets input placeholder correctly', () => {
    const wrapper = mount(VInput, {
      global: defaultGlobal,
      props: {
        placeholder: 'Enter text...',
      },
    });

    const input = wrapper.find('input');
    expect(input.attributes('placeholder')).toBe('Enter text...');
  });

  it('disables input when disabled prop is true', () => {
    const wrapper = mount(VInput, {
      global: defaultGlobal,
      props: {
        disabled: true,
      },
    });

    const input = wrapper.find('input');
    expect(input.attributes('disabled')).toBeDefined();
    expect(wrapper.classes()).toContain('v-input--disabled');
  });

  it('makes input readonly when readonly prop is true', () => {
    const wrapper = mount(VInput, {
      global: defaultGlobal,
      props: {
        readonly: true,
      },
    });

    const input = wrapper.find('input');
    expect(input.attributes('readonly')).toBeDefined();
  });

  it('applies size classes correctly', () => {
    const sizes = ['sm', 'md', 'lg'] as const;
    
    sizes.forEach(size => {
      const wrapper = mount(VInput, {
        global: defaultGlobal,
        props: { size }
      });
      
      expect(wrapper.classes()).toContain(`v-input--${size}`);
    });
  });

  it('applies color classes correctly', () => {
    const wrapper = mount(VInput, {
      global: defaultGlobal,
      props: {
        color: 'primary'
      }
    });

    expect(wrapper.classes()).toContain('v-input-primary');
  });

  it('applies error state correctly', () => {
    const wrapper = mount(VInput, {
      global: defaultGlobal,
      props: {
        error: true
      }
    });

    expect(wrapper.classes()).toContain('v-input--error');
  });

  it('applies shadow class when shadow prop is true', () => {
    const wrapper = mount(VInput, {
      global: defaultGlobal,
      props: {
        shadow: true
      }
    });

    expect(wrapper.classes()).toContain('v-input--shadow');
  });

  it('applies rounded class when rounded prop is true', () => {
    const wrapper = mount(VInput, {
      global: defaultGlobal,
      props: {
        rounded: true
      }
    });

    expect(wrapper.classes()).toContain('v-input--rounded');
  });

  it('applies borderless class when borderless prop is true', () => {
    const wrapper = mount(VInput, {
      global: defaultGlobal,
      props: {
        borderless: true
      }
    });

    expect(wrapper.classes()).toContain('v-input--borderless');
  });

  it('applies no-ring class when noRing prop is true', () => {
    const wrapper = mount(VInput, {
      global: defaultGlobal,
      props: {
        noRing: true
      }
    });

    expect(wrapper.classes()).toContain('v-input--no-ring');
  });

  it('applies custom classes correctly', () => {
    const wrapper = mount(VInput, {
      global: defaultGlobal,
      props: {
        wrapperClass: 'custom-wrapper',
        inputClass: 'custom-input',
        labelClass: 'custom-label',
        label: 'Test Label'
      }
    });

    expect(wrapper.classes()).toContain('custom-wrapper');
    expect(wrapper.find('input').classes()).toContain('custom-input');
    expect(wrapper.find('.v-input-label').classes()).toContain('custom-label');
  });

  describe('icons', () => {
    it('renders prepend icon when provided', () => {
      const wrapper = mount(VInput, {
        global: defaultGlobal,
        props: {
          prependIcon: 'search',
          prependIconClass: 'custom-prepend-icon'
        },
      });

      const prependIcon = wrapper.findComponent(mockIcon);
      expect(prependIcon.exists()).toBe(true);
      expect(prependIcon.props('name')).toBe('search');
      expect(prependIcon.classes()).toContain('v-input-icon--prepend');
      expect(prependIcon.classes()).toContain('custom-prepend-icon');
    });

    it('renders append icon when provided', () => {
      const wrapper = mount(VInput, {
        global: defaultGlobal,
        props: {
          appendIcon: 'arrow-right',
          appendIconClass: 'custom-append-icon'
        },
      });

      const appendIcon = wrapper.findComponent(mockIcon);
      expect(appendIcon.exists()).toBe(true);
      expect(appendIcon.props('name')).toBe('arrow-right');
      expect(appendIcon.classes()).toContain('v-input-icon--append');
      expect(appendIcon.classes()).toContain('custom-append-icon');
    });

    it('sets icon size correctly', () => {
      const wrapper = mount(VInput, {
        global: defaultGlobal,
        props: {
          prependIcon: 'search',
          prependIconSize: 'lg'
        },
      });

      const prependIcon = wrapper.findComponent(mockIcon);
      expect(prependIcon.props('size')).toBe('lg');
    });

    it('defaults icon size to input size', () => {
      const wrapper = mount(VInput, {
        global: defaultGlobal,
        props: {
          prependIcon: 'search',
          size: 'sm'
        },
      });

      const prependIcon = wrapper.findComponent(mockIcon);
      expect(prependIcon.props('size')).toBe('sm');
    });
  });

  describe('events', () => {
    it('emits clickPrepend when prepend area is clicked', async () => {
      const wrapper = mount(VInput, {
        global: defaultGlobal,
        props: {
          modelValue: 'test',
          prependClass: 'prepend-class-custom',
        },
      });

      const prependWrapper = wrapper.find('.prepend-class-custom');
      await prependWrapper.trigger('click');

      expect(wrapper.emitted()).toHaveProperty('clickPrepend');
    });

    it('emits clickAppend when append area is clicked', async () => {
      const wrapper = mount(VInput, {
        global: defaultGlobal,
        props: {
          modelValue: 'test',
          appendClass: 'append-class-custom',
        },
      });

      const appendWrapper = wrapper.find('.append-class-custom');
      await appendWrapper.trigger('click');

      expect(wrapper.emitted()).toHaveProperty('clickAppend');
    });

    it('emits clickPrependIcon when prepend icon is clicked', async () => {
      const wrapper = mount(VInput, {
        global: defaultGlobal,
        props: {
          modelValue: 'test',
          prependIcon: 'search',
          prependIconClass: 'custom-prepend-icon-class',
        },
      });

      const prependIconWrapper = wrapper.find('.custom-prepend-icon-class');
      await prependIconWrapper.trigger('click');

      expect(wrapper.html()).toContain('v-input-icon--prepend');
      expect(wrapper.emitted()).toHaveProperty('clickPrependIcon');
    });

    it('emits clickAppendIcon when append icon is clicked', async () => {
      const wrapper = mount(VInput, {
        global: defaultGlobal,
        props: {
          modelValue: 'test',
          appendIcon: 'arrow-right',
          appendIconClass: 'custom-append-icon-class',
        },
      });

      const appendIconWrapper = wrapper.find('.custom-append-icon-class');
      await appendIconWrapper.trigger('click');

      expect(wrapper.emitted()).toHaveProperty('clickAppendIcon');
    });

    it('emits update:modelValue when input value changes', async () => {
      const wrapper = mount(VInput, {
        global: defaultGlobal,
        props: {
          modelValue: '',
        },
      });

      const input = wrapper.find('input');
      await input.setValue('new value');

      expect(wrapper.emitted('update:modelValue')).toBeTruthy();
      expect(wrapper.emitted('update:modelValue')![0]).toEqual(['new value']);
    });

    it('emits clear event when clear button is clicked', async () => {
      const wrapper = mount(VInput, {
        global: defaultGlobal,
        props: {
          modelValue: 'test value',
          clearable: true,
        },
      });

      const clearButton = wrapper.find('.v-input-clearable');
      await clearButton.trigger('click');

      expect(wrapper.emitted('clear')).toBeTruthy();
    });
  });

  describe('clearable functionality', () => {
    it('shows clear button when clearable and has value', async () => {
      const wrapper = mount(VInput, {
        global: defaultGlobal,
        props: {
          modelValue: 'default',
          clearable: true,
        },
      });

      expect(wrapper.find('.v-input-clearable').exists()).toBe(true);
    });

    it('hides clear button when no value', async () => {
      const wrapper = mount(VInput, {
        global: defaultGlobal,
        props: {
          modelValue: '',
          clearable: true,
        },
      });

      expect(wrapper.find('.v-input-clearable').exists()).toBe(false);
    });

    it('clears value when clear button is clicked', async () => {
      const wrapper = mount(VInput, {
        global: defaultGlobal,
        props: {
          modelValue: 'default',
          clearable: true,
        },
      });

      const clearButton = wrapper.find('.v-input-clearable');
      await clearButton.trigger('click');

      expect(wrapper.emitted('update:modelValue')).toBeTruthy();
      expect(wrapper.emitted('update:modelValue')![0]).toEqual(['']);
    });

    it('uses custom clearable icon', () => {
      const wrapper = mount(VInput, {
        global: defaultGlobal,
        props: {
          modelValue: 'test',
          clearable: true,
          clearableIcon: 'custom-clear-icon',
          clearableIconClass: 'custom-clear-class'
        },
      });

      const clearIcon = wrapper.find('.v-input-icon--clearable');
      expect(clearIcon.exists()).toBe(true);
      expect(clearIcon.classes()).toContain('custom-clear-class');
    });

    it('sets clearable icon size correctly', () => {
      const wrapper = mount(VInput, {
        global: defaultGlobal,
        props: {
          modelValue: 'test',
          clearable: true,
          clearableIconSize: 'lg'
        },
      });

      const clearableIcon = wrapper.findAllComponents(mockIcon).find(icon => 
        icon.classes().includes('v-input-icon--clearable')
      );
      expect(clearableIcon!.props('size')).toBe('lg');
    });
  });

  describe('hint functionality', () => {
    it('renders hint when provided', () => {
      const wrapper = mount(VInput, {
        global: defaultGlobal,
        props: {
          modelValue: 'test',
          hint: 'This is a helpful hint',
        },
      });

      expect(wrapper.find('.v-input-hint').exists()).toBe(true);
      expect(wrapper.find('.v-input-hint').text()).toBe('This is a helpful hint');
    });

    it('does not render hint when not provided', () => {
      const wrapper = mount(VInput, {
        global: defaultGlobal,
        props: {
          modelValue: 'test',
        },
      });

      expect(wrapper.find('.v-input-hint').exists()).toBe(false);
    });
  });

  describe('error handling', () => {
    it('shows error message when validation error exists', async () => {
      const errorClass = 'v-input-error';
      const errorMessage = 'The field is required';
      const WrapperComponent = defineComponent({
        components: {
          VInput,
        },
        setup() {
          const schema = object({
            test: string().required(errorMessage).label('Test'),
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
          <VInput name="test" label="Label" />
            <div class="mt-4">
              <button type="submit">Submit</button>
            </div>
          </form>`,
      });

      const wrapper = mount(WrapperComponent, {
        global: defaultGlobal
      });

      await wrapper.find('form').trigger('submit');

      await flushPromises();
      await waitForExpect(() => {
        expect(wrapper.html()).toContain(errorClass);
        expect(wrapper.find(`.${errorClass}`).text()).toContain(errorMessage);
      });
    });

    it('hides error message when hideError is true', () => {
      const wrapper = mount(VInput, {
        global: defaultGlobal,
        props: {
          error: true,
          hideError: true,
          errorMessages: ['Error message']
        },
      });

      expect(wrapper.findComponent(mockErrorMessage).exists()).toBe(false);
    });

    it('applies error class when error prop is true', () => {
      const wrapper = mount(VInput, {
        global: defaultGlobal,
        props: {
          error: true
        },
      });

      expect(wrapper.classes()).toContain('v-input--error');
    });

    it('applies error class when errorMessages array has items', () => {
      const wrapper = mount(VInput, {
        global: defaultGlobal,
        props: {
          errorMessages: ['Error 1', 'Error 2']
        },
      });

      expect(wrapper.classes()).toContain('v-input--error');
    });

    it('applies custom error class', () => {
      const wrapper = mount(VInput, {
        global: defaultGlobal,
        props: {
          error: true,
          errorClass: 'custom-error-class'
        },
      });

      const errorMessage = wrapper.findComponent(mockErrorMessage);
      expect(errorMessage.classes()).toContain('custom-error-class');
    });
  });

  describe('focus functionality', () => {
    it('exposes focus method', () => {
      const wrapper = mount(VInput, {
        global: defaultGlobal
      });

      expect(typeof wrapper.vm.focus).toBe('function');
    });

    it('focuses input when focus method is called', async () => {
      const wrapper = mount(VInput, {
        global: defaultGlobal,
        attachTo: document.body
      });

      const input = wrapper.find('input');
      const focusSpy = vi.spyOn(input.element, 'focus');

      wrapper.vm.focus();

      expect(focusSpy).toHaveBeenCalled();
      
      focusSpy.mockRestore();
      wrapper.unmount();
    });
  });

  describe('input control classes', () => {
    it('applies prepend class modifier when prependClass exists', () => {
      const wrapper = mount(VInput, {
        global: defaultGlobal,
        props: {
          prependClass: 'custom-prepend'
        },
      });

      const input = wrapper.find('input');
      expect(input.classes()).toContain('v-input-control--has-prepend-class');
    });

    it('applies append class modifier when appendClass exists', () => {
      const wrapper = mount(VInput, {
        global: defaultGlobal,
        props: {
          appendClass: 'custom-append'
        },
      });

      const input = wrapper.find('input');
      expect(input.classes()).toContain('v-input-control--has-append-class');
    });
  });

  describe('attributes inheritance', () => {
    it('passes through additional attributes to input in normal mode', () => {
      const wrapper = mount(VInput, {
        global: defaultGlobal,
        attrs: {
          'data-testid': 'test-input',
          autocomplete: 'off'
        }
      });

      const input = wrapper.find('input');
      expect(input.attributes('data-testid')).toBe('test-input');
      expect(input.attributes('autocomplete')).toBe('off');
    });

    it('passes through additional attributes to text element in text mode', () => {
      const wrapper = mount(VInput, {
        global: defaultGlobal,
        props: {
          text: true,
          modelValue: 'test'
        },
        attrs: {
          'data-testid': 'test-text',
          class: 'custom-text-class'
        }
      });

      const textElement = wrapper.find('.v-input-text');
      expect(textElement.attributes('data-testid')).toBe('test-text');
      expect(textElement.classes()).toContain('custom-text-class');
    });
  });

  describe('id and name attributes', () => {
    it('sets input id from id prop', () => {
      const wrapper = mount(VInput, {
        global: defaultGlobal,
        props: {
          id: 'custom-id'
        }
      });

      const input = wrapper.find('input');
      expect(input.attributes('id')).toBe('custom-id');
    });

    it('sets input id from name prop when id is not provided', () => {
      const wrapper = mount(VInput, {
        global: defaultGlobal,
        props: {
          name: 'custom-name'
        }
      });

      const input = wrapper.find('input');
      expect(input.attributes('id')).toBe('custom-name');
    });

    it('sets label for attribute correctly', () => {
      const wrapper = mount(VInput, {
        global: defaultGlobal,
        props: {
          label: 'Test Label',
          name: 'test-input'
        }
      });

      const label = wrapper.find('label');
      expect(label.attributes('for')).toBe('test-input');
    });
  });

  describe('slots', () => {
    it('renders label slot content', () => {
      const wrapper = mount(VInput, {
        global: defaultGlobal,
        props: {
          label: 'Default Label'
        },
        slots: {
          label: '<span class="custom-label">Custom Label</span>'
        }
      });

      expect(wrapper.find('.custom-label').text()).toBe('Custom Label');
    });

    it('renders prepend slot content', () => {
      const wrapper = mount(VInput, {
        global: defaultGlobal,
        slots: {
          prepend: '<span class="custom-prepend">Prepend Content</span>'
        }
      });

      expect(wrapper.find('.custom-prepend').text()).toBe('Prepend Content');
    });

    it('renders append slot content', () => {
      const wrapper = mount(VInput, {
        global: defaultGlobal,
        slots: {
          append: '<span class="custom-append">Append Content</span>'
        }
      });

      expect(wrapper.find('.custom-append').text()).toBe('Append Content');
    });

    it('renders hint slot content', () => {
      const wrapper = mount(VInput, {
        global: defaultGlobal,
        props: {
          hint: 'Default hint'
        },
        slots: {
          hint: '<em class="custom-hint">Custom Hint</em>'
        }
      });

      expect(wrapper.find('.custom-hint').text()).toBe('Custom Hint');
    });

    it('renders clearable slot content', () => {
      const wrapper = mount(VInput, {
        global: defaultGlobal,
        props: {
          modelValue: 'test',
          clearable: true
        },
        slots: {
          clearable: '<button class="custom-clear">Clear</button>'
        }
      });

      expect(wrapper.find('.custom-clear').text()).toBe('Clear');
    });
  });

  describe('deprecated value prop', () => {
    it('works with deprecated value prop', () => {
      const wrapper = mount(VInput, {
        global: defaultGlobal,
        props: {
          value: 'deprecated value'
        }
      });

      const input = wrapper.find('input');
      expect(input.element.value).toBe('deprecated value');
    });
  });
});
