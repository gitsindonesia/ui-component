import {mount} from '@vue/test-utils';

import Auth from './Auth.vue';

describe('Auth', () => {
  test('mount component', () => {
    expect(Auth).toBeTruthy();

    const wrapper = mount(Auth, {
      props: {},
    });

    expect(wrapper.html()).toContain('div');
  });
});
