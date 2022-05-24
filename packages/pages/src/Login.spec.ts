import {mount} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import Login from './Login.vue';

describe('Login', () => {
  test('mount component', () => {
    expect(Login).toBeTruthy();

    const wrapper = mount(Login, {
      props: {},
    });

    expect(wrapper.text()).toContain('Login Account');
  });
});
