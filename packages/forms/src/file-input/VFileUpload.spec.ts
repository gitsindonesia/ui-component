import {mount} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import VFileUpload from './VFileUpload.vue';

describe('VFileUpload', () => {
  test('mount component', () => {
    expect(VFileUpload).toBeTruthy();

    // const wrapper = mount(VFileUpload, {
    //   props: {
    //     placeholder: 'Text',
    //   },
    // });

    // expect(wrapper.html()).toContain('Text');
  });
});
