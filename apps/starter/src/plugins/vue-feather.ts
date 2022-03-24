import VueFeather from 'vue-feather';
import {UserPlugin} from '@gits-id/ui';

export const install: UserPlugin = ({app}) => {
  app.component('VueFeather', VueFeather);
};
