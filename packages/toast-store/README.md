# Toast Store

Store module for @morpheme/toast.

## Installation

```
# With NPM
npm i @morpheme/toast
# With Yarn
yarn add @morpheme/toast
# With PNPM
pnpm add @morpheme/toast
```

## Usage

### Composition API

```ts
import {useToast} from '@morpheme/toast-store'

const toast = useToast()
toast.show()
toast.confirm()
toast.confirmDelete()
```

### Pinia

```ts
// file: stores/toast.ts

import {useToastStore} from '@morpheme/toast-store'

const toast = useToastStore()

toast.show()
toast.confirm()
toast.confirmDelete()
```

### Vuex (Recommended)

```ts
// file: store/index.ts
import {toastModule} from '@morpheme/toast-store'

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
