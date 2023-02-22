const menus = [
  {
    text: 'Dashboard',
    to: '/admin',
    prependIcon: 'ic:baseline-insert-chart',
  },
]

export default defineAppConfig({
  admin: {
    title: 'Nuxt Admin',
    companyName: 'PT. GITS Indonesia',
    menus,
    // enable dark mode
    darkMode: true,
    // search input
    search: {
      enable: true
    },
    // announcement
    announcement: {
      enable: true,
      title: 'New features available!',
      message: 'Check out the new dashboard view. Pages now load faster.',
      url: '',
      dismiss: {
        enable: true,
        text: 'Dismiss'
      },
      cta: {
        enable: true,
        text: 'What\'s New?'
      }
    }
  },
});
