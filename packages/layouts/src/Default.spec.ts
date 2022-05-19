import {mount} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import Default from './Default.vue';

describe('Default', () => {
  test('mount component', () => {
    expect(Default).toBeTruthy();

    const wrapper = mount(Default, {
      props: {},
    });

    expect(wrapper.html()).toContain('flex');
  });
});
