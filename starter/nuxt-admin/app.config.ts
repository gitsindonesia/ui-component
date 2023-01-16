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
  accountMenuLabel: 'Account',
  accountMenus: [
    {
      text: 'Profile',
      icon: 'ic:baseline-person',
      to: '/admin/profile',
    },
    // {
    //   divider: true
    // },
    // {
    //   text: 'Logout',
    //   icon: 'ic:baseline-logout',
    //   to: '/admin/logout',
    // },
  ],
});
