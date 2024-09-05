import {mount} from '@vue/test-utils';

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
