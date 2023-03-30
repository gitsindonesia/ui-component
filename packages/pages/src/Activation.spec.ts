import {mount} from '@vue/test-utils';

import Activation from './Activation.vue';

describe('Activation', () => {
  test('mount component', () => {
    expect(Activation).toBeTruthy();

    const wrapper = mount(Activation, {
      props: {},
    });

    expect(wrapper.text()).toContain('Activate Your Account');
  });
});
