import {createMemoryHistory, createRouter} from 'vue-router';
import '../packages/tailwind-config/tailwind.css';
import '../packages/themes/src/morpheme/main.scss';
import '../packages/themes/src/morpheme/main.dark.scss';
import { setup } from '@storybook/vue3'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [],
});

setup((app) => {
  app.use(router)
})

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
