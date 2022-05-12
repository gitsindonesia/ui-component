import {createApp} from 'vue';
import {createPinia} from 'pinia';
import App from './App.vue';
import router from './router';
import GitsUi from '@gits-id/ui';
import './index.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(GitsUi);

app.mount('#app');
