import {mount, flushPromises} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import VCheckbox from './VCheckbox.vue';
import {defineComponent, ref} from 'vue';
import waitForExpect from 'wait-for-expect';
import {boolean, object} from 'yup';
import {useForm} from 'vee-validate';

describe('VCheckbox', () => {
  test('mount component', () => {
    expect(VCheckbox).toBeTruthy();

    const wrapper = mount(VCheckbox, {
      props: {
        modelValue: false,
      },
    });

    expect(wrapper).toBeDefined()
  });

  test('render label', () => {
    const wrapper = mount(VCheckbox, {
      props: {
        modelValue: false,
        label: 'Label',
      },
    });

    expect(wrapper.text()).toContain('Label');
  })

  test('render hint', () => {
    const wrapper = mount(VCheckbox, {
      props: {
        modelValue: false,
        hint: 'Hint'
      },
    });

    expect(wrapper.text()).toContain('Hint');
  })

  test('can show error message when validation error', async () => {
    const errorClass = 'v-checkbox-error'
    const errorMessage = 'You must agree to terms and condition'
    const WrapperComponent = defineComponent({
      components: {
        VCheckbox,
      },
      setup() {
        const schema = object({
          test: boolean()
            .oneOf([true], errorMessage)
            .required()
            .label('Test'),
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
        <VCheckbox name="test" label="Label" />
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
