import type {RouteLocationRaw} from 'vue-router';

export type VBreadcrumbItem = {
  title: string;
  to?: RouteLocationRaw;
  disabled?: boolean;
};
