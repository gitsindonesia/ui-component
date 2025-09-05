import {mount} from '@vue/test-utils';

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
