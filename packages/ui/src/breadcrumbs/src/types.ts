import type {RouteLocationRaw} from 'vue-router';

export type VBreadcrumbItemProps = {
  title: string;
  to?: RouteLocationRaw;
  disabled?: boolean;
};
