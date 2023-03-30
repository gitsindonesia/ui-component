import {mount, RouterLinkStub} from '@vue/test-utils';

import Login from './Login.vue';

describe('Login', () => {
  test('mount component', () => {
    expect(Login).toBeTruthy();

    const wrapper = mount(Login, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
      props: {},
    });

    expect(wrapper.text()).toContain('Login Account');
  });
});
