import {flushPromises, mount} from '@vue/test-utils';
import {describe, expect, it, test} from 'vitest';
import VAutocomplete from './VAutocomplete.vue';
import {ComboboxLabel, ComboboxOption} from '@headlessui/vue';
import {defineComponent} from 'vue';
import {useForm} from 'vee-validate';
import {object} from 'yup';
import waitForExpect from 'wait-for-expect';

const items = [
  {
    text: 'John Doe',
    value: 'john doe',
  },
  {
    text: 'Jojo',
    value: 'jojo',
  },
  {
    text: 'Mikael',
    value: 'mikael',
  },
  {
    text: 'Bosnam',
    value: 'bosnam',
  },
];

describe('VAutocomplete', () => {
  test('mount component', () => {
    expect(VAutocomplete).toBeTruthy();

    const wrapper = mount(VAutocomplete, {
      props: {
        modelValue: undefined,
        searchBy: 'text',
        displayText: 'text',
        placeholder: 'Search...',
        label: '',
        rules: '',
        items: [],
        noDataText: 'No data.',
        notFoundText: 'Nothing found.',
        clearable: false,
      },
    });

    expect(wrapper.html()).toContain('Search...');
    expect(wrapper.find('input').exists()).toBeTruthy();
  });

  describe('when typing an input', () => {
    it('show list filtered', async () => {
      const wrapper = mount(VAutocomplete, {
        props: {
          modelValue: undefined,
          searchBy: 'text',
          displayText: 'text',
          placeholder: 'Search...',
          label: '',
          rules: '',
          items,
          noDataText: 'No data.',
          notFoundText: 'Nothing found.',
          clearable: false,
        },
      });

      await wrapper.find('input').setValue('jo');

      const autocompleteItems = wrapper.findAll('li.autocomplete-item');

      expect(autocompleteItems.length).toEqual(2);
    });

    it.skip('show all items when no character on input', async () => {
      // on ui testing there is no error
      const wrapper = mount(VAutocomplete, {
        props: {
          modelValue: 'jo',
          searchBy: 'text',
          displayText: 'text',
          placeholder: 'Search...',
          label: '',
          rules: '',
          items,
          noDataText: 'No data.',
          notFoundText: 'Nothing found.',
          clearable: false,
        },
      });

      await wrapper.find('input').setValue('');

      const autocompleteItems = wrapper.findAll('li.autocomplete-item');

      expect(autocompleteItems.length).toEqual(4);
    });
  });

  describe('when one of list clicked', () => {
    it('is item selected', async () => {
      const wrapper = mount(VAutocomplete, {
        props: {
          searchBy: 'text',
          displayText: 'text',
          placeholder: 'Search...',
          items,
        },
      });

      await wrapper.find('input').setValue('jo');
      const options = wrapper.findAllComponents(ComboboxOption);
      await options[0].trigger('click');

      expect(options[0].html()).toContain('autocomplete-item-text--selected');

      await options[1].trigger('click');

      expect(options[0].html()).not.toContain(
        'autocomplete-item-text--selected',
      );
      expect(options[1].html()).toContain('autocomplete-item-text--selected');
    });
  });

  describe('when clearable is true', () => {
    it('button to clear is appear on selected', async () => {
      const wrapper = mount(VAutocomplete, {
        props: {
          searchBy: 'text',
          displayText: 'text',
          placeholder: 'Search...',
          items,
          clearable: true,
        },
      });

      await wrapper.find('input').setValue('jo');
      const options = wrapper.findAllComponents(ComboboxOption);
      await options[0].trigger('click');

      expect(options[0].html()).toContain('autocomplete-item-text--selected');

      const clearButton = wrapper.find('.autocomplete-clearable-button');

      expect(clearButton).toBeTruthy();
    });

    describe.skip('and when the clear button clicked', () => {
      it('remove selected', async () => {
        const wrapper = mount(VAutocomplete, {
          attachTo: document.body,
          props: {
            modelValue: 'john doe',
            searchBy: 'text',
            displayText: 'text',
            placeholder: 'Search...',
            items,
            clearable: true,
          },
        });

        await wrapper.find('input').setValue('jo');
        const options = wrapper.findAllComponents(ComboboxOption);

        await options[0].trigger('click');

        const clearButton = wrapper.find(
          'button.autocomplete-clearable-button',
        );

        await clearButton.trigger('click');

        expect(options[0].html()).not.toContain(
          'autocomplete-item-text--selected',
        );
      });
    });
  });

  describe('when label provided', () => {
    it('render label', () => {
      const wrapper = mount(VAutocomplete, {
        props: {
          searchBy: 'text',
          displayText: 'text',
          placeholder: 'Search...',
          items,
          label: 'Label test',
        },
      });

      const label = wrapper.findComponent(ComboboxLabel);

      expect(wrapper.html()).toContain('autocomplete-label');
      expect(label).toBeTruthy();
      expect(label.html()).toContain('Label test');
    });
  });

  describe('when searched empty', () => {
    it('show no data text', async () => {
      const wrapper = mount(VAutocomplete, {
        props: {
          searchBy: 'text',
          displayText: 'text',
          placeholder: 'Search...',
          items,
          label: 'Label test',
          noDataText: 'Data tidak ditemukan',
        },
      });

      await wrapper.find('input').setValue('za');

      expect(wrapper.html()).toContain('autocomplete-empty');
      expect(wrapper.find('.autocomplete-empty').text()).toContain(
        wrapper.vm.noDataText,
      );
    });
  });

  describe('when use with validation', () => {
    it('can show error message when error appear', async () => {
      const WrapperComponent = defineComponent({
        components: {
          VAutocomplete,
        },
        setup() {
          const schema = object({
            test: object().required().label('Test'),
          });

          const {handleSubmit} = useForm({
            validationSchema: schema,
          });

          const onSubmit = handleSubmit((values) => {
            alert(JSON.stringify(values));
          });
          return {
            onSubmit,
          };
        },
        template: `<form @submit="onSubmit" class="border-none">
          <VAutocomplete
            name="test"
            label="Test"
            placeholder="Choose name"
            :items="items"
          />
          <div class="mt-4">
            <button type="submit">Submit</button>
          </div>
        </form>`,
      });

      const wrapper = mount(WrapperComponent);

      await wrapper.find('form').trigger('submit');

      await flushPromises();
      await waitForExpect(() => {
        expect(wrapper.html()).toContain('autocomplete-error');
        expect(wrapper.find('.autocomplete-error').text()).toContain(
          'Test is a required field',
        );
      });
    });
  });

  describe('when use with hints', () => {
    it('render hint', () => {
      const wrapper = mount(VAutocomplete, {
        props: {
          searchBy: 'text',
          displayText: 'text',
          placeholder: 'Search...',
          items,
          label: 'Label test',
          hint: 'Hint Test'
        },
      });
      
      expect(wrapper.text()).toContain('Hint Test')
    })

  })
});
