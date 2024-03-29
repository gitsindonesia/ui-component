import {mount} from '@vue/test-utils';

import ForgotPassword from './ForgotPassword.vue';

describe('ForgotPassword', () => {
  test('mount component', () => {
    expect(ForgotPassword).toBeTruthy();

    const wrapper = mount(ForgotPassword, {
      props: {},
    });

    expect(wrapper.text()).toContain('Forgot Password');
  });
});
