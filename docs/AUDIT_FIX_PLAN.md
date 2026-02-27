# Plan: Fix All Audit Report Findings

## Context

The [docs/AUDIT_REPORT.md](docs/AUDIT_REPORT.md) identified 22 issues across security, CI/CD, code quality, accessibility, and dependencies. This plan addresses all findings organized into 5 phases by priority, starting with critical security remediations.

---

## Phase 1: Critical & High Security Fixes

### 1.1 Add `.env*` to root `.gitignore`
**File:** `.gitignore`
- Add `.env`, `.env.*` patterns
- Exclude `.env.example` with negation `!.env.example`
- **Risk:** Low — purely additive

### 1.2 Sanitize `v-html` in VMenu (XSS)
**File:** `packages/menu/src/VMenu.vue`
- Install `dompurify` as a dependency: `yarn add dompurify` + `@types/dompurify` as devDep
- Import DOMPurify and sanitize `menu.svg` before rendering
- Change: `v-html="menu.svg"` → `v-html="sanitize(menu.svg)"`
- Add helper: `const sanitize = (html: string) => DOMPurify.sanitize(html, { USE_PROFILES: { svg: true } })`
- **Risk:** Low — DOMPurify is battle-tested; SVG profile preserves valid SVGs

### 1.3 Sanitize `innerHTML` in Icon (XSS)
**File:** `packages/icon/src/Icon.vue`
- Import DOMPurify (same dependency from 1.2)
- Sanitize fetched SVG content before `innerHTML` assignment
- Change: `innerHTML: content` → `innerHTML: DOMPurify.sanitize(content, { USE_PROFILES: { svg: true } })`
- Also sanitize fallback `props.name` usage as innerHTML
- **Risk:** Low

### 1.4 Fix open redirect in AuthLogin
**File:** `starter/nuxt-auth/components/auth/AuthLogin.vue`
- Replace the `callbackUrl.startsWith('http')` check with same-origin validation
- Use `new URL(callbackUrl, window.location.origin)` to parse, then validate `.origin` matches `window.location.origin`
- Fall back to `'/'` if validation fails
- **Risk:** Low — only affects starter template

### 1.5 Harden auth starter credentials
**File:** `starter/nuxt-auth/server/api/auth/[...].ts`
- Add startup guard: throw error if `AUTH_SECRET` env var is not set
- Replace hardcoded `hunter2` with env var reference + comment explaining it's a demo
- **Risk:** Low — starter template only

### 1.6 Fix register API stub
**File:** `starter/nuxt-auth/server/api/auth/register.ts`
- Strip `password` from response body before returning
- Add input validation (check required fields exist)
- **Risk:** Low — starter template only

### 1.7 Rotate leaked GitLab token (MANUAL)
- **This is a manual action** — cannot be automated in code
- Token `mBs8zs7Agwd7eoYREBbh` must be revoked in GitLab
- Optionally run `git filter-repo` or BFG Repo Cleaner to purge from history
- Add a TODO comment or note in the audit report marking this as requiring manual action

---

## Phase 2: CI/CD & DevOps Fixes

### 2.1 Upgrade Node version in all CI workflows
**Files:**
- `.github/workflows/tests.yml` — Node 18.x → 20.x
- `.github/workflows/sonar.yml` — Node 18.x → 20.x
- `.github/workflows/changelogithub.yml` — Node 18.x → 20.x
- `.github/workflows/deploy-docs.yml` — Node 18 → 20
- `.github/workflows/firebase-hosting-merge.yml` — 18.x → 20.x
- `.github/workflows/firebase-hosting-pull-request.yml` — 18.x → 20.x
- `.github/workflows/release_canary_yml` — Node 16 → 20

### 2.2 Update GitHub Actions to v4
**Files:** All `.github/workflows/*.yml`
- `actions/checkout@v2` / `@v3` → `actions/checkout@v4`
- `actions/setup-node@v2` / `@v3` → `actions/setup-node@v4`

### 2.3 Fix test CI trigger paths
**File:** `.github/workflows/tests.yml`
- Change `paths` filter from `packages/**/*.{spec,test}.{js,ts}` to `packages/**` so source code changes also trigger tests

### 2.4 Fix CI cache strategy
**File:** `.github/workflows/tests.yml`
- Change `cache: 'npm'` → `cache: 'yarn'` to match the actual package manager

### 2.5 Uncomment SonarQube quality gate
**File:** `.github/workflows/sonar.yml`
- Uncomment the `sonarsource/sonarqube-quality-gate-action@master` step (lines ~37-41)

### 2.6 Add `.node-version` and `engines` to package.json
**Files:**
- Create `.node-version` with content `20`
- Edit `package.json` to add `"engines": { "node": ">=20" }`

### 2.7 Update Dockerfiles to Node 20
**Files:**
- `starter/kitchen-sink/Dockerfile` — `node:16-alpine` → `node:20-alpine`
- `starter/nuxt-admin/Dockerfile` — `node:16-alpine` → `node:20-alpine`
- `starter/nuxt-auth/Dockerfile` — `node:16-alpine` → `node:20-alpine`
- `starter/nuxt-commerce/Dockerfile` — `node:16-alpine` → `node:20-alpine`
- `starter/nuxt-minimal/Dockerfile` — `node:16-alpine` → `node:20-alpine`
- `starter/vue/Dockerfile` — `node:16.15.0` → `node:20-alpine`

### 2.8 Add `.dockerignore` to starter projects
**Files:** Create `.dockerignore` in each starter directory with:
```
node_modules
.git
.github
dist
coverage
.env
.env.*
!.env.example
```

---

## Phase 3: Code Quality Fixes

### 3.1 Tighten ESLint configuration
**File:** `.eslintrc.js`
- Change `plugin:vue/vue3-essential` → `plugin:vue/vue3-strongly-recommended`
- Re-enable `vue/no-mutating-props: "warn"` (warning first, then error later)
- Add `@typescript-eslint/no-explicit-any: "warn"`
- Keep `vue/multi-word-component-names: "off"` (library components need single-word names)

### 3.2 Remove no-op watch in VModal
**File:** `packages/modal/src/VModal.vue`
- Delete line 352: `watch(isLoading, (val) => (isLoading.value = val));`

### 3.3 Remove stale debug console.log
**File:** `packages/icon/src/Icon.spec.ts`
- Delete line 17: `console.log('DEBUG', wrapper.html());`

### 3.4 Fix duplicate CSS variable in button theme
**File:** `packages/themes/src/morpheme/_button.scss`
- Remove the dead `--btn-text-color: var(--color-gray-100);` line in `.btn-default` soft hover state

---

## Phase 4: Accessibility Fixes

### 4.1 Fix hardcoded aria-label in VBtn
**File:** `packages/button/src/VBtn.vue`
- Remove the static `'aria-label': 'Button'` from the component
- If the button has no text content and only an icon, accept an optional `ariaLabel` prop instead
- Let the button text or slot content serve as the accessible name by default

### 4.2 Fix hardcoded ID in VProgressBar
**File:** `packages/progress/src/VProgressBar.vue`
- Generate a unique ID using `useId()` or a counter: `const id = \`progress-\${useId()}\``
- Replace hardcoded `id="progress-label"` and `aria-labelledby="progress-label"` with the dynamic ID

---

## Phase 5: Dependency Cleanup

### 5.1 Remove deprecated `@tailwindcss/line-clamp`
**File:** `package.json`
- Remove `@tailwindcss/line-clamp` from devDependencies (built into Tailwind 3.3+)
- Check `tailwind.config.js` and remove the plugin reference if present

### 5.2 Replace deprecated vitest coverage provider
**File:** `package.json` + `vite.config.js`
- Replace `@vitest/coverage-c8` with `@vitest/coverage-v8` in devDependencies
- Update `vite.config.js`: change `provider: 'c8'` → `provider: 'v8'`

---

## New Dependencies

| Package | Type | Purpose |
|---------|------|---------|
| `dompurify` | dependency | XSS sanitization for v-html/innerHTML |
| `@types/dompurify` | devDependency | TypeScript types for DOMPurify |
| `@vitest/coverage-v8` | devDependency (replace) | Modern coverage provider |

## Removed Dependencies

| Package | Reason |
|---------|--------|
| `@tailwindcss/line-clamp` | Built into Tailwind 3.3+ |
| `@vitest/coverage-c8` | Deprecated, replaced by v8 |

---

## Verification

After all changes:
1. `yarn lint` — verify ESLint passes (may show new warnings from tightened rules)
2. `yarn test` — verify all existing tests still pass
3. `yarn build` — verify storybook build succeeds
4. Manually verify `.gitignore` excludes `.env` files
5. Verify GitHub Actions workflow syntax: `act -l` or push to a test branch
6. Check that DOMPurify is properly imported and called in VMenu and Icon components

---

## Out of Scope (Manual Actions Required)

- **Rotate leaked GitLab token** — requires GitLab admin access
- **Git history rewrite** — requires `git filter-repo` + force push (destructive, team coordination needed)
- **Increasing test coverage to 80%** — large effort, tracked separately
- **Upgrading Vite 4→6, Vitest 0.31→2, Lerna 6→8** — major version upgrades requiring separate migration effort
- **Standardizing all props to TypeScript interface pattern** — gradual migration, not a single PR
