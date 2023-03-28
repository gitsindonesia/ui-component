import {mount, RouterLinkStub} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import VBreadcrumbs from './VBreadcrumbs.vue';

describe('VBreadcrumbs', () => {
  test('mount component', () => {
    expect(VBreadcrumbs).toBeTruthy();

    const wrapper = mount(VBreadcrumbs, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
      props: {
        items: [
          {
            title: 'Item 1',
            to: '/',
          },
          {
            title: 'Item 2',
            to: '/home',
          },
        ],
      },
      slots: {},
    });

    expect(wrapper.text()).toContain('Item 1');
    expect(wrapper.text()).toContain('Item 2');
  });
});
