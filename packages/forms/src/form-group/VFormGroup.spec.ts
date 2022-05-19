import {mount} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import VFormGroup from './VFormGroup.vue';

describe('VFormGroup', () => {
  test('mount component', () => {
    expect(VFormGroup).toBeTruthy();

    const wrapper = mount(VFormGroup, {
      props: {
        label: 'Text',
      },
    });

    expect(wrapper.text()).toContain('Text');
  });
});
