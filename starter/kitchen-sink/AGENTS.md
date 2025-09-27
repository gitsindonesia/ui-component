# Repository Guidelines

## Project Structure & Module Organization
- `app.vue` bootstraps the Nuxt 4 application and wires global layout/loading.
- Route pages live in `pages/` (auto-registered by Nuxt); prefer directories for nested routes.
- Visual building blocks sit in `components/` using PascalCase filenames; share reactive utilities in `composables/` with camelCase exports.
- Layout containers in `layouts/` define shells; static assets in `public/`; pipeline-processed styles and design tokens under `assets/`.
- Tailwind and Morpheme configuration resides in `nuxt.config.ts` and `tailwind.config.js`.

## Build, Test, and Development Commands
- `pnpm install` sets up dependencies and runs `nuxt prepare` via the `postinstall` hook.
- `pnpm dev` launches the local dev server with hot module replacement at http://localhost:3000.
- `pnpm build` creates the production bundle; follow with `pnpm preview` to smoke-test the output locally.
- `pnpm generate` produces a static export when deploying to static hosting providers.

## Coding Style & Naming Conventions
- Use TypeScript with `<script setup>` and the Composition API; keep imports sorted by source.
- Indent Vue templates and scripts with two spaces; prefer multi-line props for readability as in `app.vue`.
- Components adopt PascalCase filenames (`StatsCard.vue`), composables camelCase (`useTheme.ts`), and utility modules kebab-case.
- Tailwind classes should align with Morpheme design tokens; avoid inline style attributes unless a token is missing.

## Testing Guidelines
- No automated test script is bundled yet; if you add Vitest or Playwright, wire scripts under `package.json` so the team can run `pnpm test`.
- Place unit specs beside components in `components/__tests__/` using `*.spec.ts` naming, and snapshot visual regressions when touching UI-heavy pages.
- Before opening a PR, manually verify critical flows (navigation, dark mode toggle, charts) in both desktop and mobile viewports.

## Commit & Pull Request Guidelines
- Follow Conventional Commits (`feat:`, `docs:`, `fix:`) as reflected in recent history.
- Write focused commits; include migration notes in the body when changing config or tokens.
- Pull requests must describe the change, link related Linear/Jira issues, and attach before/after screenshots for UI work.
- Confirm `pnpm build` and any new tests pass; mention verification steps in the PR checklist.

## Security & Configuration Tips
- Keep environment-specific secrets in `.env` files ignored by git; mirror required keys in the PR description.
- When modifying `nuxt.config.ts`, ensure client-exposed runtime config keys are prefixed with `NUXT_PUBLIC_` to avoid leaking secrets.
- Review third-party additions for compatibility with the Morpheme module pipeline before installing.
