import {mount} from '@vue/test-utils';

import VRadio from './VRadio.vue';

describe('VRadio', () => {
  test('mount component', () => {
    expect(VRadio).toBeTruthy();

    const wrapper = mount(VRadio, {
      props: {
        modelValue: 'Text',
      },
    });

    expect(wrapper.html()).toContain('input');
  });
});
