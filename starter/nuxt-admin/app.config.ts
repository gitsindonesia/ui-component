export default defineAppConfig({
  adminTitle: 'Nuxt Admin',
  companyName: 'PT. GITS Indonesia',
  menus: [],
  accountMenu: {
    label: 'Account',
    items: [],
  },
  notification: {
    enable: true,
    label: 'Notification',
    items: [],
    emptyText: 'No notifications',
    seeAll: {
      text: 'View all notifications',
      props: {
        to: '/notifications'
      }
    }
  },
  // enable dark mode
  darkMode: true,
});
