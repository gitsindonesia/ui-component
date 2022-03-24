import {AuthOptions} from '@gravitano/vue-auth';

export const authOptions: AuthOptions = {
  endpoints: {
    login: {
      url: '/auth/login',
      method: 'post',
    },
    logout: {
      url: '/auth/logout',
      method: 'delete',
    },
    user: {
      url: '/auth/me',
      method: 'get',
    },
    refresh: {
      url: '/auth/refresh-token',
      method: 'get',
    },
  },
  token: {
    property: 'data.token',
    type: 'Bearer',
    storageName: 'auth.token',
    autoDecode: false,
    name: 'Authorization',
  },
  user: {
    autoFetch: true,
    property: 'data',
    storageName: 'auth.user',
  },
  moduleName: 'auth',
  expiredStorage: 'auth.expired',
  redirect: {
    home: '/',
    login: '/auth/login',
  },
  registerAxiosInterceptors: false,
  storage: {
    driver: 'local',
  },
  refreshToken: {
    enabled: false,
    property: 'data.token',
    maxAge: 60 * 15, // 15 minutes
    storageName: 'auth.refresh_token',
    name: 'refresh_token',
    autoLogout: true,
  },
};
