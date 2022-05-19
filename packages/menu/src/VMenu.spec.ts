import {mount} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
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
        },
      },
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.html()).toContain('Text');
  });
});
