import {mount, flushPromises} from '@vue/test-utils';
import {describe, expect, test} from 'vitest';
import { defineComponent, ref } from 'vue';
import VInput from './VInput.vue';
import waitForExpect from 'wait-for-expect';
import {string, object} from 'yup';
import {useForm} from 'vee-validate';

describe('VInput', () => {
  test('mount component', () => {
    expect(VInput).toBeTruthy();

    const wrapper = mount(VInput, {
      props: {
        modelValue: 'Text',
      },
    });

    expect(wrapper.html()).toContain('v-input');
  });

  test('render label', () => {
    const wrapper = mount(VInput, {
      props: {
        label: 'Text',
      }
    })

    expect(wrapper.text()).toContain('Text')
  })

  test('render just text', () => {
    const wrapper = mount(VInput, {
      props: {
        modelValue: 'test',
        text: true
      }
    })

    expect(wrapper.text()).toContain('test')
  })

  test.skip('render label with slots', () => {
    const WrapperComponent = defineComponent({
      components: {
        VInput
      },
      setup(){
        const search = ref('')
        return {
          search
        }
      },
      template: '<VInput v-model="search"><template #label><label>Custom Label</label></template></VInput>'
    })
    const wrapper = mount(WrapperComponent)

    expect(wrapper.html()).toContain('Custom Label')
  })

  describe('emit an event', () => {
    test('emit clickPrepend', async () => {
      const wrapper = mount(VInput, {
        props: {
          modelValue: 'test',
          prependClass: 'prepend-class-custom',
        }
      })
  
      const prependWrapper = wrapper.find('.prepend-class-custom')
      await prependWrapper.trigger('click')
  
      expect(wrapper.emitted()).toHaveProperty('clickPrepend')
    })

    test('emit clickAppend', async () => {
      const wrapper = mount(VInput, {
        props: {
          modelValue: 'test',
          appendClass: 'append-class-custom',
        }
      })
  
      const appendWrapper = wrapper.find('.append-class-custom')
      await appendWrapper.trigger('click')
  
      expect(wrapper.emitted()).toHaveProperty('clickAppend')
    })

    test('emit clickPrependIcon', async () => {
      const wrapper = mount(VInput, {
        props: {
          modelValue: 'test',
          prependClass: 'prepend-class-custom',
          prependIcon: 'prepend-icon',
          prependIconClass: 'custom-prepend-icon-class'
        }
      })
  
      const prependIconWrapper = wrapper.find('.custom-prepend-icon-class')
      await prependIconWrapper.trigger('click')
  
      expect(wrapper.html()).toContain('v-input-icon--prepend')
      expect(wrapper.emitted()).toHaveProperty('clickPrependIcon')
    })

    test('emit clickAppendIcon', async () => {
      const wrapper = mount(VInput, {
        props: {
          modelValue: 'test',
          appendClass: 'append-class-custom',
          appendIcon: 'append-icon',
          appendIconClass: 'custom-append-icon-class'
        }
      })
  
      const appendIconWrapper = wrapper.find('.custom-append-icon-class')
      await appendIconWrapper.trigger('click')
  
      expect(wrapper.emitted()).toHaveProperty('clickAppendIcon')
    })
  })

  test('clearable', async () => {
    const wrapper = mount(VInput, {
      props: {
        modelValue: 'default',
        clearable: true
      }
    })

    expect(wrapper.html()).toContain('v-input-clearable')

    const clearButton = wrapper.find('.v-input-clearable')

    await clearButton.trigger('click')
    
    expect(wrapper.html()).not.toContain('v-input-clearable')
  })

  test('render hint', () => {
    const wrapper = mount(VInput, {
      props: {
        modelValue: 'test',
        hint: 'Hint'
      }
    })

    expect(wrapper.html()).toContain('v-input-hint')
    expect(wrapper.text()).toContain('Hint')
  })

  test('show error message when validation error', async () => {
    const errorClass = 'v-input-error'
    const errorMessage = 'The field is required'
    const WrapperComponent = defineComponent({
      components: {
        VInput,
      },
      setup() {
        const schema = object({
          test: string()
            .required(errorMessage)
            .label('Test')
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
        <VInput name="test" label="Label" />
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
  })
});
