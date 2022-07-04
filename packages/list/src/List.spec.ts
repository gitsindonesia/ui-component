import {mount} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import List from './List.vue';

describe('List', () => {
  test('mount component', () => {
    expect(List).toBeTruthy();

    const wrapper = mount(List, {
      props: {},
    });

    expect(wrapper).toBeTruthy();
  });
});
