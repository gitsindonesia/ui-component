import {app} from '@storybook/vue3';
import {createMemoryHistory, createRouter} from 'vue-router';
import '../packages/tailwind-config/tailwind.css';
import '../packages/theme/transition.css';

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
      order: [
        'Get Started',
        'Foundation',
        'Components',
        'Forms',
        'Layouts',
        'Pages',
        'Snippets',
      ],
      // locales: '',
    },
  },
};
