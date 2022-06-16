import {RouteRecord} from 'vue-router';

export type Menu = {
  text: string;
  to: string | RouteRecord;
  icon: string;
  children?: Menu[];
  [x: string]: any;
};
