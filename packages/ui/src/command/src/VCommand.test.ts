import { mount } from '@vue/test-utils';
import VCommand from './VCommand.vue';

describe('VCommand', () => {
  it('renders the component with default props', () => {
    const wrapper = mount(VCommand);

    expect(wrapper.exists()).toBe(true);
  });
});
