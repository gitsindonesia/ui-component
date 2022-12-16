// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';
import './theme.css';
import LivePreview from './components/LivePreview.vue';
import VueGtag from "vue-gtag";

export default {
  ...DefaultTheme,
  enhanceApp({app, router}) {
    app.component('LivePreview', LivePreview);

    // GA
    app.use(VueGtag, {
      pageTrackerScreenviewEnabled: true,
      config: { id: "G-0SL9786TRN" }
    })
  },
};
