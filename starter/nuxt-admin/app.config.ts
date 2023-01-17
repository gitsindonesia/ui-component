export default defineAppConfig({
  adminTitle: 'Nuxt Admin',
  companyName: 'PT. GITS Indonesia',
  menus: [
    {
      header: 'Menu',
    },
    {
      text: 'Dashboard',
      icon: 'ic:round-home',
      to: '/admin',
    },
  ],
  accountMenu: {
    label: 'Accont',
    items: [
      {
        text: 'Profile',
        icon: 'ic:baseline-person',
        to: '/admin/profile',
      },
    ],
  },
  notification: {
    label: 'Notification',
    items: [
      {
        title: 'Notification 1',
        message: 'This is a notification',
        icon: 'ic:baseline-person',
        to: '/admin/profile',
      },
      {
        title: 'Notification 2',
        message: 'This is a notification',
        icon: 'ic:baseline-person',
        to: '/admin/profile',
      },
      {
        title: 'Notification 3',
        message: 'This is a notification',
        icon: 'ic:baseline-person',
        to: '/admin/profile',
      },
    ],
  },
});
