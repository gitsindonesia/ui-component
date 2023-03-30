import {flushPromises, mount} from '@vue/test-utils';
import VSwitch from './VSwitch.vue';
import {defineComponent, ref} from 'vue';
import waitForExpect from 'wait-for-expect';
import {boolean, object} from 'yup';
import {useForm} from 'vee-validate';

describe('VSwitch', () => {
  test('mount component', async () => {
    expect(VSwitch).toBeTruthy();

    const wrapper = mount(VSwitch, {
      props: {},
    });

    expect(wrapper.html()).toContain('div');
  });

  test('can be off or on with modelValue', async () => {
    const WrapperComponent = defineComponent({
      components: {
        VSwitch,
      },
      setup() {
        const toggle = ref(true);
        return {
          toggle,
        };
      },
      template: '<VSwitch v-model="toggle" />',
    });

    const wrapper = mount(WrapperComponent);

    const buttonSwitch = wrapper.find('.v-switch-button');
    expect(buttonSwitch.attributes('data-headlessui-state')).toEqual('checked');

    await buttonSwitch.trigger('click');
    expect(buttonSwitch.attributes('data-headlessui-state')).toEqual('');
  });

  test('render label', () => {
    const wrapper = mount(VSwitch, {
      props: {
        label: 'Label',
      },
    });

    expect(wrapper.text()).toContain('Label');
  });

  test('render hint', () => {
    const wrapper = mount(VSwitch, {
      props: {
        hint: 'Hint',
      },
    });

    expect(wrapper.text()).toContain('Hint');
  });

  test('can show error message when error appear', async () => {
    const errorClass = 'v-switch--error';
    const errorMessage = 'You must agree to terms and condition';

    const WrapperComponent = defineComponent({
      components: {
        VSwitch,
      },
      setup() {
        const schema = object({
          test: boolean().oneOf([true], errorMessage).required().label('Test'),
        });

        const {handleSubmit} = useForm({
          validationSchema: schema,
        });

        const onSubmit = handleSubmit((values) => {});

        return {
          onSubmit,
        };
      },
      template: `<form @submit="onSubmit" class="border-none">
        <VSwitch name="test" label="Label" />
          <div class="mt-4">
            <button type="submit">Submit</button>
          </div>
        </form>`,
    });

    const wrapper = mount(WrapperComponent);

    await wrapper.find('form').trigger('submit');

    await flushPromises();
    await waitForExpect(() => {
      expect(wrapper.html()).toContain(errorClass);
      expect(wrapper.find(`.${errorClass}`).text()).toContain(errorMessage);
    });
  });
});
