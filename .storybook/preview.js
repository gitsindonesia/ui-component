import {app} from '@storybook/vue3';
import {createMemoryHistory, createRouter} from 'vue-router';
import '../packages/tailwind-config/tailwind.css';
import '../packages/themes/src/morpheme/main.scss';
import '../packages/themes/src/morpheme/main.dark.scss';

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
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Get Started', 'Foundation', 'Components', 'Forms', 'Blocks'],
      // locales: '',
    },
  },
};
