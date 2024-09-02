import {mount} from '@vue/test-utils';

import VMenu from './VMenu.vue';
import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: {
        template: 'Hello',
      },
    },
  ],
});

describe('VMenu', () => {
  test('mount component', () => {
    expect(VMenu).toBeTruthy();

    const wrapper = mount(VMenu, {
      props: {
        menu: {
          text: 'Text',
          to: '/',
          icon: 'test-icon',
        },
      },
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.html()).toContain('Text');
  });
});
