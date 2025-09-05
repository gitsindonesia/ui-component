import {mount} from '@vue/test-utils';
import {describe, it, expect, vi} from 'vitest';
import VBadge from './VBadge.vue';

describe('VBadge', () => {
  it('mounts component successfully', () => {
    expect(VBadge).toBeTruthy();

    const wrapper = mount(VBadge, {
      props: {},
      slots: {
        default: 'Badge Text',
      },
    });

    expect(wrapper.text()).toContain('Badge Text');
    expect(wrapper.find('.badge').exists()).toBe(true);
  });

  it('renders default slot content correctly', () => {
    const wrapper = mount(VBadge, {
      props: {},
      slots: {
        default: '<span class="custom-content">Custom Badge Content</span>',
      },
    });

    expect(wrapper.find('.custom-content').text()).toBe('Custom Badge Content');
  });

  it('applies color variants correctly', () => {
    const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];
    
    colors.forEach(color => {
      const wrapper = mount(VBadge, {
        props: {
          color: color,
        },
        slots: {
          default: 'Badge',
        },
      });
      
      expect(wrapper.find('.badge').classes()).toContain(`badge-${color}`);
    });
  });

  it('defaults to primary color', () => {
    const wrapper = mount(VBadge, {
      props: {},
      slots: {
        default: 'Badge',
      },
    });

    expect(wrapper.find('.badge').classes()).toContain('badge-primary');
  });

  it('applies size variants correctly', () => {
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
    
    sizes.forEach(size => {
      const wrapper = mount(VBadge, {
        props: {
          size: size,
        },
        slots: {
          default: 'Badge',
        },
      });
      
      expect(wrapper.find('.badge').classes()).toContain(`badge--${size}`);
    });
  });

  it('defaults to medium size', () => {
    const wrapper = mount(VBadge, {
      props: {},
      slots: {
        default: 'Badge',
      },
    });

    expect(wrapper.find('.badge').classes()).toContain('badge--md');
  });

  it('applies variant styles correctly', () => {
    const variants = ['solid', 'outline', 'soft', 'text'];
    
    variants.forEach(variant => {
      const wrapper = mount(VBadge, {
        props: {
          variant: variant,
        },
        slots: {
          default: 'Badge',
        },
      });
      
      expect(wrapper.find('.badge').classes()).toContain(`badge--${variant}`);
    });
  });

  it('defaults to solid variant', () => {
    const wrapper = mount(VBadge, {
      props: {},
      slots: {
        default: 'Badge',
      },
    });

    expect(wrapper.find('.badge').classes()).toContain('badge--solid');
  });

  it('handles dismissable functionality', async () => {
    const wrapper = mount(VBadge, {
      props: {
        dismissable: true,
      },
      slots: {
        default: 'Dismissable Badge',
      },
    });

    const dismissButton = wrapper.find('.badge-dismiss-button');
    expect(dismissButton.exists()).toBe(true);

    await dismissButton.trigger('click');

    expect(wrapper.emitted()).toHaveProperty('dismiss');
    expect(wrapper.emitted('dismiss')).toHaveLength(1);
  });

  it('does not show dismiss button when not dismissable', () => {
    const wrapper = mount(VBadge, {
      props: {
        dismissable: false,
      },
      slots: {
        default: 'Non-dismissable Badge',
      },
    });

    const dismissButton = wrapper.find('.badge-dismiss-button');
    expect(dismissButton.exists()).toBe(false);
  });

  it('applies rounded styling with boolean value', () => {
    const wrapper = mount(VBadge, {
      props: {
        rounded: true,
      },
      slots: {
        default: 'Rounded Badge',
      },
    });

    expect(wrapper.find('.badge').classes()).toContain('badge--rounded');
  });

  it('applies rounded styling with string value', () => {
    const roundedValues = ['sm', 'md', 'lg', 'xl', 'full'];
    
    roundedValues.forEach(value => {
      const wrapper = mount(VBadge, {
        props: {
          rounded: value,
        },
        slots: {
          default: 'Badge',
        },
      });
      
      expect(wrapper.find('.badge').classes()).toContain(`badge--rounded-${value}`);
    });
  });

  it('applies custom classes correctly', () => {
    const wrapper = mount(VBadge, {
      props: {
        class: 'custom-badge-class',
      },
      slots: {
        default: 'Custom Badge',
      },
    });

    expect(wrapper.classes()).toContain('custom-badge-class');
  });

  it('handles icon integration', () => {
    const wrapper = mount(VBadge, {
      props: {
        icon: 'star',
      },
      slots: {
        default: 'Badge with Icon',
      },
    });

    expect(wrapper.find('.badge-icon').exists()).toBe(true);
  });

  it('handles icon-only badges', () => {
    const wrapper = mount(VBadge, {
      props: {
        icon: 'notification',
        iconOnly: true,
      },
    });

    expect(wrapper.find('.badge').classes()).toContain('badge--icon-only');
    expect(wrapper.find('.badge-icon').exists()).toBe(true);
  });

  it('applies dot variant correctly', () => {
    const wrapper = mount(VBadge, {
      props: {
        dot: true,
      },
    });

    expect(wrapper.find('.badge').classes()).toContain('badge--dot');
  });

  it('handles numeric content', () => {
    const wrapper = mount(VBadge, {
      props: {
        content: 42,
      },
    });

    expect(wrapper.text()).toContain('42');
  });

  it('handles max value for numeric badges', () => {
    const wrapper = mount(VBadge, {
      props: {
        content: 150,
        max: 99,
      },
    });

    expect(wrapper.text()).toContain('99+');
  });

  it('applies pulse animation when specified', () => {
    const wrapper = mount(VBadge, {
      props: {
        pulse: true,
      },
      slots: {
        default: 'Pulsing Badge',
      },
    });

    expect(wrapper.find('.badge').classes()).toContain('badge--pulse');
  });

  it('handles positioning when used as notification badge', () => {
    const positions = ['top-right', 'top-left', 'bottom-right', 'bottom-left'];
    
    positions.forEach(position => {
      const wrapper = mount(VBadge, {
        props: {
          position: position,
        },
        slots: {
          default: 'Positioned Badge',
        },
      });
      
      expect(wrapper.find('.badge').classes()).toContain(`badge--${position}`);
    });
  });

  it('handles hidden state correctly', () => {
    const wrapper = mount(VBadge, {
      props: {
        hidden: true,
      },
      slots: {
        default: 'Hidden Badge',
      },
    });

    expect(wrapper.find('.badge').classes()).toContain('badge--hidden');
  });

  it('applies inline styling correctly', () => {
    const wrapper = mount(VBadge, {
      props: {
        inline: true,
      },
      slots: {
        default: 'Inline Badge',
      },
    });

    expect(wrapper.find('.badge').classes()).toContain('badge--inline');
  });

  it('handles loading state', () => {
    const wrapper = mount(VBadge, {
      props: {
        loading: true,
      },
      slots: {
        default: 'Loading Badge',
      },
    });

    expect(wrapper.find('.badge').classes()).toContain('badge--loading');
    expect(wrapper.find('.badge-spinner').exists()).toBe(true);
  });

  it('emits click events correctly', async () => {
    const wrapper = mount(VBadge, {
      props: {},
      slots: {
        default: 'Clickable Badge',
      },
    });

    await wrapper.find('.badge').trigger('click');

    expect(wrapper.emitted()).toHaveProperty('click');
    expect(wrapper.emitted('click')).toHaveLength(1);
  });

  it('handles tag prop to render different HTML elements', () => {
    const wrapper = mount(VBadge, {
      props: {
        tag: 'a',
        href: '#link',
      },
      slots: {
        default: 'Link Badge',
      },
    });

    expect(wrapper.element.tagName.toLowerCase()).toBe('a');
    expect(wrapper.attributes('href')).toBe('#link');
  });

  it('applies disabled state correctly', () => {
    const wrapper = mount(VBadge, {
      props: {
        disabled: true,
      },
      slots: {
        default: 'Disabled Badge',
      },
    });

    expect(wrapper.find('.badge').classes()).toContain('badge--disabled');
    expect(wrapper.attributes('disabled')).toBeDefined();
  });

  it('handles custom dismiss icon', () => {
    const wrapper = mount(VBadge, {
      props: {
        dismissable: true,
        dismissIcon: 'custom-close',
      },
      slots: {
        default: 'Custom Dismiss Badge',
      },
    });

    const dismissButton = wrapper.find('.badge-dismiss-button');
    expect(dismissButton.exists()).toBe(true);
  });

  it('prevents dismiss when disabled', async () => {
    const wrapper = mount(VBadge, {
      props: {
        dismissable: true,
        disabled: true,
      },
      slots: {
        default: 'Disabled Dismissable Badge',
      },
    });

    const dismissButton = wrapper.find('.badge-dismiss-button');
    if (dismissButton.exists()) {
      await dismissButton.trigger('click');
      expect(wrapper.emitted('dismiss')).toBeFalsy();
    }
  });

  it('supports accessibility attributes', () => {
    const wrapper = mount(VBadge, {
      props: {
        'aria-label': 'Notification badge',
        role: 'status',
      },
      attrs: {
        'aria-live': 'polite',
      },
      slots: {
        default: 'Accessible Badge',
      },
    });

    expect(wrapper.attributes('aria-label')).toBe('Notification badge');
    expect(wrapper.attributes('role')).toBe('status');
    expect(wrapper.attributes('aria-live')).toBe('polite');
  });

  it('handles complex slot content', () => {
    const wrapper = mount(VBadge, {
      props: {},
      slots: {
        default: `
          <div class="complex-content">
            <span class="badge-text">Complex</span>
            <strong class="badge-number">123</strong>
          </div>
        `,
      },
    });

    expect(wrapper.find('.complex-content').exists()).toBe(true);
    expect(wrapper.find('.badge-text').text()).toBe('Complex');
    expect(wrapper.find('.badge-number').text()).toBe('123');
  });

  it('handles zero value display correctly', () => {
    const wrapper = mount(VBadge, {
      props: {
        content: 0,
        showZero: true,
      },
    });

    expect(wrapper.text()).toContain('0');
  });

  it('hides zero value when showZero is false', () => {
    const wrapper = mount(VBadge, {
      props: {
        content: 0,
        showZero: false,
      },
    });

    expect(wrapper.find('.badge').classes()).toContain('badge--hidden');
  });

  it('applies custom styles correctly', () => {
    const wrapper = mount(VBadge, {
      props: {
        style: 'background-color: purple; color: white;',
      },
      slots: {
        default: 'Custom Styled Badge',
      },
    });

    expect(wrapper.attributes('style')).toContain('background-color: purple');
    expect(wrapper.attributes('style')).toContain('color: white');
  });
});
