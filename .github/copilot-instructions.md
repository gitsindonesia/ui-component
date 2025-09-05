# Morpheme UI

A Vue 3 component library with Tailwind CSS styling, built as a pnpm workspace monorepo. Provides headless components with dark mode support and theming capabilities, plus a first-party Nuxt 3 module.

## Standards

MUST FOLLOW THESE RULES, NO EXCEPTIONS

- Stack: Vue 3, TypeScript, Tailwind CSS, pnpm workspace, Vitest, Storybook
- Patterns: ALWAYS use Composition API + `<script setup>`, TypeScript interfaces for props
- Component structure: Each package is independent with own build/test config
- Naming: Components use `V` prefix (`VBtn`, `VInput`), packages use `@morpheme/` scope
- Testing: Unit tests co-located as `*.spec.ts`, use `@vue/test-utils` with `happy-dom`
- Styling: SCSS per component with `.dark.scss` variants, BEM-like CSS classes
- Exports: Both named and default exports from `src/index.ts`, import dark styles

## Project Structure

pnpm workspace monorepo with independent packages in `packages/` directory:

```
packages/
├── ui/                     # Aggregates all components (@morpheme/ui)
├── button/                 # Individual component packages
│   ├── src/
│   │   ├── VBtn.vue       # Main component
│   │   ├── VBtn.spec.ts   # Co-located tests
│   │   ├── VBtn.scss      # Component styles
│   │   ├── VBtn.dark.scss # Dark mode styles
│   │   └── index.ts       # Exports + dark style import
│   ├── package.json       # Independent package config
│   └── vite.config.js     # Library build config
├── forms/                 # Complex packages with sub-components
│   └── src/
│       ├── input/VInput.vue
│       ├── composables/useFormValue.ts  # Shared logic
│       └── index.ts
├── nuxt/                  # Nuxt 3 module (@morpheme/nuxt)
├── theme/                 # Design tokens and colors
├── tailwind-config/       # Shared Tailwind preset
└── themes/                # Pre-built theme CSS files
docs/                      # VitePress documentation
starter/                   # Example projects (nuxt-minimal, vue, etc.)
stories/                   # Global Storybook stories
pnpm-workspace.yaml        # pnpm workspace configuration
```

## Project Commands

Critical development commands:

- `pnpm install`: Install dependencies for all packages
- `pnpm -r build` or `pnpm run build`: Build all packages
- `pnpm run build:packages`: Build only packages (not docs/starter)
- `pnpm dev`: Run Storybook + docs + Nuxt playground concurrently
- `pnpm storybook`: Run Storybook development server only
- `pnpm -r test` or `pnpm test`: Run Vitest across all packages
- `pnpm --filter [package-name] build`: Build specific package
- `pnpm --filter [package-name] test`: Test specific package
- `pnpm --filter "./packages/*" [command]`: Run command on all packages

## Development Workflow

ALWAYS follow the workflow when implementing a new feature or fixing a bug. This ensures consistency, quality, and maintainability of the codebase.

1. Plan your tasks, review them with user. Include tests when possible
2. Write code, following the project structure and conventions above
3. **ALWAYS test implementations work**:
   - Write unit tests for logic and components
   - Use the Playwright MCP server to test like a real user
4. Stage your changes with `git add` once a feature works
5. Review changes and analyze the need of refactoring

## Component Development Patterns

### Standard Component Structure
```vue
<script setup lang="ts">
// Props interface with proper TypeScript
interface Props {
  color?: 'primary' | 'secondary' | string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  // Support router integration
  to?: RouteLocationRaw;
  href?: string;
}

// Dynamic component resolution
const computedComponent = computed(() => {
  if (props.to) return resolveComponent('router-link');
  if (props.href) return 'a';
  return 'button';
});

// BEM-like class composition
const classes = computed(() => [
  'btn',                          // Base class
  `btn-${props.color}`,          // Variant
  `btn--${props.size}`,          // Modifier
  { 'btn--disabled': props.disabled }
]);
</script>

<template>
  <component :is="computedComponent" :class="classes">
    <slot name="prefix" />
    <slot />
    <slot name="suffix" />
  </component>
</template>
```

### Package Export Pattern
```typescript
// packages/[component]/src/index.ts
import './VComponent.dark.scss';  // Import dark styles

export {default} from './VComponent.vue';
export {default as VComponent} from './VComponent.vue';
export * from './types';  // Export TypeScript types
```

### Form Integration with VeeValidate
```typescript
// Use useFormValue composable for validation
import {useFormValue} from '@morpheme/forms/src/composables';

const {
  uncontrolledValue,
  validationListeners,
  errorMessage,
  clear
} = useFormValue(props, emit);
```

## Testing & Build Configuration

### Component Testing
- Tests use `@vue/test-utils` with `happy-dom` environment
- Co-locate tests: `VBtn.vue` + `VBtn.spec.ts`
- Test router integration, props, events, and accessibility

```typescript
// Example test pattern
import {mount} from '@vue/test-utils';
import VBtn from './VBtn.vue';

describe('VBtn', () => {
  it('renders router link when to prop provided', () => {
    const wrapper = mount(VBtn, {
      global: { stubs: { RouterLink: true } },
      props: { to: '/link' }
    });
    expect(wrapper.html()).toContain('router-link');
  });
});
```

### Package Build Setup
Each package has `vite.config.js` with:
- Library build targeting `esnext`
- Multiple formats: `es`, `cjs`, `iife`, `umd`
- Externalized dependencies: `vue`, `@morpheme/*`, `vue-router`
- TypeScript declarations via `vue-tsc --emitDeclarationOnly`

### Tailwind Integration
Every package includes:
```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  presets: [require('@morpheme/tailwind-config/preset')],
};
```

### Using Playwright MCP Server

1. Navigate to the relevant page
2. Wait for content to load completely
3. Test primary user interactions
4. Test secondary functionality (error states, edge cases)
5. Check the JS console for errors or warnings
   - If you see errors, investigate and fix them immediately
   - If you see warnings, document them and consider fixing if they affect user experience
6. Document any bugs found and fix them immediately

## Integration Points

### Nuxt Module Usage
```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@morpheme/nuxt'],
  morpheme: {
    theme: 'morpheme',
    css: true,
    sass: true,
    darkMode: true,
    components: true
  }
});
```

### Vue App Integration
```typescript
// main.ts
import { createApp } from 'vue'
import MorphemeUI from '@morpheme/ui'
import '@morpheme/ui/styles'

app.use(MorphemeUI)
```

## Key Files for Context
- `packages/ui/src/index.ts` - Main component aggregation
- `packages/tailwind-config/preset.js` - Tailwind theme configuration  
- `packages/forms/src/composables/useFormValue.ts` - Form validation logic
- `packages/nuxt/src/module.ts` - Nuxt module auto-imports and configuration
- `.storybook/main.js` - Storybook stories configuration
