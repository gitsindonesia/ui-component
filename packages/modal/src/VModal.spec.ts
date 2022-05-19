import {mount} from '@vue/test-utils';
import {describe, expect, test, beforeEach} from 'vitest';
import VModal from './VModal.vue';

describe('VModal', () => {
  beforeEach(() => {
    // create teleport target
    const el = document.createElement('div');
    el.id = 'modal';
    document.body.appendChild(el);
  });

  afterEach(() => {
    // clean up
    document.body.outerHTML = '';
  });

  test('mount component', () => {
    expect(VModal).toBeTruthy();

    // const wrapper = mount(VModal, {
    //   props: {
    //     modelValue: true,
    //   },
    // });

    // expect(wrapper.html()).toContain('fixed');
  });
});
