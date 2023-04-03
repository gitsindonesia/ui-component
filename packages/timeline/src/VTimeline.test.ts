import {shallowMount} from '@vue/test-utils';
import VTimeline from './VTimeline.vue';

describe('VTimeline', () => {
  test('renders properly with default props', () => {
    const wrapper = shallowMount(VTimeline);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes('v-timeline')).toBe(true);
  });
});
