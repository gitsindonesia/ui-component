import '../packages/tailwind-config/tailwind.css';
import '../packages/theme/transition.css';
// import '../packages/ui/src/style.scss';

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
