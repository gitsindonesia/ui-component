import {mount} from '@vue/test-utils';
import {Alert, useAlert} from './alert';
import {describe, it, expect} from 'vitest';

describe('Alert', () => {
  it('should show the alert when isOpen is true', async () => {
    const wrapper = mount(Alert, {
      props: {
        modelValue: true,
      },
    });

    expect(wrapper.exists()).toBe(true);
  });

  it('should not show the alert when isOpen is false', async () => {
    const wrapper = mount(Alert, {
      props: {
        modelValue: false,
      },
    });

    expect(wrapper.exists()).toBe(false);
  });

  it('should toggle isOpen when the component is clicked', async () => {
    const wrapper = mount(Alert, {
      props: {
        modelValue: false,
      },
    });

    expect(wrapper.exists()).toBe(false);

    // Simulate a click event on the component.
    await wrapper.trigger('click');

    expect(wrapper.exists()).toBe(true);
  });

  it('should provide the alert context to children', async () => {
    const ChildComponent = {
      template: '<div>{{ context.isOpen }}</div>',
      setup() {
        const context = useAlert();
        return {context};
      },
    };

    const wrapper = mount(Alert, {
      slots: {
        default: ChildComponent,
      },
      props: {
        modelValue: true,
      },
    });

    expect(wrapper.html()).toContain('true');
  });
});
