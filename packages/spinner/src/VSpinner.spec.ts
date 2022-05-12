import {mount} from '@vue/test-utils';
import VSpinner from './VSpinner.vue';
import {test, expect} from 'vitest';

test('mount component', async () => {
  expect(VSpinner).toBeTruthy();

  const wrapper = mount(VSpinner, {
    props: {},
  });

  expect(wrapper.html()).toContain('svg');
});
