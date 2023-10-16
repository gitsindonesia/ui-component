// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';
import './theme.css';
import VueGtag from "vue-gtag";
import LivePreview from './components/LivePreview.vue';
import StackblitzEmbed from './components/StackblitzEmbed.vue';

export default {
  ...DefaultTheme,
  enhanceApp({ app, router }) {
    app.component('LivePreview', LivePreview);
    app.component('StackblitzEmbed', StackblitzEmbed);

    // GA
    app.use(VueGtag, {
      pageTrackerScreenviewEnabled: true,
      config: { id: "G-0SL9786TRN" }
    })
  },
};
