import {mount} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import VLogo from './VLogo.vue';

describe('VLogo', () => {
  test('mount component', () => {
    expect(VLogo).toBeTruthy();

    const wrapper = mount(VLogo, {
      props: {},
    });

    expect(wrapper.html()).toContain('img');
  });

  test('logo white', () => {
    expect(VLogo).toBeTruthy();

    const wrapper = mount(VLogo, {
      props: {
        white: true,
      },
    });

    expect(wrapper.html()).toContain('logo-white');
  });
});
