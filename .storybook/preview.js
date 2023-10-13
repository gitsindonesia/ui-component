import '../packages/tailwind-config/tailwind.css';
import '../packages/themes/src/morpheme/main.scss';
import '../packages/themes/src/morpheme/main.dark.scss';
import { setup } from "@storybook/vue3";
import {FloatingVuePlugin} from '../packages/tooltip/src/floating-vue'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
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


setup((app) => {
  app.use(FloatingVuePlugin);
});