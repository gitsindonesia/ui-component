import {mount} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import VProgressBar from './VProgressBar.vue';

describe('VProgressBar', () => {
  test('mount component', () => {
    expect(VProgressBar).toBeTruthy();

    const wrapper = mount(VProgressBar, {
      props: {
        width: 50,
      },
    });

    expect(wrapper.html()).toContain('div');
  });
});
