import {mount} from '@vue/test-utils';
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

describe('VCard', () => {
  it('renders title correctly', () => {
    const wrapper = mount(VCard, {
      props: {
        title: 'My Card',
      },
    });
    expect(wrapper.find('.card-title').text()).toBe('My Card');
  });

  it('applies default header class', () => {
    const wrapper = mount(VCard);
    expect(wrapper.find('.card-header').exists()).toBe(true);
  });

  it('hides header', () => {
    const wrapper = mount(VCard, {
      props: {
        hideHeader: true,
      },
    });
    expect(wrapper.find('.card-header').exists()).toBe(false);
  });

  it('applies custom header class', () => {
    const wrapper = mount(VCard, {
      props: {
        headerClass: 'my-header',
      },
    });
    expect(wrapper.find('.card-header').classes('my-header')).toBe(true);
  });

  it('applies default body class', () => {
    const wrapper = mount(VCard);
    expect(wrapper.find('.card-body').exists()).toBe(true);
  });

  it('applies custom body class', () => {
    const wrapper = mount(VCard, {
      props: {
        bodyClass: 'my-body',
      },
    });
    expect(wrapper.find('.card-body').classes('my-body')).toBe(true);
  });

  it('hides footer', () => {
    const wrapper = mount(VCard, {
      props: {
        hideFooter: true,
      },
    });
    expect(wrapper.find('.card-footer').exists()).toBe(false);
  });

  it('applies custom footer class', () => {
    const wrapper = mount(VCard, {
      props: {
        footerClass: 'my-footer',
      },
    });
    expect(wrapper.find('.card-footer').classes('my-footer')).toBe(true);
  });

  it('applies shadow class', () => {
    const wrapper = mount(VCard, {
      props: {
        shadow: 'md',
      },
    });
    expect(wrapper.classes('card--shadow-md')).toBe(true);
  });

  it('applies flat class', () => {
    const wrapper = mount(VCard, {
      props: {
        flat: true,
      },
    });
    expect(wrapper.classes('card--shadow-none')).toBe(true);
  });

  it('applies bordered class', () => {
    const wrapper = mount(VCard, {
      props: {
        bordered: true,
      },
    });
    expect(wrapper.classes('card--bordered')).toBe(true);
  });

  it('applies color class', () => {
    const wrapper = mount(VCard, {
      props: {
        color: 'primary',
      },
    });
    expect(wrapper.classes('card-primary')).toBe(true);
  });

  it('renders router-link when "to" prop is provided', () => {
    const wrapper = mount(VCard, {
      props: {
        to: '/my-route',
      },
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.findComponent({name: 'router-link'}).exists()).toBe(true);
  });

  it('renders div when "to" prop is not provided', () => {
    const wrapper = mount(VCard);
    expect(wrapper.find('div').exists()).toBe(true);
  });
});
