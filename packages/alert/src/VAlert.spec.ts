import {mount} from '@vue/test-utils';
import VAlert from './VAlert.vue';
import Icon from '@morpheme/icon';
import VAlertTitle from './VAlertTitle.vue';
import VAlertGroup from './VAlertGroup.vue';

const ALERT_TEXT = 'Alert text';

describe('VAlert', () => {
  test('render properly with default props and slot', () => {
    const wrapper = mount(VAlert);

    expect(wrapper).toBeDefined();
    expect(wrapper.html()).toContain('alert-default');
  });

  describe('when color props changed', () => {
    test('is return provided color props value', () => {
      const wrapper = mount(VAlert, {
        props: {
          color: 'primary',
        },
      });

      expect(wrapper.html()).toContain('alert-primary');
    });
  });

  describe('when icon props provided', () => {
    test('is render icon component', () => {
      const wrapper = mount(VAlert, {
        props: {
          icon: 'ri:alert-line',
        },
      });

      const IconWrapper = wrapper.findComponent(Icon);

      expect(IconWrapper).toBeDefined();
      expect(wrapper.html()).toContain('alert-icon');
    });
  });

  describe('when iconClass props provided', () => {
    test('will be add custom class on icon component', () => {
      const wrapper = mount(VAlert, {
        props: {
          icon: 'test-icon',
          iconClass: 'custom-class',
        },
      });

      const IconWrapper = wrapper.findComponent(Icon);

      expect(IconWrapper).toBeDefined();
      expect(IconWrapper.attributes('class')).toContain(
        'alert-icon custom-class',
      );
    });

    describe('when dismissable is true', () => {
      test('render dismissable button', () => {
        const wrapper = mount(VAlert, {
          props: {
            icon: 'test-icon',
            iconClass: 'custom-class',
            dismissable: true,
          },
        });
        const buttonDismissableWrapper = wrapper.find(
          'button.alert-dismissable',
        );

        expect(buttonDismissableWrapper).toBeTruthy();
      });

      describe('and when button dismissable clicked', () => {
        test('hide the alert component', async () => {
          const wrapper = mount(VAlert, {
            props: {
              icon: 'test-icon',
              iconClass: 'custom-class',
              dismissable: true,
              'onUpdate:modelValue': (e: any) =>
                wrapper.setProps({modelValue: e}),
            },
          });
          const buttonDismissableWrapper = wrapper.find(
            'button.alert-dismissable',
          );

          await buttonDismissableWrapper.trigger('click');

          expect(wrapper.html()).not.toContain('alert');
        });
      });
    });

    describe('when outlined props is true', () => {
      test('render outlined class', () => {
        const wrapper = mount(VAlert, {
          props: {
            outlined: true,
          },
        });

        expect(wrapper.html()).toContain('alert--outlined');
      });
    });

    describe('when solid props is true', () => {
      test('render solid class', () => {
        const wrapper = mount(VAlert, {
          props: {
            solid: true,
          },
        });

        expect(wrapper.html()).toContain('alert--solid');
      });
    });

    describe('when border props is true', () => {
      test('render bordered class', () => {
        const wrapper = mount(VAlert, {
          props: {
            border: true,
          },
        });

        expect(wrapper.html()).toContain('alert--bordered');
      });
    });

    describe('when bordered props is true', () => {
      test('render bordered class', () => {
        const wrapper = mount(VAlert, {
          props: {
            bordered: true,
          },
        });

        expect(wrapper.html()).toContain('alert--bordered');
      });
    });
  });

  describe('when default slot replaced', () => {
    test('render with new slot', () => {
      const wrapper = mount(VAlert, {
        props: {
          dismissable: true,
        },
        slots: {
          default: ALERT_TEXT,
          'x-button': '<button>Custom x button</button>',
          icon: '<div name="custom-icon-slot" />',
        },
      });

      expect(wrapper.html()).toContain(ALERT_TEXT);
      expect(wrapper.html()).toContain('Custom x button');
      expect(wrapper.html()).toContain('custom-icon-slot');
    });
  });
});


describe('VAlertTitle', () => {
  test('render properly with default props and slot', () => {
    const wrapper = mount(VAlertTitle, {
      slots: {
        default: 'Title',
      }
    });

    expect(wrapper).toBeDefined();
    expect(wrapper.html()).toContain('alert-title');
    expect(wrapper.html()).toContain('Title');
  });
})

describe('VAlertGroup', () => {
  test('render properly with default props and slot', () => {
    const wrapper = mount(VAlertGroup, {
      slots: {
        default: 'Title',
      }
    });

    expect(wrapper).toBeDefined();
    expect(wrapper.html()).toContain('alert-group');
    expect(wrapper.html()).toContain('Title');
  });
})