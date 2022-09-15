import type {RouteLocationRaw} from 'vue-router';

export type VBreadcrumbItem = {
  to?: RouteLocationRaw;
  title: string;
};
