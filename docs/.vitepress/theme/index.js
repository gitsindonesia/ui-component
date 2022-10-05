// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';
import './theme.css';
import './tailwind.postcss';
// import GitsUi from '@gits-id/ui';
// import '@gits-id/ui/src/assets/transition.css';
import DocsCanvas from './components/DocsCanvas.vue';
import AlertsVModel from './components/alerts/VModel.vue';
import AlertsDismissable from './components/alerts/Dismissable.vue';
import AlertsSolid from './components/alerts/Solid.vue';
import AlertsOutlined from './components/alerts/Outlined.vue';
import AlertsBordered from './components/alerts/Bordered.vue';
import AlertsTransition from './components/alerts/Transition.vue';
import AlertsColors from './components/alerts/Colors.vue';

export default {
  ...DefaultTheme,
  enhanceApp({app, router, siteData}) {
    // gits ui
    // app.use(GitsUi);
    // docs canvas
    app.component('DocsCanvas', DocsCanvas);
    // alerts demo components
    app.component('AlertsVModel', AlertsVModel);
    app.component('AlertsDismissable', AlertsDismissable);
    app.component('AlertsSolid', AlertsSolid);
    app.component('AlertsOutlined', AlertsOutlined);
    app.component('AlertsBordered', AlertsBordered);
    app.component('AlertsTransition', AlertsTransition);
    app.component('AlertsColors', AlertsColors);
  },
};
