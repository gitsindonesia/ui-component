import {mount} from '@vue/test-utils';
import {describe, it, expect, vi} from 'vitest';
import VAlert from './VAlert.vue';
import Icon from '@morpheme/icon';
import VAlertTitle from './VAlertTitle.vue';
import VAlertGroup from './VAlertGroup.vue';

const ALERT_TEXT = 'Alert text';

// Mock VIcon component
const mockIcon = {
  name: 'Icon',
  template: '<span class="icon"><slot /></span>',
  props: ['name', 'size', 'class']
};

const defaultGlobal = {
  stubs: {
    Icon: mockIcon
  }
};

describe('VAlert', () => {
  test('render properly with default props and slot', () => {
    const wrapper = mount(VAlert, {
      global: defaultGlobal
    });

    expect(wrapper).toBeDefined();
    expect(wrapper.html()).toContain('alert-default');
    expect(wrapper.find('.alert').exists()).toBe(true);
  });

  test('renders with default modelValue true', () => {
    const wrapper = mount(VAlert, {
      global: defaultGlobal
    });

    expect(wrapper.find('.alert').exists()).toBe(true);
  });

  test('does not render when modelValue is false', () => {
    const wrapper = mount(VAlert, {
      global: defaultGlobal,
      props: {
        modelValue: false
      }
    });

    expect(wrapper.find('.alert').exists()).toBe(false);
  });

  describe('when color props changed', () => {
    test('is return provided color props value', () => {
      const wrapper = mount(VAlert, {
        global: defaultGlobal,
        props: {
          color: 'primary',
        },
      });

      expect(wrapper.html()).toContain('alert-primary');
    });

    test('applies different color variants correctly', () => {
      const colors = ['success', 'error', 'warning', 'info'];
      
      colors.forEach(color => {
        const wrapper = mount(VAlert, {
          global: defaultGlobal,
          props: { color }
        });
        
        expect(wrapper.html()).toContain(`alert-${color}`);
      });
    });
  });

  describe('when icon props provided', () => {
    test('is render icon component', () => {
      const wrapper = mount(VAlert, {
        global: defaultGlobal,
        props: {
          icon: 'ri:alert-line',
        },
      });

      const IconWrapper = wrapper.findComponent(mockIcon);

      expect(IconWrapper.exists()).toBe(true);
      expect(wrapper.html()).toContain('alert-icon');
    });

    test('uses mapped icons for predefined icon names', () => {
      const mappedIcons = {
        info: 'heroicons:information-circle',
        success: 'heroicons:check-circle',
        warning: 'heroicons:exclamation-triangle',
        error: 'heroicons:x-circle',
      };

      Object.entries(mappedIcons).forEach(([iconName, expectedIcon]) => {
        const wrapper = mount(VAlert, {
          global: defaultGlobal,
          props: {
            icon: iconName,
          },
        });

        const IconWrapper = wrapper.findComponent(mockIcon);
        expect(IconWrapper.props('name')).toBe(expectedIcon);
      });
    });

    test('uses custom icon name when not predefined', () => {
      const customIcon = 'custom:icon-name';
      const wrapper = mount(VAlert, {
        global: defaultGlobal,
        props: {
          icon: customIcon,
        },
      });

      const IconWrapper = wrapper.findComponent(mockIcon);
      expect(IconWrapper.props('name')).toBe(customIcon);
    });
  });

  describe('when iconClass props provided', () => {
    test('will be add custom class on icon component', () => {
      const wrapper = mount(VAlert, {
        global: defaultGlobal,
        props: {
          icon: 'test-icon',
          iconClass: 'custom-class',
        },
      });

      const IconWrapper = wrapper.findComponent(mockIcon);

      expect(IconWrapper.exists()).toBe(true);
      expect(IconWrapper.classes()).toContain('custom-class');
    });
  });

  describe('when iconSize props provided', () => {
    test('applies icon size to x-icon', () => {
      const wrapper = mount(VAlert, {
        global: defaultGlobal,
        props: {
          dismissible: true,
          iconSize: 'lg'
        },
      });

      const xIcon = wrapper.find('.alert-x-icon').closest('[size]');
      expect(xIcon.attributes('size')).toBe('lg');
    });
  });

  describe('when dismissible is true', () => {
    test('render dismissible button', () => {
      const wrapper = mount(VAlert, {
        global: defaultGlobal,
        props: {
          dismissible: true,
        },
      });
      const buttonDismissibleWrapper = wrapper.find(
        'button.alert-dismissable',
      );

      expect(buttonDismissibleWrapper.exists()).toBe(true);
    });

    test('and when button dismissible clicked', async () => {
      const wrapper = mount(VAlert, {
        global: defaultGlobal,
        props: {
          dismissible: true,
          'onUpdate:modelValue': (e: any) =>
            wrapper.setProps({modelValue: e}),
        },
      });
      const buttonDismissibleWrapper = wrapper.find(
        'button.alert-dismissable',
      );

      await buttonDismissibleWrapper.trigger('click');

      expect(wrapper.html()).not.toContain('alert');
    });

    test('emits dismissed event when dismissed', async () => {
      const wrapper = mount(VAlert, {
        global: defaultGlobal,
        props: {
          dismissible: true,
        },
      });

      const dismissButton = wrapper.find('button.alert-dismissable');
      await dismissButton.trigger('click');

      expect(wrapper.emitted('dismissed')).toHaveLength(1);
    });

    test('emits update:modelValue event when dismissed', async () => {
      const wrapper = mount(VAlert, {
        global: defaultGlobal,
        props: {
          dismissible: true,
        },
      });

      const dismissButton = wrapper.find('button.alert-dismissable');
      await dismissButton.trigger('click');

      expect(wrapper.emitted('update:modelValue')).toHaveLength(1);
      expect(wrapper.emitted('update:modelValue')![0]).toEqual([false]);
    });
  });

  describe('when dismissable is true (deprecated)', () => {
    test('render dismissable button', () => {
      // Mock console.warn to test deprecation warning
      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

      const wrapper = mount(VAlert, {
        global: defaultGlobal,
        props: {
          dismissable: true,
        },
      });
      const buttonDismissableWrapper = wrapper.find(
        'button.alert-dismissable',
      );

      expect(buttonDismissableWrapper.exists()).toBe(true);
      expect(consoleSpy).toHaveBeenCalledWith(
        'The `dismissable` prop is deprecated. Use `dismissible` instead.'
      );

      consoleSpy.mockRestore();
    });

    test('and when button dismissable clicked', async () => {
      const wrapper = mount(VAlert, {
        global: defaultGlobal,
        props: {
          dismissable: true,
          'onUpdate:modelValue': (e: any) =>
            wrapper.setProps({modelValue: e}),
        },
      });
      const buttonDismissableWrapper = wrapper.find(
        'button.alert-dismissable',
      );

      await buttonDismissableWrapper.trigger('click');

      expect(wrapper.html()).not.toContain('alert');
    });
  });

  describe('when outlined props is true', () => {
    test('render outlined class', () => {
      const wrapper = mount(VAlert, {
        global: defaultGlobal,
        props: {
          outlined: true,
        },
      });

      expect(wrapper.html()).toContain('alert--outlined');
    });
  });

  describe('when solid props is true', () => {
    test('render solid class', () => {
      const wrapper = mount(VAlert, {
        global: defaultGlobal,
        props: {
          solid: true,
        },
      });

      expect(wrapper.html()).toContain('alert--solid');
    });
  });

  describe('when border props is true (deprecated)', () => {
    test('render bordered class', () => {
      const wrapper = mount(VAlert, {
        global: defaultGlobal,
        props: {
          border: true,
        },
      });

      expect(wrapper.html()).toContain('alert--bordered');
    });
  });

  describe('when bordered props is true', () => {
    test('render bordered class', () => {
      const wrapper = mount(VAlert, {
        global: defaultGlobal,
        props: {
          bordered: true,
        },
      });

      expect(wrapper.html()).toContain('alert--bordered');
    });
  });

  describe('when tile props is true', () => {
    test('render tile class', () => {
      const wrapper = mount(VAlert, {
        global: defaultGlobal,
        props: {
          tile: true,
        },
      });

      expect(wrapper.html()).toContain('alert--tile');
    });
  });

  describe('borderPosition prop', () => {
    test('applies correct border position classes', () => {
      const positions = ['top', 'bottom', 'left', 'right'] as const;
      
      positions.forEach(position => {
        const wrapper = mount(VAlert, {
          global: defaultGlobal,
          props: {
            borderPosition: position,
          },
        });
        
        expect(wrapper.html()).toContain(`alert--bordered-${position}`);
      });
    });

    test('defaults to left border position', () => {
      const wrapper = mount(VAlert, {
        global: defaultGlobal
      });

      expect(wrapper.html()).toContain('alert--bordered-left');
    });
  });

  describe('transition prop', () => {
    test('applies custom transition name', () => {
      const wrapper = mount(VAlert, {
        global: defaultGlobal,
        props: {
          transition: 'slide'
        }
      });

      const transition = wrapper.findComponent({ name: 'transition' });
      expect(transition.props('name')).toBe('slide');
    });

    test('defaults to fade transition', () => {
      const wrapper = mount(VAlert, {
        global: defaultGlobal
      });

      const transition = wrapper.findComponent({ name: 'transition' });
      expect(transition.props('name')).toBe('fade');
    });
  });

  describe('accessibility', () => {
    test('has role="alert"', () => {
      const wrapper = mount(VAlert, {
        global: defaultGlobal
      });

      expect(wrapper.find('.alert').attributes('role')).toBe('alert');
    });

    test('dismiss button has aria-label', () => {
      const wrapper = mount(VAlert, {
        global: defaultGlobal,
        props: {
          dismissible: true
        }
      });

      const dismissButton = wrapper.find('button.alert-dismissable');
      expect(dismissButton.attributes('aria-label')).toBe('Dismiss');
    });
  });

  describe('reactivity', () => {
    test('watches modelValue changes', async () => {
      const wrapper = mount(VAlert, {
        global: defaultGlobal,
        props: {
          modelValue: true
        }
      });

      expect(wrapper.find('.alert').exists()).toBe(true);

      await wrapper.setProps({ modelValue: false });
      expect(wrapper.find('.alert').exists()).toBe(false);

      await wrapper.setProps({ modelValue: true });
      expect(wrapper.find('.alert').exists()).toBe(true);
    });
  });

  describe('when slots are provided', () => {
    test('render with default slot content', () => {
      const wrapper = mount(VAlert, {
        global: defaultGlobal,
        slots: {
          default: ALERT_TEXT,
        },
      });

      expect(wrapper.html()).toContain(ALERT_TEXT);
      expect(wrapper.find('.alert-content').text()).toBe(ALERT_TEXT);
    });

    test('render with custom x-button slot', () => {
      const wrapper = mount(VAlert, {
        global: defaultGlobal,
        props: {
          dismissible: true,
        },
        slots: {
          default: ALERT_TEXT,
          'x-button': '<button class="custom-dismiss">Custom X</button>',
        },
      });

      expect(wrapper.html()).toContain(ALERT_TEXT);
      expect(wrapper.html()).toContain('Custom X');
      expect(wrapper.find('.custom-dismiss').exists()).toBe(true);
    });

    test('render with custom icon slot', () => {
      const wrapper = mount(VAlert, {
        global: defaultGlobal,
        props: {
          icon: 'test-icon',
        },
        slots: {
          icon: '<div class="custom-icon-slot">Custom Icon</div>',
        },
      });

      expect(wrapper.html()).toContain('custom-icon-slot');
      expect(wrapper.find('.custom-icon-slot').text()).toBe('Custom Icon');
    });

    test('render with custom x-icon slot', () => {
      const wrapper = mount(VAlert, {
        global: defaultGlobal,
        props: {
          dismissible: true,
        },
        slots: {
          'x-icon': '<span class="custom-x-icon">×</span>',
        },
      });

      expect(wrapper.html()).toContain('custom-x-icon');
      expect(wrapper.find('.custom-x-icon').text()).toBe('×');
    });
  });

  describe('slot props', () => {
    test('icon slot receives icon prop', () => {
      const iconSlot = vi.fn().mockReturnValue('<div>Custom Icon</div>');
      
      mount(VAlert, {
        global: defaultGlobal,
        props: {
          icon: 'test-icon',
        },
        slots: {
          icon: iconSlot,
        },
      });

      expect(iconSlot).toHaveBeenCalledWith({ icon: 'test-icon' });
    });

    test('x-button slot receives dismiss function', () => {
      const xButtonSlot = vi.fn().mockReturnValue('<button>Custom</button>');
      
      mount(VAlert, {
        global: defaultGlobal,
        props: {
          dismissible: true,
        },
        slots: {
          'x-button': xButtonSlot,
        },
      });

      expect(xButtonSlot).toHaveBeenCalledWith({ dismiss: expect.any(Function) });
    });
  });
});

describe('VAlertTitle', () => {
  test('render properly with default props and slot', () => {
    const wrapper = mount(VAlertTitle, {
      slots: {
        default: 'Title',
      }
    });

    expect(wrapper).toBeDefined();
    expect(wrapper.html()).toContain('alert-title');
    expect(wrapper.html()).toContain('Title');
  });

  test('renders as h6 element by default', () => {
    const wrapper = mount(VAlertTitle, {
      slots: {
        default: 'Title',
      }
    });

    expect(wrapper.element.tagName).toBe('H6');
  });

  test('applies alert-title class', () => {
    const wrapper = mount(VAlertTitle);

    expect(wrapper.classes()).toContain('alert-title');
  });
});

describe('VAlertGroup', () => {
  test('render properly with default props and slot', () => {
    const wrapper = mount(VAlertGroup, {
      slots: {
        default: 'Content',
      }
    });

    expect(wrapper).toBeDefined();
    expect(wrapper.html()).toContain('alert-group');
    expect(wrapper.html()).toContain('Content');
  });

  test('renders as div element', () => {
    const wrapper = mount(VAlertGroup);

    expect(wrapper.element.tagName).toBe('DIV');
  });

  test('applies alert-group class', () => {
    const wrapper = mount(VAlertGroup);

    expect(wrapper.classes()).toContain('alert-group');
  });
});