import {mount} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import VMenuItem from './VMenuItem.vue';
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

describe('VMenuItem', () => {
  test('mount component', () => {
    expect(VMenuItem).toBeTruthy();

    const wrapper = mount(VMenuItem, {
      props: {
        item: {
          text: 'Text',
          to: '/',
        },
      },
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.html()).toContain('group');
    expect(wrapper.html()).toContain('Text');
  });
});
