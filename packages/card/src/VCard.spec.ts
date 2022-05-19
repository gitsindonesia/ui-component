import {mount} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import VCard from './VCard.vue';

describe('VCard', () => {
  test('mount component', () => {
    expect(VCard).toBeTruthy();

    const wrapper = mount(VCard, {
      props: {
        title: 'Header',
      },
      slots: {},
    });

    expect(wrapper.text()).toContain('Header');
  });
});
