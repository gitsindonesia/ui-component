import {MiddlewareParams} from '@gravitano/vue-auth';
import {useAuth} from '~/plugins/auth';

export const guestMiddleware = ({next, options}: MiddlewareParams) => {
  const auth = useAuth();

  console.log(auth);

  if (auth.loggedIn) {
    next(options.redirect.home);
  } else {
    next();
  }
};
