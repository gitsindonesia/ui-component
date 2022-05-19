import {mount} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import Base from './Base.vue';

describe('Base', () => {
  test('mount component', () => {
    expect(Base).toBeTruthy();

    // const wrapper = mount(Base, {
    //   props: {},
    // });
  });
});
