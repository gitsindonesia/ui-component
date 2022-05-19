import {mount} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import VMenus from './VMenus.vue';

describe('VMenus', () => {
  test('mount component', () => {
    expect(VMenus).toBeTruthy();

    const wrapper = mount(VMenus, {
      props: {},
    });

    expect(wrapper.html()).toContain('relative');
  });
});
