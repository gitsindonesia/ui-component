# Multi Select

## Usage

### Basic Usage

```vue
<script setup lang="ts">
  const items = [
    {
      value: 1,
      text: 'Option 1',
    },
    {
      value: 2,
      text: 'Option 2',
    },
  ];
</script>

<template>
  <!-- VMultiSelect is registered globally -->
  <VMultiSelect :items="items" />
</template>
```

<LivePreview src="components-multiselect--default" />

::: info
The `VMultiSelect` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### Clearable

```vue
<template>
  <VMultiSelect :items="items" clearable />
</template>
```

<LivePreview src="components-multiselect--clearable" />

### Max Badge

```vue
<template>
  <VMultiSelect :items="items" :max-badge="3" />
</template>
```

<LivePreview src="components-multiselect--max-badge" />

### Label

```vue
<template>
  <VMultiSelect :items="items" label="My Label" />
</template>
```

<LivePreview src="components-multiselect--label" />

### Custom Style

```vue
<template>
  <VMultiSelect
    :items="items"
    wrapperClass="!rounded-full !border-orange-500 focus-within:!border-orange-600",
    inputClass="!italic",
    dropdownClass="bg-black/50",
    itemClass="bg-black/50 text-white hover:bg-warning-500 hover:text-white",
    badgeColor="warning",
    checkWrapperClass="text-orange-500",
  />
</template>
```

<LivePreview src="components-multiselect--custom-style" />

### Initial Errors

```vue
<script setup lang="ts">
  const schema = object({
      genre: array().required().min(1).label('Genre'),
    });

    const {handleSubmit, resetForm, values} = useForm({
      validationSchema: schema,
      initialErrors: {
        genre: 'Genre is required',
      },
    });

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

    const genres = ref([
      {
        text: 'Pop',
        value: 'pop',
      },
      {
        text: 'Rock',
        value: 'rock',
      },
      {
        text: 'Jazz',
        value: 'jazz',
      },
      {
        text: 'Alternative',
        value: 'alternative',
      },
    ]);
</script>

<template>
  <form @submit="onSubmit" class="border-none">
    <VMultiSelect
      name="genre"
      label="Genre"
      placeholder="Choose your prefered genres"
      :items="genres"
    />
    <div class="mt-4 space-x-2">
      <v-btn type="submit" color="primary">Submit</v-btn>
      <v-btn type="button" text @click="resetForm">Reset</v-btn>
    </div>
    <pre>{{ {values} }}</pre>
  </form>
</template>
```

<LivePreview src="components-multiselect--initial-errors" />

## Props

| Name                                      | Type                                     | Default                         |
| ----------------------------------------- | ---------------------------------------- | ------------------------------- |
| [`items`](#items)                         | `Array as PropType<VMultiSelectItem[]>`  | `[]`                            |
| [`itemText`](#itemText)                   | `string`                                 | `'text'`                        |
| [`itemValue`](#confirm)                   | `string`                                 | `value`                         |
| [`searchBy`](#searchBy)                   | `string`                                 | `''`                            |
| [`placeholder`](#placeholder)             | `string`                                 | `'Search...'`                   |
| [`name`](#name)                           | `string`                                 | `''`                            |
| [`error`](#error)                         | `boolean`                                | `false`                         |
| [`errorMessages`](#errorMessages)         | `Array`                                  | `'[]'`                          |
| [`clearable`](#clearable)                 | `boolean`                                | `'false'`                       |
| [`maxBadge`](#maxBadge)                   | `number`                                 | `0`                             |
| [`delay`](#delay)                         | `number`                                 | `'500'`                         |
| [`id`](#id)                               | `string`                                 | `''`                            |
| [`inputProps`](#inputProps)               | `Object as PropType<Record<string, any>>`| `'{}'`                          |
| [`selectAll`](#selectAll)                 | `boolean`                                | `false`                         |
| [`loading`](#loading)                     | `boolean`                                | `false`                         |
| [`wrapperClass`](#wrapperClass)           | `string`                                 | `''`                            |
| [`inputClass`](#inputClass)               | `string`                                 | `''`                            |
| [`badgeColor`](#badgeColor)               | `string`                                 | `'primary'`                     |
| [`badgeClass`](#badgeClass)               | `string`                                 | `''`                            |
| [`badgeProps`](#badgeProps)               | `object`                                 | `{}`                            |
| [`dropdownClass`](#dropdownClass)         | `string`                                 | `''`                            |
| [`itemClass`](#itemClass)                 | `string`                                 | `''`                            |
| [`checkWrapperClass`](#checkWrapperClass) | `string`                                 | `''`                            |
| [`checkIconClass`](#checkIconClass)       | `string`                                 | `''`                            |
| [`noDataClass`](#noDataClass)             | `string`                                 | `''`                            |
| [`loadingClass`](#loadingClass)           | `string`                                 | `''`                            |
| [`label`](#label)                         | `string`                                 | `''`                            |
| [`labelClass`](#labelClass)               | `string`                                 | `'mb-2 block'`                  |
| [`rules`](#rules)                         | `string`                                 | `''`                            |
| [`errorClass`](#errorClass)               | `string`                                 | `'text-error-600 mt-1 text-sm'` |
| [`transition`](#transition)               | `string`                                 | `'fade'`                        |

## Methods

None

## Events

None

## Slots

None

## CSS Variables

None

## Manual Installation

You can also install the `Multi Select` component individually via `@gits-id/multi-select` package:

```bash
yarn install @gits-id/multi-select
```

```vue
<script setup lang="ts">
import VMultiSelect from '@gits-id/multi-select';
</script>

<template>
  <VMultiSelect :items="items" />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-multiselect--default).
