import { mount } from '@vue/test-utils';
import VMultiSelect from './VMultiSelect.vue';

describe('VMultiSelect', () => {
  it('renders correctly', () => {
    const wrapper = mount(VMultiSelect);
    expect(wrapper.exists()).toBe(true);
  });

  it('handles click event', () => {
    const wrapper = mount(VMultiSelect);
    const input = wrapper.find('.v-multi-select-input-control');

    input.trigger('click');
    expect(wrapper.vm.isOpen).toBe(true);
  });

  it('filters items based on search input', async () => {
    const wrapper = mount(VMultiSelect, {
      props: {
        items: [
          { value: 1, text: 'Apple' },
          { value: 2, text: 'Banana' },
          { value: 3, text: 'Orange' },
        ],
      },
    });
    
    wrapper.vm.search = 'orange';
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.filteredItems).toEqual([
      { value: 3, text: 'Orange' },
    ]);

    wrapper.vm.search = 'banana';
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.filteredItems).toEqual([{ value: 2, text: 'Banana' }]);

    wrapper.vm.search = '';
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.filteredItems).toEqual([
      { value: 1, text: 'Apple' },
      { value: 2, text: 'Banana' },
      { value: 3, text: 'Orange' },
    ]);
  });

  it('selects and deselects items', async () => {
    const wrapper = mount(VMultiSelect, {
      props: {
        items: [
          { value: 1, text: 'Apple' },
          { value: 2, text: 'Banana' },
        ],
      },
    });
    const input = wrapper.find('.v-multi-select-input-control');

    input.trigger('click');
    await wrapper.vm.$nextTick();

    const item1 = wrapper.findAll('.v-multi-select-item').at(0);
    const item2 = wrapper.findAll('.v-multi-select-item').at(1);

    item1.trigger('click');
    expect(wrapper.vm.uncontrolledValue).toEqual([{ value: 1, text: 'Apple' }]);

    item2.trigger('click');
    expect(wrapper.vm.uncontrolledValue).toEqual([
      { value: 1, text: 'Apple' },
      { value: 2, text: 'Banana' },
    ]);

    item1.trigger('click');
    expect(wrapper.vm.uncontrolledValue).toEqual([{ value: 2, text: 'Banana' }]);
  });
});
