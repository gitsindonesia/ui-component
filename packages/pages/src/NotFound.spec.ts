import {mount} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import NotFound from './NotFound.vue';

describe('NotFound', () => {
  test('mount component', () => {
    expect(NotFound).toBeTruthy();

    const wrapper = mount(NotFound, {
      props: {},
    });

    expect(wrapper.text()).toContain('404 Page Not Found');
  });
});
