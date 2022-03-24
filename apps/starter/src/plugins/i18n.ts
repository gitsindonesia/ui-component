import {UserPlugin} from '@gits-id/ui';
import {createI18n} from 'vue-i18n';
import id from '../locales/id.json';
import en from '../locales/en.json';

const i18n = createI18n({
  locale: 'en',
  messages: {id, en},
});

export const install: UserPlugin = ({app}) => {
  app.use(i18n);
};
