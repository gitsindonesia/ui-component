// DEPRECATED
// import MyInputGroup from './VInputGroup.vue';
// import VBtn from '@gits-id/button';
// import {Meta, Story} from '@storybook/vue3';

// export default {
//   title: 'Components/Form/InputGroup',
//   component: MyInputGroup,
//   argTypes: {},
//   args: {
//     modelValue: '',
//     id: '',
//     prependSlot: '',
//     appendSlot: '',
//     prepend: false,
//     append: false,
//   },
// } as Meta;

// const Template: Story = (args) => ({
//   // Components used in your story `template` are defined in the `components` object
//   components: {MyInputGroup, VBtn},
//   // The story's `args` need to be mapped into the template through the `setup()` method
//   setup() {
//     return {args};
//   },
//   // And then the `args` are bound to your component with `v-bind="args"`
//   template: `
//     <MyInputGroup v-bind="args">
//     <template v-slot:prepend>${args.prependSlot}</template>
//     <template v-slot:append>${args.appendSlot}</template>
//   </MyInputGroup>`,
// });

// export const Prepend = Template.bind({});
// Prepend.args = {
//   prepend: true,
//   prependSlot: '<v-btn class="pl-4" text dense tile no-ring>Prepend</v-btn>',
// };

// export const Append = Template.bind({});
// Append.args = {
//   append: true,
//   appendSlot: '<v-btn class="pr-4" text dense tile no-ring>Append</v-btn>',
// };
