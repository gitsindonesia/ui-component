import {mount} from '@vue/test-utils';

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
