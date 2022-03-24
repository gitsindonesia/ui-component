<script setup lang="ts">
import {toRefs} from 'vue';
import {EyeIcon, PencilAltIcon, TrashIcon} from '@heroicons/vue/solid';

const props = defineProps({
  path: {
    type: String,
    default: '',
  },
  id: {
    type: [String, Number],
    default: '',
  },
  hideView: {
    type: Boolean,
    default: false,
  },
  hideEdit: {
    type: Boolean,
    default: false,
  },
  hideDelete: {
    type: Boolean,
    default: false,
  },
});

const {path} = toRefs(props);

const emit = defineEmits(['update:modelValue', 'delete']);

const deleteItem = () => {
  emit('delete');
};
</script>

<template>
  <div class="flex gap-1 justify-center">
    <v-tooltip v-if="!hideView">
      <template #activator="{on}">
        <v-btn
          color="success"
          :to="`${path}/${id}`"
          icon
          rounded
          text
          size="sm"
          v-on="on"
        >
          <EyeIcon class="w-5 h-5" />
        </v-btn>
      </template>
      <span>Lihat Detil</span>
    </v-tooltip>

    <v-tooltip v-if="!hideEdit">
      <template #activator="{on}">
        <v-btn
          :to="`${path}/${id}/edit`"
          icon
          rounded
          text
          size="sm"
          color="info"
          v-on="on"
        >
          <PencilAltIcon class="w-5 h-5" />
        </v-btn>
      </template>
      <span>Ubah</span>
    </v-tooltip>

    <v-tooltip v-if="!hideDelete">
      <template #activator="{on}">
        <v-btn
          text
          rounded
          icon
          size="sm"
          color="error"
          @click="deleteItem"
          v-on="on"
        >
          <TrashIcon class="w-5 h-5" />
        </v-btn>
      </template>
      <span>Hapus</span>
    </v-tooltip>
  </div>
</template>

<style scoped></style>
