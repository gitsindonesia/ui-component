import {mount} from '@vue/test-utils';
import VSwitch from './VSwitch.vue';
import {test, expect} from 'vitest';

test('mount component', async () => {
  expect(VSwitch).toBeTruthy();

  const wrapper = mount(VSwitch, {
    props: {},
  });

  expect(wrapper.html()).toContain('div');
});
