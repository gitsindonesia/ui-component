// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';
import './theme.css';
import LivePreview from './components/LivePreview.vue';

export default {
  ...DefaultTheme,
  enhanceApp({app}) {
    app.component('LivePreview', LivePreview);
  },
};
