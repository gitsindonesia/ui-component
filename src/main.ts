import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import './index.css';
import 'simple-syntax-highlighter/dist/sshpre.css';
import gitsUi from '..';

const app = createApp(App);

app.use(router);
app.use(gitsUi);

app.mount('#app');
