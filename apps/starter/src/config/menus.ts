import {ChartPieIcon, DatabaseIcon, BookOpenIcon} from '@heroicons/vue/outline';
import {useMenus} from '../composables';

export const useCmsMenu = () =>
  useMenus('cms', [
    {
      text: 'Dashboard',
      to: '/cms',
      icon: ChartPieIcon,
      hover: false,
    },
    {
      text: 'Master Data',
      icon: DatabaseIcon,
      children: [
        {
          text: 'Users',
          to: '/cms/users',
        },
        {
          text: 'Roles',
          to: '/cms/roles',
        },
      ],
    },
    {
      text: 'Posts',
      to: '/cms/posts',
      icon: BookOpenIcon,
      hover: false,
    },
  ]);

export const useMainMenu = () =>
  useMenus('main', [
    {
      text: 'Home',
      to: '/',
    },
    {
      text: 'Form',
      to: '/form',
    },
    {
      text: 'Icons',
      to: '/icons',
    },
    {
      text: 'Blog',
      to: '/blog',
    },
    {
      text: 'CMS',
      to: '/cms',
    },
  ]);
