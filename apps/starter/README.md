# GITS Starter

> Vue 3 Starter Template

[Live Demo](https://gits-starter.web.app)

---

- [GITS Starter](#gits-starter)
  - [Features](#features)
  - [Requirement](#requirement)
  - [Development](#development)
  - [Folder Structure](#folder-structure)
  - [Coding Style](#coding-style)
  - [Pattern](#pattern)
  - [Commands](#commands)
  - [Recommended IDE Setup](#recommended-ide-setup)
    - [If Using `<script setup>`](#if-using-script-setup)
  - [Type Support For `.vue` Imports in TS](#type-support-for-vue-imports-in-ts)
    - [If Using Volar](#if-using-volar)
    - [If Using Vetur](#if-using-vetur)
  - [Contributing](#contributing)
  - [Developers](#developers)

## Features

- ⚡️ [Vue 3](https://v3.vuejs.org), [Vite](https://vitejs.dev), [yarn](https://yarnpkg.com/), [esbuild](https://esbuild.github.io/) - blazing fast
- [File based routing](https://github.com/hannoeru/vite-plugin-pages)
- [Components auto importing](https://github.com/antfu/vite-plugin-components)
- [Layout system](https://github.com/JohnCampionJr/vite-plugin-vue-layouts)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Requirement

- Node.js 14+
- [`yarn`](https://yarnpkg.com/) is recommended but `npm` should ok.

## Development

Clone this repository:

```bash
git clone git@git.gits.id:frontend/starter/vue-3/starter.git
cd starter
```

Add gitlab token to your env:

```bash
export GITLAB_AUTH_TOKEN=YOUR_TOKEN
```

Install all git submodules:

```bash
git submodule update --init
# OR
npm run init
```

Set environment variable:

```bash
cp .env.example .env
```

Install dependencies:

```bash
yarn # or npm i
```

Run development server:

```bash
yarn dev # or npm run dev
```

Build app:

```bash
yarn build # or npm run build
```

## Folder Structure

```
.
├── _templates              # Hygen templates
├── cypress                 # e2e testing using cypress
├── modules                 # Modules directory
│   ├── blog                # Blog's modules (example)
│   ├── shop                # Shop's modules (example)
├── public                  # Public directory
├── src
│   ├── assets              # Assets directory
│   ├── components          # Global components
│   ├── composables         # Composable Function
│   ├── config              # Configuration Files
│   ├── layouts             # Layout components
│   ├── locales             # Internalization files
│   ├── middleware          # Router middleware
│   ├── pages               # Pages components
│   ├── pinia               # Pinia's store
│   ├── plugins             # Plugins directory
│   ├── store               # Vuex's store
│   ├── router              # Router
│   ├── utils               # Global utilities/helpers/function
│   ├── App.vue             # Main Vue's App component
│   ├── index.css           # Global styles
│   ├── main.ts             # Entry point
│   └── vite-env.d.ts       # Vite env for typings
├── test                    # Unit test
├── .env                    # Main environment variable
├── index.html              # Main HTML Template
├── tailwind.config.js      # Tailwind configuration
├── vite.config.ts          # Vite configuration
└── ...
```

## Coding Style

- Composition API with [`<script setup>`](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) SFC Syntac
- Class-based API Services for mapping API Endpoints

## Pattern

- [Composition Function](https://v3.vuejs.org/guide/composition-api-introduction.html)
- [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Repository Pattern](https://medium.com/@Dewey92/repository-pattern-what-e47ddee3364d)
- [SOLID Pattern](https://www.digitalocean.com/community/conceptual_articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design)

## Commands

- `dev`: Run development server.
- `build`: Build app for production.
- `serve`: Preview app for simulating production mode.
- `storybook`: Run storybook.
- `build-storybook`: Build storybook
- `sb`: Alias for `storybook` command.
- `build:sb`: Alias for `build-storybook` command.
- `lint`: Run linter.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"

## Contributing

To contribute, you may follow these steps:

- Clone this repository.
- Create a branch: `git checkout -b <branch_name>`.
- Make your changes and commit them: `git commit -m '<commit_message>'`
- Push to the original branch: `git push origin <branch_name>`
- Create the merge request.

## Developers

- [Developer 1](https://git.gits.id/developer1)
- [Developer 2](https://git.gits.id/developer2)
