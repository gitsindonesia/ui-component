import DefaultLayout from '../../packages/layouts/Default.vue';
import Alerts from '../views/components/Alerts.vue';
import Labels from '../views/components/Labels.vue';
import Tabs from '../views/components/Tabs.vue';
import Breadcrumbs from '../views/components/Breadcrumbs.vue';
import Buttons from '../views/components/Buttons.vue';
import Dropdowns from '../views/components/Dropdowns.vue';
import DataTables from '../views/components/DataTables.vue';
import Inputs from '../views/components/Inputs.vue';
import Radios from '../views/components/Radios.vue';
import Modals from '../views/components/Modals.vue';
import Paginations from '../views/components/Paginations.vue';
import Selects from '../views/components/Selects.vue';
import Switch from '../views/components/Switch.vue';
import Textareas from '../views/components/Textareas.vue';
import Progressbar from '../views/components/Progressbars.vue';
import Tooltip from '../views/components/Tooltips.vue';
import NotFound from '../views/errors/NotFound.vue';
import Home from '../views/Home.vue';

export default [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        component: Home,
      },
    ],
  },
  {
    path: '/components',
    component: DefaultLayout,
    children: [
      {
        path: 'alerts',
        component: Alerts,
      },
      {
        path: 'labels',
        component: Labels,
      },
      {
        path: 'breadcrumbs',
        component: Breadcrumbs,
      },
      {
        path: 'buttons',
        component: Buttons,
      },
      {
        path: 'tables',
        component: DataTables,
      },
      {
        path: 'inputs',
        component: Inputs,
      },
      {
        path: 'radios',
        component: Radios,
      },
      {
        path: 'modals',
        component: Modals,
      },
      {
        path: 'paginations',
        component: Paginations,
      },
      {
        path: 'selects',
        component: Selects,
      },
      {
        path: 'textareas',
        component: Textareas,
      },
      {
        path: 'dropdowns',
        component: Dropdowns,
      },
      {
        path: 'v-switch',
        component: Switch,
      },
      {
        path: 'tabs',
        component: Tabs,
      },
      {
        path: 'Progressbars',
        component: Progressbar,
      },
      {
        path: 'Tooltips',
        component: Tooltip,
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
  },
];
