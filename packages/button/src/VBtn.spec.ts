import {mount} from '@vue/test-utils';
import VBtn from './VBtn.vue';

test('mount component', async () => {
  expect(VBtn).toBeTruthy();

  const wrapper = mount(VBtn, {
    props: {},
  });

  // expect(wrapper.text()).toContain('Step 1');
});
