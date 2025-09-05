import {mount} from '@vue/test-utils';
import VBtn from './VBtn.vue';

describe('VBtn', () => {
  it('renders button text when passed', () => {
    const wrapper = mount(VBtn, {
      props: {
        text: true,
      },
      slots: {
        default: 'Click me',
      },
    });

    expect(wrapper.text()).toMatch('Click me');
  });

  it('emits click event when clicked', async () => {
    const wrapper = mount(VBtn);

    await wrapper.trigger('click');

    expect(wrapper.emitted('click')).toHaveLength(1);
  });

  it('disables the button when passed the disabled prop', async () => {
    const wrapper = mount(VBtn, {
      props: {
        disabled: true,
      },
    });

    expect(wrapper.attributes('disabled')).toBeDefined();

    await wrapper.trigger('click');

    expect(wrapper.emitted('click')).toBeUndefined();
  });

  it('render router link when to props provided', () => {
    const wrapper = mount(VBtn, {
      global: {
        stubs: {
          RouterLink: true,
        }
      },
      props: {
        to: '/some-link'
      }
    })

    expect(wrapper.html()).toContain('router-link')
  })

  it('render a tag when href props provided', () => {
    const HREF = 'https://google.com'

    const wrapper = mount(VBtn, {
      props: {
        href: HREF
      }
    })

    expect(wrapper.attributes('href')).toEqual(HREF)
  })
});
