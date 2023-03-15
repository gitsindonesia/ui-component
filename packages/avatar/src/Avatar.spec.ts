import {describe, it, expect} from 'vitest';
import {mount} from '@vue/test-utils';
import Avatar from './Avatar.vue';
import {defaultColors, defaultSizes} from '@gits-id/theme/defaultTheme';

describe('Avatar', () => {
  it('render properly with initial name', () => {
    const wrapper = mount(Avatar, {
      props: {
        color: 'primary',
        name: 'Test',
      },
    });

    expect(wrapper.html()).toContain('avatar-primary');
    expect(wrapper.text()).toContain('T');
  });

  it('render properly with provided colors', () => {
    defaultColors.forEach((color) => {
      const wrapper = mount(Avatar, {
        props: {
          color,
          name: 'Test',
        },
      });

      expect(wrapper.html()).toContain(`avatar-${color}`);
    });
  });

  describe('when size is provided', () => {
    it('render properly with default size list', () => {
      defaultSizes.forEach((size) => {
        const wrapper = mount(Avatar, {
          props: {
            size,
            name: 'Test',
          },
        });

        expect(wrapper.html()).toContain(`avatar-${size}`);
      });
    });

    it('render properly with width and height from size props', () => {
      const wrapper = mount(Avatar, {
        props: {
          color: 'primary',
          name: 'Test',
          size: '30',
        },
      });

      expect(wrapper.html()).toContain(
        'style="--avatar-width: 30px; --avatar-height: 30px;',
      );
    });
  });

  describe('when avatar is an image', () => {
    it('render avatar image with provided size', () => {
      const wrapper = mount(Avatar, {
        props: {
          src: '/test.png',
          alt: 'test-image',
          size: '30',
        },
      });

      expect(wrapper.find('.avatar-image').attributes('width')).toEqual('30');
      expect(wrapper.find('.avatar-image').attributes('height')).toEqual('30');
    });

    it('render avatar image without provided size', () => {
      const wrapper = mount(Avatar, {
        props: {
          src: '/test.png',
          alt: 'test-image',
        },
      });

      expect(wrapper.find('.avatar-image').attributes('width')).toBeFalsy();
      expect(wrapper.find('.avatar-image').attributes('height')).toBeFalsy();
    });
  });
});
