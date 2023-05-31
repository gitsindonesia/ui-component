# Alert

## Basic

::component-preview

#preview
<v-alert>
You changes have been saved.
</v-alert>
<v-alert color="primary">
You changes have been saved.
</v-alert>
<v-alert color="secondary">
You changes have been saved.
</v-alert>
<v-alert color="info">
You changes have been saved.
</v-alert>
<v-alert color="warning">
You changes have been saved.
</v-alert>
<v-alert color="success">
You changes have been saved.
</v-alert>
<v-alert color="error">
You changes have been saved.
</v-alert>

#code

```vue
<template>
  <v-alert> You changes have been saved. </v-alert>
  <v-alert color="primary"> You changes have been saved. </v-alert>
  <v-alert color="secondary"> You changes have been saved. </v-alert>
  <v-alert color="info"> You changes have been saved. </v-alert>
  <v-alert color="warning"> You changes have been saved. </v-alert>
  <v-alert color="success"> You changes have been saved. </v-alert>
  <v-alert color="error"> You changes have been saved. </v-alert>
</template>
```

::

## Variants

::component-preview
#preview

<h3 class="font-medium text-sm mb-1">Default</h3>
<v-alert color="primary"> You changes have been saved. </v-alert>
<h3 class="font-medium text-sm mb-1 mt-4">Solid</h3>
<v-alert color="primary" solid> You changes have been saved. </v-alert>
<h3 class="font-medium text-sm mb-1 mt-4">Outlined</h3>
<v-alert color="primary" outlined> You changes have been saved. </v-alert>
<h3 class="font-medium text-sm mb-1 mt-4">Bordered</h3>
<v-alert color="primary" bordered> You changes have been saved. </v-alert>

#code

```vue
<template>
  <v-alert color="primary"> You changes have been saved. </v-alert>
  <v-alert color="primary" solid> You changes have been saved. </v-alert>
  <v-alert color="primary" outlined> You changes have been saved. </v-alert>
  <v-alert color="primary" bordered> You changes have been saved. </v-alert>
</template>
```

::

## Icon

::component-preview
#preview
<v-alert color="primary" icon="ic:round-info">
You changes have been saved.
</v-alert>

#code

```vue
<template>
  <v-alert color="primary" icon="ic:round-info">
    You changes have been saved.
  </v-alert>
</template>
```

::

## Dismissible

::component-preview
#preview
<v-alert color="primary" icon="ic:round-info" dismissable>
You changes have been saved.
</v-alert>

#code

```vue
<template>
  <v-alert color="primary" icon="ic:round-info" dismissable>
    You changes have been saved.
  </v-alert>
</template>
```

::

## With Title

::component-preview
#preview
<v-alert color="primary" icon="ic:round-info">
  <v-alert-title>Alert title</v-alert-title>
  You changes have been saved.
</v-alert>

#code

```vue
<template>
  <v-alert color="primary" icon="ic:round-info">
    <v-alert-title>Alert title</v-alert-title>
    You changes have been saved.
  </v-alert>
</template>
```

::

## Slots

::component-preview
#preview
<v-alert color="success" dismissable>
  <template v-slot:icon>
    <v-icon name="ic:round-check-circle" />
  </template>
  <template v-slot:x-button="{dismiss}">
    <v-btn @click="dismiss">Close</v-btn>
  </template>
  You changes have been saved.
</v-alert>

#code

```vue
<template>
  <v-alert color="success" dismissable>
    <template #icon>
      <VIcon name="ic:round-check-circle" />
    </template>
    <template #x-button="{dismiss}">
      <VBtn @click="dismiss">Close</VBtn>
    </template>
    You changes have been saved.
  </v-alert>
</template>
```

::

## Custom Color

::component-preview
#preview
<v-alert color="indigo" dismissable>
  You changes have been saved.
</v-alert>

#code

```vue
<template>
  <v-alert
    color="indigo"
    dismissable
    :style="{
      '--alert-bg-color': 'var(--color-indigo-600)',
      '--alert-border-color': 'var(--color-indigo-600)',
      '--alert-text-color': 'var(--color-indigo-100)',
    }"
  >
    You changes have been saved.
  </v-alert>
</template>
```

::
