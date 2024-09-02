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

  test('mount component with props', () => {
    expect(VDivider).toBeTruthy();

    const wrapper = mount(VDivider, {
      props: {
        vertical: true,
        inset: true,
      },
    });

    expect(wrapper.classes('v-divider')).toBeTruthy();
    expect(wrapper.classes('v-divider--vertical')).toBeTruthy();
    expect(wrapper.classes('v-divider--inset')).toBeTruthy();
  });
});