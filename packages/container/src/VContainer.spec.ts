import {mount} from '@vue/test-utils';

import VContainer from './VContainer.vue';

describe('VContainer', () => {
  test('mount component', () => {
    expect(VContainer).toBeTruthy();

    const wrapper = mount(VContainer, {
      props: {},
      slots: {
        default: 'Text',
      },
    });

    expect(wrapper.text()).toContain('Text');
  });
});
