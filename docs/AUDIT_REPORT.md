# Morpheme UI — Project Audit Report

**Date**: 2026-02-27
**Branch**: dev-v2
**Auditor**: Automated analysis via Claude Code

## Overview

**Project**: Morpheme UI (formerly GITS UI)
**Type**: Vue 3 UI Component Library — Monorepo
**Version**: 1.0.1 (Lerna) / 0.2.2 (root package.json)
**Packages**: 60 individual npm packages under `packages/`
**Stack**: Vue 3 + TypeScript + Tailwind CSS + Vite + Vitest + Storybook 8
**Monorepo**: Lerna 6.5.1 + Yarn Workspaces
**License**: MIT

---

## 1. Architecture & Structure — Grade: B+

**Strengths:**
- Well-organized monorepo with 60 self-contained packages
- Consistent per-package layout: `V<Component>.vue`, `.spec.ts`, `.stories.ts`, `.scss`, `.dark.scss`
- Clean separation of concerns — each component is individually installable
- Good theme system using CSS custom properties + Tailwind presets
- Unified `@morpheme/ui` package for convenience installs
- Nuxt 3 module integration
- Multiple starter templates (nuxt-minimal, nuxt-admin, nuxt-auth, nuxt-commerce, vue)

**Issues:**
- `engines` field missing in root `package.json` — no enforced Node version
- Mixed package manager usage: root uses Yarn, starters use pnpm, CI installs both + npm
- Some packages are empty or near-empty (`services/`, `utils/` — only have `.mdx` stories, no source)
- Typo in package name: `progress-circlular` (should be `progress-circular`)

---

## 2. Security — Grade: D

### CRITICAL

| # | Finding | Location |
|---|---------|----------|
| 1 | **Hardcoded GitLab auth token in git history** — Token `mBs8zs7Agwd7eoYREBbh` committed at `588a2a51`, removed at `49630d9d` but **permanently recoverable** | `apps/starter/Dockerfile` (git history) |

**Action**: Rotate this token immediately. Use `git filter-repo` or BFG Repo Cleaner to purge from history.

### HIGH

| # | Finding | Location |
|---|---------|----------|
| 2 | **`v-html` with uncontrolled prop** — `menu.svg` rendered without sanitization | `packages/menu/src/VMenu.vue:125` |
| 3 | **`innerHTML` with remotely-fetched SVG** — CDN content set as innerHTML unsanitized | `packages/icon/src/Icon.vue:45-57` |
| 4 | **Open redirect after login** — `?callbackUrl=https://evil.com` redirects after auth | `starter/nuxt-auth/components/auth/AuthLogin.vue` |
| 5 | **Hardcoded demo password** `hunter2` in auth starter | `starter/nuxt-auth/server/api/auth/[...].ts` |
| 6 | **`.env.staging`** committed to git history | `apps/starter/.env.staging` (git history) |

### MEDIUM

| # | Finding | Location |
|---|---------|----------|
| 7 | Register API stub echoes plaintext password in response | `starter/nuxt-auth/server/api/auth/register.ts` |
| 8 | `pull_request_target` trigger with code build | `.github/workflows/firebase-hosting-pull-request.yml` |
| 9 | Unpinned GitHub Actions (including `@master`) | Multiple workflow files |
| 10 | SonarQube password as CLI arg / env var | `.github/workflows/sonar.yml`, `.gitlab-ci.yml` |
| 11 | Root `.gitignore` missing `.env` / `.env.*` patterns | `.gitignore` |

---

## 3. Test Coverage — Grade: D

| Metric | Value |
|--------|-------|
| Packages with tests | 39 / 60 (63%) |
| Packages without tests | 21 (including substantive ones) |
| Total test files | 67 |
| Target coverage | 80%+ |
| Actual coverage | **Well below target** |

### Untested substantive packages

`table`, `tabs`, `toast`, `toast-store`, `tooltip`, `text`, `rating`, `shimmer`, `stats`, `editor`, `quill-editor`, `iconsax`, `ui`, `blocks`, `nuxt`

### Test quality tiers

- **Good** (~30%): Forms inputs, button, select, switch, app-shell — meaningful behavioral assertions
- **Minimal** (~40%): Single mount + basic existence check
- **Stub/empty** (~30%): Assertions commented out, no `expect()`, or just `expect(Component).toBeTruthy()`

### Infrastructure gaps

- No shared test utilities or helpers
- No `setupFiles` configured (global mocks repeated per file)
- Coverage provider uses deprecated `@vitest/coverage-c8` (should be `@vitest/coverage-v8`)
- `threads: false` in vitest config — tests run single-threaded
- One stale debug `console.log('DEBUG', ...)` in `packages/icon/src/Icon.spec.ts:17`

---

## 4. Code Quality — Grade: B-

### TypeScript

| Metric | Count |
|--------|-------|
| `: any` in .vue files | 56 occurrences / 26 files |
| `: any` in .ts files | 54 occurrences / 26 files |
| `as any` casts | 37 occurrences / 16 files |
| FIXME comments | 6 (concentrated in VDataTable) |

**Two prop definition styles coexist:**
- **Modern** (newer components): TypeScript interface + `withDefaults(defineProps<Props>(), {...})`
- **Legacy** (older components): Runtime `defineProps({})` with `PropType<T>` casts

### ESLint — Too lenient

The `.eslintrc.js` uses `vue3-essential` (lowest ruleset) and disables critical rules:
- `vue/no-mutating-props: "off"` — allows direct prop mutation (anti-pattern)
- `vue/valid-v-slot: "off"` — masks template errors
- `vue/no-dupe-keys: "off"` — allows duplicate keys
- No `@typescript-eslint/no-explicit-any` rule

### Notable code issues

- **VModal.vue**: No-op watch: `watch(isLoading, (val) => (isLoading.value = val))`
- **VDataTable.vue**: `JSON.parse(JSON.stringify(items))` for deep cloning on every computed update — performance concern for large datasets
- **VBtn.vue**: Hardcoded `aria-label: 'Button'` — unhelpful for screen readers
- **_button.scss**: Duplicate CSS variable assignment in hover state (dead line)
- **VProgressBar.vue**: Hardcoded `aria-labelledby="progress-label"` — breaks with multiple instances

### Strengths

- Composition API used consistently (no Options API in production)
- Good composable reuse (`useFormValue` across form inputs)
- Proper deprecation handling with `@deprecated` JSDoc + runtime `console.warn`
- Well-structured theme system (CSS variables + Tailwind + dark mode)
- Headless UI integration for accessible primitives

---

## 5. CI/CD & DevOps — Grade: C

### GitHub Actions issues

| Issue | Detail |
|-------|--------|
| **Outdated checkout actions** | Mix of `@v2` and `@v3` (current is `@v4`) |
| **Outdated setup-node** | Mix of `@v2` and `@v3` (current is `@v4`) |
| **No SHA pinning** | All actions use mutable version tags |
| **Node 16 in canary release** | `release_canary_yml` still uses Node 16 (EOL) |
| **Node 18 everywhere else** | Node 18 reached EOL April 2025 — already past |
| **Tests only trigger on test file changes** | `tests.yml` uses `paths: packages/**/*.{spec,test}.{js,ts}` — changing source code **without** touching tests won't trigger CI tests |
| **SonarQube quality gate commented out** | `sonar.yml` has quality gate check disabled |
| **Mixed CI caching** | Tests workflow uses `cache: 'npm'` but project uses Yarn |

### Dockerfiles (all starters)

- All use `FROM node:16-alpine` — **Node 16 is EOL**
- No `.dockerignore` files — `node_modules`, `.git`, etc. get copied into images
- No multi-stage builds (except `starter/vue`)
- No health checks

### Missing

- No `engines` field in package.json
- No `.nvmrc` or `.node-version` file
- SonarQube quality gate is not enforced (commented out)

---

## 6. Dependencies — Grade: B-

| Category | Count |
|----------|-------|
| Root dependencies | 9 |
| Root devDependencies | 51 |

### Outdated/concerning

- **Vite 4.3.8** — current is Vite 6.x
- **Vitest 0.31.1** — current is Vitest 2.x
- **Lerna 6.5.1** — current is Lerna 8.x
- **TypeScript ^5.0** — relatively current but could use 5.5+
- **@vitest/coverage-c8** — deprecated, replaced by `@vitest/coverage-v8`
- **@tailwindcss/line-clamp ^0.4.4** — line-clamp is now built into Tailwind CSS 3.3+
- **eslint >=5.16.0** — extremely loose constraint
- **Storybook 8.1.1** — reasonably current
- **react + react-dom** as devDeps — only needed for Storybook MDX

---

## 7. Accessibility — Grade: C+

**Present:**
- `role="alert"`, `role="progressbar"` with full ARIA attributes on appropriate components
- Headless UI provides built-in a11y for modals, selects, dropdowns
- Keyboard navigation in VMultiSelect and VCommand
- `aria-hidden="true"` on decorative icons

**Missing/broken:**
- `VBtn`: Static `aria-label="Button"` — useless for screen readers
- `VProgressBar`: Hardcoded `aria-labelledby="progress-label"` ID — breaks with multiple instances
- No `aria-live` regions for dynamic content (toast notifications, async state)
- Incomplete coverage — many components lack ARIA verification

---

## Priority Action Items

### Immediate (CRITICAL/HIGH)

1. **Rotate the leaked GitLab token** `mBs8zs7Agwd7eoYREBbh` and rewrite git history
2. **Sanitize `v-html` / `innerHTML`** in Icon and Menu components (use DOMPurify)
3. **Fix open redirect** in auth starter — validate callbackUrl is same-origin
4. **Add `.env*` to root `.gitignore`** (excluding `.env.example`)

### Short-term (MEDIUM)

5. **Upgrade Node to 20+ LTS** in all CI workflows and Dockerfiles
6. **Pin GitHub Actions to SHA commits** and update to v4
7. **Fix test CI trigger** — tests should run on source code changes, not just test file changes
8. **Enable `vue/no-mutating-props`** ESLint rule and fix violations
9. **Add `@typescript-eslint/no-explicit-any`** as a warning to gradually reduce `any` usage

### Medium-term

10. **Increase test coverage** to 80%+ — prioritize `table`, `tabs`, `toast`, `tooltip`
11. **Upgrade Vite to 6.x, Vitest to 2.x** with `@vitest/coverage-v8`
12. **Standardize prop definition pattern** to TypeScript interface + `withDefaults`
13. **Fix accessibility issues** — dynamic aria-label for VBtn, unique IDs for VProgressBar
14. **Remove deprecated `@tailwindcss/line-clamp`** (built into Tailwind 3.3+)
15. **Enforce SonarQube quality gate** (uncomment in sonar.yml)

---

## Overall Project Score

| Area | Grade | Notes |
|------|-------|-------|
| Architecture | **B+** | Well-structured monorepo, good component isolation |
| Security | **D** | Leaked credentials in history, XSS risks, open redirect |
| Testing | **D** | 63% package coverage, many stub tests, well below 80% target |
| Code Quality | **B-** | Good patterns but inconsistent; too much `any`; lenient linting |
| CI/CD | **C** | Outdated Node/actions, broken test triggers, no quality gates |
| Dependencies | **B-** | Functional but several major versions behind |
| Accessibility | **C+** | Good foundation via Headless UI, but gaps in custom components |
| **Overall** | **C+** | Solid architecture, needs security remediation and test investment |
