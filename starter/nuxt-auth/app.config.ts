export default defineAppConfig({
  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/',
    },
    head: {
      login: {
        title: 'Login',
      },
      protected: {
        title: 'Protected',
      },
    },
  },
});
