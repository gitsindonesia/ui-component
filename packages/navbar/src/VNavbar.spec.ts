import {mount, RouterLinkStub} from '@vue/test-utils';

import VNavbar from './VNavbar.vue';

describe('VNavbar', () => {
  test('mount component', () => {
    expect(VNavbar).toBeTruthy();

    const wrapper = mount(VNavbar, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
      props: {
        modelValue: true,
      },
    });

    expect(wrapper.vm.modelValue).toBe(true);
  });
});
