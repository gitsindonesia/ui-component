import {MiddlewareParams} from '@gravitano/vue-auth';
import {useAuth} from '~/plugins/auth';

export const requiresAuthMiddleware = ({next, options}: MiddlewareParams) => {
  const auth = useAuth();

  if (!auth.loggedIn) {
    next(options.redirect.login);
  } else {
    next();
  }
};
