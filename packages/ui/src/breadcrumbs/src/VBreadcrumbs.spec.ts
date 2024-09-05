import {mount} from '@vue/test-utils';
import VBreadcrumbs from './VBreadcrumbs.vue';
import VBreadcrumbsItem from './VBreadcrumbsItem.vue';
import VBreadcrumbsDivider from './VBreadcrumbsDivider.vue';
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

describe('VBreadcrumbs', () => {
  it('renders the correct number of breadcrumbs items and dividers', () => {
    const items = [
      {text: 'Home', to: '/'},
      {text: 'About', to: '/about'},
      {text: 'Contact', to: '/contact'},
    ];
    const wrapper = mount(VBreadcrumbs, {
      props: {
        items: items,
        divider: '/',
        customClass: '',
        activeColor: 'breadcrumbs-item--active',
        tag: 'li',
      },
      global: {
        plugins: [router],
        components: {
          VBreadcrumbsItem,
          VBreadcrumbsDivider,
          'router-link': {
            template: '<a><slot></slot></a>',
          },
        },
      },
    });
    expect(wrapper.findAllComponents(VBreadcrumbsItem)).toHaveLength(3);
    expect(wrapper.findAllComponents(VBreadcrumbsDivider)).toHaveLength(2);
  });

  it('renders the correct number of breadcrumbs items and dividers', () => {
    const items = [
      {text: 'Home', to: '/'},
      {text: 'About', to: '/about'},
      {text: 'Contact', to: '/contact'},
    ];
    const wrapper = mount(VBreadcrumbs, {
      props: {
        items: items,
        divider: '/',
        customClass: '',
        activeColor: 'breadcrumbs-item--active',
        tag: 'li',
      },
      slots: {
        'item.0': '<VBreadcrumbsItem to="/">Home</VBreadcrumbsItem>',
        'item.1': '<VBreadcrumbsItem to="/">Category</VBreadcrumbsItem>',
        'item.2': '<VBreadcrumbsItem to="/">Product</VBreadcrumbsItem>',
        divider: VBreadcrumbsDivider,
      },
      global: {
        plugins: [router],
        components: {
          VBreadcrumbsItem,
          VBreadcrumbsDivider,
          'router-link': {
            template: '<a><slot></slot></a>',
          },
        },
      },
    });
    expect(wrapper.findAllComponents(VBreadcrumbsItem)).toHaveLength(3);
    expect(wrapper.findAllComponents(VBreadcrumbsDivider)).toHaveLength(2);
  });
});
