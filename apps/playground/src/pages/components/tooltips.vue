<script setup lang="ts">
import {ref} from 'vue';

const breadcrumbs = ref([
  {
    to: '/cms',
    title: 'Dashboard',
  },
  {
    to: '/cms/components',
    title: 'Components',
  },
  {
    to: '/cms/components/breadcrumbs',
    title: 'v-breadcrumbs',
  },
]);
</script>

<template>
  <DocsTitle :breadcrumbs="breadcrumbs">Tooltip</DocsTitle>

  <Docs
    title="Default"
    :code="`<v-tooltip>
  <template #activator=&quot;{on}&quot;>
    <v-btn v-on=&quot;on&quot;>Hover Me</v-btn>
  </template>

  <span>You got me :)</span>
</v-tooltip>`"
  >
    <template #preview>
      <v-tooltip>
        <template #activator="{on}">
          <v-btn v-on="on">Hover Me</v-btn>
        </template>

        <span>You got me :)</span>
      </v-tooltip>
    </template>
  </Docs>

  <Docs
    title="Placement"
    :code="`<v-tooltip placement=&quot;right&quot;>
  <template #activator=&quot;{on}&quot;>
    <v-btn v-on=&quot;on&quot;>Hover Me</v-btn>
  </template>

  <span>You got me :)</span>
</v-tooltip>`"
  >
    <template #preview>
      <v-tooltip placement="right">
        <template #activator="{on}">
          <v-btn v-on="on">Hover Me</v-btn>
        </template>

        <span>You got me :)</span>
      </v-tooltip>
    </template>
  </Docs>

  <Docs
    title="Props"
    :selected="1"
    hide-tabs
    script='const props = defineProps({
  placement: {
    type: String,
    default: "top",
  },
  options: {
    type: Object,
    default: () => ({}),
  },
  activatorClass: {
    type: String,
    default: "",
  },
  tooltipClass: {
    type: String,
    default:
      "inline-block shadow px-3 py-2 rounded bg-[#000] text-white p-2 rounded max-w-[300px]",
  },
});
'
  >
  </Docs>
</template>

<style scoped></style>
