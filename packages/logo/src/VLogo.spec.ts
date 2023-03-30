import {mount, RouterLinkStub} from '@vue/test-utils';

import VLogo from './VLogo.vue';

describe('VLogo', () => {
  test('mount component', () => {
    expect(VLogo).toBeTruthy();

    const wrapper = mount(VLogo, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
      props: {},
    });

    expect(wrapper.html()).toContain('img');
  });

  test('logo white', () => {
    expect(VLogo).toBeTruthy();

    const wrapper = mount(VLogo, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
      props: {
        white: true,
      },
    });

    expect(wrapper.html()).toContain('logo-white');
  });
});
