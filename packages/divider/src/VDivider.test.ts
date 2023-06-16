import VDivider from './VDivider.vue';
import {mount} from '@vue/test-utils';

describe('VDivider', () => {
  test('mount component', () => {
    expect(VDivider).toBeTruthy();

    const wrapper = mount(VDivider, {
      props: {
      },
    });

    expect(wrapper.classes('v-divider')).toBeTruthy();
  });
});