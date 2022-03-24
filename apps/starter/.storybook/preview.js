import '../src/index.css';
import {app} from '@storybook/vue3';
// import CorePlugins from '../src/core';
import {createMemoryHistory, createRouter} from 'vue-router';
import VueFeather from 'vue-feather';

const router = createRouter({
  history: createMemoryHistory(),
  routes: [],
});

// app.use(CorePlugins);
app.use(router);
app.component(VueFeather.name, VueFeather);

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
