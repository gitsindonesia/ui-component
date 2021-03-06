import '../packages/tailwind-config/tailwind.css';
import {app} from '@storybook/vue3';
import {createMemoryHistory, createRouter} from 'vue-router';

const router = createRouter({
  history: createMemoryHistory(),
  routes: [],
});

app.use(router);

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
