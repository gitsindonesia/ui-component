import {mount} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import VCollapse from './VCollapse.vue';

describe('VCollapse', () => {
  test('mount component', () => {
    expect(VCollapse).toBeTruthy();

    const wrapper = mount(VCollapse, {
      props: {},
      slots: {
        default: 'Text',
      },
    });

    expect(wrapper.text()).toContain('Text');
  });
});
