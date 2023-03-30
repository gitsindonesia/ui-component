import {mount} from '@vue/test-utils';

import VSelect from './VSelect.vue';

describe('VSelect', () => {
  test('mount component', () => {
    expect(VSelect).toBeTruthy();

    const wrapper = mount(VSelect, {
      props: {},
    });

    expect(wrapper.html()).toContain('div');
  });
});
