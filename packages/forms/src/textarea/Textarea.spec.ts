import {mount} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
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
