import {mount} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import ListGroup from './ListGroup.vue';

const ALERT_TEXT = 'Alert text';

describe('ListGroup', () => {
  test('mount component', () => {
    expect(ListGroup).toBeTruthy();

    const wrapper = mount(ListGroup, {
      props: {},
      slots: {
        default: ALERT_TEXT,
      },
    });

    expect(wrapper).toBeTruthy()

    // expect(wrapper.text()).toContain(ALERT_TEXT);
  });
});
