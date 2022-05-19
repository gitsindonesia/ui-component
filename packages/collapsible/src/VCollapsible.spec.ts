import {mount} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import VCollapsible from './VCollapsible.vue';

describe('VCollapsible', () => {
  test('mount component', () => {
    expect(VCollapsible).toBeTruthy();

    const wrapper = mount(VCollapsible, {
      props: {},
      slots: {
        default: 'Text',
      },
    });

    expect(wrapper.text()).toContain('Text');
  });
});
