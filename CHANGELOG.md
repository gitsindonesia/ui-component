# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-beta.1](https://github.com/gitsindonesia/ui-component/compare/v1.0.0-beta.0...v1.0.0-beta.1) (2023-02-20)


### Features

* **nuxt:** add support for Nuxt 3.2 ([#131](https://github.com/gitsindonesia/ui-component/issues/131)) ([6618127](https://github.com/gitsindonesia/ui-component/commit/6618127f181e33de6920bce28fda92c82246b300))





# [1.0.0-beta.0](https://github.com/gitsindonesia/ui-component/compare/v0.17.0-beta.2...v1.0.0-beta.0) (2023-02-20)


### Bug Fixes

* **ui:** drop `services`, `pages` and `layouts` from `ui`, fix external deps and move snippets directory ([#130](https://github.com/gitsindonesia/ui-component/issues/130)) ([d5c00eb](https://github.com/gitsindonesia/ui-component/commit/d5c00eb4f36921400a34526dd9dd8286231ddef5))


### BREAKING CHANGES

* **ui:** dropped `services`, `pages`, `layouts` from `ui`, install manually if you use it

* chore(ui): moved `snippets` folder to `packages`

* fix(toast): fix storybook path

* fix(ui): fix external deps bundle





# [0.17.0-beta.2](https://github.com/gitsindonesia/ui-component/compare/v0.17.0-beta.1...v0.17.0-beta.2) (2023-02-20)


### Features

* **ui:** register stepper components ([#129](https://github.com/gitsindonesia/ui-component/issues/129)) ([f8ccce1](https://github.com/gitsindonesia/ui-component/commit/f8ccce18e634180e095454e39414a9424da409a2))





# [0.17.0-beta.1](https://github.com/gitsindonesia/ui-component/compare/v0.17.0-beta.0...v0.17.0-beta.1) (2023-02-20)


### Features

* decouple toast store logic into separate package called `@gits-id/toast-store` ([#128](https://github.com/gitsindonesia/ui-component/issues/128)) ([a5b5bc5](https://github.com/gitsindonesia/ui-component/commit/a5b5bc533ec9b5468c140afa9ca439c9fd9ecd41))
* **VAppBar:** new `auto` size ([6e7397d](https://github.com/gitsindonesia/ui-component/commit/6e7397ddeba0f551c15e720a2acf1cda5981bf5b))





# [0.17.0-beta.0](https://github.com/gitsindonesia/ui-component/compare/v0.16.3...v0.17.0-beta.0) (2023-02-15)


### Bug Fixes

* **nuxt-commerce:** add image alt ([7497275](https://github.com/gitsindonesia/ui-component/commit/74972758b085db5d96348157140e9ff620be6495))
* **nuxt-commerce:** change package name ([8208785](https://github.com/gitsindonesia/ui-component/commit/8208785bf399cf11f24db5756c9efe3972c83b7f))


### Features

* **VAppBar:** new `auto` size ([#126](https://github.com/gitsindonesia/ui-component/issues/126)) ([c32bae5](https://github.com/gitsindonesia/ui-component/commit/c32bae572a772d887723610fe22aa7279fbed43b))





## [0.16.3](https://github.com/gitsindonesia/ui-component/compare/v0.16.2...v0.16.3) (2023-02-07)


### Bug Fixes

* **BottomSheet:** change bottom sheet handle color on dark mode ([0aea41e](https://github.com/gitsindonesia/ui-component/commit/0aea41ed65aee1b08ba7de7d85d40a9c40717468))
* **nuxt:** fix FormGroup path ([b5632fc](https://github.com/gitsindonesia/ui-component/commit/b5632fc97931da7531219f050b07a409b8818c24))
* **VAppBar:** fix defineExpose syntax ([9b5f5ed](https://github.com/gitsindonesia/ui-component/commit/9b5f5edd7c3d461821cf0b5991dd6bd29d76646e))


### Features

* **BottomSheet:** use Symbol for bottom sheet injection key ([a87a1a7](https://github.com/gitsindonesia/ui-component/commit/a87a1a7f97309f07deda9f26fa95cd6505250db6))





## [0.16.2](https://github.com/gitsindonesia/ui-component/compare/v0.16.1...v0.16.2) (2023-02-06)


### Bug Fixes

* move nuxt-auth as deps instead of devDeps ([3783b1a](https://github.com/gitsindonesia/ui-component/commit/3783b1ae8c3a762b98c8ccceff270c9bcb1af34c))
* **nuxt-admin:** fix entry point and files ([d0499ee](https://github.com/gitsindonesia/ui-component/commit/d0499eed9ed6de5942a0398bbf5c4fcf8c016ace))
* **nuxt-auth:** fix entry point and files ([7a9c543](https://github.com/gitsindonesia/ui-component/commit/7a9c543f28bdfdde8e298471e4ab63d451d15bdb))
* **nuxt-auth:** move app config to component props ([ae48f0b](https://github.com/gitsindonesia/ui-component/commit/ae48f0b1b864508a631b290e5b09be6c95d32899))


### Features

* **Bottom Sheet:** add bottom sheet handle ([#123](https://github.com/gitsindonesia/ui-component/issues/123)) ([1d9eab0](https://github.com/gitsindonesia/ui-component/commit/1d9eab01803a72a5428956a20d0ae4233860e679))
* **examples:** add nuxt-layer example ([c6aafd9](https://github.com/gitsindonesia/ui-component/commit/c6aafd9eb0ca404b42ec101657aad04a92d6de7c))
* **nuxt-admin:** add admin prefix for app config ([7a0e706](https://github.com/gitsindonesia/ui-component/commit/7a0e706ecc8448e0b0e89a3c927d75c876767ee2))
* **nuxt-admin:** add default home page ([fd8a57e](https://github.com/gitsindonesia/ui-component/commit/fd8a57ebcf04f4c8dcc6ba403feb9be9c7c2a677))
* **nuxt-admin:** add default page title ([5c5302c](https://github.com/gitsindonesia/ui-component/commit/5c5302cef48bd96fdc0026786a36e9aadda8be78))
* **nuxt-admin:** improve dark mode with @nuxtjs/color-mode ([548ca01](https://github.com/gitsindonesia/ui-component/commit/548ca01e0e45853a0c4d90bb5185da3caac2d968))
* **nuxt-admin:** more configurable notification ([20407e3](https://github.com/gitsindonesia/ui-component/commit/20407e38985f38e553261b7f4119c6dd9292cc46))
* **nuxt-auth:** configurable auth components via app config ([bfa2de7](https://github.com/gitsindonesia/ui-component/commit/bfa2de7c7c2f7c1099c9b13a7935a3438699bedd))
* **nuxt-commerce:** add multi level categories menus ([c249c78](https://github.com/gitsindonesia/ui-component/commit/c249c78d8baf1069d6ce06a205f99de3ef3e9314))
* **nuxt-commerce:** add product detail page ([3617a48](https://github.com/gitsindonesia/ui-component/commit/3617a48b96ef11ac3411dab8877571fa4ee8fec0))
* **nuxt-commerce:** initial dev for nuxt-commerce ([f0970ff](https://github.com/gitsindonesia/ui-component/commit/f0970ff4fc8fdd018f4ead1f930b720bfb235497))
* **VBottomSheet:** add bottom sheet handle ([d611cc2](https://github.com/gitsindonesia/ui-component/commit/d611cc24541d63b2e6e02098d06f78a8a4e80406))






## [0.16.1](https://github.com/gitsindonesia/ui-component/compare/v0.16.0...v0.16.1) (2023-02-01)

### Bug Fixes

- **VBottomSheet:** fix v-list deps ([8d828ac](https://github.com/gitsindonesia/ui-component/commit/8d828acdc6d8f4a9dc2abb126ed05326a0b63b5a))

# [0.16.0](https://github.com/gitsindonesia/ui-component/compare/v0.15.2...v0.16.0) (2023-02-01)

### Features

- **VAppBar:** add elevate on scroll effect ([a8ad7a9](https://github.com/gitsindonesia/ui-component/commit/a8ad7a9e3d33f85b8951180b1dd08c2d7623d51b))
- **VAppBar:** add hide on scroll feature ([180b0fb](https://github.com/gitsindonesia/ui-component/commit/180b0fb8ce8f6c58c3bdb93f25632ef0eedecbc9))
- **VAppBar:** configurable scroll distance ([bd06f3a](https://github.com/gitsindonesia/ui-component/commit/bd06f3a941bdf8191e016c996a657e443ff23871))
- **VBottomSheet:** add new bottom sheet component ([#119](https://github.com/gitsindonesia/ui-component/issues/119)) ([dcc61e1](https://github.com/gitsindonesia/ui-component/commit/dcc61e1332c3ef1949e953d79a75600a7be8ce10))
- **VRating:** new rating component ([#121](https://github.com/gitsindonesia/ui-component/issues/121)) ([00d6233](https://github.com/gitsindonesia/ui-component/commit/00d6233b552470c1228c54bdbae83bb1fe2205b7))

## [0.15.2](https://github.com/gitsindonesia/ui-component/compare/v0.15.1...v0.15.2) (2023-02-01)

### Bug Fixes

- **Dark Mode:** improve disabled state on dark mode ([#113](https://github.com/gitsindonesia/ui-component/issues/113)) ([917b5bf](https://github.com/gitsindonesia/ui-component/commit/917b5bfc81499cd730edea05b2be6478cf053947))
- **VRadio:** fix radio disabled color ([c1432ee](https://github.com/gitsindonesia/ui-component/commit/c1432ee868eca2862678bd36268842ee22ac3afd))
- **VRadio:** fix radio disabled color ([9d6e624](https://github.com/gitsindonesia/ui-component/commit/9d6e624e5b62623d748da01fd0d74bc73f1dfc84))

### Features

- **dark mode:** fix dark mode radio & radio group ([ef00512](https://github.com/gitsindonesia/ui-component/commit/ef005124605e64eea004e3b039f1489b1ea509b6))
- **dark mode:** fix dark mode radio & radio group ([d9267f1](https://github.com/gitsindonesia/ui-component/commit/d9267f1d18be433402ae4397152044ade3578698))
- **nuxt:** upgrade to nuxt 3.1.1 ([2b3c09f](https://github.com/gitsindonesia/ui-component/commit/2b3c09fb3d562c99e4db2a87aad9cebd5d2a5307))
- **starter/nuxt-admin:** add dark mode ([11f4feb](https://github.com/gitsindonesia/ui-component/commit/11f4febb18bbc14782ac1c31cdd926a204363ee7))
- **starter/nuxt-auth:** add `AuthLayout` component ([11da990](https://github.com/gitsindonesia/ui-component/commit/11da990777465fc62133d6cd8e015f692b35c77f))
- **starter/nuxt-auth:** add `guest` middleware ([e49eda3](https://github.com/gitsindonesia/ui-component/commit/e49eda3f244ce1be2990ab9a48643b34c12ed23c))
- **starter/nuxt-auth:** add forgot password page ([ab1d20a](https://github.com/gitsindonesia/ui-component/commit/ab1d20af30146c285fbd291cf8b08f92e37bd517))
- **starter/nuxt-auth:** add register api ([bee1d17](https://github.com/gitsindonesia/ui-component/commit/bee1d172cd2a8ea368a5b0a1a5e0f62babc33cc4))
- **starter/nuxt-auth:** add register page ([5fc4f55](https://github.com/gitsindonesia/ui-component/commit/5fc4f552b33c249355515e9f658198dd389861bd))
- **starter/nuxt-auth:** configurable auth login page ([b9d2bed](https://github.com/gitsindonesia/ui-component/commit/b9d2bed1caafe9a9820d3c10f8c9aec72b044ef2))
- **starter/nuxt-auth:** configurable head for each auth pages ([21b1003](https://github.com/gitsindonesia/ui-component/commit/21b1003b8df0b32717d3f7e1bb7048a2a690b0da))
- **starter/nuxt-auth:** enable global middleware ([d4b23bc](https://github.com/gitsindonesia/ui-component/commit/d4b23bc5684c9c650db6d94605a17783bf1e4867))
- **starter/nuxt-auth:** get auth secret and auth origin from env ([6fbb10e](https://github.com/gitsindonesia/ui-component/commit/6fbb10eed27d2466712c5216a82422351d706a1a))
- **starter/nuxt-auth:** implement login with providers ([8c15f43](https://github.com/gitsindonesia/ui-component/commit/8c15f43ffe8bce0e8c3636efebdaf16ebe37935f))
- **starter/nuxt-auth:** implement sign in with provider ([988bcb6](https://github.com/gitsindonesia/ui-component/commit/988bcb6e45540d2bb98b8802da83891c269d6646))
- **starter/nuxt-auth:** init nuxt auth ([4cd410d](https://github.com/gitsindonesia/ui-component/commit/4cd410dcebf112c3c79560e984dd01a818737e61))
- **starter/nuxt-auth:** update default pages design ([315b756](https://github.com/gitsindonesia/ui-component/commit/315b756dd50d186a9a7cc0d462b4f45e1251d4af))
- **starter:** upgrade to nuxt 3.1.1 ([d315849](https://github.com/gitsindonesia/ui-component/commit/d31584922e56d5be2963aabd0eddb810203773bf))
- **VDataTable:** support multisort ([ebe745c](https://github.com/gitsindonesia/ui-component/commit/ebe745c2c1f071fd9ee97847538e06ec1fb293ff))
- **VRadioGroup:** improve styling for v-radio-group with dark mode support ([6ec6233](https://github.com/gitsindonesia/ui-component/commit/6ec6233e2a56953afdc6de7884a8c8ec183815bc))
- **VRadioGroup:** improve styling for v-radio-group with dark mode support ([66a0a8b](https://github.com/gitsindonesia/ui-component/commit/66a0a8b8d6d22bd0b640806cf54ad4575e443675))

## [0.15.1](https://github.com/gitsindonesia/ui-component/compare/v0.15.0...v0.15.1) (2023-01-18)

### Bug Fixes

- **VAutocomplete:** fix missing `clear` event ([1a321a1](https://github.com/gitsindonesia/ui-component/commit/1a321a1d7f31fbaa9fa6cab9c1635e1c10bbfe4e))
- **VAutocomplete:** fix missing error color variable ([aab269c](https://github.com/gitsindonesia/ui-component/commit/aab269c09d3d93da6e2558f16a1e5ce149fd840c))
- **VAutocomplete:** fix undefined `selected` property ([b54eb16](https://github.com/gitsindonesia/ui-component/commit/b54eb16ea7220ba9c1fc1c4f694f79ac806b5acf))
- **VAutocomplete:** fix undefined `selected` property ([726010e](https://github.com/gitsindonesia/ui-component/commit/726010edcd597b977d505db0cf2cff86336ddcb9))
- **VMenus:** fix floating vue extend options ([e5f925f](https://github.com/gitsindonesia/ui-component/commit/e5f925f7cf598c00eb799d9f32818e74be99c99e))

### Features

- **VDropdown:** add new `prefixIcon` props for adding prefix icon before label ([1413f6b](https://github.com/gitsindonesia/ui-component/commit/1413f6b9a85a8d491a2c0aba0858c8bf00135576))
- **VDropdown:** improved CSS Properties on v-dropdown ([c2315af](https://github.com/gitsindonesia/ui-component/commit/c2315af8a474b20d27b41c80c6457ea6da635ecd))
- **VDropdownItem:** add new `nuxt` props for rendering item as NuxtLink ([b36fc32](https://github.com/gitsindonesia/ui-component/commit/b36fc322ea602e0d5d8cffadb344a25aee846353))
- **VInput:** add new `rounded` styled ([50b15f1](https://github.com/gitsindonesia/ui-component/commit/50b15f15b4f062147c7389ace7b82874555793ec))

# [0.15.0](https://github.com/gitsindonesia/ui-component/compare/v0.14.4...v0.15.0) (2023-01-17)

### Bug Fixes

- **nuxt:** load required styles when not using CSS or SASS bundle ([452e3f9](https://github.com/gitsindonesia/ui-component/commit/452e3f9abd9046a31ad2cef19341390a608a2a9b))
- **SSR:** fix undefined MutationObserver on VTabs when in SSR mode ([a3b00c5](https://github.com/gitsindonesia/ui-component/commit/a3b00c57134cd846c7eeb3f471a6975a76994244))
- **starter/nuxt-admin:** add sass dep ([fb43396](https://github.com/gitsindonesia/ui-component/commit/fb43396a7ab66b4eebca584aee25a4beb2f77ed6))
- **starter/nuxt-admin:** move css to layout ([7a0a507](https://github.com/gitsindonesia/ui-component/commit/7a0a507132878b403b60a08868b5a48729cc4949))
- **starter/nuxt-minimal:** add pages ([76da0ca](https://github.com/gitsindonesia/ui-component/commit/76da0caa9d5f97f70e8a2c835d88320e34d36e89))
- **VAppBar:** fix transition value ([ba5f4fe](https://github.com/gitsindonesia/ui-component/commit/ba5f4fe710437b7b6f35e8544ce39d723b6e52f3))
- **VModal:** make `width` and `maxWidth` props optional ([5fed047](https://github.com/gitsindonesia/ui-component/commit/5fed047434771cd984d42b74cc9b5940c4d45456))

### Features

- add admin notification ([1712813](https://github.com/gitsindonesia/ui-component/commit/171281330fe34d1c6758a05255f554d9a7fbee0d))
- add dark mode support ([#102](https://github.com/gitsindonesia/ui-component/issues/102)) ([2168185](https://github.com/gitsindonesia/ui-component/commit/2168185195df07f8561b9229da7f23152a43f543))
- add module options docs ([407f1ee](https://github.com/gitsindonesia/ui-component/commit/407f1eec168b46d0d3aab2e157f4d1ab0a18dc65))
- **nuxt:** add option`loadDefaultStyles` with default `true` to toggle loading of default styles ([aaa574d](https://github.com/gitsindonesia/ui-component/commit/aaa574df33a049ae07647aacbe9efc042b1eab60))
- **starter/nuxt-admin:** set package name ([9109d7a](https://github.com/gitsindonesia/ui-component/commit/9109d7ae9dfa2011719993e0f57d12930e196aa4))
- **starter:** add new `nuxt-admin` starter ([0918236](https://github.com/gitsindonesia/ui-component/commit/0918236d2c83dccb688c7b8e3f2157b6e3492a25))

## [0.14.4](https://github.com/gitsindonesia/ui-component/compare/v0.14.3...v0.14.4) (2023-01-17)

### Bug Fixes

- build ([6166bdd](https://github.com/gitsindonesia/ui-component/commit/6166bdd6b40e6ff9d37e5660212d19fd4b4dcf85))

### Features

- **Autocomplete:** integrate `useFormValue` in v-autocomplete component ([a3d5447](https://github.com/gitsindonesia/ui-component/commit/a3d5447b0eaf1295ca3931ecf94c9cd2fa0768c5))
- **Forms:** refactor uncontroller value logic into `useFormValue` composable ([182837c](https://github.com/gitsindonesia/ui-component/commit/182837c47d200593ed5ec70e72fafae7561b5fa7))
- **VMultiSelect:** integrate `useFormValue` in v-multi-select component ([f9b923f](https://github.com/gitsindonesia/ui-component/commit/f9b923f89a977755e41a4db46a83b06bbfc2d60f))
- **VSelect:** integrate `useFormValue` in v-select component ([8940082](https://github.com/gitsindonesia/ui-component/commit/894008232da77705f6b7ab91f1e88a68e8de0af8))

## [0.14.3](https://github.com/gitsindonesia/ui-component/compare/v0.14.2...v0.14.3) (2023-01-13)

**Note:** Version bump only for package gits-ui-monorepo

## [0.14.2](https://github.com/gitsindonesia/ui-component/compare/v0.14.2-alpha.0...v0.14.2) (2023-01-13)

### Bug Fixes

- **VInput:** change initial value priority to v model ([9c9834b](https://github.com/gitsindonesia/ui-component/commit/9c9834bba1343e8aa0c18e9284cf028c9c45905b))

## [0.14.1](https://github.com/gitsindonesia/ui-component/compare/v0.14.0...v0.14.1) (2023-01-11)

### Bug Fixes

- **Colors:** fix brand colors ([d13dd1b](https://github.com/gitsindonesia/ui-component/commit/d13dd1ba28f8ba0d9b7c734797621acc26782ebe))
- decrease `VSelect` bundle size ([baedd2a](https://github.com/gitsindonesia/ui-component/commit/baedd2a34f9934202e8e56eff706a6890300b5d3))
- lookup selected text from original items ([d7b9257](https://github.com/gitsindonesia/ui-component/commit/d7b9257bab88a8e907076a6e515db8d672f24c36))
- **storybook:** load scss styles ([e628be1](https://github.com/gitsindonesia/ui-component/commit/e628be1bd68ab658a0e2f5e2c20fd8ab346d9546))
- **VInput:** fix clearable not clearing value ([96adf8e](https://github.com/gitsindonesia/ui-component/commit/96adf8eda9b22e2a98c5e1571bec269341698212))
- **VInput:** fix unable to set initialValue ([3273a90](https://github.com/gitsindonesia/ui-component/commit/3273a90b9d44d363536c8852b28d3a08ed1cba96))
- **VSelect:** clear search input when selected ([9ef0b6b](https://github.com/gitsindonesia/ui-component/commit/9ef0b6ba2d692026c83dd1265c72834338bb70de))
- **VSelect:** fix unable to set initialValue ([954339f](https://github.com/gitsindonesia/ui-component/commit/954339f95a2e0bfdb73dd9dad9733b39f7d9cf9c))

### Features

- **VMultiSelect:** refactor underlying logic to support uncontrolled input state ([9c3b6ab](https://github.com/gitsindonesia/ui-component/commit/9c3b6abeea296f0ae0260321807b626eaca55f48))
- **VRadioGroup:** add selectedClass and defaultClass to style radio items ([43d5459](https://github.com/gitsindonesia/ui-component/commit/43d5459a5a8d8063c9f357099570f559efc64453))

# [0.14.0](https://github.com/gitsindonesia/ui-component/compare/v0.14.0-alpha.6...v0.14.0) (2023-01-10)

**Note:** Version bump only for package gits-ui-monorepo

# [0.14.0-alpha.6](https://github.com/gitsindonesia/ui-component/compare/v0.14.0-alpha.5...v0.14.0-alpha.6) (2023-01-10)

### Bug Fixes

- **Textarea:** add support for labelClass prop ([d4212ef](https://github.com/gitsindonesia/ui-component/commit/d4212ef716c2c2676199d0b2e9a52487a734dfa2))

### Features

- **Textarea:** refactor underlying logic to support uncontrolled input state ([4a50079](https://github.com/gitsindonesia/ui-component/commit/4a5007994c7a1a53c0ff461e15d5f30e5fd0d7e1))
- **VCheckbox:** refactor underlying logic to support uncontrolled input state ([9606dff](https://github.com/gitsindonesia/ui-component/commit/9606dff71175440a938880d3b02ee598b155c173))
- **VFormSelect:** refactor underlying logic to support uncontrolled input state ([35da005](https://github.com/gitsindonesia/ui-component/commit/35da005f49f473f3299ef1de4486762edec17c81))
- **VInput:** refactor underlying logic to support uncontrolled input state ([b2b5bcf](https://github.com/gitsindonesia/ui-component/commit/b2b5bcf8ea72d9a90185ed9bf744a823df39eea8))
- **VRadioGroup:** refactor underlying logic to support uncontrolled input state ([160d21e](https://github.com/gitsindonesia/ui-component/commit/160d21e63e6453dca27ed39248c1b7757f4f9797))
- **VRadio:** refactor underlying logic to support uncontrolled input state ([f842448](https://github.com/gitsindonesia/ui-component/commit/f84244804530efa3855f2dccccb178985095d683))

# [0.14.0-alpha.5](https://github.com/gitsindonesia/ui-component/compare/v0.14.0-alpha.4...v0.14.0-alpha.5) (2023-01-06)

### Bug Fixes

- **pagination.VPaginationItem:** set button type as button ([9aa82d8](https://github.com/gitsindonesia/ui-component/commit/9aa82d8d0d003521eb28cda3be55d0858b75ec84))
- **Pagination:** fix logic to disable last or first page shortcut ([61d64fd](https://github.com/gitsindonesia/ui-component/commit/61d64fd78ac35287954e233efe1dd898fb1cd881))

### Features

- **starter:** add new nuxt-minimal starter ([a38b607](https://github.com/gitsindonesia/ui-component/commit/a38b60769c1cff8275603de53d5f683758a11bfe))
- **VFileUpload:** support slot to override filename display ([835f9cc](https://github.com/gitsindonesia/ui-component/commit/835f9cc49de2b59de19a572a27f85a8c110b0339))
- **VSelect:** refactor VSelect underlying logic to support uncontrolled input state ([d53e973](https://github.com/gitsindonesia/ui-component/commit/d53e973121489ba7e8212cf799a8ec6e7ce8656c))

# [0.14.0-alpha.4](https://github.com/gitsindonesia/ui-component/compare/v0.14.0-alpha.3...v0.14.0-alpha.4) (2023-01-04)

### Bug Fixes

- **ui:** load transition styles ([c65d135](https://github.com/gitsindonesia/ui-component/commit/c65d135a5333cc020bbe03da8276b97976e18702))

# [0.14.0-alpha.3](https://github.com/gitsindonesia/ui-component/compare/v0.14.0-alpha.2...v0.14.0-alpha.3) (2023-01-04)

### Bug Fixes

- **nuxt:** load v-data-table-pagination styles ([676f009](https://github.com/gitsindonesia/ui-component/commit/676f009bbf11215f048569d5d7646023526b387e))

# [0.14.0-alpha.2](https://github.com/gitsindonesia/ui-component/compare/v0.14.0-alpha.1...v0.14.0-alpha.2) (2023-01-04)

### Bug Fixes

- **Forms:** add radio sass ([61c7d8c](https://github.com/gitsindonesia/ui-component/commit/61c7d8c7136aa8e0eca297833535431b00c36f80))
- **VSelect:** fix selected text when return-object ([ba88d95](https://github.com/gitsindonesia/ui-component/commit/ba88d954369bbc619f43c8e753d29238ecad0e75))

### Features

- improve LivePreview component ([07956ed](https://github.com/gitsindonesia/ui-component/commit/07956ed289d95c89458b152d3ecf036ba7bd622a))
- improve LivePreview component ([b49a783](https://github.com/gitsindonesia/ui-component/commit/b49a783ac1de11db8ae17e540d55f6b33d60b92e))
- **VDataTablePagination:** revamp VDataTablePagination: replaced VSelect with basic `<select>` & add sass styles ([a5996e2](https://github.com/gitsindonesia/ui-component/commit/a5996e2590075acb3a74263788f11bd8d4267476))

## [0.13.21](https://github.com/gitsindonesia/ui-component/compare/v0.13.20...v0.13.21) (2022-12-21)

### Features

- **VModal:** more customizable modal ([#74](https://github.com/gitsindonesia/ui-component/issues/74)) ([f30ac69](https://github.com/gitsindonesia/ui-component/commit/f30ac6903ff9de880f9c013f04785c2a468fee72))

## [0.13.20](https://github.com/gitsindonesia/ui-component/compare/v0.13.19...v0.13.20) (2022-12-21)

### Bug Fixes

- **FileUpload:** fix button type ([#73](https://github.com/gitsindonesia/ui-component/issues/73)) ([ef920aa](https://github.com/gitsindonesia/ui-component/commit/ef920aa5dffe517a574d29533dff7b96688207b2))
- **forms:** standardize label and error class ([#71](https://github.com/gitsindonesia/ui-component/issues/71)) ([cda5923](https://github.com/gitsindonesia/ui-component/commit/cda5923c77eea564f1df3696753e7b21a5da97c5))

### Features

- **storybook:** add GA ([a02deb9](https://github.com/gitsindonesia/ui-component/commit/a02deb9f9ea921961fc7326d4bba916973cb7aa6))
- **transition & button:** new `fade-scale` transition and new button `flush` style ([#68](https://github.com/gitsindonesia/ui-component/issues/68)) ([f5b826b](https://github.com/gitsindonesia/ui-component/commit/f5b826bb86a4da6edd78393148d8fad70295a9ce))
- **VMultiSelect:** add support for custom compare function via `search-by` prop ([#70](https://github.com/gitsindonesia/ui-component/issues/70)) ([78c0133](https://github.com/gitsindonesia/ui-component/commit/78c0133fbb1dfff30f0216babbb7ed8988befbc2))
- **VMultiSelect:** sync v-model ([#69](https://github.com/gitsindonesia/ui-component/issues/69)) ([273503a](https://github.com/gitsindonesia/ui-component/commit/273503a3b15be2b0dbba441a91b14a130ff182af))

## [0.13.19](https://github.com/gitsindonesia/ui-component/compare/v0.13.18...v0.13.19) (2022-12-16)

### Bug Fixes

- **VMultiSelect:** fix external deps ([01073e6](https://github.com/gitsindonesia/ui-component/commit/01073e60e069d73cf03d467d055cf4d0b19d1994))

## [0.13.18](https://github.com/gitsindonesia/ui-component/compare/v0.13.17...v0.13.18) (2022-12-16)

### Bug Fixes

- comment unused function ([7d7107a](https://github.com/gitsindonesia/ui-component/commit/7d7107adc66d3e9cfcbb0d25ee95b02e44d4c6b7))
- **multiselect:** make input node inline with tags + fix styling ([#67](https://github.com/gitsindonesia/ui-component/issues/67)) ([3c73fef](https://github.com/gitsindonesia/ui-component/commit/3c73fefdb600788eb9fc5d33aab1a8357b53bdc4))
- **tabs:** handle removable prop effect in component instead of just emitting event ([#66](https://github.com/gitsindonesia/ui-component/issues/66)) ([c7e6ac6](https://github.com/gitsindonesia/ui-component/commit/c7e6ac6a6e7048ecaf41a17c47e02650c67eecca))

## [0.13.17](https://github.com/gitsindonesia/ui-component/compare/v0.13.16...v0.13.17) (2022-12-14)

### Features

- **multiselect:** set some elements as slot to promote customization ([#63](https://github.com/gitsindonesia/ui-component/issues/63)) ([f8b8456](https://github.com/gitsindonesia/ui-component/commit/f8b845611fe89b044559cf861302d65b3956949f))

## [0.13.16](https://github.com/gitsindonesia/ui-component/compare/v0.13.15...v0.13.16) (2022-12-08)

### Bug Fixes

- **VMenus:** fix `newTab` type ([5e15df8](https://github.com/gitsindonesia/ui-component/commit/5e15df87352306bf767ef5af725bc1c185356748))

## [0.13.15](https://github.com/gitsindonesia/ui-component/compare/v0.13.14...v0.13.15) (2022-12-08)

### Bug Fixes

- **UI:** update `defaultColors` value, `VMenus` supports link, `AppBar` transparent & custom color and `VCheckbox` inherit style ([#60](https://github.com/gitsindonesia/ui-component/issues/60)) ([0bbca3f](https://github.com/gitsindonesia/ui-component/commit/0bbca3f92ef7d47ec7e0922ae686798948f488ba))
- update defaultColors ([ba6de73](https://github.com/gitsindonesia/ui-component/commit/ba6de730dd8e0b6f60875ca12a9875c2f6a713a4))

### Features

- **VEditor:** upgrade ckeditor ([#61](https://github.com/gitsindonesia/ui-component/issues/61)) ([d2c3a05](https://github.com/gitsindonesia/ui-component/commit/d2c3a05b1af99241ed57f51ad25e0b2d0c1d5474))

## [0.13.14](https://github.com/gitsindonesia/ui-component/compare/v0.13.13...v0.13.14) (2022-12-07)

### Bug Fixes

- **VDataTable:** fix duplicate css import ([4755402](https://github.com/gitsindonesia/ui-component/commit/4755402ac297ecde9fa79560486cfb034be12be2))

### Features

- **VDataTable:** improved `VDataTable` component ([#59](https://github.com/gitsindonesia/ui-component/issues/59)) ([653c0f1](https://github.com/gitsindonesia/ui-component/commit/653c0f1251bc1dbbb5f5e5fe85392d98324278eb))
- **VDataTable:** striped, hover & selectable style ([7b2ccf1](https://github.com/gitsindonesia/ui-component/commit/7b2ccf17a171c6ba3514a886d5e91ca8cc03bac3))

## [0.13.13](https://github.com/gitsindonesia/ui-component/compare/v0.13.12...v0.13.13) (2022-12-06)

### Bug Fixes

- **VList:** fix VListItem icon size ([#58](https://github.com/gitsindonesia/ui-component/issues/58)) ([866c363](https://github.com/gitsindonesia/ui-component/commit/866c363dca3ea2c7d687961acb5ffa53616e3854))

## [0.13.12](https://github.com/gitsindonesia/ui-component/compare/v0.13.11...v0.13.12) (2022-12-06)

### Bug Fixes

- **ui:** load list style ([7e59dad](https://github.com/gitsindonesia/ui-component/commit/7e59dada7d05ba6803eaf941b61a8ad47aec1920))

## [0.13.11](https://github.com/gitsindonesia/ui-component/compare/v0.13.10...v0.13.11) (2022-12-06)

### Bug Fixes

- **Dropdown:** fix dropdown activator style ([3f28492](https://github.com/gitsindonesia/ui-component/commit/3f28492a27569172a358aaa94d8697819b5c7319))
- **VMenus:** improve bundle size ([b216c8d](https://github.com/gitsindonesia/ui-component/commit/b216c8d41b46883088911cb1e7811b633811134b))
- **VMenusItem:** fix text width when has appended icon ([2d8e27e](https://github.com/gitsindonesia/ui-component/commit/2d8e27ea5f16dc14a72d624a5b33c9af59373449))

### Features

- **VList:** revamp VList component ([#57](https://github.com/gitsindonesia/ui-component/issues/57)) ([fe50100](https://github.com/gitsindonesia/ui-component/commit/fe50100db1b9aca8e6aa854988b4f28f933e9724))
- **VMenus:** update CSS Properties for more customizable v-menus ([6b3b0df](https://github.com/gitsindonesia/ui-component/commit/6b3b0df404784af8a274a9090fd0813bdd7dd65e))
- **VMenus:** update CSS Properties for more customizable v-menus ([#56](https://github.com/gitsindonesia/ui-component/issues/56)) ([a4c6594](https://github.com/gitsindonesia/ui-component/commit/a4c6594c36e616dc109dec1915352b80dfc602a3))

## [0.13.10](https://github.com/gitsindonesia/ui-component/compare/v0.13.9...v0.13.10) (2022-12-05)

### Bug Fixes

- **ui:** register toast and switch styles ([8c425d9](https://github.com/gitsindonesia/ui-component/commit/8c425d9ce8c5b5caeaac10749d6361e1e022909a))

## [0.13.9](https://github.com/gitsindonesia/ui-component/compare/v0.13.8...v0.13.9) (2022-12-05)

### Bug Fixes

- **VAvatar:** fix avatar font size variable and text-transform ([51ee85a](https://github.com/gitsindonesia/ui-component/commit/51ee85ac72659aa34d92023c158c4bb182c9c2e2))

### Features

- **VSwitch:** customizable switch with CSS Properties ([#53](https://github.com/gitsindonesia/ui-component/issues/53)) ([93dd68e](https://github.com/gitsindonesia/ui-component/commit/93dd68e64cae64952a7d6f5ea3623bef680b7979))
- **VToast:** revamp toast component ([#52](https://github.com/gitsindonesia/ui-component/issues/52)) ([f0415d5](https://github.com/gitsindonesia/ui-component/commit/f0415d5ee20cfa8a9c1fa1573c5bf7ec1240e5f7))

## [0.13.8](https://github.com/gitsindonesia/ui-component/compare/v0.13.7...v0.13.8) (2022-12-02)

### Features

- **VTabs:** improved tabs component ([#51](https://github.com/gitsindonesia/ui-component/issues/51)) ([5a26a55](https://github.com/gitsindonesia/ui-component/commit/5a26a55c8989d89dd78c22dc500081f1d045567c))

## [0.13.7](https://github.com/gitsindonesia/ui-component/compare/v0.13.6...v0.13.7) (2022-11-30)

### Features

- **nuxt:** auto-import `VPaginationItem` component ([84462e6](https://github.com/gitsindonesia/ui-component/commit/84462e63ded6f8b5f377e6de0c26551b213108bb))
- **Pagination:** revamp Pagination component ([#49](https://github.com/gitsindonesia/ui-component/issues/49)) ([78bbe71](https://github.com/gitsindonesia/ui-component/commit/78bbe7127bb0c9bb6613f01cca3e3be9c755c56b))
- **Shimmer:** add CSS Properties support & update docs ([#48](https://github.com/gitsindonesia/ui-component/issues/48)) ([45d8297](https://github.com/gitsindonesia/ui-component/commit/45d8297a9ac2d1a981914d3aa33b7ba720477722))
- **VSelect:** customizable select icons ([702aa01](https://github.com/gitsindonesia/ui-component/commit/702aa017857eb8b2427a6a7fba8fbd8a1c8efb2a))

## [0.13.6](https://github.com/gitsindonesia/ui-component/compare/v0.13.5...v0.13.6) (2022-11-29)

### Bug Fixes

- **VMultiSelect:** fix label position and fix error style ([#46](https://github.com/gitsindonesia/ui-component/issues/46)) ([e431812](https://github.com/gitsindonesia/ui-component/commit/e43181202747ec60f2e231d25973ac758ce7a162))
- **VMultiSelect:** import deps styles for standalone usage ([3e74992](https://github.com/gitsindonesia/ui-component/commit/3e749925d9003d7a3a5021acff1c3779e7d8ee1c))

### Features

- **Dropdown:** customizable dropdown icons ([#43](https://github.com/gitsindonesia/ui-component/issues/43)) ([081f642](https://github.com/gitsindonesia/ui-component/commit/081f64206099fa15ad8b2ddacae8782407df9544))
- **VMultiSelect:** add CSS Properties support ([#45](https://github.com/gitsindonesia/ui-component/issues/45)) ([8ae6b1e](https://github.com/gitsindonesia/ui-component/commit/8ae6b1eb99c73fdd8cae54827e74f80517b7ed01))

## [0.13.5](https://github.com/gitsindonesia/ui-component/compare/v0.13.4...v0.13.5) (2022-11-28)

### Bug Fixes

- **Badge:** fix border radius & icon size ([#42](https://github.com/gitsindonesia/ui-component/issues/42)) ([4a075e4](https://github.com/gitsindonesia/ui-component/commit/4a075e49c0b192d43b81427f8ea1d61ca8572449))
- **Badge:** fix rounded full badge ([f167625](https://github.com/gitsindonesia/ui-component/commit/f167625bd596cccf049705cdebfe5e89484f0b29))

## [0.13.4](https://github.com/gitsindonesia/ui-component/compare/v0.13.3...v0.13.4) (2022-11-28)

### Bug Fixes

- **VModal:** improved types ([2954144](https://github.com/gitsindonesia/ui-component/commit/29541449a17901f1acc91a04152b66491dae33ef))
- **VModal:** improved v-modal bundle size ([66d1797](https://github.com/gitsindonesia/ui-component/commit/66d1797b65b8ed54286dd336afa7afafa751a84d))

### Features

- documentation of tast ([#39](https://github.com/gitsindonesia/ui-component/issues/39)) ([234565c](https://github.com/gitsindonesia/ui-component/commit/234565c1dc2915e3b0a54cd68efe60d22c960654))
- **ui:** register v-modal style ([448cf7c](https://github.com/gitsindonesia/ui-component/commit/448cf7c6a5f571174c955566f41ef6473d72a8d4))
- **VModal:** add CSS Variables ([acd07d2](https://github.com/gitsindonesia/ui-component/commit/acd07d259a3a950a576ca37f8a72197bd03dccc1))
- **VModal:** setup css classes ([41a3801](https://github.com/gitsindonesia/ui-component/commit/41a3801d1e78676db6abb80c673f33e1d277b788))

## [0.13.3](https://github.com/gitsindonesia/ui-component/compare/v0.13.2...v0.13.3) (2022-11-24)

### Bug Fixes

- **ui:** import table style ([0eca7b6](https://github.com/gitsindonesia/ui-component/commit/0eca7b653985299f919734fbc670e36dd308529f))

## [0.13.2](https://github.com/gitsindonesia/ui-component/compare/v0.13.1...v0.13.2) (2022-11-24)

### Bug Fixes

- **nuxt:** transpile `floating-vue` ([8f6902a](https://github.com/gitsindonesia/ui-component/commit/8f6902aa1e90a3520b730a5f43247e9a841158a1))

## [0.13.1](https://github.com/gitsindonesia/ui-component/compare/v0.13.0...v0.13.1) (2022-11-24)

### Bug Fixes

- **ui:** import v-select styles ([f1cee92](https://github.com/gitsindonesia/ui-component/commit/f1cee9259eb607dd9bbb70600f63fb94397b6b87))

# [0.13.0](https://github.com/gitsindonesia/ui-component/compare/v0.12.0...v0.13.0) (2022-11-24)

### Bug Fixes

- **VFormSelect:** improved `VFormSelectItem` types ([d3c3fde](https://github.com/gitsindonesia/ui-component/commit/d3c3fdec421f6ec6f3801d4227a281c4da65370e))

### Features

- **Button:** add `VBtnGroup` and `VBtnToolbar` component ([#38](https://github.com/gitsindonesia/ui-component/issues/38)) ([b2643b5](https://github.com/gitsindonesia/ui-component/commit/b2643b5563d7a5728c48d4c514425d8fd1cb807b))
- **VProgressBar:** revamp `VProgressBar` component ([#37](https://github.com/gitsindonesia/ui-component/issues/37)) ([5080c5b](https://github.com/gitsindonesia/ui-component/commit/5080c5b6cc78795cc0abdc9542281f3314d86b35))

### BREAKING CHANGES

- **VProgressBar:** replaced`width` prop by `modelValue`

- docs(VProgressBar): update progress-bar docs

# [0.12.0](https://github.com/gitsindonesia/ui-component/compare/v0.12.0-alpha.28...v0.12.0) (2022-11-24)

**Note:** Version bump only for package gits-ui-monorepo

# [0.12.0-alpha.28](https://github.com/gitsindonesia/ui-component/compare/v0.12.0-alpha.27...v0.12.0-alpha.28) (2022-11-23)

### Bug Fixes

- **nuxt:** upgrade to nuxt 3 stable ([e24501a](https://github.com/gitsindonesia/ui-component/commit/e24501ad59e4a14907f6f108780eb699ae78ea77))
- revert package name to `@gits-id/ui-nuxt` ([e09faf1](https://github.com/gitsindonesia/ui-component/commit/e09faf1f68d4268c4908199c0b98ccc76e4964e5))

# [0.12.0-alpha.27](https://github.com/gitsindonesia/ui-component/compare/v0.12.0-alpha.26...v0.12.0-alpha.27) (2022-11-23)

**Note:** Version bump only for package @gits-id/components

# [0.12.0-alpha.26](https://github.com/gitsindonesia/ui-component/compare/v0.12.0-alpha.25...v0.12.0-alpha.26) (2022-11-22)

### Bug Fixes

- **VDataTablePagination:** fix v-select style ([6ea59fd](https://github.com/gitsindonesia/ui-component/commit/6ea59fd8178c679bdaaedb7d79f7d93f16862cc5))

### Features

- **DataTable:** add CSS Variables ([8e45c5c](https://github.com/gitsindonesia/ui-component/commit/8e45c5c0a1270c953d1d6d620fcabbfa4fe70e7d))
- **VSelect:** improved `VSelect` ([b5917a2](https://github.com/gitsindonesia/ui-component/commit/b5917a272eeb90e3283cd81949f1cee658338a42))

# [0.12.0-alpha.25](https://github.com/gitsindonesia/ui-component/compare/v0.12.0-alpha.24...v0.12.0-alpha.25) (2022-11-17)

### Bug Fixes

- **tooltip:** transpile floating-vue ([ff4586c](https://github.com/gitsindonesia/ui-component/commit/ff4586c254ff47950f8d7d8a47ddcde1bfd95edf))

# [0.12.0-alpha.24](https://github.com/gitsindonesia/ui-component/compare/v0.12.0-alpha.23...v0.12.0-alpha.24) (2022-11-17)

### Bug Fixes

- **utils:** define package's `exports` ([7b17f21](https://github.com/gitsindonesia/ui-component/commit/7b17f213d9ef38306730f65e5113eca9fde8f874))

# [0.12.0-alpha.23](https://github.com/gitsindonesia/ui-component/compare/v0.12.0-alpha.22...v0.12.0-alpha.23) (2022-11-17)

**Note:** Version bump only for package @gits-id/components

# [0.12.0-alpha.22](https://github.com/gitsindonesia/ui-component/compare/v0.12.0-alpha.21...v0.12.0-alpha.22) (2022-11-17)

### Bug Fixes

- **collapsible:** update package exports ([8ceb42f](https://github.com/gitsindonesia/ui-component/commit/8ceb42f0bd9d59d5138a8bae6065aa37c19a32b5))
- **list:** upgrade deps and update nav-drawer story ([8990d73](https://github.com/gitsindonesia/ui-component/commit/8990d73f57917655a6b0def26560ffab7d8c66aa))

# [0.12.0-alpha.21](https://github.com/gitsindonesia/ui-component/compare/v0.12.0-alpha.20...v0.12.0-alpha.21) (2022-11-16)

### Bug Fixes

- **Stepper.Item:** fix divider dom position ([#35](https://github.com/gitsindonesia/ui-component/issues/35)) ([1e7f6c4](https://github.com/gitsindonesia/ui-component/commit/1e7f6c470e2e8bc6f31110f4989deb182a3b688f))

### Features

- **Forms.Select:** improve form select styles ([cff4e0d](https://github.com/gitsindonesia/ui-component/commit/cff4e0d30e3454d357f97676d9c3099158313933))
- **Forms.VFileUpload:** use VInput as default file upload ([fb50eac](https://github.com/gitsindonesia/ui-component/commit/fb50eac3a0ce98908dc34ce105498498892896b2))
- **Forms.VInput, Forms.VTextarea:** revamp textarea ([c554b82](https://github.com/gitsindonesia/ui-component/commit/c554b829d35dc02d20982b0cede2118f9acc423a))
- **VCheckbox:** revamp v-checkbox component ([de07145](https://github.com/gitsindonesia/ui-component/commit/de07145b0fcc581e070c4095df9ca43e24163577))
- **VRadio:** add BEM class for v-input ([a12f57c](https://github.com/gitsindonesia/ui-component/commit/a12f57c8476eead9b468ab662a5c0124a995742e))

# [0.12.0-alpha.20](https://github.com/gitsindonesia/ui-component/compare/v0.12.0-alpha.19...v0.12.0-alpha.20) (2022-11-16)

### Bug Fixes

- **tailwind-components:** fix tailwind scan folder ([38e3915](https://github.com/gitsindonesia/ui-component/commit/38e3915aca636d2fb27ffb926b711aed8b647593))

# [0.12.0-alpha.19](https://github.com/gitsindonesia/ui-component/compare/v0.12.0-alpha.18...v0.12.0-alpha.19) (2022-11-15)

### Bug Fixes

- **VMenusItem:** set `text` prop optional & set menus-item cursor ([8053e7d](https://github.com/gitsindonesia/ui-component/commit/8053e7d8cec08c798e479846944db71a85515c33))

# [0.12.0-alpha.18](https://github.com/gitsindonesia/ui-component/compare/v0.12.0-alpha.17...v0.12.0-alpha.18) (2022-11-15)

### Features

- **nuxt:** register `VMenusItem` component ([523f20a](https://github.com/gitsindonesia/ui-component/commit/523f20abb0e4c0a6d271d47b14a5e431b37fed32))
- **VMenus:** dynamic popper mode `hover` or `click` & new button props ([345f638](https://github.com/gitsindonesia/ui-component/commit/345f6382fce01b7738a277b21289b54c6bf88f1e))
- **VMenus:** improved v-menus slots & new `VMenusItem` component ([d3cdeee](https://github.com/gitsindonesia/ui-component/commit/d3cdeeecacabc172135ef568ffbad6648360d7c2))

# [0.12.0-alpha.17](https://github.com/gitsindonesia/ui-component/compare/v0.12.0-alpha.16...v0.12.0-alpha.17) (2022-11-15)

### Bug Fixes

- **VBtn:** dynamic button props ([331604c](https://github.com/gitsindonesia/ui-component/commit/331604c13d9a6b5d2ac4f027a903771b9959562e))
- **VMenus:** improve menu button activator props ([f8a24dc](https://github.com/gitsindonesia/ui-component/commit/f8a24dce907c259e2eccb85abb1f41c898487c4f))

### Features

- **VMenus:** revamp menus component ([192da4e](https://github.com/gitsindonesia/ui-component/commit/192da4e14a39129023f5793d459f1e84888edaa1))

# [0.12.0-alpha.16](https://github.com/gitsindonesia/ui-component/compare/v0.12.0-alpha.15...v0.12.0-alpha.16) (2022-11-14)

### Bug Fixes

- **VInput:** fix icon size conflict ([db794fa](https://github.com/gitsindonesia/ui-component/commit/db794faa3783a34fc59d27721c777f64002826ac))

# [0.12.0-alpha.15](https://github.com/gitsindonesia/ui-component/compare/v0.12.0-alpha.14...v0.12.0-alpha.15) (2022-11-14)

### Bug Fixes

- **ui:** fix style order ([3630ff4](https://github.com/gitsindonesia/ui-component/commit/3630ff46e0d0bfa82f6e89a3af3f1ae64f2a1686))

# [0.12.0-alpha.14](https://github.com/gitsindonesia/ui-component/compare/v0.12.0-alpha.13...v0.12.0-alpha.14) (2022-11-14)

### Bug Fixes

- **VInput:** decrease padding on small input ([3df31a3](https://github.com/gitsindonesia/ui-component/commit/3df31a336135d4513e8725e43528373a2bccdea2))

### Features

- **VInput:** clearable input ([b4c59f9](https://github.com/gitsindonesia/ui-component/commit/b4c59f90f24c52c914a0a0f502ff3fb50444cde0))

# [0.12.0-alpha.13](https://github.com/gitsindonesia/ui-component/compare/v0.12.0-alpha.12...v0.12.0-alpha.13) (2022-11-14)

### Features

- **VInput:** allow to customize icon size via prop ([d137e0d](https://github.com/gitsindonesia/ui-component/commit/d137e0d05ee3bfbd796dd8f04905009bb5f1ab86))

# [0.12.0-alpha.12](https://github.com/gitsindonesia/ui-component/compare/v0.12.0-alpha.11...v0.12.0-alpha.12) (2022-11-14)

**Note:** Version bump only for package @gits-id/components

# [0.12.0-alpha.11](https://github.com/gitsindonesia/ui-component/compare/v0.12.0-alpha.10...v0.12.0-alpha.11) (2022-11-14)

### Bug Fixes

- **VBtn:** set button type ([f81c828](https://github.com/gitsindonesia/ui-component/commit/f81c828c16fc305d87955e1441eb8e8dab62e6d2))

### Features

- **Forms.VInput:** dynamic input icon size via CSS Vars ([9a53666](https://github.com/gitsindonesia/ui-component/commit/9a5366614cf076307ad97f387a8ce72009c631dd))
- **Forms.VInput:** improved v-input styles with CSS Variables ([cbaadaa](https://github.com/gitsindonesia/ui-component/commit/cbaadaa410c682ed87002b17b3f9de153f27d0da))
- **Stepper:** add linear prop to enable continuous active state ([#33](https://github.com/gitsindonesia/ui-component/issues/33)) ([aa051c2](https://github.com/gitsindonesia/ui-component/commit/aa051c2ce4bcd6d14ca88fa7be7d1fb1ff7881fe))

## [0.11.10](https://github.com/gitsindonesia/ui-component/compare/v0.11.9...v0.11.10) (2022-09-23)

### Bug Fixes

- **Forms:** fix duplicate prop on v-checkbox ([8e3d3a1](https://github.com/gitsindonesia/ui-component/commit/8e3d3a13716a5865ce12a24a6eb14339e324758e))

## [0.11.9](https://github.com/gitsindonesia/ui-component/compare/v0.11.8...v0.11.9) (2022-09-23)

### Bug Fixes

- **VCheckbox:** improve checkbox disabled state ([c769e44](https://github.com/gitsindonesia/ui-component/commit/c769e44eb96d4803f7f2362f3e4c2a276e86aa85)), closes [#13](https://github.com/gitsindonesia/ui-component/issues/13)

### chore

- remove layouts stories ([94e2718](https://github.com/gitsindonesia/ui-component/commit/94e27186dd4f28829cb224cdab3658702040183c))

### Features

- add foundation stories for elevation, rounded, typography ([32ff68a](https://github.com/gitsindonesia/ui-component/commit/32ff68ad32c0032fbddeebe0c02229d9af5361f3))
- add foundation/colors stories ([d40cbb9](https://github.com/gitsindonesia/ui-component/commit/d40cbb90a11bce330a526626e99a95d6169ec5e6))
- **Avatar:** new Avatar component ([560f774](https://github.com/gitsindonesia/ui-component/commit/560f77486df9e4a12820da0aae2da834c568a4a1))
- **docs:** wip official docs ([0950937](https://github.com/gitsindonesia/ui-component/commit/095093719b1d1f81a9a66702cf90f2e29ec09202))
- **examples:** add vue 3 example ([4c445d4](https://github.com/gitsindonesia/ui-component/commit/4c445d4f12053bfe6a41ea5ea74c3f24ef5e604e))
- **Icon:** improved icon size ([a952056](https://github.com/gitsindonesia/ui-component/commit/a95205669f5e4a038f492d4ecb5bf6796f5f98d5))
- **iconsax:** new Iconsax component ([fe71c52](https://github.com/gitsindonesia/ui-component/commit/fe71c52204e00c2a13a9b6e5ecf0c420d5d3cd11))
- **Logo:** new size props ([e8ec195](https://github.com/gitsindonesia/ui-component/commit/e8ec1954c2896da604b337578b50717312f6d4e5))
- new transition classes: , , , & ([2024b83](https://github.com/gitsindonesia/ui-component/commit/2024b831a94ab0f3f07a834304e016e768d51fbf))
- **Shimmer:** new Shimmer component ([d430714](https://github.com/gitsindonesia/ui-component/commit/d4307148f8bdc635c72430a59bf0dbd4881ed8fb))
- **snippets:** add auth login and forgot password snippets ([ee5877c](https://github.com/gitsindonesia/ui-component/commit/ee5877c52a30c76784cce5b09d9262ae62071473))
- **snippets:** add Navbar snippet ([996944c](https://github.com/gitsindonesia/ui-component/commit/996944cafd4341daea14625a9dc4f30b493a5fc9))
- **snippets:** convert snippet storybook into vue component snippets ([3fc7ccb](https://github.com/gitsindonesia/ui-component/commit/3fc7ccbe1dc8c325b873597b5d19eaef939100df))
- **snippets:** footer snippets as vue component ([e3238c8](https://github.com/gitsindonesia/ui-component/commit/e3238c8acc9ccd2ed284c32ccc81fc3480ba4c1b))
- **snippets:** new sidebar layout ([f4aae93](https://github.com/gitsindonesia/ui-component/commit/f4aae9389a91fa9f6b0e1b81a8999d66a0453b31))
- **theme:** add defaultTheme ([90350f2](https://github.com/gitsindonesia/ui-component/commit/90350f25c15ac0eb27fc73e6059f4193f8fb8b85))
- **VRadio:** implement disabled state ([e948e6c](https://github.com/gitsindonesia/ui-component/commit/e948e6caedf1931578be729de266c2b9306f0ab2)), closes [#13](https://github.com/gitsindonesia/ui-component/issues/13)

### BREAKING CHANGES

- deprecated `@gits-id/layouts` package

## [0.11.8](https://github.com/gitsindonesia/ui-component/compare/v0.11.7...v0.11.8) (2022-09-19)

### Bug Fixes

- fix behavior when using field array and custom component in Form ([d961be0](https://github.com/gitsindonesia/ui-component/commit/d961be000031d465478e426253456d7b0adedb6e)), closes [#12](https://github.com/gitsindonesia/ui-component/issues/12)

## [0.11.7](https://github.com/gitsindonesia/ui-component/compare/v0.11.6...v0.11.7) (2022-09-15)

### Bug Fixes

- **DataTable:** header font weight inconsistent when sorting ([ce238f7](https://github.com/gitsindonesia/ui-component/commit/ce238f79354b084106af74dde393162e4b686dcf)), closes [#10](https://github.com/gitsindonesia/ui-component/issues/10)

### Features

- **v-breadcrumbs:** optional `to` prop ([17f5c17](https://github.com/gitsindonesia/ui-component/commit/17f5c177e03a1e0e64929ce781a4b471dd452437)), closes [#11](https://github.com/gitsindonesia/ui-component/issues/11)

## [0.11.6](https://github.com/gitsindonesia/ui-component/compare/v0.11.5...v0.11.6) (2022-09-13)

### Features

- support custom td class for each column ([153a37b](https://github.com/gitsindonesia/ui-component/commit/153a37ba8a2d66a218e13b9cd0def0dc896e9d30))
- support custom tr class ([e171d3a](https://github.com/gitsindonesia/ui-component/commit/e171d3ae7756fc2e122357a4efe57d5fd03520b6))

## [0.11.5](https://github.com/gitsindonesia/ui-component/compare/v0.11.4...v0.11.5) (2022-09-09)

### Features

- **snippets:** new `Footer` snippet ([36e6090](https://github.com/gitsindonesia/ui-component/commit/36e6090e807032db0e23097b5dc16e3e78530944))
- upgrade to vite 3 ([a733f2e](https://github.com/gitsindonesia/ui-component/commit/a733f2e6469150a9041472b5cd393d715d2764a4))
- **VDataTablePagination:** support pagination custom content ([574d4ca](https://github.com/gitsindonesia/ui-component/commit/574d4ca8708a7d9995a1838ef4771251e3e46e34))

## [0.11.4](https://github.com/gitsindonesia/ui-component/compare/v0.11.3...v0.11.4) (2022-09-07)

### Bug Fixes

- **DataTatablePagination:** fix class props value bleeds into wrapper div ([959a42d](https://github.com/gitsindonesia/ui-component/commit/959a42d3b647df0253d37a2ef3aff9e8e419f73e)), closes [#3](https://github.com/gitsindonesia/ui-component/issues/3)
- **table:** externalize `@gits-id/forms` ([5ffd2c2](https://github.com/gitsindonesia/ui-component/commit/5ffd2c2291030f3b7faebc45574d03fa2a51d314))

### Features

- **DataTablePagination:** new `meta` slot ([a3bf32b](https://github.com/gitsindonesia/ui-component/commit/a3bf32bb25460377b104cc947d439c1053529e39))
- **DataTablePagination:** new `rowsPerPage` slot ([5270cdf](https://github.com/gitsindonesia/ui-component/commit/5270cdff954939d9a395607258ca5924d7d4c6bf))
- **Pagination:** allow content customization for first, prev, next, last buttons ([f32a80d](https://github.com/gitsindonesia/ui-component/commit/f32a80d8dbfb979927bfead3f8b1f3c4e753225f))

## [0.11.3](https://github.com/gitsindonesia/ui-component/compare/v0.11.2...v0.11.3) (2022-08-26)

### Bug Fixes

- resolve RouterLink component ([0dbb5f6](https://github.com/gitsindonesia/ui-component/commit/0dbb5f68679f0bb4e6548599e472a1c22bc2fd28))
- **Stepper:** fix value check ([90f1c49](https://github.com/gitsindonesia/ui-component/commit/90f1c49bd6bbb454b1dbaf85e927a1fdb8034efc))
- **ui:** prefix export with `V` ([e6d9163](https://github.com/gitsindonesia/ui-component/commit/e6d9163405a23728a5757b46760d3227e3ddf9bb))

### Features

- **menu-item:** allow to customize item tag via `as` prop ([69fbd7e](https://github.com/gitsindonesia/ui-component/commit/69fbd7eaa8e7d937b27d4b250e72e9c8e8d7be4a))

## [0.11.2](https://github.com/gitsindonesia/ui-component/compare/v0.11.1...v0.11.2) (2022-08-25)

### Bug Fixes

- **dropdown:** improve package exports ([4ccf4b7](https://github.com/gitsindonesia/ui-component/commit/4ccf4b72d55495306935d7f7a9f5ac88bed351c0))
- **Icon:** improved exports and deps ([e35fec5](https://github.com/gitsindonesia/ui-component/commit/e35fec5b64cc78b9182134302a86ccf103a524c9))
- **nuxt:** transpile deps ([e0642bb](https://github.com/gitsindonesia/ui-component/commit/e0642bbe382fea10955cc90a500b9778ed54bf81))
- update dropdown exports ([5e85d86](https://github.com/gitsindonesia/ui-component/commit/5e85d86dd287ec2269eea3d5f5c9faed649bbf77))

## [0.11.1](https://github.com/gitsindonesia/ui-component/compare/v0.11.0...v0.11.1) (2022-08-24)

### Bug Fixes

- **icon:** fix package exports ([a35a622](https://github.com/gitsindonesia/ui-component/commit/a35a62205e971d58fa33d7de4f4de48a3b6eaee6))
- **ui:** register icon component ([28f51ca](https://github.com/gitsindonesia/ui-component/commit/28f51caad39a870479f2c6e189a1672527d98fbb))

# [0.11.0](https://github.com/gitsindonesia/ui-component/compare/v0.10.14...v0.11.0) (2022-08-24)

### Features

- **autocomplete:** replace remix icons with Icon component ([86b0368](https://github.com/gitsindonesia/ui-component/commit/86b036872e4252cdbc607668820e44c0e5d83d2e))
- **dropdown:** replace vue-remix-icons with heroicons ([aa23078](https://github.com/gitsindonesia/ui-component/commit/aa23078a1c923692d4fc2b8bb4e2a7063bbe0424))
- **Icon:** new `Icon` component ([6d9ba51](https://github.com/gitsindonesia/ui-component/commit/6d9ba517d7276ef41e0e75263f54f8127f893d36))

## [0.10.12](https://github.com/gitsindonesia/ui-component/compare/v0.10.11...v0.10.12) (2022-07-20)

**Note:** Version bump only for package @gits-id/components

## [0.10.10](https://github.com/gitsindonesia/ui-component/compare/v0.10.9...v0.10.10) (2022-07-18)

### Bug Fixes

- **v-file-upload:** accept string value and hide action button on for dropzone theme ([16ab948](https://github.com/gitsindonesia/ui-component/commit/16ab948683098b5d36765b5836c66b890cd13bbf))
- **v-multi-select:** add error style ([ae9367d](https://github.com/gitsindonesia/ui-component/commit/ae9367d77f1ef0053d78c8b0b2b639bd4d1f88a1))

### chore

- **autocomplete:** change component name ([6ed3c28](https://github.com/gitsindonesia/ui-component/commit/6ed3c2881bba1080f414e9f6c07fc6099d7c645c))

### Features

- **autocomplete:** add validation state ([87c3752](https://github.com/gitsindonesia/ui-component/commit/87c375207b0ded3f8a4cf00692176ddc07a253fa))
- **v-file-upload:** accept string url as value ([cd800db](https://github.com/gitsindonesia/ui-component/commit/cd800db740fc339cb444a8b3a3c8401d989e4f4c))
- **v-file-upload:** apply different border color when error ([bdf7719](https://github.com/gitsindonesia/ui-component/commit/bdf771949356e43e0de0f68c87cbfca679be8a81))
- **v-multi-select:** custom label ([8b4d9b1](https://github.com/gitsindonesia/ui-component/commit/8b4d9b10e28a832020f5ec7fd0649399a902153d))
- **v-multi-select:** integrate vee-validate to v-multi-select ([30fbe4b](https://github.com/gitsindonesia/ui-component/commit/30fbe4b7e307af3fb2523a3f1e5b040a095d3a26))
- **v-select:** reverse shadow strategy ([ef3dfa1](https://github.com/gitsindonesia/ui-component/commit/ef3dfa1b5bdaa985231f499483ada88e570cb947))

### BREAKING CHANGES

- **autocomplete:** `Autocomplete` renamed to `VAutocomplete`

## [0.10.9](https://github.com/gitsindonesia/ui-component/compare/v0.10.8...v0.10.9) (2022-07-12)

### Bug Fixes

- **v-form-select:** fix form select value bug ([b167861](https://github.com/gitsindonesia/ui-component/commit/b167861fdf70cc502bbeaae55a9fa385532f9edd))

## [0.10.8](https://github.com/gitsindonesia/ui-component/compare/v0.10.7...v0.10.8) (2022-07-12)

### Features

- **v-input:** new custom classes for prepend and append content ([8506611](https://github.com/gitsindonesia/ui-component/commit/85066111934441096d910a8f42d24916b9709622))

## [0.10.7](https://github.com/gitsindonesia/ui-component/compare/v0.10.6...v0.10.7) (2022-07-08)

### Bug Fixes

- **pages:** replace svg with bg image ([0c8a934](https://github.com/gitsindonesia/ui-component/commit/0c8a934911e6c28ddb69c0b2f5f595538a660428))
- **switch:** use local colors types ([bddc7fe](https://github.com/gitsindonesia/ui-component/commit/bddc7fe6cb215675b028abadba39086be8c63dc8))
- **ui:** fix cjs exports ([300432c](https://github.com/gitsindonesia/ui-component/commit/300432c1c8c6f51c0e51dd41ac7e074b43095054))

## [0.10.6](https://github.com/gitsindonesia/ui-component/compare/v0.10.5...v0.10.6) (2022-07-06)

**Note:** Version bump only for package @gits-id/components

## [0.10.5](https://github.com/gitsindonesia/ui-component/compare/v0.10.4...v0.10.5) (2022-07-06)

### Bug Fixes

- **v-modal:** disable click outside when loading ([b187fd9](https://github.com/gitsindonesia/ui-component/commit/b187fd9cb5cdc9ef2744868ddc5b983b88c1e6e5))
- **v-modal:** fix modal loading state ([a040528](https://github.com/gitsindonesia/ui-component/commit/a04052828fda5339c56b45cffa715d3948870c91))

### Features

- **v-modal:** modal `persistent` ([61c2b26](https://github.com/gitsindonesia/ui-component/commit/61c2b264b5deccc6f4929dac138da80ea994004a))
- **v-modal:** modal x close button ([f1cc5e6](https://github.com/gitsindonesia/ui-component/commit/f1cc5e6e92db80aff372939710d25c955c7fda53))

## [0.10.4](https://github.com/gitsindonesia/ui-component/compare/v0.10.3...v0.10.4) (2022-07-05)

### Features

- **v-modal:** new `centered` style ([f4ec7f6](https://github.com/gitsindonesia/ui-component/commit/f4ec7f6fad261357c3009c14eadc766bbd39673f))
- **v-modal:** new `fullscreen` mode ([39ec85c](https://github.com/gitsindonesia/ui-component/commit/39ec85c46d61b113480ce98f5121092c80e3ed05))

## [0.10.3](https://github.com/gitsindonesia/ui-component/compare/v0.10.3-alpha.1...v0.10.3) (2022-07-04)

**Note:** Version bump only for package @gits-id/components

## [0.10.3-alpha.1](https://github.com/gitsindonesia/ui-component/compare/v0.10.3-alpha.0...v0.10.3-alpha.1) (2022-07-04)

**Note:** Version bump only for package @gits-id/components

## [0.10.2](https://github.com/gitsindonesia/ui-component/compare/v0.10.1...v0.10.2) (2022-07-04)

### Features

- **list:** add list events ([30d60d3](https://github.com/gitsindonesia/ui-component/commit/30d60d3a850e8de507f0f4282db778e72c0e045f))

## [0.10.1](https://github.com/gitsindonesia/ui-component/compare/v0.10.0...v0.10.1) (2022-07-04)

### Bug Fixes

- **list group:** remove default gap ([1e93020](https://github.com/gitsindonesia/ui-component/commit/1e930207a22b791995f670b055773d86c74198b4))

### Features

- **list group:** tile list and append text ([3554bc5](https://github.com/gitsindonesia/ui-component/commit/3554bc52c278772ec23470413ae85da5689d2d61))

# [0.10.0](https://github.com/gitsindonesia/ui-component/compare/v0.9.0...v0.10.0) (2022-07-01)

### Features

- **list group:** new `hideText` prop ([218da36](https://github.com/gitsindonesia/ui-component/commit/218da36b25369eeaadc7cd42f8fb72fe944b868c))
- **list group:** new `rounded` style ([4c14f0f](https://github.com/gitsindonesia/ui-component/commit/4c14f0f86da21910f39eeb66e5a90d420c048b12))
- **list group:** new `shaped` style ([25cba28](https://github.com/gitsindonesia/ui-component/commit/25cba28dfef482031d1aae59b97d3ed4da0595af))
- **v-multi-select:** custom style multi select ([0267f05](https://github.com/gitsindonesia/ui-component/commit/0267f0590839ac775f323e7066da2b26ae84edca))

# [0.9.0](https://github.com/gitsindonesia/ui-component/compare/v0.8.2...v0.9.0) (2022-06-30)

### Bug Fixes

- **checkbox:** support multiple checkbox ([cfd9bc7](https://github.com/gitsindonesia/ui-component/commit/cfd9bc7cc23c4d4679bedefad2585048ad72831c))
- **textarea:** add new props: `wrapperClass` and `inputClass` ([4c8e126](https://github.com/gitsindonesia/ui-component/commit/4c8e12692cba83a0d507660778a7f506e30956ff))
- **utils:** add hover effect on input border ([3187544](https://github.com/gitsindonesia/ui-component/commit/31875447b2d7ef2720ab499a4ee93570f2a612a8))

### Features

- **list-group:** new `ListGroup` component ([c880fd4](https://github.com/gitsindonesia/ui-component/commit/c880fd4474b46c2a906bbba8eecb055afaa1d802))

## [0.8.2](https://github.com/gitsindonesia/ui-component/compare/v0.8.1...v0.8.2) (2022-06-28)

### Features

- **v-select:** integrate v-select with vee-validate ([88baa33](https://github.com/gitsindonesia/ui-component/commit/88baa33ab1a4a267f9e8118982b4978bfb8fd243))
- **v-select:** new props: `label`, `labelClass`, `wrapperClass` ([f6ed412](https://github.com/gitsindonesia/ui-component/commit/f6ed412bd042fa85ea2999f7555b8f594baee19b))

## [0.8.1](https://github.com/gitsindonesia/ui-component/compare/v0.8.0...v0.8.1) (2022-06-28)

### Bug Fixes

- **v-editor:** fix editor typing ([d3660cc](https://github.com/gitsindonesia/ui-component/commit/d3660cc155c145f516f43b900bbf899eef678114))

# [0.8.0](https://github.com/gitsindonesia/ui-component/compare/v0.7.3...v0.8.0) (2022-06-27)

### Bug Fixes

- **dropdown:** customizable `rightClass` and `leftClass` ([e27a851](https://github.com/gitsindonesia/ui-component/commit/e27a85117742f434adb811280511cc5143a83b7d))
- **v-radio-group:** fix second value ([c443bab](https://github.com/gitsindonesia/ui-component/commit/c443bab4f72b6c7b1ba8fb150e5a365d8d982e65))

### Features

- **v-editor:** integrate vee-validate ([85593aa](https://github.com/gitsindonesia/ui-component/commit/85593aadd45ab3342acaa0211c465174a2cf2b33))
- **v-form-select:** integrate vee-validate to v-form-select ([637cf64](https://github.com/gitsindonesia/ui-component/commit/637cf649d6685a1a479c3cc8a569bcb417903c94))
- **v-input-range:** integrate vee-validate validation ([05ee6f7](https://github.com/gitsindonesia/ui-component/commit/05ee6f733e8229877aa8214cf09ae8b7ba30d979))
- **v-nav-drawer:** append attributes ([e88b73c](https://github.com/gitsindonesia/ui-component/commit/e88b73c2a90596788a96b2fba9651e3f18ae5c88))
- **v-radio-group:** integrate vee-validate validation ([59cb499](https://github.com/gitsindonesia/ui-component/commit/59cb4996af7f71b0bf897736ce481c8cb3952728))
- **v-radio:** integrate vee-validate validation ([2e84b4b](https://github.com/gitsindonesia/ui-component/commit/2e84b4b929491520861a0e1d29f5002dadd80ffa))
- **v-switch:** integrate vee-validate to switch ([89a3585](https://github.com/gitsindonesia/ui-component/commit/89a3585aae09930790368d474a1d4eb90c01682c))

## [0.7.3](https://github.com/gitsindonesia/ui-component/compare/v0.7.2...v0.7.3) (2022-06-22)

**Note:** Version bump only for package @gits-id/components

# [0.7.0](https://github.com/gitsindonesia/ui-component/compare/v0.6.0...v0.7.0) (2022-06-22)

### Bug Fixes

- **v-file-upload:** disable inherit attrs ([b73dcf1](https://github.com/gitsindonesia/ui-component/commit/b73dcf1662f105486a0d8dce44dba0efa68859f9))

### Features

- **login:** custimizable login buttons ([735ac7e](https://github.com/gitsindonesia/ui-component/commit/735ac7e22b9c67541a7d8189e0200a853b8eb2c6))

# [0.6.0](https://github.com/gitsindonesia/ui-component/compare/v0.5.0...v0.6.0) (2022-06-20)

### Bug Fixes

- **v-switch:** remove extra space when no label ([d2b7709](https://github.com/gitsindonesia/ui-component/commit/d2b77090f4b304da0bf632fb441e0fee68cbc1ba))

### Features

- **v-switch:** custom classes ([aedc5d0](https://github.com/gitsindonesia/ui-component/commit/aedc5d06c84402b4c77a64b610068dc9dc06dd35))

# [0.5.0](https://github.com/gitsindonesia/ui-component/compare/v0.4.8...v0.5.0) (2022-06-20)

### Bug Fixes

- same color for text styled button ([26909ca](https://github.com/gitsindonesia/ui-component/commit/26909ca7146ac9fc6ef386717f7f6d5829f8fd42))
- **v-menu:** apply classMenuParent class ([d0d64ba](https://github.com/gitsindonesia/ui-component/commit/d0d64ba6621ca0493c30d5bf095bc1a8204ab653))

### Features

- **v-data-table:** customizable table classes ([ba69b5d](https://github.com/gitsindonesia/ui-component/commit/ba69b5d2e3778a627fea117b51b63692e09e77e7))

## [0.4.7](https://github.com/gitsindonesia/ui-component/compare/v0.4.6...v0.4.7) (2022-06-10)

### Bug Fixes

- **v-stats:** fix card layout ([1c60db9](https://github.com/gitsindonesia/ui-component/commit/1c60db91ff2a3041b60f96f97e892146607e88a2))

## [0.3.2](https://github.com/gitsindonesia/ui-component/compare/v0.3.1...v0.3.2) (2022-05-11)

### Bug Fixes

- **pages:** fix input prepend icon spacing ([77972f0](https://github.com/gitsindonesia/ui-component/commit/77972f0391edcef8c486b979841be509e64952f5))

## [0.3.1](https://github.com/gitsindonesia/ui-component/compare/v0.3.0...v0.3.1) (2022-05-11)

### Bug Fixes

- **ui:** fix dropdown import/export ([36dc771](https://github.com/gitsindonesia/ui-component/commit/36dc7713709552069e7a53ab6f068b8d8e58e69f))

# [0.3.0](https://github.com/gitsindonesia/ui-component/compare/v0.2.6...v0.3.0) (2022-05-11)

### Bug Fixes

- **v-input:** fix extra padding ([20d8702](https://github.com/gitsindonesia/ui-component/commit/20d8702d55eb4a2f7906c8d5514c822b871c6ded))

### Features

- **autocomplete:** clearable autocomplete ([bdfecb9](https://github.com/gitsindonesia/ui-component/commit/bdfecb942997df72a0e02a3e4213b445f9f279a1))
- **autocomplete:** new `autocomplete` component ([aa26812](https://github.com/gitsindonesia/ui-component/commit/aa2681207bcca34fa0b42c9849b45362cc3c99f9))
- **dropdown:** reworked dropdown component ([6c2b934](https://github.com/gitsindonesia/ui-component/commit/6c2b9344bc77970124a5d421344b2ae050a85f76))
- **pages:** apply some margin ([5d0006c](https://github.com/gitsindonesia/ui-component/commit/5d0006ce3d47219620e72fb8c88b54cda9d032c5))
- **v-input:** new `wrapper-class` and `input-class` prop ([ea5b5da](https://github.com/gitsindonesia/ui-component/commit/ea5b5dad2e45012612466f2bc89b932d8ddcdd86))

## [0.2.6](https://github.com/gitsindonesia/ui-component/compare/v0.2.5...v0.2.6) (2022-05-11)

### Bug Fixes

- **v-menu:** handle undefined injection for vue router ([f4313a4](https://github.com/gitsindonesia/ui-component/commit/f4313a4e4bf73569bf60a3c1ce1d8d1677232de9))

## [0.2.5](https://github.com/gitsindonesia/ui-component/compare/v0.2.4...v0.2.5) (2022-05-10)

**Note:** Version bump only for package @gits-id/components

## [0.2.4](https://github.com/gitsindonesia/ui-component/compare/v0.2.3...v0.2.4) (2022-05-10)

### Bug Fixes

- **v-checkbox:** fix checkbox validation ([412820a](https://github.com/gitsindonesia/ui-component/commit/412820a34e53b6ec8e526bb8d5157d7f641e1e48))

### Features

- use v-input in auth pages ([72219b6](https://github.com/gitsindonesia/ui-component/commit/72219b6945bca27c3f4f1486d9f09103bcea49b4))

## [0.2.2](https://github.com/gitsindonesia/ui-component/compare/v0.2.3...v0.2.2) (2022-05-10)

## [0.2.3](https://github.com/gitsindonesia/ui-component/compare/v0.2.2...v0.2.3) (2022-05-10)

### Bug Fixes

- change input error styles to border and text ([9d4b02a](https://github.com/gitsindonesia/ui-component/commit/9d4b02a80640b2be9495e8f4cb979c517651c508))
- **v-file-upload:** fix v-file-upload styles ([f3e453f](https://github.com/gitsindonesia/ui-component/commit/f3e453fa3040591261dd8b3c92d1a4a7a54d7ce2))

### Features

- **v-checkbox:** add useField for checkbox ([275e38d](https://github.com/gitsindonesia/ui-component/commit/275e38dea91d97ca6faa99342b2fffdbb2e27cf4))
- **v-input:** check error state from vee-validate errorMessage ([f4d6494](https://github.com/gitsindonesia/ui-component/commit/f4d64941bb2e3175a89722fdaeac076e1c27dbdf))
- **v-input:** integrate vee-validate to v-input ([6434d8a](https://github.com/gitsindonesia/ui-component/commit/6434d8aaf384d7ceb7f35ad773145408e91992fd))
- **v-input:** update input error style ([6901a89](https://github.com/gitsindonesia/ui-component/commit/6901a8944818c59e1c307dbf94cd16cea1101cd7))
- **v-input:** use `id` or `name` for label `for` ([3003dfe](https://github.com/gitsindonesia/ui-component/commit/3003dfe117f2901141be314dcf3abf36cd5816fb))
- **v-textarea:** integrate vee-validate validation to v-textarea ([d302cdf](https://github.com/gitsindonesia/ui-component/commit/d302cdf00bdfaa6a4a8e0b04d42fddefafcb288c))

## [0.2.2](https://github.com/gitsindonesia/ui-component/compare/v0.2.1...v0.2.2) (2022-05-10)

## [0.2.1](https://github.com/gitsindonesia/ui-component/compare/v0.2.0...v0.2.1) (2022-05-10)

### Bug Fixes

- **v-input:** (wip) fix input style ([becc14b](https://github.com/gitsindonesia/ui-component/commit/becc14ba032ad0026e748de093cccffb99f08e02))

### Features

- **v-input:** reworked v-input ([07376e7](https://github.com/gitsindonesia/ui-component/commit/07376e78c9f63830af46116d892c4570281d4ac2))

# [0.2.0](https://github.com/gitsindonesia/ui-component/compare/v0.1.17-next.10...v0.2.0) (2022-05-09)

### Bug Fixes

- decrease ring opacity ([da0b5fd](https://github.com/gitsindonesia/ui-component/commit/da0b5fd2f2016c74c8f139d9263fa58c8a3d559b))
- **v-file-input:** fix input style ([2e8a639](https://github.com/gitsindonesia/ui-component/commit/2e8a6396b56fd57d2e4ec2f4fbf11e302db0954b))

## [0.1.17-next.10](https://github.com/gitsindonesia/ui-component/compare/v0.1.17-next.9...v0.1.17-next.10) (2022-04-13)

### Features

- change default input style ([15b0b12](https://github.com/gitsindonesia/ui-component/commit/15b0b123bb3dc3dfb43981b2e9152e1788973c9a))
- **v-input:** improved focus style & change `noShadow` prop with `shadow` ([dab8ae3](https://github.com/gitsindonesia/ui-component/commit/dab8ae31ccf2bf4e15e991a7b6b83bd224b8a87b))
- **v-text-area:** new `shadow` prop ([584d909](https://github.com/gitsindonesia/ui-component/commit/584d909808403bcc1a608d26b7a7d0a4413b6474))

### BREAKING CHANGES

- **v-input:** no shadow by default & apply shadow via `shadow prop`

## [0.1.17-next.9](https://github.com/gitsindonesia/ui-component/compare/v0.1.17-next.8...v0.1.17-next.9) (2022-04-08)

### Bug Fixes

- export `NotFound` ([50692bc](https://github.com/gitsindonesia/ui-component/commit/50692bc2decdb2e0c359e47165b2daa5eb44b14e))
- import type ([38a692f](https://github.com/gitsindonesia/ui-component/commit/38a692f5d09dc0b64918d29d39003f8ab9998611))

## [0.1.17-next.8](https://github.com/gitsindonesia/ui-component/compare/v0.1.17-next.7...v0.1.17-next.8) (2022-04-08)

### Bug Fixes

- import type ([f9b50fb](https://github.com/gitsindonesia/ui-component/commit/f9b50fb18da64d7ece1dcab3f4e009a3ed9adbdf))
- import type ([d7e3a2e](https://github.com/gitsindonesia/ui-component/commit/d7e3a2e46bd888d3af60b5fe59c190f701d60087))

## [0.1.17-next.7](https://github.com/gitsindonesia/ui-component/compare/v0.1.17-next.6...v0.1.17-next.7) (2022-04-08)

### Bug Fixes

- **v-input:** adjust input size ([ac4ceed](https://github.com/gitsindonesia/ui-component/commit/ac4ceed8196022f8fa1fa77ec4721e529a306544))
- **v-menu:** fix spacing ([09e6b7d](https://github.com/gitsindonesia/ui-component/commit/09e6b7d5e41ae429d40c2bc460eaf14f19817523))

## [0.1.17-next.6](https://github.com/gitsindonesia/ui-component/compare/v0.1.17-next.5...v0.1.17-next.6) (2022-04-08)

### Bug Fixes

- **v-menu:** adjust styles ([7cc1302](https://github.com/gitsindonesia/ui-component/commit/7cc1302fe0fe88ab364b7bd56abefeb0d75e859c))

### Features

- **v-collapsible:** add new `hideIcon` prop ([3a8944c](https://github.com/gitsindonesia/ui-component/commit/3a8944c6578caf8197127b34a8b06c775b1f2fb6))

## [0.1.17-next.5](https://github.com/gitsindonesia/ui-component/compare/v0.1.17-next.4...v0.1.17-next.5) (2022-04-08)

### Features

- **v-collapse:** pass `open` value into `default` slot ([545fa19](https://github.com/gitsindonesia/ui-component/commit/545fa1923001a8205a029e438fc22f3764e4d9b8))
- **v-collapsible:** pass `open` value into `header` slot ([071198a](https://github.com/gitsindonesia/ui-component/commit/071198a1f487d06d5f9dedf6aa8022971186d362))
- **v-menu:** use v-collapsible for toggling v-menu ([5c05e1f](https://github.com/gitsindonesia/ui-component/commit/5c05e1f3dd2887ea60603a1fb0e046a9734f9461))

## [0.1.17-next.4](https://github.com/gitsindonesia/ui-component/compare/v0.1.17-next.3...v0.1.17-next.4) (2022-04-07)

### Bug Fixes

- update ui style ([0e4617d](https://github.com/gitsindonesia/ui-component/commit/0e4617d42983662171ba7d22b4eb62db0880c754))

## [0.1.17-next.3](https://github.com/gitsindonesia/ui-component/compare/v0.1.17-next.2...v0.1.17-next.3) (2022-04-07)

### Bug Fixes

- entry point for container package ([0a3c9a2](https://github.com/gitsindonesia/ui-component/commit/0a3c9a2b5a398b9f4cefed5269861fd276c42b53))
- package entry point ([4bc06e9](https://github.com/gitsindonesia/ui-component/commit/4bc06e9c945ccd3e1e867be4786ab14c601faefc))

## [0.1.17-next.2](https://github.com/gitsindonesia/ui-component/compare/v0.1.17-next.1...v0.1.17-next.2) (2022-04-04)

### Bug Fixes

- ui export ([dbcad32](https://github.com/gitsindonesia/ui-component/commit/dbcad3282d0c4fd7f7ddb877847dd01d109a4d14))

## [0.1.17-next.1](https://github.com/gitsindonesia/ui-component/compare/v0.1.17-next.0...v0.1.17-next.1) (2022-04-04)

### Bug Fixes

- button deps ([688dcbd](https://github.com/gitsindonesia/ui-component/commit/688dcbd0b29f8328f141910646948e391f229abc))
- types ([dadf6b5](https://github.com/gitsindonesia/ui-component/commit/dadf6b58f3b2e207caf05ea943a0d5a5fe7e476e))

### Features

- build `badge` component ([76d9385](https://github.com/gitsindonesia/ui-component/commit/76d9385bcc8d97bfa66de0a958bf3f4701a508a9))
- build `breadcrumbs` component ([ef4732d](https://github.com/gitsindonesia/ui-component/commit/ef4732d7b8b2a5b6c4b532029bd3cf7c82d407c3))
- build `checkbox` component ([7b640da](https://github.com/gitsindonesia/ui-component/commit/7b640da0526408dd4158e2cd57161eca113fcabe))
- build `collapsible` component ([5a2aec7](https://github.com/gitsindonesia/ui-component/commit/5a2aec7401c29b9692b01fdffc81ee23622b397a))
- build `container` component ([7f9fe7d](https://github.com/gitsindonesia/ui-component/commit/7f9fe7dd06d82f55ea595afbb35aa756c2278c1e))
- build `dropdown` component ([776b8cb](https://github.com/gitsindonesia/ui-component/commit/776b8cb781d347df5413a09c370bd4f63a885711))
- build `v-editor` component ([6815a02](https://github.com/gitsindonesia/ui-component/commit/6815a0258fded91ce79b192274f6d50fb9520d4c))
- build app-bar component ([844dd5a](https://github.com/gitsindonesia/ui-component/commit/844dd5ad2fc059bce418be610fcfadc6342aec41))
- **button:** improved disabled class ([4ba9a55](https://github.com/gitsindonesia/ui-component/commit/4ba9a5546ca1bbe0cc42386e77d87e63f0cb1a4d))
- **button:** improved icon styles ([4dec937](https://github.com/gitsindonesia/ui-component/commit/4dec937920f4fe8b41b771a5e90cf63cfde9c7f8))
- **card:** re-work `VCard` component ([218e7af](https://github.com/gitsindonesia/ui-component/commit/218e7af4696c180a1f94f9b7d5884c3b88f3cb98))
- improved Button component ([b07084e](https://github.com/gitsindonesia/ui-component/commit/b07084e9131e35e7dafa05b161ea7be7a9d7cffc))
- new `alert` tailwind component ([9d6cb27](https://github.com/gitsindonesia/ui-component/commit/9d6cb273c2db9d42cc0155db53af8831183792f2))
- new `Stepper` component ([50a3659](https://github.com/gitsindonesia/ui-component/commit/50a3659eab536396a025580fb965421d1a1f4c9f))
- register alert component ([b351ee0](https://github.com/gitsindonesia/ui-component/commit/b351ee00256a6c58f39ca92debae51e869fcfaa3))
- ship build components ([82fe871](https://github.com/gitsindonesia/ui-component/commit/82fe87178891b9a3e6ca0467af2892d6cbf9dba1))
- ship dist ui ([5185a0d](https://github.com/gitsindonesia/ui-component/commit/5185a0d5859a103ae66829fdb3434163f53da4cf))
- **v-alert:** build & ship dist v-alert ([f4c4974](https://github.com/gitsindonesia/ui-component/commit/f4c4974e0c0b374b1bfaab02f1a92fde036927c2))
- **v-card:** build card component ([158cf73](https://github.com/gitsindonesia/ui-component/commit/158cf734de36c6ad6ef29f472208de9b658d88ad))

## [0.1.17-next.0](https://github.com/gitsindonesia/ui-component/compare/v0.1.17-alpha.0...v0.1.17-next.0) (2022-03-24)

### Bug Fixes

- component import ([bdb15f2](https://github.com/gitsindonesia/ui-component/commit/bdb15f2c5bc4bd1e52043d70e743f082136f0f44))
- fix primary color ([3be4b18](https://github.com/gitsindonesia/ui-component/commit/3be4b18c3d116b2578e17730a52b3d1eef9bddad))
- remove overflow ([97bde5c](https://github.com/gitsindonesia/ui-component/commit/97bde5c40ba62b13681f058384dbfd6836982d64))
- responsive layout ([24aba05](https://github.com/gitsindonesia/ui-component/commit/24aba0537149f52b091766568048fda7f739136e))
- responsive layout ([0ae0117](https://github.com/gitsindonesia/ui-component/commit/0ae01172864cd011ef9e13b5a660d24ba448964a))
- tailwind path ([1c25ce9](https://github.com/gitsindonesia/ui-component/commit/1c25ce9334ccc093578724978f800d1e52da891c))
- typo ([d293656](https://github.com/gitsindonesia/ui-component/commit/d2936567598d2daa4499c8ac4e0f28c2259c39be))
- **v-file-upload:** update hover color ([75aefa6](https://github.com/gitsindonesia/ui-component/commit/75aefa60e6f2c57f4700d1616f84454f90a2e53c))
- **v-input:** change primary color share ([de9a81b](https://github.com/gitsindonesia/ui-component/commit/de9a81b9dde882705958f818df5c59887535d6b7))
- **v-select:** add tooltip component as dep ([3aea3e2](https://github.com/gitsindonesia/ui-component/commit/3aea3e2cb7d6d0b8fbbed98b2796a82aff8a0757))

### Features

- add not found page ([f81eeaa](https://github.com/gitsindonesia/ui-component/commit/f81eeaa9ad4ba5a6c0d9ba52147702af1f052f38))
- add starter ([588a2a5](https://github.com/gitsindonesia/ui-component/commit/588a2a5138b121d3fd137ba053bb966a3f13a93f))
- export @gits-id/pages components ([db2a1f1](https://github.com/gitsindonesia/ui-component/commit/db2a1f1d00c65a0caa5efc4db8247a5faba78083))
- new `dark` color ([b2197b4](https://github.com/gitsindonesia/ui-component/commit/b2197b4a5da9234308c8886d201281a7032bffac))
- **v-alert:** default isOpen state for model-less component ([56ce7df](https://github.com/gitsindonesia/ui-component/commit/56ce7dfeff4b28ebcb9e02cb9a30531e49c8b967))
- **v-alert:** improved `outlined` and add new `solid` colors ([264e85f](https://github.com/gitsindonesia/ui-component/commit/264e85f9f9b7a4134768d08ffe62d14ee87496cb))
- **v-alert:** new `border` prop ([886c982](https://github.com/gitsindonesia/ui-component/commit/886c98228bd0e641374d78b9f9e2050271e50666))
- **v-alert:** new slots (`x-icon` and `x-button`) ([d44cd3e](https://github.com/gitsindonesia/ui-component/commit/d44cd3e3be74d171910aea6030ec9cb96defd58e))
- **v-badge:** update size, colors and styles ([a3505e7](https://github.com/gitsindonesia/ui-component/commit/a3505e7308f87f7875c598a0d0f4aaa58d1eae38))
- **v-badge:** update v-badge & new `outlined` style ([a555d25](https://github.com/gitsindonesia/ui-component/commit/a555d252acec7f208639c818081133e7efe057fb))
- **v-breadcrumbs:** update breadcrumbs ([717c065](https://github.com/gitsindonesia/ui-component/commit/717c0656a784e0c4c61f377ea134073213cb8920))
- **v-input:** improved v-input styles ([8633ab6](https://github.com/gitsindonesia/ui-component/commit/8633ab6463ac5f6b3ada6ee746abcb12d708d618))
- **v-radio-group:** new `inline` prop ([9ff4f7d](https://github.com/gitsindonesia/ui-component/commit/9ff4f7d6b55651802a79bb9f1b874e32d1b67e24))

## [0.1.17-alpha.0](https://github.com/gitsindonesia/ui-component/compare/v0.1.16...v0.1.17-alpha.0) (2022-03-11)

### Bug Fixes

- breadcrumbs types ([b95f447](https://github.com/gitsindonesia/ui-component/commit/b95f4473992c31124c67ca604726a0a56f3c60cd))
- **collapsible:** remove slot and emit ([e76783c](https://github.com/gitsindonesia/ui-component/commit/e76783c99f60f4f6f41f1c310763bca8f9303075))

### Features

- **alert:** move component to src dir & update tailwind config ([aa9284c](https://github.com/gitsindonesia/ui-component/commit/aa9284c2501d9dc0124b14c242722f19472f12ba))
- **btn:** build button component ([13898c5](https://github.com/gitsindonesia/ui-component/commit/13898c5257e0cef1ccd2b9bb9514f1ba3e734569))
- demo ([05d5b9f](https://github.com/gitsindonesia/ui-component/commit/05d5b9f85c6e8acd52bd790dd1bf7db1dd93e07a))
- move `ui` package to pacakges/ui ([3c5d807](https://github.com/gitsindonesia/ui-component/commit/3c5d807d9269f040062c7a9f04f9b302d82dcb49))
- new `@gits-id/components` ([ceb954c](https://github.com/gitsindonesia/ui-component/commit/ceb954c7cd4c5a0bdb81a460b88047a18977c7c2))
- **VBtn:** rework v-btn ([961507d](https://github.com/gitsindonesia/ui-component/commit/961507d6cfe87079c34835cd0e96c1b966667403))

## [0.1.16](https://github.com/gitsindonesia/ui-component/compare/v0.1.15...v0.1.16) (2022-03-01)

### Bug Fixes

- **collapsible:** register collapsible and counter text area ([cfa3c08](https://github.com/gitsindonesia/ui-component/commit/cfa3c08042264466709ea674191950735977ef2d))

## [0.1.15](https://github.com/gitsindonesia/ui-component/compare/v0.1.14...v0.1.15) (2022-02-08)

### Features

- update v-tooltip ([08c173c](https://github.com/gitsindonesia/ui-component/commit/08c173cd5e5b05f9f7b97c01847d3b9a6aa02193))

## [0.1.14](https://github.com/gitsindonesia/ui-component/compare/v0.1.13...v0.1.14) (2022-02-08)

### Features

- **v-tooltip:** removed `scoped` ([61204ca](https://github.com/gitsindonesia/ui-component/commit/61204cabba4e527241475d7c23a5d7af7ee7419a))

## [0.1.13](https://github.com/gitsindonesia/ui-component/compare/v0.1.12...v0.1.13) (2022-02-08)

### Bug Fixes

- style v-tooltip ([4288cf4](https://github.com/gitsindonesia/ui-component/commit/4288cf4c30f33b78bbd1f3308b2e13b2cc20e4ea))

## [0.1.12](https://github.com/gitsindonesia/ui-component/compare/v0.1.11...v0.1.12) (2022-01-28)

### Bug Fixes

- **vselect:** bug include ([d43986f](https://github.com/gitsindonesia/ui-component/commit/d43986fb75395055d298a25b18cc8a39baf61ba3))

### Features

- **navbar:** add `small` prop ([bb36160](https://github.com/gitsindonesia/ui-component/commit/bb3616041273c0bbec421542f4cf16b691590af3))
- **v-menu:** add `small` prop ([0ed31e4](https://github.com/gitsindonesia/ui-component/commit/0ed31e46de8a4f12cffbc54b2879abdc2fad48d6))
- **v-nav-drawer:** new small prop ([fd74c23](https://github.com/gitsindonesia/ui-component/commit/fd74c23818b14bf1b6a2d812e4743a834364ef21))

## [0.1.11](https://github.com/gitsindonesia/ui-component/compare/v0.1.10...v0.1.11) (2022-01-25)

### Features

- add hide button remove ([65238ea](https://github.com/gitsindonesia/ui-component/commit/65238eaa7a548aa6ba47e39908f84d15632cf443))
- add width header ([0bcc6c6](https://github.com/gitsindonesia/ui-component/commit/0bcc6c6e7a913bc31d14659f296904c38f2a6a87))

## [0.1.10](https://github.com/gitsindonesia/ui-component/compare/v0.1.9...v0.1.10) (2022-01-13)

### Features

- add hide button remove, feat: add width header ([1075bd1](https://github.com/gitsindonesia/ui-component/commit/1075bd16fbbe61b2852ee3a3bfa48e1f4c6a5d04))
- integrate unplugin-icons ([dd4adc6](https://github.com/gitsindonesia/ui-component/commit/dd4adc65b90a6ae743d1e976d802bb5a543cb376))

## [0.1.9](https://github.com/gitsindonesia/ui-component/compare/v0.1.8...v0.1.9) (2022-01-11)

### Features

- **v-menu:** improved styles v-menu ([4a3501b](https://github.com/gitsindonesia/ui-component/commit/4a3501b9fee681a13077cbf774460f2e6d7ceb5a))

## [0.1.8](https://github.com/gitsindonesia/ui-component/compare/v0.1.7...v0.1.8) (2022-01-06)

## [0.1.7](https://github.com/gitsindonesia/ui-component/compare/v0.1.6...v0.1.7) (2022-01-04)

### Features

- add expand hover when sidebar mini ([b6371ef](https://github.com/gitsindonesia/ui-component/commit/b6371efd2057299836ff52eceb77f51fce8a61f7))
- add freeze table ([10a191f](https://github.com/gitsindonesia/ui-component/commit/10a191fb715558bcaa0efc84e920375d4d37641f))

## [0.1.6](https://github.com/gitsindonesia/ui-component/compare/v0.1.5...v0.1.6) (2021-12-30)

### Bug Fixes

- disabled class vbtn ([8785346](https://github.com/gitsindonesia/ui-component/commit/8785346ec1c71e715b7288ae67e15ff40582013b))
- item not found ketika itemsPerPage change ([9ef48e8](https://github.com/gitsindonesia/ui-component/commit/9ef48e8902da5e602e12776f6c1ca01d54bd0f59))

## [0.1.5](https://github.com/gitsindonesia/ui-component/compare/v0.1.4...v0.1.5) (2021-12-29)

### Bug Fixes

- validasi placeholder v-multi-select ([0707be1](https://github.com/gitsindonesia/ui-component/commit/0707be16695c6389d19ee09fbaf897b03f45a3f7))

## [0.1.4](https://github.com/gitsindonesia/ui-component/compare/v0.1.3...v0.1.4) (2021-12-29)

### Features

- revert toastModule ([892c75a](https://github.com/gitsindonesia/ui-component/commit/892c75aeffc4ac7b20fc477db6fd01288a8831ce))

## [0.1.3](https://github.com/gitsindonesia/ui-component/compare/v0.1.2...v0.1.3) (2021-12-29)

### Bug Fixes

- validasi preview url ([dc018a9](https://github.com/gitsindonesia/ui-component/commit/dc018a969c81378b3113723bf57c146ab9f20f45))

### Features

- **v-toast:** added back confirm and confirmDelete actions ([aa99665](https://github.com/gitsindonesia/ui-component/commit/aa9966584362f1e664707df4325302dd38a181a1))

## [0.1.2](https://github.com/gitsindonesia/ui-component/compare/v0.1.1...v0.1.2) (2021-12-24)

### Bug Fixes

- style button ([877890a](https://github.com/gitsindonesia/ui-component/commit/877890a6b84530c222ed6b628b3771f3d746cf4f))

### Features

- add publish script ([b896640](https://github.com/gitsindonesia/ui-component/commit/b896640b97b6056c86ac9a05474a35a81ab0fc95))

## [0.1.1](https://github.com/gitsindonesia/ui-component/compare/v0.1.0...v0.1.1) (2021-12-23)

### Bug Fixes

- **vbtn:** wordwarp button ([c7f8d05](https://github.com/gitsindonesia/ui-component/commit/c7f8d052de316ebadf0518ee35c0e4a741fa3f9f))
- **vmenu:** add sigle menus style ([fd9a82d](https://github.com/gitsindonesia/ui-component/commit/fd9a82d83735beb8dba5011b1cfc51d16a256d82))
- **vmenu:** remove accordion ([f9bbc54](https://github.com/gitsindonesia/ui-component/commit/f9bbc541538112a6e54fa144a9a1cf01231a30bd))

### Features

- add release ci ([fc8af9b](https://github.com/gitsindonesia/ui-component/commit/fc8af9bf8b454d6fb1f2f3224f90a3b25969bd59))
- **vnavdrawer:** add slot menus ([2bafd7b](https://github.com/gitsindonesia/ui-component/commit/2bafd7bac2031d58c10b595f259df42e43b5d238))

# [0.1.0](https://github.com/gitsindonesia/ui-component/compare/v0.0.34...v0.1.0) (2021-12-21)

### Features

- ignore storybook-static folder ([670c642](https://github.com/gitsindonesia/ui-component/commit/670c64269c9d4a251ba4faff1e4e5d9b9ab0cac5))
- **VCollapsibleGroup:** new `VCollapsibleGroup` component ([324e7da](https://github.com/gitsindonesia/ui-component/commit/324e7dace75bc03e8a28efa11d50986b9caa8181))

## [0.0.34](https://github.com/gitsindonesia/ui-component/compare/v0.0.33...v0.0.34) (2021-12-20)

### Bug Fixes

- click outside menu select ([6d5dc86](https://github.com/gitsindonesia/ui-component/commit/6d5dc862010072817dca31b7ab9b32645a309363))
- hover primary color ([1eca80f](https://github.com/gitsindonesia/ui-component/commit/1eca80f4fc4fb300b1ab7b38883fc3fb5473fe7e))
- hover primary color ([3474d9b](https://github.com/gitsindonesia/ui-component/commit/3474d9b768b1c25a4444123f1840fe54e3a4390a))

### Features

- **nav-drawer:** add default slot ([4fa5d5f](https://github.com/gitsindonesia/ui-component/commit/4fa5d5fad8b8be4f593a415dc219feed869c52c2))
- **vmenu:** background color ([a85d1ab](https://github.com/gitsindonesia/ui-component/commit/a85d1abe1ddc036eb7ca6133ec05af393e3566a8))

## [0.0.33](https://github.com/gitsindonesia/ui-component/compare/v0.0.32...v0.0.33) (2021-12-16)

### Features

- add some props for adjustment ui ([c50ce33](https://github.com/gitsindonesia/ui-component/commit/c50ce331be510ddc4c0e517cd2a0aafc16200bb3))

## [0.0.32](https://github.com/gitsindonesia/ui-component/compare/v0.0.31...v0.0.32) (2021-12-15)

## [0.0.31](https://github.com/gitsindonesia/ui-component/compare/v0.0.30...v0.0.31) (2021-12-15)

### Bug Fixes

- **vbreadcrumbs:** add props ([cf63984](https://github.com/gitsindonesia/ui-component/commit/cf6398426c4f7cafec282d489bc8d0524352dc86))

### Features

- add btn styles into file ([d6a1d77](https://github.com/gitsindonesia/ui-component/commit/d6a1d7780fef4376b5c862efc32beae777c90802))
- add class inline-flex ([da8f8d6](https://github.com/gitsindonesia/ui-component/commit/da8f8d682612b2e20be1edcef5f36b307cfe1e98))
- **breadcrumbs:** add new colors ([f878f81](https://github.com/gitsindonesia/ui-component/commit/f878f81cfa31a3af6cf78cec44b8f08e29ceebf9))
- **vdatatable:** add props color and style ([57552bc](https://github.com/gitsindonesia/ui-component/commit/57552bc54567a3d39a6272466de6ed632565161f))

## [0.0.30](https://github.com/gitsindonesia/ui-component/compare/v0.0.29...v0.0.30) (2021-12-13)

### Bug Fixes

- fix vue-feather deps mismatch ([f5c0307](https://github.com/gitsindonesia/ui-component/commit/f5c0307849dc54db5083007d525c13bce9d22980))

## [0.0.29](https://github.com/gitsindonesia/ui-component/compare/v0.0.28...v0.0.29) (2021-12-13)

### Bug Fixes

- **login:** autocomplate ([e07554c](https://github.com/gitsindonesia/ui-component/commit/e07554cbab44017595569f97b57f5ddb9e24a703))
- revert v-btn ([28e1ed0](https://github.com/gitsindonesia/ui-component/commit/28e1ed076e38601c4e28c16576e3eff67a3a63c8))

## [0.0.28](https://github.com/gitsindonesia/ui-component/compare/v0.0.27...v0.0.28) (2021-12-13)

### Features

- **v-btn:** update button icons styles ([5dfbd16](https://github.com/gitsindonesia/ui-component/commit/5dfbd16fa425900b21c52396187168c19efe0ada))
- **VBtn:** extract btn styles into file ([48f3d4a](https://github.com/gitsindonesia/ui-component/commit/48f3d4a59848731e435603bc20a6556ebac388b0))

## [0.0.27](https://github.com/gitsindonesia/ui-component/compare/v0.0.26...v0.0.27) (2021-12-09)

### Bug Fixes

- bug sonarcube ([c704eed](https://github.com/gitsindonesia/ui-component/commit/c704eed8cdc6fd450ce81814bfedd41eda35940f))
- vuex version ([6524175](https://github.com/gitsindonesia/ui-component/commit/6524175ddf0c02447e858004289b8d53e5f76663))

## [0.0.26](https://github.com/gitsindonesia/ui-component/compare/v0.0.25...v0.0.26) (2021-12-07)

### Bug Fixes

- missing deps and drop sass ([251c068](https://github.com/gitsindonesia/ui-component/commit/251c0684a6a08e96e856230f523bdc0ca11cddd2))
- remove place holder when item selected ([9615b81](https://github.com/gitsindonesia/ui-component/commit/9615b8141550940c838ab25d5c4888cd6f0d8a5a))

## [0.0.25](https://github.com/gitsindonesia/ui-component/compare/v0.0.24...v0.0.25) (2021-12-03)

### Bug Fixes

- set default logo height ([a9b59b4](https://github.com/gitsindonesia/ui-component/commit/a9b59b4405bf85cd488065fc17003fe016dacb76))

### Features

- change default color preset ([7a40d0b](https://github.com/gitsindonesia/ui-component/commit/7a40d0b2c6f92ec2516eeb0f71d096cc7ae77d9d))
- improved navdrawer and v-menus ([022d94b](https://github.com/gitsindonesia/ui-component/commit/022d94ba961b115d1fbc772febd45ac6b4741247))
- integrate storybook ([df04b7a](https://github.com/gitsindonesia/ui-component/commit/df04b7a8ab0e8b246993362b260e8f591d2c4c7c))
- move services and types to core ui ([58d3113](https://github.com/gitsindonesia/ui-component/commit/58d3113348e4aed119d35cb05753e6a3711edf11))
- register component as async component for improving bundle size ([b45033b](https://github.com/gitsindonesia/ui-component/commit/b45033b5b813b435df0b59872a957d48ebf91bff))
- update button stories ([d7a7449](https://github.com/gitsindonesia/ui-component/commit/d7a7449b9aeccdecb90cd27d91959437106e583a))
- **v-btn:** improved button design system ([df7ba05](https://github.com/gitsindonesia/ui-component/commit/df7ba05bedd75d2e54f234e4bfa4c48fc246429b))

## [0.0.24](https://github.com/gitsindonesia/ui-component/compare/v0.0.23...v0.0.24) (2021-12-02)

### Bug Fixes

- error split undefined ([6984f73](https://github.com/gitsindonesia/ui-component/commit/6984f73c7afc0e320653985250432d80de87bfab))

## [0.0.23](https://github.com/gitsindonesia/ui-component/compare/v0.0.22...v0.0.23) (2021-12-02)

### Bug Fixes

- error isActive ([f749242](https://github.com/gitsindonesia/ui-component/commit/f74924280488ac6c0e19d41ce542f2a4d0824b70))
- **login:** autocomplate form login ([e7cdfe4](https://github.com/gitsindonesia/ui-component/commit/e7cdfe41be60649d06248a20c99c4627803250a8))

## [0.0.22](https://github.com/gitsindonesia/ui-component/compare/v0.0.21...v0.0.22) (2021-12-01)

## [0.0.21](https://github.com/gitsindonesia/ui-component/compare/v0.0.20...v0.0.21) (2021-12-01)

## [0.0.20](https://github.com/gitsindonesia/ui-component/compare/v0.0.19...v0.0.20) (2021-12-01)

### Bug Fixes

- add truncate & fix active class ([8217530](https://github.com/gitsindonesia/ui-component/commit/82175307f35c067a3d703d41aa2504cba78a9894))

## [0.0.19](https://github.com/gitsindonesia/ui-component/compare/v0.0.18...v0.0.19) (2021-12-01)

### Bug Fixes

- **login atuh:** typo ([0876929](https://github.com/gitsindonesia/ui-component/commit/0876929c156d5d2fc9e3c9ebf4b540f6872f258e))

### Features

- **login:** add autocompale on off ([fd96602](https://github.com/gitsindonesia/ui-component/commit/fd96602fce1c67ca715a3ef06f25055c683a6593))

## [0.0.18](https://github.com/gitsindonesia/ui-component/compare/v0.0.17...v0.0.18) (2021-12-01)

### Bug Fixes

- disable active state for now ([77415c0](https://github.com/gitsindonesia/ui-component/commit/77415c0f3d4f4393704d240f36c1dfd296a213cd))
- padding sidebar ([dbc4d2e](https://github.com/gitsindonesia/ui-component/commit/dbc4d2ef603f89032167c108370a944e53afa1d7))

## [0.0.17](https://github.com/gitsindonesia/ui-component/compare/v0.0.16...v0.0.17) (2021-12-01)

### Bug Fixes

- child menu style agak menjorok ke dalam ([2a9d23a](https://github.com/gitsindonesia/ui-component/commit/2a9d23a95c69d3f8576982dc8303b2557b489b6d))

### Features

- **v-btn:** move shadow to `prop` and decrease font weight level ([087074b](https://github.com/gitsindonesia/ui-component/commit/087074b4e9eda8c4017045c238fe47afaa8fff88))

## [0.0.16](https://github.com/gitsindonesia/ui-component/compare/v0.0.15...v0.0.16) (2021-11-30)

### Bug Fixes

- error file upload ([90644ce](https://github.com/gitsindonesia/ui-component/commit/90644ce4d373b93e52fd49aac3191c1e7b180777))

## [0.0.15](https://github.com/gitsindonesia/ui-component/compare/v0.0.14...v0.0.15) (2021-11-30)

### Bug Fixes

- child menu style agak menjorok ke dalam ([98e45d9](https://github.com/gitsindonesia/ui-component/commit/98e45d902f868f7f8d19029318a09a10ef17dddd))

### Features

- add custom menu active ([8547932](https://github.com/gitsindonesia/ui-component/commit/8547932cd9195a2def6540f3aa467a0535928105))
- add error message required login form ([12809b2](https://github.com/gitsindonesia/ui-component/commit/12809b26f5e2fb0dd3117a5ac945294193e64bbe))

## [0.0.14](https://github.com/gitsindonesia/ui-component/compare/v0.0.13...v0.0.14) (2021-11-30)

## [0.0.13](https://github.com/gitsindonesia/ui-component/compare/v0.0.12...v0.0.13) (2021-11-16)

### Bug Fixes

- nav drawer add prop for parent menu ([4f4419b](https://github.com/gitsindonesia/ui-component/commit/4f4419bc45f65f50fea0e0de55ac88417dfad0a7))
- navdrawer props ([89bc9af](https://github.com/gitsindonesia/ui-component/commit/89bc9affb44c4bb0fd6d2128ec241a93f274daca))
- remove console ([05cbb67](https://github.com/gitsindonesia/ui-component/commit/05cbb6755bd8f22f672e2fe1c4e97d2de4433421))

## [0.0.12](https://github.com/gitsindonesia/ui-component/compare/v0.0.11...v0.0.12) (2021-11-12)

### Bug Fixes

- types ([cadf8dc](https://github.com/gitsindonesia/ui-component/commit/cadf8dcb19b43cbef5c7213749949e35bf7f7500))
- unregister prepublishOnly command ([0e1bf0d](https://github.com/gitsindonesia/ui-component/commit/0e1bf0d7147363ce26edef95a923e68fc377d98c))

### Features

- disable v-editor storybook for now ([9d2bff3](https://github.com/gitsindonesia/ui-component/commit/9d2bff30fedc91eb1310df7a570f96ac73d8796a))

## [0.0.11](https://github.com/gitsindonesia/ui-component/compare/v0.0.10...v0.0.11) (2021-11-11)

### Bug Fixes

- default improved input classes ([20b9864](https://github.com/gitsindonesia/ui-component/commit/20b98648a4e866bb5021b93b484e9c6255f5a01c))

### Features

- unregister VEditor as global export ([3cdca38](https://github.com/gitsindonesia/ui-component/commit/3cdca38f2a569b0e69e635d4eda533a80fdfe989))
- **v-multi-select:** add error state ([c4a6ecd](https://github.com/gitsindonesia/ui-component/commit/c4a6ecd37f6654543ade055a561115dfe2b4763d))

## [0.0.10](https://github.com/gitsindonesia/ui-component/compare/v0.0.9...v0.0.10) (2021-11-05)

### Bug Fixes

- curated publish files ([826db70](https://github.com/gitsindonesia/ui-component/commit/826db7056e7e6dc69dded4373064f39159ae8702))
- improved types ([733c6f8](https://github.com/gitsindonesia/ui-component/commit/733c6f8db6aa7ca3e8c7a717935bea1ef461a61c))
- improved types ([1121f4b](https://github.com/gitsindonesia/ui-component/commit/1121f4b02dcfa57863320ea29d6828a15a788fcf))
- v-slot ([bf92f18](https://github.com/gitsindonesia/ui-component/commit/bf92f1891cec3b685189e02d291a47234c227072))

## [0.0.9](https://github.com/gitsindonesia/ui-component/compare/v0.0.8...v0.0.9) (2021-11-05)

### Bug Fixes

- login page ([b9382de](https://github.com/gitsindonesia/ui-component/commit/b9382de3cc28a45eb5ab94cd3694e8dcc4635919))
- search bug caused by inherit attrs ([61d7146](https://github.com/gitsindonesia/ui-component/commit/61d714605037c5b66542fc1be296e383816536e5))

## [0.0.8](https://github.com/gitsindonesia/ui-component/compare/v0.0.7...v0.0.8) (2021-11-04)

### Bug Fixes

- fix some typings ([dd52a8b](https://github.com/gitsindonesia/ui-component/commit/dd52a8b4b67b20fc6f5add5c5389bdcf4b6b7969))
- prepend slot ([f4cc3b2](https://github.com/gitsindonesia/ui-component/commit/f4cc3b239d2c90711c962d013bbdd9ecc33185f9))
- timeout logic ([5695e95](https://github.com/gitsindonesia/ui-component/commit/5695e952275ff89ef3246b2df6bedea0ebde6139))
- typings ([c0a8f4d](https://github.com/gitsindonesia/ui-component/commit/c0a8f4d40d1f291fbf5a5d500d15bae7634858a8))

### Features

- register v-editor as async component ([0d38a1e](https://github.com/gitsindonesia/ui-component/commit/0d38a1e6e81a84d3331d0a83390372dfce66bd83))
- **v-breadcrumbs:** added custom slots: `title.index` and `item.index` ([4250a9e](https://github.com/gitsindonesia/ui-component/commit/4250a9eee36d4b82dff96213c25af736e1aa9cc4))
- **v-btn:** new `newTab` prop for targeting new tab ([861879b](https://github.com/gitsindonesia/ui-component/commit/861879b3e018ffbc1f83d1c428e3e41e63a8f6f4))
- **v-file-upload:** allow string as initial value ([e9ca735](https://github.com/gitsindonesia/ui-component/commit/e9ca735d81e81370a594fc7c6b3156d85027a508))
- **v-file-upload:** update ui for handling readonly state on dropzone theme ([98938c8](https://github.com/gitsindonesia/ui-component/commit/98938c830097d303d62bd8db840ab6a073cc38e7))

## [0.0.7](https://github.com/gitsindonesia/ui-component/compare/v0.0.6...v0.0.7) (2021-10-28)

### Bug Fixes

- set value null ([d88d3ea](https://github.com/gitsindonesia/ui-component/commit/d88d3ea75eca2e301a64f34de3b7d68752c24209))

## [0.0.6](https://github.com/gitsindonesia/ui-component/compare/v0.0.5...v0.0.6) (2021-10-28)

### Features

- **v-file-upload:** fixed ui for theme=image ([573b793](https://github.com/gitsindonesia/ui-component/commit/573b7931f56ad7dc908a77025329bf60fb3b3d03))
- **v-file-upload:** improved dropzone ([fd6c28f](https://github.com/gitsindonesia/ui-component/commit/fd6c28f5755cf4e3b86e30601bb4c4acfc3616b9))

## [0.0.5](https://github.com/gitsindonesia/ui-component/compare/v0.0.4...v0.0.5) (2021-10-28)

### Features

- handle drag and drop ([2d6c33c](https://github.com/gitsindonesia/ui-component/commit/2d6c33c37a470fc3e20e173d785774ebc153e575))

## [0.0.4](https://github.com/gitsindonesia/ui-component/compare/v0.0.3...v0.0.4) (2021-10-28)

### Bug Fixes

- **file upload:** jika v-model null maka file dihapus ([854d2d9](https://github.com/gitsindonesia/ui-component/commit/854d2d9e7d230c6bd712490134db52d8efb6db62))
- issue upload file ([363e8a1](https://github.com/gitsindonesia/ui-component/commit/363e8a15577b7400d7679542ecfc984f73f5cd73))

### Features

- **v-file-input:** reworked and fixed bug file input no cleared on remove ([6edc5dc](https://github.com/gitsindonesia/ui-component/commit/6edc5dcc7a59b0895aa2d5f90025ba384066dd0b))
- **v-file-upload:** new `dropzone` theme ([c276e02](https://github.com/gitsindonesia/ui-component/commit/c276e02946556c146342c3aa71057979d0af4a91))

## [0.0.3](https://github.com/gitsindonesia/ui-component/compare/v0.0.2...v0.0.3) (2021-10-28)

### Bug Fixes

- color error message textarea ([f1ce0b9](https://github.com/gitsindonesia/ui-component/commit/f1ce0b9690681d3b34d19a9685c96c57ade44d0e))

## [0.0.2](https://github.com/gitsindonesia/ui-component/compare/v0.0.2-alpha.18...v0.0.2) (2021-10-25)

### Bug Fixes

- **v-data-table:** fix sortBy value on handleSort event ([be0af0a](https://github.com/gitsindonesia/ui-component/commit/be0af0a78b8e77e46741d1af847a7580dbb8eb06))

### Features

- **v-app-bar:** new `default-hidden` prop ([5789648](https://github.com/gitsindonesia/ui-component/commit/57896487342a619371d63ca91276af9b193a241f))
- **v-dropdown:** new props: `hideLabel` and `wrapperClass` ([e958a81](https://github.com/gitsindonesia/ui-component/commit/e958a81529425ae68214288e3ae45cfaa0e5ac8a))
- **v-menu:** fix responsive menu ([2cb871f](https://github.com/gitsindonesia/ui-component/commit/2cb871fdee4d35c8a04d5012f830d141b13be035))
- **v-nav-drawer:** new emit event: `toggle:click` ([4594a5e](https://github.com/gitsindonesia/ui-component/commit/4594a5efb71b0de968d1fe4ac4b586afb144e438))

## [0.0.2-alpha.18](https://github.com/gitsindonesia/ui-component/compare/v0.0.2-alpha.17...v0.0.2-alpha.18) (2021-10-14)

### Features

- update data-table types ([f107e25](https://github.com/gitsindonesia/ui-component/commit/f107e2553b8c6b8fd5dd9a3e46acc8b57a774c50))
- update v-data-table and v-data-table-pagination ([8474b7e](https://github.com/gitsindonesia/ui-component/commit/8474b7edd64a77c233bc3e672dfd643b1a29845d))

## [0.0.2-alpha.17](https://github.com/gitsindonesia/ui-component/compare/v0.0.2-alpha.16...v0.0.2-alpha.17) (2021-10-14)

### Features

- add yup as dep ([f17816f](https://github.com/gitsindonesia/ui-component/commit/f17816f033a4b4048dc8ccefb851c50f47d8dfda))
- update v-file-upload, v-radio-group and v-select ([66faffe](https://github.com/gitsindonesia/ui-component/commit/66faffec6caa8f5fd7a144376f44df4b712b584c))

## [0.0.2-alpha.16](https://github.com/gitsindonesia/ui-component/compare/v0.0.2-alpha.15...v0.0.2-alpha.16) (2021-10-13)

### Bug Fixes

- shims vue ([d7db2ec](https://github.com/gitsindonesia/ui-component/commit/d7db2ec3db3f8ac896732798d85a0805eb69d996))

### Features

- **login:** replace zod with yup and improved dynamic username field ([d4de398](https://github.com/gitsindonesia/ui-component/commit/d4de3988a3853fda3a0af88c39422dccfffe45c8))

## [0.0.2-alpha.15](https://github.com/gitsindonesia/ui-component/compare/v0.0.2-alpha.14...v0.0.2-alpha.15) (2021-10-12)

### Features

- **v-editor:** remove support for quill ([78525f8](https://github.com/gitsindonesia/ui-component/commit/78525f821bf4448b5d28a273daeaaa64e8d63874))

## [0.0.2-alpha.14](https://github.com/gitsindonesia/ui-component/compare/v0.0.2-alpha.13...v0.0.2-alpha.14) (2021-10-12)

### Features

- upgrade deps, fix dev and update build ([82debf1](https://github.com/gitsindonesia/ui-component/commit/82debf13d9cbac3634b47e7c3c0218ece41d80f5))

## [0.0.2-alpha.13](https://github.com/gitsindonesia/ui-component/compare/v0.0.2-alpha.12...v0.0.2-alpha.13) (2021-10-06)

### Features

- moved date helpers to starter ([39b43f9](https://github.com/gitsindonesia/ui-component/commit/39b43f9101e0c4cfd1875aa503dc32e1089d2ba6))

## [0.0.2-alpha.12](https://github.com/gitsindonesia/ui-component/compare/v0.0.2-alpha.11...v0.0.2-alpha.12) (2021-10-05)

## [0.0.2-alpha.11](https://github.com/gitsindonesia/ui-component/compare/v0.0.2-alpha.10...v0.0.2-alpha.11) (2021-10-05)

### Bug Fixes

- **v-menu:** fix syntax ([6a52982](https://github.com/gitsindonesia/ui-component/commit/6a52982e659fc8e0b82dde0b962ef973c2ae90e9))
- **v-nav-drawer:** fix types ([e33b498](https://github.com/gitsindonesia/ui-component/commit/e33b4987aaf32c6553b39ad4bb45d3f46887c597))
- **v-toast:** fix close modal logic when setting timeout ([22405b7](https://github.com/gitsindonesia/ui-component/commit/22405b759c032f1a8aa403e8a0863912e5995335))

### Features

- **helpers:** added some new helper functions ([dceac0e](https://github.com/gitsindonesia/ui-component/commit/dceac0e747f2649f88d6c6fdd5de18ba0e707d03))
- improved v-menus and v-menu ([2d50333](https://github.com/gitsindonesia/ui-component/commit/2d503331ae4f3dce553f0e844b8701d71024270d))
- new `get` function ([4208a5b](https://github.com/gitsindonesia/ui-component/commit/4208a5b97bfd647b303d6d7ffc887c242dcaf9a4))
- **toast:** added composition API for toast: useToast() ([bac848c](https://github.com/gitsindonesia/ui-component/commit/bac848c95f5c247e57f56043d4d51dece54c2a24))
- **v-breadcrumbs:** improved styles and active state ([a7b6420](https://github.com/gitsindonesia/ui-component/commit/a7b64206a5193dacb98af5490ef0f50d666a36a9))
- **v-checkbox:** added native checkbox value support ([798c9ce](https://github.com/gitsindonesia/ui-component/commit/798c9ce9a7a852472be92ea09521d8466f14f268))
- **v-data-table-pagination:** watch model value changed ([4dc710c](https://github.com/gitsindonesia/ui-component/commit/4dc710cde367454d981a30737bd77b913d80b8d3))
- **v-data-table:** improved v-data-table ([d5994b9](https://github.com/gitsindonesia/ui-component/commit/d5994b957c6705e568c09021fc0196e9dd18b761))
- **v-dropdown:** improved dropdown component ([59c2471](https://github.com/gitsindonesia/ui-component/commit/59c247174643fff80a5a97db7abe099e214cdfc5))
- **v-dropdown:** new custom slots: `label` and `icon` ([c6b528a](https://github.com/gitsindonesia/ui-component/commit/c6b528a17689c1fe6bebe047e8073f5b2a812a84))
- **v-editor:** change default editor to ckeditor ([01af4ce](https://github.com/gitsindonesia/ui-component/commit/01af4cea5858890216b06dd1b7b22e55ed3e9021))
- **v-editor:** v-editor now support quill ([cdac415](https://github.com/gitsindonesia/ui-component/commit/cdac4154a154ad3bba5194c96b3c2e0194ee210e))
- **v-file-upload:** improved file upload ([4b0e075](https://github.com/gitsindonesia/ui-component/commit/4b0e075fc431648b249dc56a48077a7cdeb93b7b))
- **v-input-group:** new password toggler for input type password ([c46f089](https://github.com/gitsindonesia/ui-component/commit/c46f089e0c68fe16aa262bd05e93f90ab9ac5014))
- **v-menu:** fix mini tooltip state and default item alignment ([93ff41d](https://github.com/gitsindonesia/ui-component/commit/93ff41d86738d0903fbc84ce1ed2634d1570f988))
- **v-menu:** improved v-menu ([f980b02](https://github.com/gitsindonesia/ui-component/commit/f980b02bfd4a765345e1b12023817b37cde296dd))
- **v-modal:** allow to modify modal class ([13a8472](https://github.com/gitsindonesia/ui-component/commit/13a8472bb98f3fb1c25025e45073b4d2518e616a))
- **v-modal:** new props: hide-header and hide-footer ([da6476f](https://github.com/gitsindonesia/ui-component/commit/da6476fbca92e813381930d6e042faec51a491c7))
- **v-multi-select:** added vee-validate binding support ([5259d9e](https://github.com/gitsindonesia/ui-component/commit/5259d9eecab4e6db192a6a25d97a701499e247db))
- **v-nav-drawer:** allow to customize btn toggle class ([1f1c258](https://github.com/gitsindonesia/ui-component/commit/1f1c2586af42b368d521033b461e9352436ef2a8))
- **v-nav-drawer:** allow to hide toggle via `hideToggle` prop ([151dbcf](https://github.com/gitsindonesia/ui-component/commit/151dbcfecc67790a146c2b4386d502f60637e13a))
- **v-pagination:** improved v-pagination ([97651a2](https://github.com/gitsindonesia/ui-component/commit/97651a2a2b6e082d4d1cea53add7fb62eb321345))
- **v-radio:** add native radio value support via `value` prop ([3c58d2d](https://github.com/gitsindonesia/ui-component/commit/3c58d2d5288f60e3b4872eacb2e81021204ff471))
- **v-select:** added validation error support ([c5445e6](https://github.com/gitsindonesia/ui-component/commit/c5445e672415809a51e50153d1768ee8f2f06faf))
- **v-select:** allow to value by item value ([148ed0e](https://github.com/gitsindonesia/ui-component/commit/148ed0e3c8b930833d75c5c4978c6bf1f32ec277))
- **v-textarea:** allow string to textarea ([8c93136](https://github.com/gitsindonesia/ui-component/commit/8c93136b8974ce05a8acc3d8bbc8ddf2ce39c91a))
- **v-toast:** added new `reset` mutation ([f457811](https://github.com/gitsindonesia/ui-component/commit/f457811594da62ad5a3a58c3fde4b06ee0f9bca0))

## [0.0.2-alpha.10](https://github.com/gitsindonesia/ui-component/compare/v0.0.2-alpha.9...v0.0.2-alpha.10) (2021-09-15)

### Bug Fixes

- **v-editor:** unregister ([6b69e15](https://github.com/gitsindonesia/ui-component/commit/6b69e15f3859798c59b840ed0252c66080d5d63c))

## [0.0.2-alpha.9](https://github.com/gitsindonesia/ui-component/compare/v0.0.2-alpha.8...v0.0.2-alpha.9) (2021-09-15)

## [0.0.2-alpha.8](https://github.com/gitsindonesia/ui-component/compare/v0.0.2-alpha.7...v0.0.2-alpha.8) (2021-09-15)

### Bug Fixes

- **v-editor:** fix ckeditor import ([7b4b826](https://github.com/gitsindonesia/ui-component/commit/7b4b82608974871317681e1bc4ddcf12409e26f6))

## [0.0.2-alpha.7](https://github.com/gitsindonesia/ui-component/compare/v0.0.2-alpha.6...v0.0.2-alpha.7) (2021-09-15)

## [0.0.2-alpha.6](https://github.com/gitsindonesia/ui-component/compare/0.0.2-alpha.5...v0.0.2-alpha.6) (2021-09-15)

## [0.0.2-alpha.5](https://github.com/gitsindonesia/ui-component/compare/v0.0.2-alpha.4...0.0.2-alpha.5) (2021-09-15)

## [0.0.2-alpha.4](https://github.com/gitsindonesia/ui-component/compare/0.0.2-alpha.3...v0.0.2-alpha.4) (2021-09-14)

### Bug Fixes

- **authentication:** fix form validation errors ([05a7cc4](https://github.com/gitsindonesia/ui-component/commit/05a7cc4ead713209c840b4d688dfb31813813360))

### Features

- **auth layout:** make auth and login components more flexible on term of customization ([d588f5c](https://github.com/gitsindonesia/ui-component/commit/d588f5c25aa31a51e25130b0fa9fc94373319b80))
- **v-badge:** dismissable ([2ac8cd3](https://github.com/gitsindonesia/ui-component/commit/2ac8cd3e8945bcec2d1fb40056df97f2a7220a18))
- **v-collapsible:** new collapsible component ([bef4440](https://github.com/gitsindonesia/ui-component/commit/bef444007dda94bd9b71955ec9bf0c05f21f3317))
- **v-dropdown:** improved v-dropdown ([6ae5ea2](https://github.com/gitsindonesia/ui-component/commit/6ae5ea27ecb13dc27a56bc9e93ec679467e220bc))
- **v-editor:** added new v-editor component ([0a06220](https://github.com/gitsindonesia/ui-component/commit/0a06220342366c2f8bda4df4a144c823de10a4fe))
- **v-file-upload:** added new file upload component ([d5a911b](https://github.com/gitsindonesia/ui-component/commit/d5a911b40645582a8b1f3b08fb0381695595d617))

## [0.0.2-alpha.3](https://github.com/gitsindonesia/ui-component/compare/v0.0.2-alpha.2...0.0.2-alpha.3) (2021-09-08)

## [0.0.2-alpha.2](https://github.com/gitsindonesia/ui-component/compare/v0.0.2-alpha.1...v0.0.2-alpha.2) (2021-09-08)

## [0.0.2-alpha.1](https://github.com/gitsindonesia/ui-component/compare/v0.0.1...v0.0.2-alpha.1) (2021-09-08)

## 0.0.1 (2021-09-02)
