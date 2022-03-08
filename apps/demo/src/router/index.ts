import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/components',
      component: () => import('../views/components/index.vue'),
      children: [
        {
          path: 'v-alert',
          component: () => import('../views/components/alert.vue'),
        },
        {
          path: 'v-app-bar',
          component: () => import('../views/components/app-bar.vue'),
        },
        {
          path: 'v-btn',
          component: () => import('../views/components/button.vue'),
        },
        {
          path: 'v-badge',
          component: () => import('../views/components/badge.vue'),
        },
        {
          path: 'v-breadcrumbs',
          component: () => import('../views/components/breadcrumbs.vue'),
        },
      ],
    },
  ],
});

export default router;
