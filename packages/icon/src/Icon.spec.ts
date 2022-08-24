import {mount} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import Icon from './Icon.vue';

describe('Icon', () => {
  test('mount component', () => {
    expect(Icon).toBeTruthy();

    const wrapper = mount(Icon, {
      props: {
        name: 'ic:round-home',
      },
    });

    expect(wrapper).toBeTruthy();
  });
});
