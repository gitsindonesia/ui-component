import {mount, RouterLinkStub} from '@vue/test-utils';

import NotFound from './NotFound.vue';

describe('NotFound', () => {
  test('mount component', () => {
    expect(NotFound).toBeTruthy();

    const wrapper = mount(NotFound, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
      props: {},
    });

    expect(wrapper.text()).toContain('404 Page Not Found');
  });
});
