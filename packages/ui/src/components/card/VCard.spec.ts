import {mount} from '@vue/test-utils';
import {describe, it, expect, vi} from 'vitest';
import VCard from './VCard.vue';
import {createRouter, createWebHistory} from 'vue-router';

const routes = [
  {path: '/', component: {template: `Home`}},
  {path: '/about', component: {template: 'About'}},
  {path: '/contact', component: {template: 'Contact'}},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Mock VCardImage component
const mockVCardImage = {
  name: 'VCardImage',
  template: '<img class="card-image" :src="src" :alt="alt" :class="$attrs.class" />',
  props: ['src', 'alt', 'class']
};

const defaultGlobal = {
  stubs: {
    VCardImage: mockVCardImage,
    RouterLink: true,
    NuxtLink: true
  }
};

describe('VCard', () => {
  it('renders basic card structure', () => {
    const wrapper = mount(VCard, {
      global: defaultGlobal
    });
    
    expect(wrapper.classes()).toContain('card');
    expect(wrapper.classes()).toContain('card-default');
    expect(wrapper.find('.card-header').exists()).toBe(true);
    expect(wrapper.find('.card-body').exists()).toBe(true);
    expect(wrapper.find('.card-footer').exists()).toBe(true);
  });

  it('renders title correctly', () => {
    const wrapper = mount(VCard, {
      global: defaultGlobal,
      props: {
        title: 'My Card',
      },
    });
    
    expect(wrapper.find('.card-title').text()).toBe('My Card');
  });

  it('applies default header class', () => {
    const wrapper = mount(VCard, {
      global: defaultGlobal
    });
    
    expect(wrapper.find('.card-header').exists()).toBe(true);
  });

  it('hides header when hideHeader is true', () => {
    const wrapper = mount(VCard, {
      global: defaultGlobal,
      props: {
        hideHeader: true,
      },
    });
    
    expect(wrapper.find('.card-header').exists()).toBe(false);
  });

  it('applies custom header class', () => {
    const wrapper = mount(VCard, {
      global: defaultGlobal,
      props: {
        headerClass: 'my-header',
      },
    });
    
    expect(wrapper.find('.card-header').classes()).toContain('my-header');
  });

  it('applies default body class', () => {
    const wrapper = mount(VCard, {
      global: defaultGlobal
    });
    
    expect(wrapper.find('.card-body').exists()).toBe(true);
  });

  it('applies custom body class', () => {
    const wrapper = mount(VCard, {
      global: defaultGlobal,
      props: {
        bodyClass: 'my-body',
      },
    });
    
    expect(wrapper.find('.card-body').classes()).toContain('my-body');
  });

  it('hides footer when hideFooter is true', () => {
    const wrapper = mount(VCard, {
      global: defaultGlobal,
      props: {
        hideFooter: true,
      },
    });
    
    expect(wrapper.find('.card-footer').exists()).toBe(false);
  });

  it('applies custom footer class', () => {
    const wrapper = mount(VCard, {
      global: defaultGlobal,
      props: {
        footerClass: 'my-footer',
      },
    });
    
    expect(wrapper.find('.card-footer').classes()).toContain('my-footer');
  });

  describe('shadow classes', () => {
    it('applies default shadow class when shadow is true', () => {
      const wrapper = mount(VCard, {
        global: defaultGlobal,
        props: {
          shadow: true,
        },
      });
      
      expect(wrapper.classes()).toContain('card--shadow');
    });

    it('applies specific shadow class when shadow is string', () => {
      const wrapper = mount(VCard, {
        global: defaultGlobal,
        props: {
          shadow: 'md',
        },
      });
      
      expect(wrapper.classes()).toContain('card--shadow-md');
    });

    it('applies flat/no shadow class when flat is true', () => {
      const wrapper = mount(VCard, {
        global: defaultGlobal,
        props: {
          flat: true,
        },
      });
      
      expect(wrapper.classes()).toContain('card--shadow-none');
    });

    it('applies flat class even when shadow prop is also provided', () => {
      const wrapper = mount(VCard, {
        global: defaultGlobal,
        props: {
          flat: true,
          shadow: 'lg',
        },
      });
      
      expect(wrapper.classes()).toContain('card--shadow-none');
      expect(wrapper.classes()).not.toContain('card--shadow-lg');
    });

    it('applies different shadow sizes correctly', () => {
      const shadowSizes = ['sm', 'md', 'lg', 'xl', '2xl', 'inner', 'none'];
      
      shadowSizes.forEach(size => {
        const wrapper = mount(VCard, {
          global: defaultGlobal,
          props: {
            shadow: size,
          },
        });
        
        expect(wrapper.classes()).toContain(`card--shadow-${size}`);
      });
    });
  });

  describe('border functionality', () => {
    it('applies bordered class when bordered is true', () => {
      const wrapper = mount(VCard, {
        global: defaultGlobal,
        props: {
          bordered: true,
        },
      });
      
      expect(wrapper.classes()).toContain('card--bordered');
    });

    it('applies border position classes correctly', () => {
      const positions = ['top', 'left', 'bottom', 'right'] as const;
      
      positions.forEach(position => {
        const wrapper = mount(VCard, {
          global: defaultGlobal,
          props: {
            bordered: true,
            borderPosition: position,
          },
        });
        
        expect(wrapper.classes()).toContain(`card--bordered-${position}`);
      });
    });

    it('defaults to top border position', () => {
      const wrapper = mount(VCard, {
        global: defaultGlobal,
        props: {
          bordered: true,
        },
      });
      
      expect(wrapper.classes()).toContain('card--bordered-top');
    });
  });

  describe('color variants', () => {
    it('applies color class correctly', () => {
      const wrapper = mount(VCard, {
        global: defaultGlobal,
        props: {
          color: 'primary',
        },
      });
      
      expect(wrapper.classes()).toContain('card-primary');
    });

    it('defaults to default color', () => {
      const wrapper = mount(VCard, {
        global: defaultGlobal
      });
      
      expect(wrapper.classes()).toContain('card-default');
    });

    it('applies different color variants correctly', () => {
      const colors = ['primary', 'secondary', 'success', 'warning', 'error'];
      
      colors.forEach(color => {
        const wrapper = mount(VCard, {
          global: defaultGlobal,
          props: {
            color,
          },
        });
        
        expect(wrapper.classes()).toContain(`card-${color}`);
      });
    });
  });

  describe('custom classes', () => {
    it('applies custom wrapper classes', () => {
      const wrapper = mount(VCard, {
        global: defaultGlobal,
        props: {
          wrapperClass: 'custom-wrapper',
          defaultWrapperClass: 'default-wrapper',
        },
      });
      
      expect(wrapper.classes()).toContain('custom-wrapper');
      expect(wrapper.classes()).toContain('default-wrapper');
    });

    it('applies custom default classes for different sections', () => {
      const wrapper = mount(VCard, {
        global: defaultGlobal,
        props: {
          defaultHeaderClass: 'custom-default-header',
          defaultBodyClass: 'custom-default-body',
          defaultFooterClass: 'custom-default-footer',
        },
      });
      
      expect(wrapper.find('.custom-default-header').exists()).toBe(true);
      expect(wrapper.find('.custom-default-body').exists()).toBe(true);
      expect(wrapper.find('.custom-default-footer').exists()).toBe(true);
    });
  });

  describe('navigation and links', () => {
    it('renders router-link when "to" prop is provided', () => {
      const wrapper = mount(VCard, {
        global: {
          ...defaultGlobal,
          plugins: [router],
        },
        props: {
          to: '/my-route',
        },
      });
      
      expect(wrapper.findComponent({name: 'router-link'}).exists()).toBe(true);
    });

    it('renders NuxtLink when "to" prop and nuxt flag are provided', () => {
      const wrapper = mount(VCard, {
        global: defaultGlobal,
        props: {
          to: '/my-route',
          nuxt: true,
        },
      });
      
      expect(wrapper.findComponent({name: 'NuxtLink'}).exists()).toBe(true);
    });

    it('renders anchor tag when "href" prop is provided', () => {
      const wrapper = mount(VCard, {
        global: defaultGlobal,
        props: {
          href: 'https://example.com',
        },
      });
      
      expect(wrapper.element.tagName).toBe('A');
      expect(wrapper.attributes('href')).toBe('https://example.com');
    });

    it('applies target and rel attributes for external links', () => {
      const wrapper = mount(VCard, {
        global: defaultGlobal,
        props: {
          href: 'https://example.com',
          target: '_blank',
          rel: 'noopener',
        },
      });
      
      expect(wrapper.attributes('target')).toBe('_blank');
      expect(wrapper.attributes('rel')).toBe('noopener');
    });

    it('renders custom tag when "as" prop is provided', () => {
      const wrapper = mount(VCard, {
        global: defaultGlobal,
        props: {
          as: 'section',
        },
      });
      
      expect(wrapper.element.tagName).toBe('SECTION');
    });

    it('renders div when no navigation props provided', () => {
      const wrapper = mount(VCard, {
        global: defaultGlobal
      });
      
      expect(wrapper.element.tagName).toBe('DIV');
    });
  });

  describe('image functionality', () => {
    it('renders image when image prop is provided', () => {
      const wrapper = mount(VCard, {
        global: defaultGlobal,
        props: {
          image: '/path/to/image.jpg',
          imageAlt: 'Card image',
          imageClass: 'custom-image-class',
        },
      });
      
      const cardImage = wrapper.findComponent(mockVCardImage);
      expect(cardImage.exists()).toBe(true);
      expect(cardImage.props('src')).toBe('/path/to/image.jpg');
      expect(cardImage.props('alt')).toBe('Card image');
      expect(cardImage.classes()).toContain('custom-image-class');
    });

    it('does not render image when image prop is not provided', () => {
      const wrapper = mount(VCard, {
        global: defaultGlobal
      });
      
      expect(wrapper.findComponent(mockVCardImage).exists()).toBe(false);
    });
  });

  describe('bodyless functionality', () => {
    it('renders content directly when bodyless is true', () => {
      const wrapper = mount(VCard, {
        global: defaultGlobal,
        props: {
          bodyless: true,
        },
        slots: {
          default: '<p class="direct-content">Direct content</p>',
        },
      });
      
      expect(wrapper.find('.card-body').exists()).toBe(false);
      expect(wrapper.find('.direct-content').exists()).toBe(true);
    });

    it('wraps content in body when bodyless is false', () => {
      const wrapper = mount(VCard, {
        global: defaultGlobal,
        props: {
          bodyless: false,
        },
        slots: {
          default: '<p class="wrapped-content">Wrapped content</p>',
        },
      });
      
      expect(wrapper.find('.card-body').exists()).toBe(true);
      expect(wrapper.find('.card-body .wrapped-content').exists()).toBe(true);
    });
  });

  describe('slots', () => {
    it('renders default slot content in body', () => {
      const content = '<p class="slot-content">Slot content</p>';
      const wrapper = mount(VCard, {
        global: defaultGlobal,
        slots: {
          default: content,
        },
      });
      
      expect(wrapper.find('.card-body .slot-content').text()).toBe('Slot content');
    });

    it('renders header slot content', () => {
      const wrapper = mount(VCard, {
        global: defaultGlobal,
        slots: {
          header: '<h2 class="custom-header-content">Custom Header</h2>',
        },
      });
      
      expect(wrapper.find('.custom-header-content').text()).toBe('Custom Header');
    });

    it('renders footer slot content', () => {
      const wrapper = mount(VCard, {
        global: defaultGlobal,
        slots: {
          footer: '<div class="custom-footer-content">Custom Footer</div>',
        },
      });
      
      expect(wrapper.find('.custom-footer-content').text()).toBe('Custom Footer');
    });

    it('renders header prepend and append slots', () => {
      const wrapper = mount(VCard, {
        global: defaultGlobal,
        slots: {
          'header.prepend': '<span class="header-prepend">Prepend</span>',
          'header.append': '<span class="header-append">Append</span>',
        },
      });
      
      expect(wrapper.find('.header-prepend').text()).toBe('Prepend');
      expect(wrapper.find('.header-append').text()).toBe('Append');
    });

    it('renders custom image slot', () => {
      const wrapper = mount(VCard, {
        global: defaultGlobal,
        props: {
          image: '/test-image.jpg',
          imageAlt: 'Test Alt',
          imageClass: 'test-class',
        },
        slots: {
          image: '<div class="custom-image">Custom Image</div>',
        },
      });
      
      expect(wrapper.find('.custom-image').text()).toBe('Custom Image');
      expect(wrapper.findComponent(mockVCardImage).exists()).toBe(false);
    });
  });

  describe('attributes inheritance', () => {
    it('passes through additional attributes', () => {
      const wrapper = mount(VCard, {
        global: defaultGlobal,
        attrs: {
          'data-testid': 'test-card',
          'aria-label': 'Test card',
        },
      });
      
      expect(wrapper.attributes('data-testid')).toBe('test-card');
      expect(wrapper.attributes('aria-label')).toBe('Test card');
    });

    it('merges navigation attributes correctly', () => {
      const wrapper = mount(VCard, {
        global: defaultGlobal,
        props: {
          to: '/test-route',
        },
        attrs: {
          'data-custom': 'custom-value',
        },
      });
      
      expect(wrapper.attributes('data-custom')).toBe('custom-value');
    });
  });

  describe('slot props', () => {
    it('provides title to header slot', () => {
      const headerSlotSpy = vi.fn().mockReturnValue('<h2>Custom Header</h2>');
      
      mount(VCard, {
        global: defaultGlobal,
        props: {
          title: 'Test Title',
        },
        slots: {
          header: headerSlotSpy,
        },
      });
      
      expect(headerSlotSpy).toHaveBeenCalledWith({ title: 'Test Title' });
    });

    it('provides image props to image slot', () => {
      const imageSlotSpy = vi.fn().mockReturnValue('<div>Custom Image</div>');
      
      mount(VCard, {
        global: defaultGlobal,
        props: {
          image: '/test.jpg',
          imageAlt: 'Test Alt',
          imageClass: 'test-class',
        },
        slots: {
          image: imageSlotSpy,
        },
      });
      
      expect(imageSlotSpy).toHaveBeenCalledWith({
        image: '/test.jpg',
        alt: 'Test Alt',
        imageClass: 'test-class',
      });
    });
  });
});
