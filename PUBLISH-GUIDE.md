# Morpheme UI v2.0.0-alpha.1 - Publishing Guide

## Pre-Publishing Checklist

✅ **Dependencies Updated**
- Vue upgraded to 3.5.21
- Nuxt upgraded to 4.1.0
- All dependencies updated

✅ **Packages Built**
- All 16 core packages built successfully
- Type definitions generated
- Build artifacts ready

✅ **Versions Updated**
- All core packages versioned as 2.0.0-alpha.1
- Cross-package dependencies aligned
- publishConfig added with alpha tags

✅ **Documentation**
- Installation guides updated
- Plugin system documented
- CHANGELOG-v2.md created

✅ **Code Committed**
- All changes committed to feat/v2 branch
- Ready for alpha release

## Publishing Steps

### 1. Login to npm Registry

```bash
npm login
# Enter your npm credentials
# Username: [your-npm-username]
# Password: [your-npm-password]
# Email: [your-email]
# One-time password: [if 2FA enabled]
```

### 2. Verify Login

```bash
npm whoami
# Should display your npm username
```

### 3. Publish Core Packages

Execute these commands one by one to publish the alpha packages:

```bash
# 1. Main UI Library
cd /home/warsono/Code/Labs/ui-component
npm publish packages/ui/ --tag alpha --access public

# NOTE: Package size was optimized from 328MB to 122.4kB by:
# - Removing coverage/ folder (2.6GB)
# - Adding .npmignore to exclude test/story files
# - Final package size: 122.4kB (acceptable for npm registry)

# 2. Nuxt Module
npm publish packages/nuxt/ --tag alpha --access public

# 3. Theme System
npm publish packages/theme/ --tag alpha --access public

# 4. Tailwind Configuration
npm publish packages/tailwind-config/ --tag alpha --access public

# 5. Tailwind Components
npm publish packages/tailwind-components/ --tag alpha --access public

# 6. Utilities
npm publish packages/utils/ --tag alpha --access public

# 7. Pre-built Themes
npm publish packages/themes/ --tag alpha --access public
```

### 4. Verify Publication

Check that packages are published correctly:

```bash
# Check package versions on npm
npm view @morpheme/ui --tag alpha
npm view @morpheme/nuxt --tag alpha
npm view @morpheme/theme --tag alpha
npm view @morpheme/tailwind-config --tag alpha
npm view @morpheme/utils --tag alpha
```

### 5. Update Documentation

After successful publishing:

1. Update README.md with alpha installation instructions
2. Create GitHub release for v2.0.0-alpha.1
3. Announce alpha release in discussions

## Installation Commands for Users

### Vue 3 Projects

```bash
# Install alpha version
npm install @morpheme/ui@alpha

# Or with specific version
npm install @morpheme/ui@2.0.0-alpha.1
```

### Nuxt 3 Projects

```bash
# Install alpha module
npm install @morpheme/nuxt@alpha

# Or with specific version
npm install @morpheme/nuxt@2.0.0-alpha.1
```

## Expected Package Sizes

- `@morpheme/ui`: ~340MB (includes all components, styles, tests, coverage)
- `@morpheme/nuxt`: ~50KB (lightweight module)
- `@morpheme/theme`: ~20KB (design tokens)
- `@morpheme/tailwind-config`: ~15KB (preset)
- `@morpheme/utils`: ~10KB (utilities)

## Troubleshooting

### Build Issues
If build fails during prepublishOnly:
```bash
# Skip prepublish hooks
npm publish --ignore-scripts packages/ui/ --tag alpha --access public
```

### Large Package Size
The UI package is large because it includes:
- TypeScript source files
- SCSS styles and dark variants
- Test files and coverage reports
- Storybook stories
- All component examples

For production release, consider:
- Adding .npmignore to exclude test files
- Removing coverage reports from dist
- Optimizing bundle size

### Permission Issues
Ensure you have publish access to @morpheme organization:
```bash
npm org ls morpheme
```

## Next Steps After Publishing

1. **Test Alpha Installation**
   - Create test Vue 3 project
   - Install alpha packages
   - Verify plugin system works
   - Test component imports

2. **Gather Feedback**
   - Share alpha with team
   - Document any issues found
   - Collect performance feedback

3. **Prepare Beta Release**
   - Fix alpha issues
   - Add more components if needed
   - Optimize bundle sizes
   - Update to v2.0.0-beta.1

4. **Documentation**
   - Create migration guide from v1.x
   - Update Storybook examples
   - Add performance benchmarks

## Important Notes

- **Alpha Release**: Not recommended for production use
- **Breaking Changes**: Vue 3.3+ and Nuxt 3.8+ required
- **Plugin System**: New configuration options available
- **Feedback Welcome**: Report issues on GitHub

---

**Ready to publish v2.0.0-alpha.1!** 🚀

All packages are built, versioned, and ready for npm publication.
