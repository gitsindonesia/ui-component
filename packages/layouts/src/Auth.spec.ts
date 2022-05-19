import {mount} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import Auth from './Auth.vue';

describe('Auth', () => {
  test('mount component', () => {
    expect(Auth).toBeTruthy();

    const wrapper = mount(Auth, {
      props: {},
    });

    expect(wrapper.text()).toContain('GITS Indonesia');
  });
});
