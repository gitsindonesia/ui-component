<script setup lang="ts">
const menus = ref([
  {
    prependIcon: 'ic:baseline-mail-outline',
    text: 'Kirim via email',
    value: 'email',
    onClick() {
      console.log('Email sent!');
    },
  },
  {
    prependIcon: 'ic:round-copy-all',
    text: 'Copy link',
    value: 'copy',
    onClick() {
      navigator.clipboard
        .readText()
        .then((clipText) => 'Link telah disalin ke clipboard: ' + clipText);
    },
  },
  {
    prependIcon: 'ic:round-share',
    text: 'Share',
    value: 'share',
    onClick() {
      console.log('Share');
    },
  },
  {
    prependIcon: 'ic:round-download',
    text: 'Export',
    value: 'export',
    onClick() {
      console.log('Export!');
    },
  },
]);

const sheet = reactive({
  isOpen1: false,
  isOpen2: false,
  isOpen3: false,
  isOpen4: false,
  isOpen5: false,
  isOpen6: false,
  isOpen7: false,
  isOpen8: false,
  isOpen9: false,
  isOpen10: false,
  isOpen11: false,
});
const selected = ref();
</script>

<template>
  <PageHeader title="BottomSheet" />

  <div class="space-y-4">
    <VCard title="Default">
      <div>
        <VBtn @click="sheet.isOpen1 = !sheet.isOpen1">Open BottomSheet</VBtn>
        <VBottomSheet v-model="sheet.isOpen1">
          <VBottomSheetBody>
            A quick brown fox leaps over the lazy dog.
          </VBottomSheetBody>
        </VBottomSheet>
      </div>
    </VCard>

    <VCard title="With Header">
      <div>
        <VBtn @click="sheet.isOpen2 = !sheet.isOpen2">Open BottomSheet</VBtn>
        <VBottomSheet v-model="sheet.isOpen2">
          <VBottomSheetHeader> Sheet Title </VBottomSheetHeader>
          <VBottomSheetBody>
            A quick brown fox leaps over the lazy dog.
          </VBottomSheetBody>
        </VBottomSheet>
      </div>
    </VCard>

    <VCard title="With Handle">
      <div>
        <VBtn @click="sheet.isOpen3 = !sheet.isOpen3">Open BottomSheet</VBtn>
        <VBottomSheet v-model="sheet.isOpen3">
          <VBottomSheetHandle />
          <VBottomSheetHeader> Sheet Title </VBottomSheetHeader>
          <VBottomSheetBody>
            A quick brown fox leaps over the lazy dog.
          </VBottomSheetBody>
        </VBottomSheet>
      </div>
    </VCard>

    <VCard title="With Action">
      <div>
        <VBtn @click="sheet.isOpen4 = !sheet.isOpen4">Open BottomSheet</VBtn>
        <VBottomSheet v-model="sheet.isOpen4">
          <VBottomSheetHeader> Sheet Title </VBottomSheetHeader>
          <VBottomSheetBody>
            A quick brown fox leaps over the lazy dog.
          </VBottomSheetBody>
          <VBottomSheetFooter>
            <VBtn @click="sheet.isOpen4 = false">Close</VBtn>
          </VBottomSheetFooter>
        </VBottomSheet>
      </div>
    </VCard>

    <VCard title="With Menus">
      <div>
        <VBtn @click="sheet.isOpen5 = !sheet.isOpen5">Open BottomSheet</VBtn>
        <VBottomSheet v-model="sheet.isOpen5">
          <VBottomSheetHeader> Sheet Title </VBottomSheetHeader>
          <VBottomSheetMenus v-model="selected" :items="menus" hover />
        </VBottomSheet>
      </div>
    </VCard>

    <VCard title="With Selectable Menus">
      <div>
        <VBtn @click="sheet.isOpen6 = !sheet.isOpen6">Open BottomSheet</VBtn>
        <VBottomSheet v-model="sheet.isOpen6">
          <VBottomSheetHeader> Sheet Title </VBottomSheetHeader>
          <VBottomSheetMenus
            v-model="selected"
            :items="menus"
            hover
            selectable
          />
        </VBottomSheet>
      </div>
    </VCard>

    <VCard title="With Multiple Selectable Menus">
      <div>
        <VBtn @click="sheet.isOpen7 = !sheet.isOpen7">Open BottomSheet</VBtn>
        <VBottomSheet v-model="sheet.isOpen7">
          <VBottomSheetHeader> Sheet Title </VBottomSheetHeader>
          <VBottomSheetMenus
            v-model="selected"
            :items="menus"
            hover
            selectable
            multiple
          />
        </VBottomSheet>
      </div>
    </VCard>

    <VCard title="Max Width">
      <div>
        <VBtn @click="sheet.isOpen8 = !sheet.isOpen8">Open BottomSheet</VBtn>
        <VBottomSheet v-model="sheet.isOpen8" max-width="500px">
          <VBottomSheetHeader> Sheet Title </VBottomSheetHeader>
          <VBottomSheetMenus
            v-model="selected"
            :items="menus"
            hover
            selectable
            multiple
          />
        </VBottomSheet>
      </div>
    </VCard>

    <VCard title="Hide Overlay">
      <div>
        <VBtn @click="sheet.isOpen9 = !sheet.isOpen9">Open BottomSheet</VBtn>
        <VBottomSheet v-model="sheet.isOpen9" :overlay="false">
          <VBottomSheetHeader> Sheet Title </VBottomSheetHeader>
          <VBottomSheetMenus
            v-model="selected"
            :items="menus"
            hover
            selectable
            multiple
          />
        </VBottomSheet>
      </div>
    </VCard>

    <VCard title="Nested Sheet">
      <div>
        <VBtn @click="sheet.isOpen10 = !sheet.isOpen10">
          Open BottomSheet 1
        </VBtn>

        <VBottomSheet v-model="sheet.isOpen10">
          <VBottomSheetHeader> Sheet 1 </VBottomSheetHeader>
          <VBottomSheetBody>
            A quick brown fox leaps over the lazy dog.
          </VBottomSheetBody>
          <VBottomSheetFooter>
            <VBtn @click="sheet.isOpen11 = !sheet.isOpen11">
              Open BottomSheet 2
            </VBtn>
          </VBottomSheetFooter>

          <VBottomSheet v-model="sheet.isOpen11">
            <VBottomSheetHeader> Sheet 2 </VBottomSheetHeader>
            <VBottomSheetBody>
              A quick brown fox leaps over the lazy dog.
            </VBottomSheetBody>
          </VBottomSheet>
        </VBottomSheet>
      </div>
    </VCard>
  </div>
</template>
