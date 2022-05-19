import {mount} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import VMenuTooltip from './VMenuTooltip.vue';

describe('VMenuTooltip', () => {
  test('mount component', () => {
    expect(VMenuTooltip).toBeTruthy();

    const wrapper = mount(VMenuTooltip, {
      props: {
        show: true,
      },
    });

    expect(wrapper.html()).toContain('menu-tooltip');
  });
});
