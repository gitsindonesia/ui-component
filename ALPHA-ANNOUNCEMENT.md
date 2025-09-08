# 🚀 Morpheme UI v2.0.0-alpha.1 Released!

We're excited to announce the first alpha release of Morpheme UI v2! This major update brings Vue 3.5+ and Nuxt 4+ support with enhanced developer experience.

## ⚠️ Alpha Release Notice

This is an **alpha release** for testing and feedback. **Not recommended for production use.**

## 🆕 What's New in v2

### Vue 3.5+ & Nuxt 4+ Support
- **Vue 3.5.21**: Latest stable with enhanced reactivity
- **Nuxt 4.1.0**: Modern SSR framework support
- **TypeScript**: Improved type inference and IDE experience

### Enhanced Plugin System
```ts
// Full component registration (default)
app.use(MorphemeUI)

// Selective registration for better tree shaking
app.use(MorphemeUI, { components: false })

// Manual imports
import { VBtn, VInput } from '@morpheme/ui'
app.component('VBtn', VBtn)
```

### 50+ Components Ready
All your favorite components updated and ready:
- ✅ VBtn, VInput, VCard, VModal
- ✅ VTable, VSelect, VCheckbox, VRadio  
- ✅ VAlert, VBadge, VAvatar, VIcon
- ✅ VNavigation, VTabs, VMenu
- ✅ And many more!

## 📦 Quick Start

### Vue 3 Projects

```bash
# Install alpha version
npm install @morpheme/ui@alpha vue@^3.5.0

# Import in main.ts
import { createApp } from 'vue'
import MorphemeUI from '@morpheme/ui'
import '@morpheme/ui/styles'

const app = createApp(App)
app.use(MorphemeUI)
app.mount('#app')
```

### Nuxt 3/4 Projects

```bash
# Install alpha module
npm install @morpheme/nuxt@alpha nuxt@^4.1.0

# Add to nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@morpheme/nuxt'],
  morpheme: {
    theme: 'morpheme',
    css: true,
    darkMode: true
  }
})
```

## 🔧 Breaking Changes

### Minimum Requirements
- **Vue**: 3.3.0+ (recommended 3.5.0+)
- **Nuxt**: 3.8.0+ (recommended 4.0.0+)
- **Node.js**: 18.0.0+

### Plugin Configuration
```ts
// Before (still works)
app.use(MorphemeUI)

// New options available
app.use(MorphemeUI, {
  components: true  // or false for manual registration
})
```

## 📖 Documentation

- **[Full Documentation](https://morpheme-ui.vercel.app)** - Updated for v2
- **[Component Examples](https://morpheme-ui.vercel.app/storybook)** - Interactive playground
- **[Migration Guide](https://morpheme-ui.vercel.app/guide/migration-v2)** - From v1.x to v2

## 🐛 Testing & Feedback

We need your help to make v2 stable! Please:

1. **Test in development environments only**
2. **Report issues**: [GitHub Issues](https://github.com/gitsindonesia/ui-component/issues)
3. **Share feedback**: [GitHub Discussions](https://github.com/gitsindonesia/ui-component/discussions)
4. **Performance testing**: Compare with v1.x

## 🗺️ Roadmap to Stable

### Beta Release (v2.0.0-beta.1) - Coming Soon
- Fix alpha feedback issues
- Performance optimizations
- Additional starter templates
- Bundle size improvements

### Stable Release (v2.0.0) - Target: Q4 2024
- Production-ready release
- Complete migration documentation
- Long-term support commitment

## 📚 Resources

- **[GitHub Repository](https://github.com/gitsindonesia/ui-component)** - Source code
- **[Changelog](CHANGELOG-v2.md)** - Detailed changes
- **[Publishing Guide](PUBLISH-GUIDE.md)** - For maintainers
- **[Examples](https://github.com/gitsindonesia/ui-component/tree/main/starter)** - Starter projects

## 🙏 Thanks

Special thanks to our contributors and the Vue/Nuxt communities for making v2 possible!

---

**Happy coding with Morpheme UI v2!** 🎉

*Found this helpful? Give us a ⭐ on [GitHub](https://github.com/gitsindonesia/ui-component)!*
