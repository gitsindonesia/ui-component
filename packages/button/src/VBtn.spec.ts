import {mount} from '@vue/test-utils';
import VBtn from './VBtn.vue';

const BUTTON_TEXT = 'My Button';

describe('VBtn', () => {
  test('mount component', async () => {
    expect(VBtn).toBeTruthy();

    const wrapper = mount(VBtn, {
      props: {},
      slots: {
        default: BUTTON_TEXT,
      },
    });

    expect(wrapper.text()).toContain(BUTTON_TEXT);
  });
});
