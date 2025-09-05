import {mount} from '@vue/test-utils';
import {describe, it, expect} from 'vitest';
import VBtn from './VBtn.vue';

describe('VBtn', () => {
  // Mock VIcon component
  const mockVIcon = {
    name: 'VIcon',
    template: '<span class="btn-icon"><slot /></span>',
    props: ['name', 'size', 'class']
  };

  const defaultGlobal = {
    stubs: {
      VIcon: mockVIcon,
      RouterLink: true
    }
  };

  it('renders button text when passed', () => {
    const wrapper = mount(VBtn, {
      global: defaultGlobal,
      props: {
        text: true,
      },
      slots: {
        default: 'Click me',
      },
    });

    expect(wrapper.text()).toMatch('Click me');
  });

  it('emits click event when clicked', async () => {
    const wrapper = mount(VBtn, {
      global: defaultGlobal
    });

    await wrapper.trigger('click');

    expect(wrapper.emitted('click')).toHaveLength(1);
  });

  it('disables the button when passed the disabled prop', async () => {
    const wrapper = mount(VBtn, {
      global: defaultGlobal,
      props: {
        disabled: true,
      },
    });

    expect(wrapper.attributes('disabled')).toBeDefined();
    expect(wrapper.attributes('aria-disabled')).toBe('true');

    await wrapper.trigger('click');

    expect(wrapper.emitted('click')).toBeUndefined();
  });

  it('render router link when to props provided', () => {
    const wrapper = mount(VBtn, {
      global: defaultGlobal,
      props: {
        to: '/some-link'
      }
    });

    expect(wrapper.html()).toContain('router-link');
  });

  it('render a tag when href props provided', () => {
    const HREF = 'https://google.com';

    const wrapper = mount(VBtn, {
      global: defaultGlobal,
      props: {
        href: HREF
      }
    });

    expect(wrapper.attributes('href')).toEqual(HREF);
  });

  it('applies color classes correctly', () => {
    const wrapper = mount(VBtn, {
      global: defaultGlobal,
      props: {
        color: 'primary'
      }
    });

    expect(wrapper.classes()).toContain('btn-primary');
  });

  it('applies size classes correctly', () => {
    const wrapper = mount(VBtn, {
      global: defaultGlobal,
      props: {
        size: 'lg'
      }
    });

    expect(wrapper.classes()).toContain('btn--lg');
  });

  it('applies variant classes correctly', () => {
    const wrapper = mount(VBtn, {
      global: defaultGlobal,
      props: {
        outlined: true
      }
    });

    expect(wrapper.classes()).toContain('btn--outlined');
  });

  it('applies text variant correctly', () => {
    const wrapper = mount(VBtn, {
      global: defaultGlobal,
      props: {
        text: true
      }
    });

    expect(wrapper.classes()).toContain('btn--text');
  });

  it('applies soft variant correctly', () => {
    const wrapper = mount(VBtn, {
      global: defaultGlobal,
      props: {
        soft: true
      }
    });

    expect(wrapper.classes()).toContain('btn--soft');
  });

  it('applies rounded classes correctly', () => {
    const wrapper = mount(VBtn, {
      global: defaultGlobal,
      props: {
        rounded: true
      }
    });

    expect(wrapper.classes()).toContain('btn--rounded');
  });

  it('applies tile classes correctly', () => {
    const wrapper = mount(VBtn, {
      global: defaultGlobal,
      props: {
        tile: true
      }
    });

    expect(wrapper.classes()).toContain('btn--tile');
  });

  it('applies block classes correctly', () => {
    const wrapper = mount(VBtn, {
      global: defaultGlobal,
      props: {
        block: true
      }
    });

    expect(wrapper.classes()).toContain('btn--block');
  });

  it('applies shadow classes correctly', () => {
    const wrapper = mount(VBtn, {
      global: defaultGlobal,
      props: {
        shadow: true
      }
    });

    expect(wrapper.classes()).toContain('btn--shadow');
  });

  it('applies fab classes correctly', () => {
    const wrapper = mount(VBtn, {
      global: defaultGlobal,
      props: {
        fab: true
      }
    });

    expect(wrapper.classes()).toContain('btn--fab');
  });

  it('applies flush classes correctly', () => {
    const wrapper = mount(VBtn, {
      global: defaultGlobal,
      props: {
        flush: true
      }
    });

    expect(wrapper.classes()).toContain('btn--flush');
  });

  it('renders loading state correctly', () => {
    const wrapper = mount(VBtn, {
      global: defaultGlobal,
      props: {
        loading: true
      }
    });

    expect(wrapper.classes()).toContain('btn--loading');
    expect(wrapper.find('.btn-icon')).toBeTruthy();
  });

  it('renders prefix icon correctly', () => {
    const wrapper = mount(VBtn, {
      global: defaultGlobal,
      props: {
        prefixIcon: 'home'
      }
    });

    const icon = wrapper.findComponent(mockVIcon);
    expect(icon.exists()).toBe(true);
    expect(icon.props('name')).toBe('home');
  });

  it('renders suffix icon correctly', () => {
    const wrapper = mount(VBtn, {
      global: defaultGlobal,
      props: {
        suffixIcon: 'arrow-right'
      },
      slots: {
        default: 'Button Text'
      }
    });

    const icons = wrapper.findAllComponents(mockVIcon);
    expect(icons).toHaveLength(1);
    expect(icons[0].props('name')).toBe('arrow-right');
  });

  it('renders both prefix and suffix icons correctly', () => {
    const wrapper = mount(VBtn, {
      global: defaultGlobal,
      props: {
        prefixIcon: 'home',
        suffixIcon: 'arrow-right'
      },
      slots: {
        default: 'Button Text'
      }
    });

    const icons = wrapper.findAllComponents(mockVIcon);
    expect(icons).toHaveLength(2);
    expect(icons[0].props('name')).toBe('home');
    expect(icons[1].props('name')).toBe('arrow-right');
  });

  it('renders loading icon instead of prefix icon when loading', () => {
    const wrapper = mount(VBtn, {
      global: defaultGlobal,
      props: {
        prefixIcon: 'home',
        loading: true,
        loadingIcon: 'spinner'
      }
    });

    const icon = wrapper.findComponent(mockVIcon);
    expect(icon.props('name')).toBe('spinner');
  });

  it('renders as button type by default', () => {
    const wrapper = mount(VBtn, {
      global: defaultGlobal
    });
    
    expect(wrapper.element.tagName).toBe('BUTTON');
  });

  it('sets button type correctly', () => {
    const wrapper = mount(VBtn, {
      global: defaultGlobal,
      props: {
        type: 'submit'
      }
    });

    expect(wrapper.attributes('type')).toBe('submit');
  });

  it('opens in new tab when newTab prop is true', () => {
    const wrapper = mount(VBtn, {
      global: defaultGlobal,
      props: {
        href: 'https://example.com',
        newTab: true
      }
    });

    expect(wrapper.attributes('target')).toBe('_blank');
    expect(wrapper.attributes('rel')).toBe('noopener');
  });

  it('applies focus ring classes correctly', () => {
    const wrapper = mount(VBtn, {
      global: defaultGlobal,
      props: {
        color: 'primary'
      }
    });

    expect(wrapper.classes().join(' ')).toContain('focus:ring-primary-500');
  });

  it('removes focus ring when noRing is true', () => {
    const wrapper = mount(VBtn, {
      global: defaultGlobal,
      props: {
        noRing: true,
        color: 'primary'
      }
    });

    expect(wrapper.classes().join(' ')).not.toContain('focus:ring-primary-500');
  });

  it('uses default size when not specified', () => {
    const wrapper = mount(VBtn, {
      global: defaultGlobal
    });

    expect(wrapper.classes()).toContain('btn--md');
  });

  it('uses default color when not specified', () => {
    const wrapper = mount(VBtn, {
      global: defaultGlobal
    });

    expect(wrapper.classes()).toContain('btn-default');
  });

  it('passes through additional attributes', () => {
    const wrapper = mount(VBtn, {
      global: defaultGlobal,
      attrs: {
        'data-testid': 'test-button',
        'aria-label': 'Custom button'
      }
    });

    expect(wrapper.attributes('data-testid')).toBe('test-button');
    expect(wrapper.attributes('aria-label')).toBe('Custom button');
  });

  it('renders prefix slot content', () => {
    const wrapper = mount(VBtn, {
      global: defaultGlobal,
      slots: {
        prefix: '<span class="custom-prefix">Prefix</span>',
        default: 'Button Text'
      }
    });

    expect(wrapper.find('.custom-prefix').text()).toBe('Prefix');
  });

  it('renders suffix slot content', () => {
    const wrapper = mount(VBtn, {
      global: defaultGlobal,
      slots: {
        suffix: '<span class="custom-suffix">Suffix</span>',
        default: 'Button Text'
      }
    });

    expect(wrapper.find('.custom-suffix').text()).toBe('Suffix');
  });

  it('applies loading class to icon when loading', () => {
    const wrapper = mount(VBtn, {
      global: defaultGlobal,
      props: {
        loading: true,
        loadingClass: 'animate-spin'
      }
    });

    const icon = wrapper.findComponent(mockVIcon);
    expect(icon.classes()).toContain('animate-spin');
  });

  it('applies prefixIconClass correctly', () => {
    const wrapper = mount(VBtn, {
      global: defaultGlobal,
      props: {
        prefixIcon: 'home',
        prefixIconClass: 'custom-prefix-class'
      }
    });

    const icon = wrapper.findComponent(mockVIcon);
    expect(icon.classes()).toContain('custom-prefix-class');
  });

  it('applies suffixIconClass correctly', () => {
    const wrapper = mount(VBtn, {
      global: defaultGlobal,
      props: {
        suffixIcon: 'arrow-right',
        suffixIconClass: 'custom-suffix-class'
      }
    });

    const icon = wrapper.findComponent(mockVIcon);
    expect(icon.classes()).toContain('custom-suffix-class');
  });

  it('sets icon size correctly for prefix icon', () => {
    const wrapper = mount(VBtn, {
      global: defaultGlobal,
      props: {
        prefixIcon: 'home',
        prefixIconSize: 'lg'
      }
    });

    const icon = wrapper.findComponent(mockVIcon);
    expect(icon.props('size')).toBe('lg');
  });

  it('sets icon size correctly for suffix icon', () => {
    const wrapper = mount(VBtn, {
      global: defaultGlobal,
      props: {
        suffixIcon: 'arrow-right',
        suffixIconSize: 'lg'
      }
    });

    const icon = wrapper.findComponent(mockVIcon);
    expect(icon.props('size')).toBe('lg');
  });
});
