# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Morpheme UI is a Vue 3 component library monorepo (formerly GITS UI) built on the Morpheme Design System. It uses Lerna + Yarn workspaces with 60+ packages under the `@morpheme/` npm namespace.

## Package Manager

Use **Yarn** (Lerna is configured with `npmClient: "yarn"`). Lock file is `yarn.lock`.

```bash
yarn install          # install all workspace dependencies
lerna bootstrap       # bootstrap all packages (link cross-dependencies)
```

## Common Commands

### Development
```bash
yarn dev              # run Storybook + VitePress docs + Nuxt playground concurrently
yarn storybook        # run Storybook only (port 6006)
yarn dev:playground   # run Nuxt playground (packages/nuxt/playground)
yarn docs:dev         # run VitePress docs only
```

### Building
```bash
lerna run build       # build all packages
lerna run build --scope @morpheme/button  # build a single package
yarn build            # build Storybook
```

### Testing
```bash
yarn test             # run all Vitest tests
yarn coverage         # run tests with coverage (c8 provider)
# Run tests for a specific package:
cd packages/button && yarn test
```

### Linting
```bash
yarn lint             # ESLint on all .ts, .tsx, .js, .jsx, .vue files in packages/
```

## Architecture

### Monorepo Structure

```
packages/        # 60+ @morpheme/* component packages (published to npm)
docs/            # VitePress documentation site
stories/         # Root Storybook stories
starter/         # Starter templates (nuxt-minimal, vue, astro, etc.)
examples/        # Example projects
.storybook/      # Storybook configuration
```

### Package Structure

Each package in `packages/` follows this layout:
```
src/
  index.ts          # barrel export
  VComponent.vue    # Vue component (V-prefixed names)
  VComponent.spec.ts   # Vitest unit tests (co-located)
  VComponent.stories.ts # Storybook stories
  VComponent.scss   # Component styles
  VComponent.dark.scss  # Dark mode styles
vite.config.js      # Per-package Vite build + Vitest config
package.json        # exports: dist/*.mjs (ESM), dist/*.js (CJS)
```

### Per-Package Build

Each package builds to `dist/` with:
- `dist/*.mjs` — ESM module (`module` field)
- `dist/*.js` — CJS (`main` field)
- `dist/*.umd.js` / `dist/*.iife.js` — browser bundles
- `dist/types/` — TypeScript declarations (generated via `vue-tsc --emitDeclarationOnly`)

Build script pattern: `vite build && vue-tsc --emitDeclarationOnly && mv dist/src dist/types`

### Key Infrastructure Packages

| Package | Purpose |
|---------|---------|
| `@morpheme/ui` | Main barrel export re-exporting all components |
| `@morpheme/nuxt` | Nuxt 3 auto-import module |
| `@morpheme/tailwind-config` | Shared Tailwind CSS preset |
| `@morpheme/tailwind-components` | Shared component CSS classes |
| `@morpheme/theme` | Runtime theme management |
| `@morpheme/utils` | Shared utility functions |
| `@morpheme/primitives` | Headless base primitives |

### Component Naming Conventions

- Vue components use **V prefix**: `VBtn`, `VModal`, `VAlert`, etc.
- Component groups: `VBtnGroup`, `VBtnToolbar` co-located in the same package
- All packages are externalized in per-package builds (not bundled)

### Styling

- **Tailwind CSS** is the primary styling approach with a custom preset from `@morpheme/tailwind-config`
- Per-component SCSS files for custom styles
- Dark mode via separate `.dark.scss` files
- CSS custom properties for theming

### Testing

- **Vitest** with `happy-dom` environment (per-package) or `jsdom` (root config)
- `@vue/test-utils` for component mounting
- Test files co-located as `*.spec.ts` next to source files
- Coverage via `@vitest/coverage-c8`, reports output to `coverage/`

### Storybook

- Storybook 8 with `@storybook/vue3-vite`
- Stories co-located as `*.stories.ts` in each package's `src/`
- MDX files (`.stories.mdx`) for Changelog and Readme stories within packages

### Versioning

- All packages versioned together at the same version (currently `1.0.1`)
- Uses `standard-version` for releases and `conventional-changelog` for changelogs
- Commit messages must follow Conventional Commits (enforced by `commitlint` + Husky)
