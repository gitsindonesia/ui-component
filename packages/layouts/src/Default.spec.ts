import {mount, RouterLinkStub} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import Default from './Default.vue';

describe('Default', () => {
  test('mount component', () => {
    expect(Default).toBeTruthy();

    const wrapper = mount(Default, {
      global: {
        provide: {
          appTitle: 'App Title',
          appSubtitle: 'App Subtitle',
          authUser: 'User',
          logoutPath: '/logout',
        },
        stubs: {
          RouterLink: RouterLinkStub,
          RouterView: true,
        }
      },
      props: {},
    });

    expect(wrapper.html()).toContain('flex');
  });
});
