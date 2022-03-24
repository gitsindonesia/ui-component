import {createHead} from '@vueuse/head';
import {UserPlugin} from '@gits-id/ui';

const head = createHead();

export const install: UserPlugin = ({app}) => {
  app.use(head);
};
