---
outline: deep
---

# List

The List component is a flexible way to display a list of items in your Vue application. This documentation covers how to use various features of the List component, such as links, slots, icons, headers, and collapse functionality.

## Usage

### Basic Usage

To use the `VList` component, just use the component in your template like so:

<LivePreview src="components-list--basic-list" >

```vue
<template>
  <VList>
    <VListItem>Item 1</VListItem>
    <VListItem>Item 2</VListItem>
    <VListItemDivider />
    <VListItem>Item 3</VListItem>
    <VListItemDivider />
    <VListItem>Item 4</VListItem>
    <VListItem>Item 5</VListItem>
  </VList>
</template>
```

</LivePreview>

::: info
The `VList` component is registered globally when you install with `@morpheme/ui`. So you don't need to import it manually.
:::

### Hover Effect

The Hover variant of the List component allows you to add custom shapes to the list items. You can use the `hover` prop on a ListItem to apply the default hover style, or use the `hover-class` prop to specify a custom `hover` class.

<LivePreview src="components-list--hover" >

```vue
<template>
  <VList hover>
    <VListItem>Default</VListItem>
    <VListItem hover hover-class="hover:bg-primary-200 hover:text-primary-700">
      Custom Class
    </VListItem>
    <VListItem
      hover
      hover-class="group-hover:bg-orange-200 group-hover:text-orange-700"
    >
      Group Hover
    </VListItem>
  </VList>
</template>
```

</LivePreview>

### Shaped

The Shaped variant of the List component allows you to add custom shapes to the list items. You can use the `shaped` prop on a ListItem to apply the default `shaped` style, or use the `shaped-class` prop to specify a custom `shaped` class.

<LivePreview src="components-list--shaped" >

```vue
<template>
  <VList shaped>
    <VListItem shaped v-for="i in 5" :key="i">Item</VListItem>
    <VListItem hover shaped shaped-class="rounded-l-full">
      Custom Shaped Class
    </VListItem>
  </VList>
</template>
```

</LivePreview>

### Rounded

The Rounded variant of the List component adds rounded corners to the list items. You can use the `rounded` prop on a `VListItem` to apply the rounded style.

<LivePreview src="components-list--rounded" >

```vue
<template>
  <VList>
    <VListItem hover rounded v-for="i in 5" :key="i">Item</VListItem>
  </VList>
</template>
```

</LivePreview>

### Tile

The Tile variant of the List component displays the list items as tiles. You can use the `tile` prop on a ListItem to apply the tile style.

<LivePreview src="components-list--tile" >

```vue
<template>
  <VList tile>
    <VListItem hover tile v-for="i in 5" :key="i">Item</VListItem>
  </VList>
</template>
```

</LivePreview>

### Hide Prepend & Hide Append

The List component allows you to hide the prepend and append elements of a `VListItem`. You can use the hide-prepend and hide-append props on a `VListItem` to hide these elements. Alternatively, you can pass the `hide-prepend` and `hide-append` props to the parent `VList` component and bind them to the child `VListItem` components via slot props.

<LivePreview src="components-list--hide-prepend-append" >

```vue
<template>
  <VList>
    <VListItem hide-prepend>Item 1</VListItem>
    <VListItem hide-prepend hide-append>Item 2</VListItem>
  </VList>
  <!-- use prop on parent and send it to child via slot props -->
  <VList hide-prepend hide-append v-slot="props">
    <VListItem v-bind="props">Item 3</VListItem>
    <VListItem v-bind="props">Item 4</VListItem>
  </VList>
</template>
```

</LivePreview>

### Hide Text

The `VList` component allows you to hide the text of a `VListItem`. You can use the `hide-text` prop on a `VListItem` to hide the text. This can be useful for displaying icons only, for example.

<LivePreview src="components-list--hide-text" >

```vue
<script setup lang="ts">
import {VList, VListItem} from '@morpheme/ui';
import {ref} from 'vue';
import VBtn from '@morpheme/button';

const hideText = ref(true);
</script>

<template>
  <VBtn @click="hideText = !hideText">
    {{ hideText ? 'Show' : 'Hide' }} Text
  </VBtn>
  <VList class="mt-4">
    <VListItem :hide-text="hideText" prepend-icon="ri:home-2-line" hide-append>
      Item 1
    </VListItem>
    <VListItem :hide-text="hideText" prepend-icon="ri:user-line" hide-append>
      Item 2
    </VListItem>
  </VList>
</template>
```

</LivePreview>

### Two Line

To display a list with two lines per list item, you can nest elements inside the `VListItem` component:

<LivePreview src="components-list--two-line" >

```vue
<template>
  <VList>
    <VListItem>
      <!-- main line -->
      <div>Item 1</div>
      <!-- sub line -->
      <div class="text-sm text-gray-500">Sub Item 1</div>
    </VListItem>
    <VListItem>
      <div>Item 2</div>
      <div class="text-sm text-gray-500">Sub Item 2</div>
    </VListItem>
    <VListItemDivider />
    <VListItem>
      <div>Item 3</div>
      <div class="text-sm text-gray-500">Sub Item 3</div>
    </VListItem>
    <VListItem>
      <div>Item 4</div>
      <div class="text-sm text-gray-500">Sub Item 4</div>
    </VListItem>
  </VList>
</template>
```

</LivePreview>

### Three Line

To display a list with three lines per list item, you can nest additional elements inside the `VListItem` component:

<LivePreview src="components-list--three-line" >

```vue
<template>
  <VList>
    <VListItem>
      <!-- main line -->
      <div>Item 1</div>
      <!-- sub line -->
      <div class="text-sm text-gray-500">Sub Item 1</div>
      <!-- additional line -->
      <p class="text-xs text-gray-700 mt-1">Lorem ipsum dolor sit amet</p>
    </VListItem>
    <VListItem>
      <div>Item 2</div>
      <div class="text-sm text-gray-500">Sub Item 2</div>
      <p class="text-xs text-gray-700 mt-1">Lorem ipsum dolor sit amet</p>
    </VListItem>
    <VListItemDivider />
    <VListItem>
      <div>Item 3</div>
      <div class="text-sm text-gray-500">Sub Item 3</div>
      <p class="text-xs text-gray-700 mt-1">Lorem ipsum dolor sit amet</p>
    </VListItem>
    <VListItem>
      <div>Item 4</div>
      <div class="text-sm text-gray-500">Sub Item 4</div>
      <p class="text-xs text-gray-700 mt-1">Lorem ipsum dolor sit amet</p>
    </VListItem>
  </VList>
</template>
```

</LivePreview>

### Link

You can use the `to` prop on a `VListItem` to make it a router link, or the `href` prop to make it a regular link:

<LivePreview src="components-list--link" >

```vue
<template>
  <VList>
    <VListItem to="/">Home</VListItem>
    <VListItem to="/profile">Profile</VListItem>
    <VListItem href="/settings">Settings</VListItem>
    <VListItem href="/logout">Logout</VListItem>
  </VList>
</template>
```

</LivePreview>

### Slots

The `VListItem` component has `prepend` and `append` slots that allow you to insert custom content at the beginning and end of each list item:

<LivePreview src="components-list--slots" >

```vue
<template>
  <VList>
    <VListItem>
      <template #prepend>
        <div class="text-cyan-500">prepend</div>
      </template>
      <template #append>
        <div class="text-orange-500">append</div>
      </template>

      default slot
    </VListItem>
  </VList>
</template>
```

</LivePreview>

### Icons

You can use the `prepend-icon` and `append-icon` props to add icons to your list items. The value for these props should be the name of the icon in the [Icones](https://icones.js.org/) icon set.

<LivePreview src="components-list--icons" >

```vue
<template>
  <VList>
    <VListItem prepend-icon="ri:user-line"> Item 1 </VListItem>
    <VListItem prepend-icon="ri:search-line"> Item 2 </VListItem>
    <VListItemDivider />
    <VListItem append-icon="ri:search-line"> Item 3 </VListItem>
    <VListItem append-icon="ri:search-line"> Item 4 </VListItem>
    <VListItemDivider />
    <VListItem prepend-icon="ri:home-line" append-icon="ri:search-line">
      Item 5
    </VListItem>
    <VListItem prepend-icon="ri:user-line" append-icon="ri:arrow-downs-line">
      Item 6
    </VListItem>
  </VList>
</template>
```

</LivePreview>

### Header

You can use the `VListItemHeader` component to add header to the list.

<LivePreview src="components-list--header" >

```vue
<template>
  <VList>
    <VListItem prepend-icon="ri:user-line"> Home </VListItem>
    <VListItem prepend-icon="ri:search-line"> User Management </VListItem>
    <VList class="mt-2">
      <VListItemHeader prepend-icon="ri:search-line"> Blog </VListItemHeader>
      <VListItem prepend-icon="ri:user-line"> Add New Post </VListItem>
      <VListItem prepend-icon="ri:user-line"> View Comments </VListItem>
    </VList>
    <VList class="mt-2">
      <VListItemHeader prepend-icon="ri:user-line"> Shop </VListItemHeader>
      <VListItem prepend-icon="ri:user-line"> View Dashboard </VListItem>
      <VListItem prepend-icon="ri:user-line"> Sales </VListItem>
    </VList>
  </VList>
</template>
```

</LivePreview>

### Collapse

You can use the `VListCollapse` component to add collapsible list.

<LivePreview src="components-list--collapse">

```vue
<template>
  <VList>
    <VListItem prepend-icon="ri:home-2-line"> Home </VListItem>
    <VListCollapse>
      <template #activator="{isOpen, toggle}">
        <VListItem
          prepend-icon="ri:book-line"
          append-icon="ri:arrow-down-s-line"
          :append-icon-class="isOpen ? 'rotate-180' : ''"
          @click="toggle"
        >
          Blog
        </VListItem>
      </template>
      <VList>
        <VListItem> Add New Post </VListItem>
        <VListItem> View Comments </VListItem>
      </VList>
    </VListCollapse>
    <VListCollapse>
      <template #activator="{isOpen, toggle}">
        <VListItem
          prepend-icon="ri:user-line"
          append-icon="ri:arrow-down-s-line"
          :append-icon-class="isOpen ? 'rotate-180' : ''"
          @click="toggle"
        >
          Shop
        </VListItem>
      </template>
      <VList>
        <VListItem> View Dashboard </VListItem>
        <VListItem> Sales </VListItem>
      </VList>
    </VListCollapse>
  </VList>
</template>
```

</LivePreview>

### Image

You can place image to the list using `prepend` slot in the `VListItem` component.

<LivePreview src="components-list--image">

```vue
<script setup lang="ts">
import {ref} from 'vue';

const users = ref([
  {
    name: 'Alexander Hipp',
    email: 'alex@example.com',
    image:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
  },
  {
    name: 'Julian Wann',
    email: 'julian@example.com',
    image:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
]);
</script>

<template>
  <VList>
    <VListItemHeader class="font-semibold">Teams</VListItemHeader>
    <VListItem
      v-for="(user, idx) in users"
      :key="idx"
      append-icon="ri:phone-line"
      append-icon-class="text-orange-500"
      class="hover:bg-orange-100"
    >
      <template #prepend>
        <img
          :src="user.image"
          width="40"
          height="40"
          class="shrink-0 w-10 h-10 rounded object-cover"
        />
      </template>
      <div class="font-semibold">
        {{ user.name }}
      </div>
      <p class="text-sm text-gray-500">
        {{ user.email }}
      </p>
    </VListItem>
  </VList>
</template>
```

</LivePreview>

### Navigation Drawer VList

This example shows how to use `VList` inside `VNavDrawer` component to create sidebar navigation component.

<LivePreview src="components-list--nav-drawer-list" >

```vue
<script setup lang="ts">
import {VList, VListItem, VListCollapse, VNavDrawer} from '@morpheme/ui';
import {ref} from 'vue';

const isOpen = ref(false);
const isMini = ref(false);
const menus = ref([
  {
    title: 'Home',
    to: '/',
    prependIcon: 'ri:home-2-line',
  },
  {
    title: 'Blog',
    to: '/',
    prependIcon: 'ri:book-line',
    items: [
      {
        title: 'Posts',
        to: '/',
      },
      {
        title: 'Comments',
        to: '/',
      },
    ],
  },
  {
    title: 'Shop',
    to: '/',
    prependIcon: 'ri:user-line',
    items: [
      {
        title: 'Products',
        to: '/',
      },
      {
        title: 'Categories',
        to: '/',
      },
    ],
  },
  {
    title: 'Long Text Management Example',
    to: '/',
    prependIcon: 'ri:cart-line',
  },
]);
</script>

<template>
  <div class="sm:ml-[300px] space-x-2">
    <v-btn @click="isOpen = !isOpen">Toggle Open</v-btn>
    <v-btn @click="isMini = !isMini">Toggle Mini</v-btn>
    <pre class="mt-5">State: {{ {isOpen, isMini} }}</pre>
  </div>
  <v-nav-drawer
    v-model="isOpen"
    v-model:mini="isMini"
    hide-toggle
    class="absolute"
  >
    <template #logo.mini>
      <div class="text-center font-semibold">Morpheme</div>
    </template>
    <template #menus>
      <VList>
        <template v-for="menu in menus" :key="menu.text">
          <VListCollapse v-if="menu.items">
            <template #activator="{isOpen, toggle}">
              <VListItem
                v-bind="menu"
                :class="isMini ? 'justify-center' : ''"
                :hide-text="isMini"
                :hide-append="isMini"
                append-icon="ri:arrow-down-s-line"
                :append-icon-class="isOpen ? 'rotate-180' : ''"
                @click="toggle"
              >
                {{ menu.title }}
              </VListItem>
            </template>
            <VList>
              <VListItem
                v-for="child in menu.items"
                :key="child.text"
                v-bind="child"
                :class="isMini ? 'justify-center' : ''"
                :hide-text="isMini"
                :hide-append="isMini"
              >
                {{ child.title }}
              </VListItem>
            </VList>
          </VListCollapse>
          <VListItem
            v-else
            v-bind="menu"
            :class="isMini ? 'justify-center' : ''"
            :hide-text="isMini"
            :hide-append="isMini"
          >
            {{ menu.title }}
          </VListItem>
        </template>
      </VList>
    </template>
  </v-nav-drawer>
</template>
```

</LivePreview>

### IOS Settings

This example shows how to create IOS Settings menu using `VList` component.

<LivePreview src="components-list--ios-settings" >

```vue
<template>
  <VList class="border rounded-xl">
    <VListItem
      hover
      tile
      append-icon="ri:arrow-right-s-line"
      append-icon-class="text-gray-500"
    >
      <template #prepend>
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
          width="40"
          height="40"
          class="shrink-0 w-10 h-10 rounded-full object-cover"
        />
      </template>
      <div>
        <div class="font-semibold">John Doe</div>
        <p class="text-sm text-gray-500 truncate">
          Apple ID, iCloud+, Media & Purchases
        </p>
      </div>
    </VListItem>
  </VList>
  <VList class="border rounded-xl mt-6 divide divide-y">
    <VListItem
      hover
      tile
      prepend-icon="ion:ios-airplane"
      prepend-class="p-1 bg-orange-500 text-white rounded"
      append-icon="ri:arrow-right-s-line"
      append-icon-class="text-gray-500"
    >
      Airplane Mode
    </VListItem>
    <VListItem
      hover
      tile
      prepend-icon="ic:outline-wifi"
      prepend-class="p-1 bg-blue-500 text-white rounded"
      append-icon="ri:arrow-right-s-line"
      append-icon-class="text-gray-500"
      append-text="Coffee Wifi"
      append-text-class="text-sm text-gray-800"
    >
      Wifi
    </VListItem>
    <VListItem
      hover
      tile
      prepend-icon="ri:bluetooth-line"
      prepend-class="p-1 bg-blue-500 text-white rounded"
      append-icon="ri:arrow-right-s-line"
      append-icon-class="text-gray-500"
      append-text="On"
      append-text-class="text-sm text-gray-800"
    >
      Bluetooth
    </VListItem>
    <VListItem
      hover
      tile
      prepend-icon="ic:sharp-cell-tower"
      prepend-class="p-1 bg-green-500 text-white rounded"
      append-icon="ri:arrow-right-s-line"
      append-icon-class="text-gray-500"
    >
      Cellular
    </VListItem>
    <VListItem
      hover
      tile
      prepend-icon="ri:hotspot-line"
      prepend-class="p-1 bg-green-500 text-white rounded"
      append-icon="ri:arrow-right-s-line"
      append-icon-class="text-gray-500"
    >
      Personal Hotspot
    </VListItem>
    <VListItem
      hover
      tile
      prepend-icon="material-symbols:vpn-lock"
      prepend-class="p-1 bg-blue-500 text-white rounded"
      append-icon="ri:arrow-right-s-line"
      append-icon-class="text-gray-500"
    >
      VPN
    </VListItem>
  </VList>
</template>
```

</LivePreview>

### Dropdown

This example shows how to use `VList` component in the dropdown component.

<LivePreview src="components-list--list-in-dropdown" >

```vue
<template>
  <VDropdown label="Dropdown" panel-class="p-0">
    <VList>
      <VListItem
        hover
        tile
        append-icon="ri:arrow-right-s-line"
        append-icon-class="text-gray-500"
      >
        <template #prepend>
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
            width="40"
            height="40"
            class="shrink-0 w-10 h-10 rounded-full object-cover"
          />
        </template>
        <div>
          <div class="font-semibold">John Doe</div>
          <p class="text-sm text-gray-500 truncate">
            Apple ID, iCloud+, Media & Purchases
          </p>
        </div>
      </VListItem>
    </VList>
    <VList class="mt-6 divide divide-y border-t">
      <VListItem
        hover
        tile
        prepend-icon="ion:ios-airplane"
        prepend-class="p-1 bg-orange-500 text-white rounded"
        append-icon="ri:arrow-right-s-line"
        append-icon-class="text-gray-500"
      >
        Airplane Mode
      </VListItem>
      <VListItem
        hover
        tile
        prepend-icon="ic:outline-wifi"
        prepend-class="p-1 bg-blue-500 text-white rounded"
        append-icon="ri:arrow-right-s-line"
        append-icon-class="text-gray-500"
        append-text="Coffee Wifi"
        append-text-class="text-sm text-gray-800"
      >
        Wifi
      </VListItem>
      <VListItem
        hover
        tile
        prepend-icon="ri:bluetooth-line"
        prepend-class="p-1 bg-blue-500 text-white rounded"
        append-icon="ri:arrow-right-s-line"
        append-icon-class="text-gray-500"
        append-text="On"
        append-text-class="text-sm text-gray-800"
      >
        Bluetooth
      </VListItem>
      <VListItem
        hover
        tile
        prepend-icon="ic:sharp-cell-tower"
        prepend-class="p-1 bg-green-500 text-white rounded"
        append-icon="ri:arrow-right-s-line"
        append-icon-class="text-gray-500"
      >
        Cellular
      </VListItem>
      <VListItem
        hover
        tile
        prepend-icon="ri:hotspot-line"
        prepend-class="p-1 bg-green-500 text-white rounded"
        append-icon="ri:arrow-right-s-line"
        append-icon-class="text-gray-500"
      >
        Personal Hotspot
      </VListItem>
      <VListItem
        hover
        tile
        prepend-icon="material-symbols:vpn-lock"
        prepend-class="p-1 bg-blue-500 text-white rounded"
        append-icon="ri:arrow-right-s-line"
        append-icon-class="text-gray-500"
      >
        VPN
      </VListItem>
    </VList>
  </VDropdown>
</template>
```

</LivePreview>

### Event

This example demonstrates how to use events in the `VList` component. It shows examples of how to listen for clicks on the `prepend` and `append` icons, the prepend and append icon wrapper areas, and the append text. When one of these elements is clicked, a message is displayed using the `showMessage` function.

<LivePreview src="components-list--event" >

```vue
<script setup lang="ts">
const showMessage = (message: string) => alert(`Clicked: ${message}`);
</script>

<template>
  <VList>
    <VListItem
      prepend-icon="ri:home-2-line"
      @click:prependIcon="showMessage('prependIcon')"
    >
      Click on the icon
    </VListItem>
    <VListItem
      append-icon="ri:user-line"
      @click:appendIcon="showMessage('appendIcon')"
    >
      Click on the icon
    </VListItem>
    <VListItem
      prepend-class="p-1 rounded bg-cyan-500"
      prepend-icon="ri:home-2-line"
      @click:prepend="showMessage('prepend')"
    >
      Click on the icon wrapper area
    </VListItem>
    <VListItem
      append-class="p-1 rounded bg-sky-500"
      append-icon="ri:user-line"
      @click:append="showMessage('append')"
    >
      Click on the icon wrapper area
    </VListItem>
    <VListItem
      append-icon="ri:arrow-right-s-line"
      append-text="Click me"
      append-text-class="hover:underline"
      @click:appendText="showMessage('appendText')"
    >
      Click on the append text
    </VListItem>
  </VList>
</template>
```

</LivePreview>

## Props

### `VList`

| Property      | Type      | Description                                        |
| ------------- | --------- | -------------------------------------------------- |
| `hidePrepend` | `boolean` | Whether to hide the prepend element.               |
| `hideAppend`  | `boolean` | Whether to hide the append element.                |
| `shaped`      | `boolean` | Whether to apply shaped styling to the list item.  |
| `rounded`     | `boolean` | Whether to apply rounded styling to the list item. |
| `tile`        | `boolean` | Whether to apply tile styling to the list item.    |
| `hover`       | `boolean` | Whether to apply hover styling to the list item.   |
| `flush`       | `boolean` | Whether to remove the border between list items.   |
| `dense`       | `boolean` | Whether to reduce the padding on the list item.    |
| `small`       | `boolean` | Whether to apply small styling to the list item.   |

### `VListItem`

| Name                                    | Type                      | Default               |
| --------------------------------------- | ------------------------- | --------------------- |
| [`to`](#to)                             | `string \| RouteLocation` | `undefined`           |
| [`href`](#href)                         | string                    | `undefined`           |
| [`as`](#as)                             | any                       | `undefined`           |
| [`defaultClass`](#defaultClass)         | string                    | ``                    |
| [`prependClass`](#prependClass)         | string                    | ``                    |
| [`prependIcon`](#prependIcon)           | string                    | `''`                  |
| [`prependIconClass`](#prependIconClass) | string                    | `''`                  |
| [`appendClass`](#appendClass)           | string                    | ``                    |
| [`appendIcon`](#appendIcon)             | string                    | `''`                  |
| [`appendIconClass`](#appendIconClass)   | string                    | `''`                  |
| [`hidePrepend`](#hidePrepend)           | boolean                   | `false`               |
| [`hideAppend`](#hideAppend)             | boolean                   | `false`               |
| [`hover`](#hover)                       | boolean                   | `false`               |
| [`hoverClass`](#hoverClass)             | string                    | `v-list-item--hover`  |
| [`shaped`](#shaped)                     | boolean                   | `false`               |
| [`shapedClass`](#shapedClass)           | string                    | `v-list-item--shaped` |
| [`rounded`](#rounded)                   | boolean                   | `false`               |
| [`hideText`](#hideText)                 | boolean                   | `false`               |
| [`appendText`](#appendText)             | string                    | `''`                  |
| [`appendTextClass`](#appendTextClass)   | string                    | `false`               |
| [`tile`](#tile)                         | boolean                   | `false`               |

## Events

### `VList`

None.

### `VListItem`

| Event                            | Description                                                               |
| -------------------------------- | ------------------------------------------------------------------------- |
| `(e: 'click:prepend'): void`     | Emitted when the element wrapped around the `prepend` slot is clicked.    |
| `(e: 'click:prependIcon'): void` | Emitted when the `prependIcon` element is clicked.                        |
| `(e: 'click:append'): void`      | Emitted when the element wrapped around the `append` slot is clicked.     |
| `(e: 'click:appendIcon'): void`  | Emitted when the `appendIcon` element is clicked.                         |
| `(e: 'click:appendText'): void`  | Emitted when the element wrapped around the `appendText` slot is clicked. |

Here is example of listening event in `VListItem` component:

```vue
<script setup lang="ts">
function handleClickPrepend() {
  // handle click event on prepend slot
}
</script>

<template>
  <VList>
    <VListItem @click:prepend="handleClickPrepend">
      <template #prepend>
        <div class="text-cyan-500">prepend</div>
      </template>
    </VListItem>
  </VList>
</template>
```

## Slots

| Event          | Description                                                      |
| -------------- | ---------------------------------------------------------------- |
| `prepend`      | Slot for custom content to be displayed before the main content. |
| `prepend.icon` | Slot for a custom icon to be displayed before the main content.  |
| `default`      | The default slot for the main content.                           |
| `append`       | Slot for custom content to be displayed after the main content.  |
| `append.icon`  | Slot for a custom icon to be displayed after the main content.   |
| `append.text`  | Slot for custom text to be displayed after the main content.     |

Here is example of using slot in `VListItem` component:

```vue
<template>
  <VList>
    <VListItem>
      <template #prepend>
        <div class="text-cyan-500">prepend</div>
      </template>
    </VListItem>
  </VList>
</template>
```

## CSS Variables

```scss
:root {
  --v-list-padding-y: var(--size-spacing-1);
  --v-list-padding-x: var(--size-spacing-1);
  --v-list-gap: 0;
  --v-list-bg-color: var(--color-transparent);

  /* item */
  --v-list-item-bg-color: var(--color-transparent);
  --v-list-item-color: var(--color-gray-700);
  --v-list-item-padding-y: var(--size-spacing-2);
  --v-list-item-padding-x: var(--size-spacing-3);
  --v-list-item-border-radius: var(--border-radius-md);
  --v-list-item-border-width: 0;
  --v-list-item-border-color: var(--color-transparent);
  --v-list-item-border-style: solid;
  --v-list-item-gap: var(--size-spacing-3);
  --v-list-item-font-size: var(--size-font-sm);
  --v-list-item-font-weight: var(--font-weight-regular);
  --v-list-item-line-height: 20px;
  --v-list-item-text-align: left;
  --v-list-item-icon-width: var(--size-spacing-4);
  --v-list-item-icon-height: var(--size-spacing-4);

  /* item hover */
  --v-list-item-hover-bg-color: var(--color-gray-100);
  --v-list-item-hover-color: var(--color-gray-700);

  /* append & prepend */
  --v-list-item-append-prepend-min-width: var(--size-spacing-5);

  /* item header */
  --v-list-item-header-bg-color: var(--v-list-item-bg-color);
  --v-list-item-header-color: var(--color-gray-500);
  --v-list-item-header-padding-y: var(--size-spacing-1);
  --v-list-item-header-padding-x: var(--v-list-item-padding-x);
  --v-list-item-header-border-radius: var(--v-list-item-border-radius);
  --v-list-item-header-border-width: var(--v-list-item-border-width);
  --v-list-item-header-border-color: var(--v-list-item-border-color);
  --v-list-item-header-border-style: var(--v-list-item-border-style);
  --v-list-item-header-gap: var(--v-list-item-gap);
  --v-list-item-header-font-size: var(--size-font-xs);
  --v-list-item-header-font-weight: var(--font-weight-medium);
  --v-list-item-header-line-height: var(--v-list-item-line-height);
  --v-list-item-header-text-transform: uppercase;
  --v-list-item-header-text-align: var(--v-list-item-text-align);

  /* divider */
  --v-list-item-divider-width: 1px;
  --v-list-item-divider-color: var(--color-gray-200);
  --v-list-item-divider-style: solid;

  // icon
  --v-list-item-icon-color: var(--v-list-item-color);

  // append text
  --v-list-item-append-text-color: var(--v-list-item-color);
  --v-list-item-append-font-size: var(--v-list-item-font-size);
  --v-list-item-append-font-weight: var(--v-list-item-font-weight);
}
```

View full styles [here](https://github.com/gitsindonesia/ui-component/blob/main/packages/list/src/List.scss).

## Standalone Installation

You can also install the `VList` component individually via `@morpheme/list` package:

```bash
npm i @morpheme/list
```

Then, use it in the template like so:

```vue
<script setup lang="ts">
import {VList, VListItem} from '@morpheme/list';
</script>

<template>
  <VList>
    <VListItem prepend-icon="ic:round-home"> Text </VListItem>
  </VList>
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-list--default).
