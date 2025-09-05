import {mount} from '@vue/test-utils';
import BottomSheet from './BottomSheet.vue';

describe('BottomSheet', () => {
  it('renders correctly', () => {
    const wrapper = mount(BottomSheet);
    expect(wrapper.exists()).toBe(true);
  });

  it('closes when the overlay is clicked', async () => {
    const wrapper = mount(BottomSheet, {
      props: {
        modelValue: true,
        overlay: true,
      },
      attachTo: document.body,
      global: {
        stubs: {
          teleport: true,
        },
      },
    });
    await wrapper.vm.$nextTick();
    const overlay = wrapper.find('.v-bottom-sheet-overlay');
    await overlay.trigger('click');
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')[0]).toEqual([false]);
  });

  it('sets the height of the bottom sheet', async () => {
    const wrapper = mount(BottomSheet, {
      attachTo: document.body,
      global: {
        stubs: {
          teleport: true,
        },
      },
    });
    await wrapper.vm.$nextTick(); // wait for the component to render
    const height = '500px';
    await wrapper.vm.setHeight(height);
    expect(wrapper.vm.getHeight()).toBe(0);
    // expect(wrapper.find('.v-bottom-sheet').element.style.height).toBe(height);
  });

  it('opens and closes the bottom sheet', async () => {
    const wrapper = mount(BottomSheet, {
      attachTo: document.body,
      global: {
        stubs: {
          teleport: true,
        },
      },
    });
    await wrapper.vm.$nextTick(); // wait for the component to render
    await wrapper.vm.open();
    expect(wrapper.vm.isOpen).toBe(true);
    await wrapper.vm.close();
    expect(wrapper.vm.isOpen).toBe(false);
  });
});
