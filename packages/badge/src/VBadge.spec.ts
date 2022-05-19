import {mount} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import VBadge from './VBadge.vue';

describe('VBadge', () => {
  test('mount component', () => {
    expect(VBadge).toBeTruthy();

    const wrapper = mount(VBadge, {
      props: {},
      slots: {
        default: 'Badge Text',
      },
    });

    expect(wrapper.text()).toContain('Badge Text');
  });
});
