<script setup lang="ts">
const showAlert = (message: string) => alert(message);
</script>

<template>
  <PageHeader title="Input" />

  <div class="space-y-4">
    <VCard title="Default">
      <div>
        <VInput />
      </div>
    </VCard>

    <VCard title="Label, Placeholder and Hint">
      <div>
        <VInput label="Label" placeholder="Placeholder" hint="Hint" />
      </div>
    </VCard>

    <VCard title="Colors">
      <div class="space-y-2">
        <VInput
          v-for="color in colors"
          :key="color"
          :color="color"
          :label="color"
          placeholder="Placeholder"
          hint="Hint"
        />
      </div>
    </VCard>

    <VCard title="State">
      <div class="space-y-2">
        <VInput
          label="Readonly"
          placeholder="Placeholder"
          hint="Hint"
          readonly
        />
        <VInput
          label="Disabled"
          placeholder="Placeholder"
          hint="Hint"
          disabled
        />
        <VInput label="Error" placeholder="Placeholder" hint="Hint" error />
      </div>
    </VCard>

    <VCard title="Variants">
      <div class="space-y-2">
        <VInput label="Shadow" placeholder="Placeholder" hint="Hint" shadow />
        <VInput label="Rounded" placeholder="Placeholder" hint="Hint" rounded />
        <VInput label="Text" placeholder="Placeholder" hint="Hint" text />
        <VInput
          label="Borderless"
          placeholder="Placeholder"
          hint="Hint"
          borderless
        />
        <VInput
          label="No ring effect"
          placeholder="Placeholder"
          hint="Hint"
          no-ring
        />
      </div>
    </VCard>

    <VCard title="Icons">
      <div class="space-y-2">
        <VInput
          prepend-icon="ri:search-line"
          placeholder="Search..."
          @clickPrepend="showAlert('prepend click')"
        />
        <VInput
          append-icon="ri:search-line"
          placeholder="Search..."
          @clickAppend="showAlert('append click')"
        />
        <VInput
          prepend-icon="ic:baseline-add-reaction"
          placeholder="Search..."
          @clickPrependIcon="showAlert('prepend icon click')"
        />
        <VInput
          append-icon="ic:baseline-add-reaction"
          placeholder="Search..."
          @clickAppendIcon="showAlert('append icon click')"
        />
        <p>Custom Classes:</p>
        <VInput
          prepend-class="bg-gray-100 border-gray-200 border-r"
          prepend-icon="ri:search-line"
          placeholder="Search..."
          @clickPrepend="showAlert('prepend click')"
        />
        <VInput
          append-class="bg-gray-100 border-gray-200 border-l"
          append-icon="ri:search-line"
          placeholder="Search..."
          @clickAppend="showAlert('append click')"
        />
        <VInput
          prepend-icon-class="text-primary"
          prepend-icon="ic:baseline-add-reaction"
          placeholder="Search..."
          @clickPrependIcon="showAlert('prepend icon click')"
        />
        <VInput
          append-icon-class="text-primary"
          append-icon="ic:baseline-add-reaction"
          placeholder="Search..."
          @clickAppendIcon="showAlert('append icon click')"
        />
      </div>
    </VCard>

    <VCard title="Slots">
      <div class="space-y-2">
        <h3 class="font-semibold text-xl mb-3 mt-5">Outer</h3>
        <div class="space-y-1 border-none">
          <VInput placeholder="Search...">
            <template #prepend.outer>
              <VIcon name="ri:search-line" class="fill-current ml-3 w-5 h-5" />
            </template>
          </VInput>

          <VInput placeholder="Search...">
            <template #append.outer>
              <VIcon name="ri:search-line" class="fill-current mr-3 w-5 h-5" />
            </template>
          </VInput>

          <h3 class="font-semibold text-xl mb-3 mt-5">Inner</h3>
          <VInput placeholder="Search..." class="pl-10">
            <template #prepend>
              <VIcon name="ri:search-line" class="fill-current w-5 h-5" />
            </template>
          </VInput>

          <VInput placeholder="Search...">
            <template #append>
              <VIcon name="ri:search-line" class="fill-current w-5 h-5" />
            </template>
          </VInput>

          <h3 class="font-semibold text-xl mb-3 mt-5">Text</h3>
          <VInput placeholder="Search...">
            <template #prepend.outer>
              <span class="ml-3">Text</span>
            </template>
          </VInput>

          <VInput placeholder="Search...">
            <template #append.outer>
              <span class="mr-3">Text</span>
            </template>
          </VInput>

          <VInput placeholder="username">
            <template #prepend>
              <span class="text-gray-700 text-sm font-medium"
                >https://gits.id/user/</span
              >
            </template>
          </VInput>

          <VInput placeholder="username">
            <template #append>
              <span>@gits.id</span>
            </template>
          </VInput>

          <h3 class="font-semibold text-xl mb-3 mt-5">Button</h3>
          <VInput placeholder="Type...">
            <template #prepend.outer>
              <VBtn>Search</VBtn>
            </template>
          </VInput>

          <VInput placeholder="Type...">
            <template #append.outer>
              <VBtn>Search</VBtn>
            </template>
          </VInput>

          <VInput placeholder="No File Selected" prepend-class="!pl-0">
            <template #prepend>
              <VBtn text no-ring>Browse</VBtn>
            </template>
          </VInput>

          <VInput placeholder="No File Selected" append-class="!pr-0">
            <template #append>
              <VBtn text no-ring>Browse</VBtn>
            </template>
          </VInput>
        </div>
      </div>
    </VCard>
  </div>
</template>
