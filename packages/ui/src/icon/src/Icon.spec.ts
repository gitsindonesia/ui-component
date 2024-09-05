import {mount} from '@vue/test-utils';
import Icon from './Icon.vue';

describe('Icon', () => {
  it('renders icon if the icon is loaded', async () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'ic:round-home',
        size: 'sm',
      },
    });

    expect(wrapper.find('span').exists()).toBe(true);

    await wrapper.vm.$nextTick();

    console.log('DEBUG', wrapper.html());

    expect(wrapper.find('span').attributes('class')).toContain('v-icon--sm');
    expect(wrapper.find('span').attributes('aria-hidden')).toBe('true');
  });

  it('renders icon name if the icon is not loaded', async () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'non-existing-icon',
        size: 'lg',
      },
    });

    expect(wrapper.find('span').exists()).toBe(true);

    await wrapper.vm.$nextTick();

    expect(wrapper.find('span').exists()).toBe(true);
    expect(wrapper.find('svg').exists()).toBe(false);
    expect(wrapper.find('span').attributes('aria-hidden')).toBe('true');
  });
});
