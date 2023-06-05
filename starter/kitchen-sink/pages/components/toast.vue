<script setup lang="ts">
import type {ToastPlacement} from '@morpheme/toast';

const state = reactive({
  toast1: false,
  toast2: false,
  toast3: false,
  toast4: false,
});

const placement = ref<ToastPlacement>('bottom');
const placements = <ToastPlacement[]>[
  'center',
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
];

const changePlacement = (position: ToastPlacement) => {
  placement.value = position;
  state.toast2 = false;
  setTimeout(() => {
    state.toast2 = true;
  }, 200);
};

const color = ref('default');

const changecolor = (position: string) => {
  color.value = position;
  state.toast3 = false;
  setTimeout(() => {
    state.toast3 = true;
  }, 200);
};

const actionHandler = () => {
  alert('Confirmed!');
};
</script>

<template>
  <PageHeader title="Menu" />

  <div class="space-y-4">
    <VCard title="Basic Example">
      <div>
        <VBtn @click="state.toast1 = !state.toast1">
          {{ state.toast1 ? 'Close' : 'Open' }} Toast
        </VBtn>
        <VToast v-model="state.toast1"> Toast message </VToast>
      </div>
    </VCard>

    <VCard title="With Icon">
      <div>
        <VBtn @click="state.toast1 = !state.toast1">
          {{ state.toast1 ? 'Close' : 'Open' }} Toast
        </VBtn>
        <VToast v-model="state.toast1" icon="ri:check-line">
          Toast message
        </VToast>
      </div>
    </VCard>

    <VCard title="Placement">
      <div>
        <VBtnGroup>
          <VBtn
            v-for="position in placements"
            :key="position"
            @click="changePlacement(position)"
          >
            {{ position }}
          </VBtn>
        </VBtnGroup>
        <VToast v-model="state.toast2" :placement="placement">
          Toast message
        </VToast>
      </div>
    </VCard>

    <VCard title="Colors">
      <div>
        <VBtnGroup>
          <VBtn
            v-for="color in colors"
            :key="color"
            :color="color"
            @click="changecolor(color)"
          >
            {{ color }}
          </VBtn>
        </VBtnGroup>
        <VToast v-model="state.toast3" :color="color"> Toast message </VToast>
      </div>
    </VCard>

    <VCard title="Slots">
      <div>
        <VBtn @click="state.toast4 = !state.toast4"
          >{{ state.toast4 ? 'Close' : 'Open' }} Toast</VBtn
        >
        <VToast v-model="state.toast4">
          Toast message
          <template #action="{close}">
            <VBtn text size="sm" color="primary" @click="actionHandler">
              Action
            </VBtn>
            <VBtn
              text
              fab
              size="sm"
              color="primary"
              prefix-icon="ri:close-line"
              @click="close"
            />
          </template>
        </VToast>
      </div>
    </VCard>
  </div>
</template>
