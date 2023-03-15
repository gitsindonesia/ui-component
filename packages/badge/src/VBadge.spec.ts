import {mount} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import VBadge from './VBadge.vue';

describe('VBadge', () => {
  test('mount component', () => {
    expect(VBadge).toBeTruthy();

    const wrapper = mount(VBadge, {
      props: {},
      slots: {
        default: 'Badge Text',
      },
    });

    expect(wrapper.text()).toContain('Badge Text');
  });

  test('dismissable', async () => {
    const wrapper = mount(VBadge, {
      props: {
        dismissable: true,
      },
      slots: {
        default: 'Badge Text',
      },
    });

    const dismissButton = wrapper.find('.badge-dismiss-button');

    await dismissButton.trigger('click');

    expect(wrapper.emitted()).toHaveProperty('dismiss');
  });

  test('rounded with boolean type', () => {
    const wrapper = mount(VBadge, {
      props: {
        dismissable: true,
        rounded: true,
      },
      slots: {
        default: 'Badge Text',
      },
    });

    expect(wrapper.html()).toContain('badge--rounded');
  });

  test('rounded with string type', () => {
    const wrapper = mount(VBadge, {
      props: {
        dismissable: true,
        rounded: 'lg',
      },
      slots: {
        default: 'Badge Text',
      },
    });

    expect(wrapper.html()).toContain('badge--rounded-lg');
  });
});
