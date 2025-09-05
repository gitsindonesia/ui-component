import {getColor} from '@morpheme/utils';
import {mount} from '@vue/test-utils';
import VProgressCircular from './VProgressCircular.vue';

describe('VProgressCircular', () => {
  test('render properly with default props and slot', () => {
    const wrapper = mount(VProgressCircular, {
      modelValue: 50,
    });

    expect(wrapper).toBeDefined();
    expect(wrapper.html()).toContain('v-progress-circular');
  });

  test('render properly with default modelValue and indeterminate props', () => {
    const wrapper = mount(VProgressCircular, {
      props: {
        modelValue: 50,
        indeterminate: true,
      },
    });

    expect(wrapper).toBeDefined();
    expect(wrapper.html()).toContain('v-progress-circular--indeterminate');
  });

  test('custom size', () => {
    const wrapper = mount(VProgressCircular, {
      props: {
        modelValue: 50,
        size: 80,
        width: 8,
      },
    });

    expect(wrapper).toBeDefined();
    expect(wrapper.html()).toContain('v-progress-circular');
    expect(wrapper.html()).toContain('width: 8px');
  });

  test('custom color', () => {
    const wrapper = mount(VProgressCircular, {
      props: {
        modelValue: 50,
        color: 'rose.500',
        textColor: 'warning.500',
      },
      slots: {
        default: 'test',
      },
    });

    expect(wrapper).toBeDefined();
    expect(wrapper.html()).toContain('v-progress-circular');
    expect(wrapper.html()).toContain('v-progress-circular-text');
    expect(wrapper.html()).toContain(getColor('rose.500'));
  });
});
