import {mount, RouterLinkStub} from '@vue/test-utils';

import VNavDrawer from './VNavDrawer.vue';

describe('VNavDrawer', () => {
  test('mount component', () => {
    expect(VNavDrawer).toBeTruthy();

    const wrapper = mount(VNavDrawer, {
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
