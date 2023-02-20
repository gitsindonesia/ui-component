# Toast Store

Store module for @gits-id/toast.

## Installation

```
# With NPM
npm i @gits-id/toast
# With Yarn
yarn add @gits-id/toast
# With PNPM
pnpm add @gits-id/toast
```

## Usage

### Composition API

```ts
import {useToast} from '@gits-id/toast-store'

const toast = useToast()
toast.show()
toast.confirm()
toast.confirmDelete()
```

### Pinia

```ts
// file: stores/toast.ts

import {useToastStore} from '@gits-id/toast-store'

const toast = useToastStore()

toast.show()
toast.confirm()
toast.confirmDelete()
```

### Vuex (Recommended)

```ts
// file: store/index.ts
import {toastModule} from '@gits-id/toast-store'

export default new Vuex({
  modules: {
    toast: toastModule
  }
})
```

```vue
<script setup>
const store = useStore()

store.toast.show()
store.toast.confirm()
store.toast.confirmDelete()
</script>
```



## License

MIT
