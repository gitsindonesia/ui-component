import {NavigationGuardNext, RouteLocationNormalized} from 'vue-router';
import {requiresAuthMiddleware} from './auth';
import {guestMiddleware} from './guest';
import {authOptions} from '~/config';

export const handleMiddleware = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const middlewareParams = {
    to,
    from,
    next,
    options: authOptions,
  };
  switch (to.meta.auth) {
    case 'guest':
      guestMiddleware(middlewareParams);
      break;
    case true:
      requiresAuthMiddleware(middlewareParams);
      break;
    default:
      next();
      break;
  }
};
