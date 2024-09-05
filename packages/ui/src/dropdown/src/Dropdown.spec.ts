import {mount} from '@vue/test-utils';

import Dropdown from './Dropdown.vue';

describe('Dropdown', () => {
  test('mount component', () => {
    expect(Dropdown).toBeTruthy();

    const wrapper = mount(Dropdown, {
      props: {
        label: 'Text',
      },
    });

    expect(wrapper.text()).toContain('Text');
  });
});
