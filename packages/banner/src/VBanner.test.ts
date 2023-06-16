import VBanner from './VBanner.vue';
import {mount} from '@vue/test-utils';

describe('VBanner', () => {
  test('mount component', () => {
    expect(VBanner).toBeTruthy();

    const wrapper = mount(VBanner, {
      props: {
      },
    });
  });
});