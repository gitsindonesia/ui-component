import {mount} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import VContainer from './VContainer.vue';

describe('VContainer', () => {
  test('mount component', () => {
    expect(VContainer).toBeTruthy();

    const wrapper = mount(VContainer, {
      props: {},
      slots: {
        default: 'Text',
      },
    });

    expect(wrapper.text()).toContain('Text');
  });
});
