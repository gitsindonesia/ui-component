import type {Story} from '@storybook/vue3';
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
  DialogOverlay,
} from './dialog';
import {ref} from 'vue';

export default {
  title: 'Primitives/Dialog',
  component: Dialog,
  subcomponents: {},
};

export const Default: Story = (args) => ({
  components: {
    Dialog,
    DialogPanel,
    DialogTitle,
    DialogDescription,
    DialogOverlay,
  },
  setup() {
    const isOpen = ref(true);
    return {args, isOpen};
  },
  template: `
    <button @click="isOpen = !isOpen" class="bg-white border rounded-lg px-3 py-2 text-sm font-medium">
      Delete account
    </button>

    <Dialog
      v-bind="args"
      v-model="isOpen"
    >
      <transition name="fade">
        <DialogOverlay
          class="fixed inset-0 bg-black/50 z-10"
          @click="isOpen = false"
        />
      </transition>

      <transition name="fade">
        <DialogPanel
          class="
            fixed z-20 w-[400px] bg-white rounded-lg shadow-lg p-4
          "
          :style="{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }"
        >
          <DialogTitle class="font-medium">
            Delete account
          </DialogTitle>
          <DialogDescription class="text-gray-700 mt-2 text-sm">
            Are you sure you want to delete your account?
          </DialogDescription>
          <div class="flex gap-3 mt-4 justify-center">
            <button class="border bg-white px-3 py-2 rounded-lg text-sm font-medium"
              @click="isOpen = false">
              Cancel
            </button>
            <button class="border bg-white text-red-600 px-3 py-2 rounded-lg text-sm font-medium"
              @click="isOpen = false">
              Delete
            </button>
          </div>
        </DialogPanel>
      </transition>
    </Dialog>
  `,
});
