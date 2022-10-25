# List

## Usage

### Basic Usage

```vue
<script setup lang="ts">
import {List, ListItem, ListItemDivider} from '@gits-id/ui';
</script>

<template>
  <List>
    <ListItem>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
    <ListItemDivider />
    <ListItem>Item 3</ListItem>
    <ListItemDivider />
    <ListItem>Item 4</ListItem>
    <ListItem>Item 5</ListItem>
  </List>
</template>
```

<LivePreview src="components-list--basic-list" />

::: info
The `VList` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### Hover Effect

```vue
<script setup lang="ts">
import {List, ListItem} from '@gits-id/ui';
</script>

<template>
  <List>
    <ListItem hover>Default</ListItem>
    <ListItem hover hover-class="hover:bg-primary-200 hover:text-primary-700">
      Custom Class
    </ListItem>
    <ListItem
      hover
      hover-class="group-hover:bg-orange-200 group-hover:text-orange-700"
    >
      Group Hover
    </ListItem>
  </List>
</template>
```

<LivePreview src="components-list--hover" />

### Shaped

```vue
<script setup lang="ts">
import {List, ListItem} from '@gits-id/ui';
</script>

<template>
  <List>
    <ListItem hover shaped v-for="i in 5" :key="i">Item</ListItem>
    <ListItem hover shaped shaped-class="rounded-l-full">
      Custom Shaped Class
    </ListItem>
  </List>
</template>
```

<LivePreview src="components-list--shaped" />

### Rounded

```vue
<script setup lang="ts">
import {List, ListItem} from '@gits-id/ui';
</script>

<template>
  <List>
    <ListItem hover rounded v-for="i in 5" :key="i">Item</ListItem>
  </List>
</template>
```

<LivePreview src="components-list--rounded" />

### Tile

```vue
<script setup lang="ts">
import {List, ListItem} from '@gits-id/ui';
</script>

<template>
  <List>
    <ListItem hover tile v-for="i in 5" :key="i">Item</ListItem>
  </List>
</template>
```

<LivePreview src="components-list--tile" />

### Hide Prepend & Hide Append

```vue
<script setup lang="ts">
import {List, ListItem} from '@gits-id/ui';
</script>

<template>
  <List>
    <ListItem hide-prepend>Item 1</ListItem>
    <ListItem hide-prepend hide-append>Item 2</ListItem>
  </List>
  <!-- use prop on parent and send it to child via slot props -->
  <List hide-prepend hide-append v-slot="props">
    <ListItem v-bind="props">Item 3</ListItem>
    <ListItem v-bind="props">Item 4</ListItem>
  </List>
</template>
```

<LivePreview src="components-list--hide-prepend-append" />

### Hide Text

```vue
<script setup lang="ts">
import {List, ListItem} from '@gits-id/ui';
import {ref} from 'vue';
import VBtn from '@gits-id/button';

const hideText = ref(true);
</script>

<template>
  <VBtn @click="hideText = !hideText">
    {{ hideText ? 'Show' : 'Hide' }} Text
  </VBtn>
  <List class="mt-4">
    <ListItem :hide-text="hideText" prepend-icon="ri:home-2-line" hide-append>
      Item 1
    </ListItem>
    <ListItem :hide-text="hideText" prepend-icon="ri:user-line" hide-append>
      Item 2
    </ListItem>
  </List>
</template>
```

<LivePreview src="components-list--hide-text" />

### Two Line

```vue
<script setup lang="ts">
import {List, ListItem} from '@gits-id/ui';
</script>

<template>
  <List>
    <ListItem>
      <div>Item 1</div>
      <div class="text-sm text-gray-500">Sub Item 1</div>
    </ListItem>
    <ListItem>
      <div>Item 2</div>
      <div class="text-sm text-gray-500">Sub Item 2</div>
    </ListItem>
    <ListItemDivider />
    <ListItem>
      <div>Item 3</div>
      <div class="text-sm text-gray-500">Sub Item 3</div>
    </ListItem>
    <ListItem>
      <div>Item 4</div>
      <div class="text-sm text-gray-500">Sub Item 4</div>
    </ListItem>
  </List>
</template>
```

<LivePreview src="components-list--two-line" />

### Three Line

```vue
<script setup lang="ts">
import {List, ListItem} from '@gits-id/ui';
</script>

<template>
  <List>
    <ListItem>
      <div>Item 1</div>
      <div class="text-sm text-gray-500">Sub Item 1</div>
      <p class="text-xs text-gray-700 mt-1">Lorem ipsum dolor sit amet</p>
    </ListItem>
    <ListItem>
      <div>Item 2</div>
      <div class="text-sm text-gray-500">Sub Item 2</div>
      <p class="text-xs text-gray-700 mt-1">Lorem ipsum dolor sit amet</p>
    </ListItem>
    <ListItemDivider />
    <ListItem>
      <div>Item 3</div>
      <div class="text-sm text-gray-500">Sub Item 3</div>
      <p class="text-xs text-gray-700 mt-1">Lorem ipsum dolor sit amet</p>
    </ListItem>
    <ListItem>
      <div>Item 4</div>
      <div class="text-sm text-gray-500">Sub Item 4</div>
      <p class="text-xs text-gray-700 mt-1">Lorem ipsum dolor sit amet</p>
    </ListItem>
  </List>
</template>
```

<LivePreview src="components-list--three-line" />

### Link

```vue
<script setup lang="ts">
import {List, ListItem} from '@gits-id/ui';
</script>

<template>
  <List>
    <ListItem to="/">Home</ListItem>
    <ListItem to="/profile">Profile</ListItem>
    <ListItem href="/settings">Settings</ListItem>
    <ListItem href="/logout">Logout</ListItem>
  </List>
</template>
```

<LivePreview src="components-list--link" />

### Slots

```vue
<script setup lang="ts">
import {List, ListItem} from '@gits-id/ui';
</script>

<template>
  <List>
    <ListItem>
      <template #prepend>
        <div class="text-cyan-500">prepend</div>
      </template>
      <template #append>
        <div class="text-orange-500">append</div>
      </template>

      default slot
    </ListItem>
  </List>
</template>
```

<LivePreview src="components-list--slots" />

### Icons

```vue
<script setup lang="ts">
import {List, ListItem} from '@gits-id/ui';
</script>

<template>
  <List>
    <ListItem prepend-icon="ri:user-line"> Item 1 </ListItem>
    <ListItem prepend-icon="ri:search-line"> Item 2 </ListItem>
    <ListItemDivider />
    <ListItem append-icon="ri:search-line"> Item 3 </ListItem>
    <ListItem append-icon="ri:search-line"> Item 4 </ListItem>
    <ListItemDivider />
    <ListItem prepend-icon="ri:home-line" append-icon="ri:search-line">
      Item 5
    </ListItem>
    <ListItem prepend-icon="ri:user-line" append-icon="ri:arrow-downs-line">
      Item 6
    </ListItem>
  </List>
</template>
```

<LivePreview src="components-list--icons" />

### Header

```vue
<script setup lang="ts">
import {List, ListItem, ListItemHeader} from '@gits-id/ui';
</script>

<template>
  <List>
    <ListItem prepend-icon="ri:user-line"> Home </ListItem>
    <ListItem prepend-icon="ri:search-line"> User Management </ListItem>
    <List class="mt-2">
      <ListItemHeader prepend-icon="ri:search-line"> Blog </ListItemHeader>
      <ListItem prepend-icon="ri:user-line"> Add New Post </ListItem>
      <ListItem prepend-icon="ri:user-line"> View Comments </ListItem>
    </List>
    <List class="mt-2">
      <ListItemHeader prepend-icon="ri:user-line"> Shop </ListItemHeader>
      <ListItem prepend-icon="ri:user-line"> View Dashboard </ListItem>
      <ListItem prepend-icon="ri:user-line"> Sales </ListItem>
    </List>
  </List>
</template>
```

<LivePreview src="components-list--header" />

### Collapse

```vue
<script setup lang="ts">
import {List, ListItem, ListCollapse} from '@gits-id/ui';
</script>

<template>
  <List>
    <ListItem prepend-icon="ri:home-2-line"> Home </ListItem>
    <ListCollapse>
      <template #activator="{isOpen, toggle}">
        <ListItem
          prepend-icon="ri:book-line"
          append-icon="ri:arrow-down-s-line"
          :append-icon-class="isOpen ? 'rotate-180' : ''"
          @click="toggle"
        >
          Blog
        </ListItem>
      </template>
      <List>
        <ListItem> Add New Post </ListItem>
        <ListItem> View Comments </ListItem>
      </List>
    </ListCollapse>
    <ListCollapse>
      <template #activator="{isOpen, toggle}">
        <ListItem
          prepend-icon="ri:user-line"
          append-icon="ri:arrow-down-s-line"
          :append-icon-class="isOpen ? 'rotate-180' : ''"
          @click="toggle"
        >
          Shop
        </ListItem>
      </template>
      <List>
        <ListItem> View Dashboard </ListItem>
        <ListItem> Sales </ListItem>
      </List>
    </ListCollapse>
  </List>
</template>
```

<LivePreview src="components-list--collapse" />

### Image

```vue
<script setup lang="ts">
import {List, ListItem, ListItemHeader} from '@gits-id/ui';
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
  <List>
    <ListItemHeader class="font-semibold">Teams</ListItemHeader>
    <ListItem
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
    </ListItem>
  </List>
</template>
```

<LivePreview src="components-list--image" />

### Navigation Drawer List

```vue
<script setup lang="ts">
import {List, ListItem, ListCollapse, VNavDrawer} from '@gits-id/ui';
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
      <div class="text-center font-semibold">GITS</div>
    </template>
    <template #menus>
      <List>
        <template v-for="menu in menus" :key="menu.text">
          <ListCollapse v-if="menu.items">
            <template #activator="{isOpen, toggle}">
              <ListItem
                v-bind="menu"
                :class="isMini ? 'justify-center' : ''"
                :hide-text="isMini"
                :hide-append="isMini"
                append-icon="ri:arrow-down-s-line"
                :append-icon-class="isOpen ? 'rotate-180' : ''"
                @click="toggle"
              >
                {{ menu.title }}
              </ListItem>
            </template>
            <List>
              <ListItem
                v-for="child in menu.items"
                :key="child.text"
                v-bind="child"
                :class="isMini ? 'justify-center' : ''"
                :hide-text="isMini"
                :hide-append="isMini"
              >
                {{ child.title }}
              </ListItem>
            </List>
          </ListCollapse>
          <ListItem
            v-else
            v-bind="menu"
            :class="isMini ? 'justify-center' : ''"
            :hide-text="isMini"
            :hide-append="isMini"
          >
            {{ menu.title }}
          </ListItem>
        </template>
      </List>
    </template>
  </v-nav-drawer>
</template>
```

<LivePreview src="components-list--nav-drawer-list" />

### IOS Settings

```vue
<script setup lang="ts">
import {List, ListItem} from '@gits-id/ui';
</script>

<template>
  <List class="border rounded-xl">
    <ListItem
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
    </ListItem>
  </List>
  <List class="border rounded-xl mt-6 divide divide-y">
    <ListItem
      hover
      tile
      prepend-icon="ion:ios-airplane"
      prepend-class="p-1 bg-orange-500 text-white rounded"
      append-icon="ri:arrow-right-s-line"
      append-icon-class="text-gray-500"
    >
      Airplane Mode
    </ListItem>
    <ListItem
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
    </ListItem>
    <ListItem
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
    </ListItem>
    <ListItem
      hover
      tile
      prepend-icon="ic:sharp-cell-tower"
      prepend-class="p-1 bg-green-500 text-white rounded"
      append-icon="ri:arrow-right-s-line"
      append-icon-class="text-gray-500"
    >
      Cellular
    </ListItem>
    <ListItem
      hover
      tile
      prepend-icon="ri:hotspot-line"
      prepend-class="p-1 bg-green-500 text-white rounded"
      append-icon="ri:arrow-right-s-line"
      append-icon-class="text-gray-500"
    >
      Personal Hotspot
    </ListItem>
    <ListItem
      hover
      tile
      prepend-icon="material-symbols:vpn-lock"
      prepend-class="p-1 bg-blue-500 text-white rounded"
      append-icon="ri:arrow-right-s-line"
      append-icon-class="text-gray-500"
    >
      VPN
    </ListItem>
  </List>
</template>
```

<LivePreview src="components-list--ios-settings" />

### Dropdown

```vue
<script setup lang="ts">
import {List, ListItem, Dropdown} from '@gits-id/ui';
</script>

<template>
  <Dropdown label="Dropdown" panel-class="p-0">
    <List>
      <ListItem
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
      </ListItem>
    </List>
    <List class="mt-6 divide divide-y border-t">
      <ListItem
        hover
        tile
        prepend-icon="ion:ios-airplane"
        prepend-class="p-1 bg-orange-500 text-white rounded"
        append-icon="ri:arrow-right-s-line"
        append-icon-class="text-gray-500"
      >
        Airplane Mode
      </ListItem>
      <ListItem
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
      </ListItem>
      <ListItem
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
      </ListItem>
      <ListItem
        hover
        tile
        prepend-icon="ic:sharp-cell-tower"
        prepend-class="p-1 bg-green-500 text-white rounded"
        append-icon="ri:arrow-right-s-line"
        append-icon-class="text-gray-500"
      >
        Cellular
      </ListItem>
      <ListItem
        hover
        tile
        prepend-icon="ri:hotspot-line"
        prepend-class="p-1 bg-green-500 text-white rounded"
        append-icon="ri:arrow-right-s-line"
        append-icon-class="text-gray-500"
      >
        Personal Hotspot
      </ListItem>
      <ListItem
        hover
        tile
        prepend-icon="material-symbols:vpn-lock"
        prepend-class="p-1 bg-blue-500 text-white rounded"
        append-icon="ri:arrow-right-s-line"
        append-icon-class="text-gray-500"
      >
        VPN
      </ListItem>
    </List>
  </Dropdown>
</template>
```

<LivePreview src="components-list--list-in-dropdown" />

### Event

```vue
<script setup lang="ts">
import {List, ListItem} from '@gits-id/ui';

const showMessage = (message: string) => alert(`Clicked: ${message}`);
</script>

<template>
  <List>
    <ListItem
      prepend-icon="ri:home-2-line"
      @click:prependIcon="showMessage('prependIcon')"
    >
      Click on the icon
    </ListItem>
    <ListItem
      append-icon="ri:user-line"
      @click:appendIcon="showMessage('appendIcon')"
    >
      Click on the icon
    </ListItem>
    <ListItem
      prepend-class="p-1 rounded bg-cyan-500"
      prepend-icon="ri:home-2-line"
      @click:prepend="showMessage('prepend')"
    >
      Click on the icon wrapper area
    </ListItem>
    <ListItem
      append-class="p-1 rounded bg-sky-500"
      append-icon="ri:user-line"
      @click:append="showMessage('append')"
    >
      Click on the icon wrapper area
    </ListItem>
    <ListItem
      append-icon="ri:arrow-right-s-line"
      append-text="Click me"
      append-text-class="hover:underline"
      @click:appendText="showMessage('appendText')"
    >
      Click on the append text
    </ListItem>
  </List>
</template>
```

<LivePreview src="components-list--event" />

## Props

### `List`

| Name                          | Type      | Default |
| ----------------------------- | --------- | ------- |
| [`hideAppend`](#hideAppend)   | `boolean` | `false` |
| [`hidePrepend`](#hidePrepend) | `boolean` | `false` |

### `ListItem`

| Name                                    | Type                      | Default                                  |
| --------------------------------------- | ------------------------- | ---------------------------------------- |
| [`to`](#to)                             | `string \| RouteLocation` | `undefined`                              |
| [`href`](#href)                         | string                    | `undefined`                              |
| [`as`](#as)                             | any                       | `undefined`                              |
| [`defaultClass`](#defaultClass)         | string                    | `select-none truncate whitespace-nowrap` |
| [`prependClass`](#prependClass)         | string                    | `w-auto shrink-0`                        |
| [`prependIcon`](#prependIcon)           | string                    | `''`                                     |
| [`prependIconClass`](#prependIconClass) | string                    | `''`                                     |
| [`appendClass`](#appendClass)           | string                    | `w-auto shrink-0`                        |
| [`appendIcon`](#appendIcon)             | string                    | `''`                                     |
| [`appendIconClass`](#appendIconClass)   | string                    | `''`                                     |
| [`hidePrepend`](#hidePrepend)           | boolean                   | `false`                                  |
| [`hideAppend`](#hideAppend)             | boolean                   | `false`                                  |
| [`hover`](#hover)                       | boolean                   | `false`                                  |
| [`hoverClass`](#hoverClass)             | string                    | `hover:bg-gray-100`                      |
| [`shaped`](#shaped)                     | boolean                   | `false`                                  |
| [`shapedClass`](#shapedClass)           | string                    | `rounded-r-full`                         |
| [`rounded`](#rounded)                   | boolean                   | `false`                                  |
| [`hideText`](#hideText)                 | boolean                   | `false`                                  |
| [`appendText`](#appendText)             | string                    | `''`                                     |
| [`appendTextClass`](#appendTextClass)   | string                    | `false`                                  |
| [`tile`](#tile)                         | boolean                   | `false`                                  |

## Methods

None

## Events

### `ListItem`

- `(e: 'click:prepend'): void`

- `(e: 'click:prependIcon'): void`

- `(e: 'click:append'): void`

- `(e: 'click:appendIcon'): void`

- `(e: 'click:appendText'): void`

## Slots

#### `ListItem`

- `prepend`

- `prepend.icon`

- `default`

- `append`

- `append.icon`

- `append.text`

## CSS Variables

None

## Manual Installation

You can also install the `List` component individually via `@gits-id/list` package:

```bash
yarn install @gits-id/list
```

```vue
<script setup lang="ts">
import {List, ListItem} from '@gits-id/list';
</script>

<template>
  <List>
    <ListItem prepend-icon="ic:round-home"> Text </ListItem>
  </List>
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-list--default).
