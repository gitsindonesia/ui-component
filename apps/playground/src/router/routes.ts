import type {RouteRecordRaw} from 'vue-router';

export default <RouteRecordRaw[]>[
  {
    path: '/',
    component: () => import('@/components/HomeLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/components',
    component: () => import('@/components/ComponentLayout.vue'),
    children: [
      {
        path: 'alerts',
        component: () => import('@/views/components/Alerts.vue'),
      },
      {
        path: 'badges',
        component: () => import('@/views/components/Badges.vue'),
      },
      {
        path: 'breadcrumbs',
        component: () => import('@/views/components/Breadcrumbs.vue'),
      },
      {
        path: 'buttons',
        component: () => import('@/views/components/Buttons.vue'),
      },
      {
        path: 'tables',
        component: () => import('@/views/components/DataTables.vue'),
      },
      {
        path: 'inputs',
        component: () => import('@/views/components/Inputs.vue'),
      },
      {
        path: 'radios',
        component: () => import('@/views/components/Radios.vue'),
      },
      {
        path: 'modals',
        component: () => import('@/views/components/Modals.vue'),
      },
      {
        path: 'paginations',
        component: () => import('@/views/components/Paginations.vue'),
      },
      {
        path: 'selects',
        component: () => import('@/views/components/Selects.vue'),
      },
      {
        path: 'textareas',
        component: () => import('@/views/components/Textareas.vue'),
      },
      {
        path: 'dropdowns',
        component: () => import('@/views/components/Dropdowns.vue'),
      },
      {
        path: 'tabs',
        component: () => import('@/views/components/Tabs.vue'),
      },
      {
        path: 'progressbars',
        component: () => import('@/views/components/Progressbars.vue'),
      },
      {
        path: 'tooltips',
        component: () => import('@/views/components/Tooltips.vue'),
      },
      {
        path: 'switches',
        component: () => import('@/views/components/Switch.vue'),
      },
      {
        path: 'card',
        component: () => import('@/views/components/Card.vue'),
      },
      {
        path: 'checkbox',
        component: () => import('@/views/components/Checkbox.vue'),
      },
      {
        path: 'collapsible',
        component: () => import('@/views/components/Collapsible.vue'),
      },
    ],
  },
  // {
  //   path: '/:pathMatch(.*)*',
  //   component: NotFound,
  // },
];
