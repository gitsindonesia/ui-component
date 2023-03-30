import {mount, RouterLinkStub} from '@vue/test-utils';

import Auth from './Auth.vue';

describe('Auth', () => {
  test('mount component', () => {
    expect(Auth).toBeTruthy();

    const wrapper = mount(Auth, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
          RouterView: true,
        },
      },
      props: {},
    });

    expect(wrapper.text()).toContain('Morpheme Indonesia');
  });
});
