import {registerPiniaAxiosInterceptors} from '@gravitano/vue-auth';
import {useAuth} from '~/store/auth';
import {authOptions} from '~/config';
import {createApp} from 'vue';
import App from './App.vue';
import './index.css';
import UIPlugin from '@gits-id/ui';
import router from './router';
import './plugins/axios';
import 'nprogress/nprogress.css';
import {createPinia} from 'pinia';
import axios from 'axios';

const app = createApp(App);

const pinia = createPinia();

// global plugins
app.use(router);
app.use(pinia);
// app.use(volar.vuePlugin);
app.use(UIPlugin);

// register custom axios interceptors from vue-auth
//pinia
// registerPiniaAxiosInterceptors(axios, authOptions, router, useAuth());

// register all user plugins
Object.values(import.meta.globEager('./plugins/*.ts')).map((i) =>
  i.install?.({app}),
);

// register module's plugins
Object.values(import.meta.globEager('../modules/**/index.ts')).map((i) => {
  i.install?.({app});
});

// mount the element
app.mount('#app');
