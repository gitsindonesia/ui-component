import {test, expect} from 'vitest'
import {mount} from '@vue/test-utils';
import Stepper from '../src/Stepper.vue';

test('mount component', async () => {
  expect(Stepper).toBeTruthy();

  const wrapper = mount(Stepper, {
    props: {
      modelValue: 0,
      items: [
        {
          title: 'Step 1',
        },
        {
          title: 'Step 2',
        },
      ],
    },
  });

  expect(wrapper.text()).toContain('Step 1');
  expect(wrapper.text()).toContain('Step 2');
});
