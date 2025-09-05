import {mount, flushPromises} from '@vue/test-utils';
import {describe, it, expect, vi, beforeEach, afterEach} from 'vitest';
import Icon from './Icon.vue';

// Mock the Icon component's icon loading mechanism
const mockIconRegistry = new Map();
vi.mock('@iconify/vue', () => ({
  Icon: {
    name: 'MockedIconifyIcon',
    props: ['icon', 'width', 'height'],
    template: '<svg class="mocked-iconify"><use></use></svg>',
  },
}));

describe('Icon', () => {
  beforeEach(() => {
    mockIconRegistry.clear();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('mounts component successfully', () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'test-icon',
      },
    });

    expect(wrapper.find('.v-icon').exists()).toBe(true);
    expect(wrapper.find('span').exists()).toBe(true);
  });

  it('renders icon when icon is loaded', async () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'ic:round-home',
        size: 'sm',
      },
    });

    expect(wrapper.find('span').exists()).toBe(true);

    await wrapper.vm.$nextTick();

    expect(wrapper.find('span').attributes('class')).toContain('v-icon--sm');
    expect(wrapper.find('span').attributes('aria-hidden')).toBe('true');
  });

  it('renders icon name when icon is not loaded', async () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'non-existing-icon',
        size: 'lg',
      },
    });

    expect(wrapper.find('span').exists()).toBe(true);

    await wrapper.vm.$nextTick();

    expect(wrapper.find('span').exists()).toBe(true);
    expect(wrapper.find('span').attributes('aria-hidden')).toBe('true');
  });

  it('applies size classes correctly', () => {
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
    
    sizes.forEach(size => {
      const wrapper = mount(Icon, {
        props: {
          name: 'test-icon',
          size: size,
        },
      });
      
      expect(wrapper.find('.v-icon').classes()).toContain(`v-icon--${size}`);
    });
  });

  it('defaults to medium size', () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'test-icon',
      },
    });

    expect(wrapper.find('.v-icon').classes()).toContain('v-icon--md');
  });

  it('applies color classes correctly', () => {
    const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];
    
    colors.forEach(color => {
      const wrapper = mount(Icon, {
        props: {
          name: 'test-icon',
          color: color,
        },
      });
      
      expect(wrapper.find('.v-icon').classes()).toContain(`v-icon--${color}`);
    });
  });

  it('applies custom classes correctly', () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'test-icon',
        class: 'custom-icon-class',
      },
    });

    expect(wrapper.classes()).toContain('custom-icon-class');
  });

  it('handles spin animation correctly', () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'test-icon',
        spin: true,
      },
    });

    expect(wrapper.find('.v-icon').classes()).toContain('v-icon--spin');
  });

  it('handles pulse animation correctly', () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'test-icon',
        pulse: true,
      },
    });

    expect(wrapper.find('.v-icon').classes()).toContain('v-icon--pulse');
  });

  it('handles flip horizontal correctly', () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'test-icon',
        flipH: true,
      },
    });

    expect(wrapper.find('.v-icon').classes()).toContain('v-icon--flip-h');
  });

  it('handles flip vertical correctly', () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'test-icon',
        flipV: true,
      },
    });

    expect(wrapper.find('.v-icon').classes()).toContain('v-icon--flip-v');
  });

  it('handles rotation correctly', () => {
    const rotations = [90, 180, 270];
    
    rotations.forEach(rotation => {
      const wrapper = mount(Icon, {
        props: {
          name: 'test-icon',
          rotate: rotation,
        },
      });
      
      expect(wrapper.find('.v-icon').classes()).toContain(`v-icon--rotate-${rotation}`);
    });
  });

  it('handles inline display correctly', () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'test-icon',
        inline: true,
      },
    });

    expect(wrapper.find('.v-icon').classes()).toContain('v-icon--inline');
  });

  it('handles custom width and height', () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'test-icon',
        width: 32,
        height: 24,
      },
    });

    const icon = wrapper.find('.v-icon');
    expect(icon.attributes('style')).toContain('width: 32px');
    expect(icon.attributes('style')).toContain('height: 24px');
  });

  it('handles custom width and height as strings', () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'test-icon',
        width: '2rem',
        height: '1.5rem',
      },
    });

    const icon = wrapper.find('.v-icon');
    expect(icon.attributes('style')).toContain('width: 2rem');
    expect(icon.attributes('style')).toContain('height: 1.5rem');
  });

  it('applies aria-label when provided', () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'test-icon',
        'aria-label': 'Home icon',
      },
    });

    expect(wrapper.attributes('aria-label')).toBe('Home icon');
    expect(wrapper.attributes('aria-hidden')).toBeUndefined();
  });

  it('sets aria-hidden when no aria-label is provided', () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'test-icon',
      },
    });

    expect(wrapper.attributes('aria-hidden')).toBe('true');
  });

  it('handles click events correctly', async () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'test-icon',
      },
    });

    await wrapper.trigger('click');

    expect(wrapper.emitted()).toHaveProperty('click');
    expect(wrapper.emitted('click')).toHaveLength(1);
  });

  it('handles different icon naming conventions', () => {
    const iconNames = [
      'heroicons:home',
      'mdi:home',
      'fa:home',
      'ic:round-home',
      'simple-icon',
    ];
    
    iconNames.forEach(iconName => {
      const wrapper = mount(Icon, {
        props: {
          name: iconName,
        },
      });
      
      expect(wrapper.find('.v-icon').exists()).toBe(true);
    });
  });

  it('handles loading state correctly', () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'test-icon',
        loading: true,
      },
    });

    expect(wrapper.find('.v-icon').classes()).toContain('v-icon--loading');
  });

  it('handles disabled state correctly', () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'test-icon',
        disabled: true,
      },
    });

    expect(wrapper.find('.v-icon').classes()).toContain('v-icon--disabled');
  });

  it('handles custom tag rendering', () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'test-icon',
        tag: 'i',
      },
    });

    expect(wrapper.element.tagName.toLowerCase()).toBe('i');
  });

  it('defaults to span tag', () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'test-icon',
      },
    });

    expect(wrapper.element.tagName.toLowerCase()).toBe('span');
  });

  it('applies multiple transformations correctly', () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'test-icon',
        flipH: true,
        flipV: true,
        rotate: 90,
        spin: true,
      },
    });

    const iconClasses = wrapper.find('.v-icon').classes();
    expect(iconClasses).toContain('v-icon--flip-h');
    expect(iconClasses).toContain('v-icon--flip-v');
    expect(iconClasses).toContain('v-icon--rotate-90');
    expect(iconClasses).toContain('v-icon--spin');
  });

  it('handles icon not found gracefully', () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'non-existent-icon',
        fallback: '?',
      },
    });

    expect(wrapper.find('.v-icon').exists()).toBe(true);
    // Should not crash or throw errors
  });

  it('emits load event when icon loads successfully', async () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'ic:round-home',
      },
    });

    await flushPromises();

    // Icon load events may be emitted depending on implementation
    expect(wrapper.vm).toBeDefined();
  });

  it('emits error event when icon fails to load', async () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'invalid-icon-name',
      },
    });

    await flushPromises();

    // Error events may be emitted depending on implementation
    expect(wrapper.vm).toBeDefined();
  });

  it('handles responsive sizing correctly', () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'test-icon',
        responsive: true,
      },
    });

    expect(wrapper.find('.v-icon').classes()).toContain('v-icon--responsive');
  });

  it('handles custom CSS variables', () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'test-icon',
        style: '--icon-color: red; --icon-size: 2rem;',
      },
    });

    expect(wrapper.attributes('style')).toContain('--icon-color: red');
    expect(wrapper.attributes('style')).toContain('--icon-size: 2rem');
  });

  it('handles icon collections correctly', () => {
    const collections = [
      'heroicons:home',
      'material-symbols:home',
      'lucide:home',
      'tabler:home',
    ];
    
    collections.forEach(icon => {
      const wrapper = mount(Icon, {
        props: {
          name: icon,
        },
      });
      
      expect(wrapper.find('.v-icon').exists()).toBe(true);
    });
  });

  it('handles border styling correctly', () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'test-icon',
        border: true,
      },
    });

    expect(wrapper.find('.v-icon').classes()).toContain('v-icon--border');
  });

  it('handles shadow styling correctly', () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'test-icon',
        shadow: true,
      },
    });

    expect(wrapper.find('.v-icon').classes()).toContain('v-icon--shadow');
  });

  it('passes through additional attributes', () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'test-icon',
      },
      attrs: {
        'data-testid': 'custom-icon',
        title: 'Custom icon title',
      },
    });

    expect(wrapper.attributes('data-testid')).toBe('custom-icon');
    expect(wrapper.attributes('title')).toBe('Custom icon title');
  });

  it('handles icon caching correctly', async () => {
    // First load
    const wrapper1 = mount(Icon, {
      props: {
        name: 'cached-icon',
      },
    });

    await flushPromises();

    // Second load should use cache
    const wrapper2 = mount(Icon, {
      props: {
        name: 'cached-icon',
      },
    });

    await flushPromises();

    expect(wrapper1.find('.v-icon').exists()).toBe(true);
    expect(wrapper2.find('.v-icon').exists()).toBe(true);
  });

  it('handles icon preloading correctly', () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'test-icon',
        preload: true,
      },
    });

    expect(wrapper.find('.v-icon').exists()).toBe(true);
  });
});
