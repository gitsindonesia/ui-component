import {mount} from '@vue/test-utils';
import VBtn from './VBtn.vue';
import {test, expect, describe} from 'vitest';

const BUTTON_TEXT = 'My Button';

describe('Button', () => {
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
