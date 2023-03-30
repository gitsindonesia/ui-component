import {mount} from '@vue/test-utils';

import Textarea from './Textarea.vue';

describe('Textarea', () => {
  test('mount component', () => {
    expect(Textarea).toBeTruthy();

    const wrapper = mount(Textarea, {
      props: {
        modelValue: 'Text',
      },
    });

    expect(wrapper.html()).toContain('textarea');
  });
});
