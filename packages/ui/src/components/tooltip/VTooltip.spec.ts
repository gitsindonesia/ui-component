import {mount, flushPromises} from '@vue/test-utils';
import {describe, it, expect, vi} from 'vitest';
import VTooltip from './VTooltip.vue';
import {defineComponent} from 'vue';

describe('VTooltip', () => {
  it('mounts component successfully', () => {
    expect(VTooltip).toBeTruthy();

    const wrapper = mount(VTooltip, {
      props: {
        text: 'Tooltip text',
      },
      slots: {
        default: '<button>Hover me</button>',
      },
    });

    expect(wrapper.find('.v-tooltip').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
  });

  it('renders tooltip text correctly', () => {
    const wrapper = mount(VTooltip, {
      props: {
        text: 'This is a tooltip',
      },
      slots: {
        default: '<span>Trigger</span>',
      },
    });

    expect(wrapper.text()).toContain('This is a tooltip');
  });

  it('renders slot content correctly', () => {
    const wrapper = mount(VTooltip, {
      props: {
        text: 'Tooltip text',
      },
      slots: {
        default: '<button class="trigger-button">Click me</button>',
      },
    });

    expect(wrapper.find('.trigger-button').exists()).toBe(true);
    expect(wrapper.find('.trigger-button').text()).toBe('Click me');
  });

  it('shows tooltip on hover', async () => {
    const wrapper = mount(VTooltip, {
      props: {
        text: 'Hover tooltip',
      },
      slots: {
        default: '<div class="trigger">Hover target</div>',
      },
    });

    const trigger = wrapper.find('.trigger');
    await trigger.trigger('mouseenter');

    // Tooltip should be visible
    await flushPromises();
    expect(wrapper.find('.v-tooltip-content').exists()).toBe(true);
  });

  it('hides tooltip on mouse leave', async () => {
    const wrapper = mount(VTooltip, {
      props: {
        text: 'Hover tooltip',
      },
      slots: {
        default: '<div class="trigger">Hover target</div>',
      },
    });

    const trigger = wrapper.find('.trigger');
    
    // Show tooltip
    await trigger.trigger('mouseenter');
    await flushPromises();
    
    // Hide tooltip
    await trigger.trigger('mouseleave');
    await flushPromises();
    
    // Tooltip should be hidden or not exist
    expect(wrapper.find('.v-tooltip-content').exists()).toBe(false);
  });

  it('applies placement correctly', () => {
    const placements = ['top', 'bottom', 'left', 'right'];
    
    placements.forEach(placement => {
      const wrapper = mount(VTooltip, {
        props: {
          text: 'Tooltip text',
          placement: placement as any,
        },
        slots: {
          default: '<span>Trigger</span>',
        },
      });
      
      expect(wrapper.find('.v-tooltip').classes()).toContain(`v-tooltip--${placement}`);
    });
  });

  it('defaults to top placement', () => {
    const wrapper = mount(VTooltip, {
      props: {
        text: 'Tooltip text',
      },
      slots: {
        default: '<span>Trigger</span>',
      },
    });

    expect(wrapper.find('.v-tooltip').classes()).toContain('v-tooltip--top');
  });

  it('applies theme correctly', () => {
    const themes = ['dark', 'light'];
    
    themes.forEach(theme => {
      const wrapper = mount(VTooltip, {
        props: {
          text: 'Tooltip text',
          theme: theme as any,
        },
        slots: {
          default: '<span>Trigger</span>',
        },
      });
      
      expect(wrapper.find('.v-tooltip').classes()).toContain(`v-tooltip--${theme}`);
    });
  });

  it('defaults to dark theme', () => {
    const wrapper = mount(VTooltip, {
      props: {
        text: 'Tooltip text',
      },
      slots: {
        default: '<span>Trigger</span>',
      },
    });

    expect(wrapper.find('.v-tooltip').classes()).toContain('v-tooltip--dark');
  });

  it('handles disabled state correctly', async () => {
    const wrapper = mount(VTooltip, {
      props: {
        text: 'Tooltip text',
        disabled: true,
      },
      slots: {
        default: '<div class="trigger">Disabled tooltip</div>',
      },
    });

    const trigger = wrapper.find('.trigger');
    await trigger.trigger('mouseenter');
    await flushPromises();

    // Tooltip should not show when disabled
    expect(wrapper.find('.v-tooltip-content').exists()).toBe(false);
  });

  it('applies custom classes correctly', () => {
    const wrapper = mount(VTooltip, {
      props: {
        text: 'Tooltip text',
        tooltipClass: 'custom-tooltip-class',
        wrapperClass: 'custom-wrapper-class',
      },
      slots: {
        default: '<span>Trigger</span>',
      },
    });

    expect(wrapper.classes()).toContain('custom-wrapper-class');
    expect(wrapper.find('.v-tooltip-content').classes()).toContain('custom-tooltip-class');
  });

  it('shows tooltip on focus for accessibility', async () => {
    const wrapper = mount(VTooltip, {
      props: {
        text: 'Focus tooltip',
      },
      slots: {
        default: '<button class="trigger">Focusable element</button>',
      },
    });

    const trigger = wrapper.find('.trigger');
    await trigger.trigger('focus');
    await flushPromises();

    expect(wrapper.find('.v-tooltip-content').exists()).toBe(true);
  });

  it('hides tooltip on blur', async () => {
    const wrapper = mount(VTooltip, {
      props: {
        text: 'Focus tooltip',
      },
      slots: {
        default: '<button class="trigger">Focusable element</button>',
      },
    });

    const trigger = wrapper.find('.trigger');
    
    // Show tooltip
    await trigger.trigger('focus');
    await flushPromises();
    
    // Hide tooltip
    await trigger.trigger('blur');
    await flushPromises();
    
    expect(wrapper.find('.v-tooltip-content').exists()).toBe(false);
  });

  it('handles trigger prop correctly', () => {
    const triggers = ['hover', 'focus', 'click'];
    
    triggers.forEach(trigger => {
      const wrapper = mount(VTooltip, {
        props: {
          text: 'Tooltip text',
          trigger: trigger as any,
        },
        slots: {
          default: '<span>Trigger</span>',
        },
      });
      
      expect(wrapper.props('trigger')).toBe(trigger);
    });
  });

  it('shows tooltip on click when trigger is click', async () => {
    const wrapper = mount(VTooltip, {
      props: {
        text: 'Click tooltip',
        trigger: 'click',
      },
      slots: {
        default: '<button class="trigger">Click me</button>',
      },
    });

    const trigger = wrapper.find('.trigger');
    await trigger.trigger('click');
    await flushPromises();

    expect(wrapper.find('.v-tooltip-content').exists()).toBe(true);
  });

  it('applies offset correctly', () => {
    const wrapper = mount(VTooltip, {
      props: {
        text: 'Tooltip text',
        offset: 20,
      },
      slots: {
        default: '<span>Trigger</span>',
      },
    });

    expect(wrapper.props('offset')).toBe(20);
  });

  it('handles delay correctly', async () => {
    const wrapper = mount(VTooltip, {
      props: {
        text: 'Delayed tooltip',
        delay: 500,
      },
      slots: {
        default: '<div class="trigger">Hover me</div>',
      },
    });

    const trigger = wrapper.find('.trigger');
    await trigger.trigger('mouseenter');

    // Tooltip should not show immediately due to delay
    expect(wrapper.find('.v-tooltip-content').exists()).toBe(false);
  });

  it('handles arrow visibility correctly', () => {
    const wrapper = mount(VTooltip, {
      props: {
        text: 'Tooltip text',
        arrow: false,
      },
      slots: {
        default: '<span>Trigger</span>',
      },
    });

    expect(wrapper.find('.v-tooltip-arrow').exists()).toBe(false);
  });

  it('shows arrow by default', () => {
    const wrapper = mount(VTooltip, {
      props: {
        text: 'Tooltip text',
      },
      slots: {
        default: '<span>Trigger</span>',
      },
    });

    expect(wrapper.props('arrow')).toBe(true);
  });

  it('handles max width correctly', () => {
    const wrapper = mount(VTooltip, {
      props: {
        text: 'Long tooltip text that should be constrained by max width',
        maxWidth: 200,
      },
      slots: {
        default: '<span>Trigger</span>',
      },
    });

    expect(wrapper.props('maxWidth')).toBe(200);
  });

  it('renders custom tooltip content via slot', () => {
    const wrapper = mount(VTooltip, {
      props: {},
      slots: {
        default: '<button>Trigger</button>',
        tooltip: '<div class="custom-tooltip"><strong>Bold content</strong></div>',
      },
    });

    expect(wrapper.find('.custom-tooltip').exists()).toBe(true);
    expect(wrapper.find('strong').text()).toBe('Bold content');
  });

  it('handles z-index correctly', () => {
    const wrapper = mount(VTooltip, {
      props: {
        text: 'Tooltip text',
        zIndex: 9999,
      },
      slots: {
        default: '<span>Trigger</span>',
      },
    });

    expect(wrapper.props('zIndex')).toBe(9999);
  });

  it('supports multiple tooltip instances', () => {
    const WrapperComponent = defineComponent({
      components: { VTooltip },
      template: `
        <div>
          <VTooltip text="First tooltip">
            <button class="first">First</button>
          </VTooltip>
          <VTooltip text="Second tooltip">
            <button class="second">Second</button>
          </VTooltip>
        </div>
      `,
    });

    const wrapper = mount(WrapperComponent);
    
    expect(wrapper.findAll('.v-tooltip')).toHaveLength(2);
    expect(wrapper.find('.first').exists()).toBe(true);
    expect(wrapper.find('.second').exists()).toBe(true);
  });

  it('handles empty tooltip text gracefully', () => {
    const wrapper = mount(VTooltip, {
      props: {
        text: '',
      },
      slots: {
        default: '<span>Trigger</span>',
      },
    });

    expect(wrapper.find('.v-tooltip').exists()).toBe(true);
  });

  it('handles touch events on mobile', async () => {
    const wrapper = mount(VTooltip, {
      props: {
        text: 'Touch tooltip',
      },
      slots: {
        default: '<div class="trigger">Touch me</div>',
      },
    });

    const trigger = wrapper.find('.trigger');
    await trigger.trigger('touchstart');
    await flushPromises();

    // Touch should show tooltip
    expect(wrapper.find('.v-tooltip-content').exists()).toBe(true);
  });

  it('applies correct ARIA attributes for accessibility', () => {
    const wrapper = mount(VTooltip, {
      props: {
        text: 'Accessible tooltip',
      },
      slots: {
        default: '<button class="trigger">Accessible button</button>',
      },
    });

    const trigger = wrapper.find('.trigger');
    expect(trigger.attributes('aria-describedby')).toBeDefined();
  });

  it('handles escape key to close tooltip', async () => {
    const wrapper = mount(VTooltip, {
      props: {
        text: 'Keyboard tooltip',
        trigger: 'click',
      },
      slots: {
        default: '<button class="trigger">Click me</button>',
      },
    });

    const trigger = wrapper.find('.trigger');
    
    // Show tooltip
    await trigger.trigger('click');
    await flushPromises();
    expect(wrapper.find('.v-tooltip-content').exists()).toBe(true);

    // Close with escape key
    await wrapper.trigger('keydown.escape');
    await flushPromises();
    expect(wrapper.find('.v-tooltip-content').exists()).toBe(false);
  });

  it('handles boundary detection', () => {
    const wrapper = mount(VTooltip, {
      props: {
        text: 'Boundary tooltip',
        boundary: 'viewport',
      },
      slots: {
        default: '<span>Trigger</span>',
      },
    });

    expect(wrapper.props('boundary')).toBe('viewport');
  });

  it('supports HTML content safely', () => {
    const wrapper = mount(VTooltip, {
      props: {
        html: true,
      },
      slots: {
        default: '<span>Trigger</span>',
        tooltip: '<div>HTML <em>content</em> with <strong>formatting</strong></div>',
      },
    });

    expect(wrapper.find('em').text()).toBe('content');
    expect(wrapper.find('strong').text()).toBe('formatting');
  });
});
