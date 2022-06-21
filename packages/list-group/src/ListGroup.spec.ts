import {mount} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import VAlert from './VAlert.vue';

const ALERT_TEXT = 'Alert text';

describe('VAlert', () => {
  test('mount component', () => {
    expect(VAlert).toBeTruthy();

    const wrapper = mount(VAlert, {
      props: {},
      slots: {
        default: ALERT_TEXT,
      },
    });

    expect(wrapper.text()).toContain(ALERT_TEXT);
  });
});
