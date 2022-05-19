import {mount} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import VCollapsibleGroup from './VCollapsibleGroup.vue';

describe('VCollapsibleGroup', () => {
  test('mount component', () => {
    expect(VCollapsibleGroup).toBeTruthy();

    const wrapper = mount(VCollapsibleGroup, {
      props: {
        items: [
          {
            title: 'Item 1',
            content: 'lorem ipsum',
          },
          {
            title: 'Item 2',
            content: 'dolor sit amet',
          },
        ],
      },
      slots: {},
    });

    expect(wrapper.text()).toContain('Item 1');
  });
});
