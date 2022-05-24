import {mount} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import ResetPassword from './ResetPassword.vue';

describe('ResetPassword', () => {
  test('mount component', () => {
    expect(ResetPassword).toBeTruthy();

    const wrapper = mount(ResetPassword, {
      props: {},
    });

    expect(wrapper.text()).toContain('Reset Password');
  });
});
