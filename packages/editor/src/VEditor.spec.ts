import {mount} from '@vue/test-utils';
import VEditor from '../src/VEditor.vue';

test('mount component', async () => {
  expect(VEditor).toBeTruthy();

  const wrapper = mount(VEditor, {
    props: {
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

  // expect(wrapper.text()).toContain('Step 1');
});
