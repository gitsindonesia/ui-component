# Repository Guidelines

## Project Structure & Module Organization
- `packages/*` contains the Morpheme UI source; each component module (e.g., `button`, `modal`, `table`) ships its own `src`, `__tests__`, and build config.
- `packages/ui` aggregates shared tokens and Vue 3 primitives, while `packages/tailwind-*` expose Tailwind presets and utilities reused across packages.
- `stories/` hosts Storybook authoring assets; `storybook-static/` is the generated output and should not be edited manually.
- `docs/` (VitePress) powers the public documentation site; `examples/` and `starter/` provide integration sandboxes; shared ambient types live in `types/` and `env.d.ts`.

## Build, Test, and Development Commands
- `pnpm install` syncs workspace dependencies across every package.
- `pnpm dev` runs docs, Storybook, and playground instances concurrently for rapid UI feedback.
- `pnpm build` performs a recursive package build; use `pnpm build:ui` or `pnpm build:nuxt` when iterating on a single target.
- `pnpm storybook` starts the local Storybook server on port 6006; pair with component work.
- `pnpm docs:build` compiles the VitePress docs prior to release validation or deployment.

## Coding Style & Naming Conventions
- Follow the default two-space indentation enforced by ESLint/Prettier; lint and format hooks run on commit.
- Vue single-file components, composables, and tests use PascalCase filenames (`MyComponent.vue`, `useFoo.ts`); directories remain kebab-case to match package names.
- Prefer TypeScript with strict typing; surface shared types in `packages/ui` or `types/`.
- Tailwind utility classes should leverage tokens from `packages/tailwind-config`; centralize color or spacing changes there.

## Testing Guidelines
- Write unit tests with Vitest near implementation files inside `__tests__` directories.
- Run `pnpm test` for watch mode, `pnpm test:run` in CI-style pipelines, and `pnpm test:coverage` to audit coverage via `@vitest/coverage-c8`.
- Aim to maintain ≥80% statements per package; document any shortfall directly in the PR description.
- Use `happy-dom` or `@vue/test-utils` for component rendering; avoid direct DOM globals unless necessary for integration scenarios.

## Commit & Pull Request Guidelines
- Commits follow Conventional Commits (`feat:`, `fix:`, `docs:`) enforced by `@commitlint/config-conventional`; reference issues with `(fix #123)` when applicable.
- Keep commits focused; rely on pnpm scripts (`pnpm lint`, `pnpm test:run`) before pushing to guarantee passing checks.
- Pull requests must include a concise summary, affected packages, test evidence (coverage command output or screenshots), and Storybook/Docs updates when UI changes.
