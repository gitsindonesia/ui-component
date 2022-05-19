import {mount} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import VFormSelect from './VFormSelect.vue';

describe('VFormSelect', () => {
  test('mount component', () => {
    expect(VFormSelect).toBeTruthy();

    // const wrapper = mount(VFormSelect, {
    //   props: {
    //     items: [
    //       {
    //         text: 'Option 1',
    //         value: '1',
    //       },
    //       {
    //         text: 'Option 2',
    //         value: '2',
    //       },
    //     ],
    //   },
    // });

    // expect(wrapper.text()).toContain('Option 1');
  });
});
