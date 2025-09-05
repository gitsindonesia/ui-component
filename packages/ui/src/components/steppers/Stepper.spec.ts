import {mount} from '@vue/test-utils';
import Stepper from '../src/Stepper.vue';
import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      component: {
        template: 'Hello World',
      },
    },
  ],
});

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
    global: {
      plugins: [router],
    },
  });

  expect(wrapper.text()).toContain('Step 1');
  expect(wrapper.text()).toContain('Step 2');
});
