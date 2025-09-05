# Migration from Lerna to pnpm workspace

This document outlines the changes made to convert the Morpheme UI monorepo from Lerna to pnpm workspace.

## Changes Made

### 1. Created pnpm-workspace.yaml
- Defined workspace packages including `packages/*`, `docs`, `starter/*`, and `examples/*`

### 2. Updated package.json
- Removed `lerna` from devDependencies
- Added `packageManager: "pnpm@8.15.0"` field
- Updated all scripts to use `pnpm` instead of `lerna` or `yarn`
- Updated lint-staged to use `pnpm run` instead of `npm run`

### 3. Removed lerna.json
- No longer needed with pnpm workspace

### 4. Updated .npmrc
- Added pnpm workspace specific configurations
- Enabled workspace package linking and hoisting

### 5. Updated individual package scripts
- Changed `npm run` to `pnpm run` in all package.json files

### 6. Updated documentation
- Updated README.md development setup instructions
- Updated .github/copilot-instructions.md

## Migration Steps for Development

1. **Remove existing lock files and node_modules:**
   ```bash
   rm yarn.lock
   rm -rf node_modules
   find packages -name "node_modules" -type d -exec rm -rf {} +
   find packages -name "yarn.lock" -delete
   ```

2. **Install pnpm globally (if not already installed):**
   ```bash
   npm install -g pnpm@8.15.0
   ```

3. **Install dependencies:**
   ```bash
   pnpm install
   ```

4. **Verify the setup:**
   ```bash
   pnpm -r build
   pnpm test
   ```

## New Commands

### Workspace Commands
- `pnpm install` - Install dependencies for all packages
- `pnpm -r build` - Build all packages
- `pnpm -r test` - Test all packages
- `pnpm -r clean` - Clean all packages

### Package-specific Commands
- `pnpm --filter @morpheme/button build` - Build specific package
- `pnpm --filter "./packages/*" build` - Build all packages in packages directory
- `pnpm --filter "./packages/*" test` - Test all packages

### Development Commands
- `pnpm dev` - Run Storybook + docs + playground
- `pnpm storybook` - Run Storybook only
- `pnpm docs:dev` - Run docs only

## Benefits of pnpm workspace

1. **Faster installs** - pnpm uses hard links and symlinks to save disk space
2. **Better dependency management** - Strict dependency resolution
3. **Built-in workspace support** - No need for additional tools like Lerna
4. **Improved security** - Prevents phantom dependencies
5. **Better monorepo performance** - Efficient package linking

## Notes

- The `pnpm-workspace.yaml` file replaces `lerna.json`
- pnpm will create a `pnpm-lock.yaml` file instead of `yarn.lock`
- All packages now use `pnpm run` instead of `npm run` in their scripts
- Workspace packages are automatically linked when using `workspace:*` protocol
