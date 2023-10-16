import {Decorator, setup} from '@storybook/vue3';
import {App} from 'vue';
import {
  RouteRecordRaw,
  RouterOptions,
  createRouter,
  createWebHashHistory,
} from 'vue-router';

const Home = {template: '<div>Home</div>'};
const About = {template: '<div>About</div>'};

export const routerOptions: RouterOptions = {
  history: createWebHashHistory(),
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/about', name: 'about', component: About},
  ],
};

export function vueRouter(routes?: RouteRecordRaw[]): Decorator {
  let app: App;

  setup((setupApp) => {
    app = setupApp;
  });

  return () => ({
    setup() {
      const router = createRouter({
        ...routerOptions,
        routes: routes || routerOptions.routes,
      });
      app.use(router);
    },
    template: '<story/>',
  });
}
