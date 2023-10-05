import { mount } from '@vue/test-utils';
import VRow from './VRow.vue'
import VCol from './VCol.vue'

test('VRow renders correctly', () => {
  const wrapper = mount(VRow, {
    slots: {
      default: `
        <VCol cols="3">Column 1</VCol>
        <VCol cols="6">Column 2</VCol>
        <VCol cols="3">Column 3</VCol>
      `,
    },
  });

  expect(wrapper.find('.v-row').exists()).toBe(true);
});

test('VCol renders correctly with cols prop', () => {
  const wrapper = mount(VCol, {
    slots: {
      default: 'This is a column',
    },
    props: {
      cols: '6',
    },
  });

  expect(wrapper.find('.v-col-6').exists()).toBe(true);
  expect(wrapper.text()).toBe('This is a column');
  expect(wrapper.classes()).toContain('v-col-6');
});

test('VCol renders correctly with offset prop', () => {
  const wrapper = mount(VCol, {
    slots: {
      default: 'This is a column',
    },
    props: {
      cols: '6',
      offset: '3',
    },
  });

  expect(wrapper.classes()).toContain('v-offset-3');
});

test('VCol renders correctly with order prop', () => {
  const wrapper = mount(VCol, {
    slots: {
      default: 'This is a column',
    },
    props: {
      cols: '6',
      order: '2',
    },
  });

  expect(wrapper.classes()).toContain('v-order-2');
});
