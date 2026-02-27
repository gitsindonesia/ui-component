# Audit Fix Progress Tracker

**Started**: 2026-02-27
**Last Updated**: 2026-02-27
**Based on**: [AUDIT_REPORT.md](./AUDIT_REPORT.md) | [AUDIT_FIX_PLAN.md](./AUDIT_FIX_PLAN.md)

---

## Phase 1: Critical & High Security Fixes

| # | Task | Status | File(s) |
|---|------|--------|---------|
| 1.1 | Add `.env*` to root `.gitignore` | :white_check_mark: Done | `.gitignore` |
| 1.2 | Sanitize `v-html` in VMenu (XSS) | :white_check_mark: Done | `packages/menu/src/VMenu.vue` |
| 1.3 | Sanitize `innerHTML` in Icon (XSS) | :white_check_mark: Done | `packages/icon/src/Icon.vue` |
| 1.4 | Fix open redirect in AuthLogin | :white_check_mark: Done | `starter/nuxt-auth/components/auth/AuthLogin.vue` |
| 1.5 | Harden auth starter credentials | :white_check_mark: Done | `starter/nuxt-auth/server/api/auth/[...].ts` |
| 1.6 | Fix register API stub leaking password | :white_check_mark: Done | `starter/nuxt-auth/server/api/auth/register.ts` |
| 1.7 | Rotate leaked GitLab token | :warning: MANUAL | Requires GitLab admin access |

---

## Phase 2: CI/CD & DevOps Fixes

| # | Task | Status | File(s) |
|---|------|--------|---------|
| 2.1 | Upgrade Node to 20 LTS in CI workflows | :white_check_mark: Done | `.github/workflows/*.yml` |
| 2.2 | Update GitHub Actions to v4 | :white_check_mark: Done | `.github/workflows/*.yml` |
| 2.3 | Fix test CI trigger paths | :white_check_mark: Done | `.github/workflows/tests.yml` |
| 2.4 | Fix CI cache strategy (npm → yarn) | :white_check_mark: Done | `.github/workflows/tests.yml` |
| 2.5 | Uncomment SonarQube quality gate | :white_check_mark: Done | `.github/workflows/sonar.yml` |
| 2.6 | Add `.node-version` + `engines` field | :white_check_mark: Done | `.node-version`, `package.json` |
| 2.7 | Update Dockerfiles to Node 20 | :white_check_mark: Done | `starter/*/Dockerfile` |
| 2.8 | Add `.dockerignore` to starters | :white_check_mark: Done | `starter/*/.dockerignore` |

---

## Phase 3: Code Quality Fixes

| # | Task | Status | File(s) |
|---|------|--------|---------|
| 3.1 | Tighten ESLint configuration | :white_check_mark: Done | `.eslintrc.js` |
| 3.2 | Remove no-op watch in VModal | :white_check_mark: Done | `packages/modal/src/VModal.vue` |
| 3.3 | Remove stale debug console.log | :white_check_mark: Done | `packages/icon/src/Icon.spec.ts` |
| 3.4 | Fix duplicate CSS variable in button theme | :white_check_mark: Done | `packages/themes/src/morpheme/_button.scss` |

---

## Phase 4: Accessibility Fixes

| # | Task | Status | File(s) |
|---|------|--------|---------|
| 4.1 | Fix hardcoded `aria-label` in VBtn | :white_check_mark: Done | `packages/button/src/VBtn.vue` |
| 4.2 | Fix hardcoded ID in VProgressBar | :white_check_mark: Done | `packages/progress/src/VProgressBar.vue` |

---

## Phase 5: Dependency Cleanup

| # | Task | Status | File(s) |
|---|------|--------|---------|
| 5.1 | Remove deprecated `@tailwindcss/line-clamp` | :white_check_mark: Done | `package.json` |
| 5.2 | Replace `@vitest/coverage-c8` with v8 | :white_check_mark: Done | `package.json`, `vite.config.js` |

---

## Summary

| Phase | Total | Done | Remaining |
|-------|-------|------|-----------|
| Phase 1: Security | 7 | 6 | 1 (manual) |
| Phase 2: CI/CD | 8 | 8 | 0 |
| Phase 3: Code Quality | 4 | 4 | 0 |
| Phase 4: Accessibility | 2 | 2 | 0 |
| Phase 5: Dependencies | 2 | 2 | 0 |
| **Total** | **23** | **22** | **1 (manual)** |

---

## Out of Scope (Tracked Separately)

- [ ] Rotate leaked GitLab token (requires admin access)
- [ ] Git history rewrite with `git filter-repo` / BFG (destructive, needs team coordination)
- [ ] Increase test coverage to 80%+ (large effort)
- [ ] Upgrade Vite 4→6, Vitest 0.31→2, Lerna 6→8 (major migrations)
- [ ] Standardize all props to TypeScript interface pattern (gradual)
