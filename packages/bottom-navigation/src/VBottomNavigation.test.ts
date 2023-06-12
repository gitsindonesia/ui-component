import {shallowMount} from '@vue/test-utils';
import VBottomNavigation from './VBottomNavigation.vue';

describe('VBottomNavigation', () => {
  test('renders properly with default props', () => {
    const wrapper = shallowMount(VBottomNavigation);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes('.v-bottom-navigation')).toBe(true);
  });
});
