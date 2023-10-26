// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';
import './theme.css';
import './tailwind.css';
import VueGtag from "vue-gtag";
import LivePreview from './components/LivePreview.vue';
import StackblitzEmbed from './components/StackblitzEmbed.vue';
import Morpheme from '@morpheme/ui'
import '@morpheme/themes/dist/morpheme/main.css'
import '@morpheme/themes/dist/morpheme/main.dark.css'
import MorphemeShowcase from './components/MorphemeShowcase.vue';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // use Morpheme UI
    app.use(Morpheme)

    // custom components
    app.component('MorphemeShowcase', MorphemeShowcase);
    app.component('LivePreview', LivePreview);
    app.component('StackblitzEmbed', StackblitzEmbed);

    // GA
    app.use(VueGtag, {
      pageTrackerScreenviewEnabled: true,
      config: { id: "G-0SL9786TRN" }
    })
  },
};
