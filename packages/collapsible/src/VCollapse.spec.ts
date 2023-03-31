import {mount} from '@vue/test-utils';
import VCollapse from './VCollapse.vue';

describe('VCollapse', () => {
  it('should toggle the visibility of the content', async () => {
    const wrapper = mount(VCollapse, {
      slots: {
        default: '<div class="content">Content</div>',
      },
    });

    // Trigger toggle
    wrapper.setProps({show: false});
    await wrapper.vm.$nextTick();

    // Content should be hidden
    expect(wrapper.find('.content').isVisible()).toBe(false);

    // Trigger toggle again
    wrapper.setProps({show: true});
    await wrapper.vm.$nextTick();
  });
});
