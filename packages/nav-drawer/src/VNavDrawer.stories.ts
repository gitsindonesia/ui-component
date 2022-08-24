import {Meta, Story} from '@storybook/vue3';
import MyNavbarDrawer from './VNavDrawer.vue';
import {Icon} from '@gits-id/icon';

export default {
  title: 'Components/NavDrawer',
  component: MyNavbarDrawer,
  argTypes: {},
  args: {
    classMenuParent: 'text-grey-600 bg-gray-700',
    modelValue: '',
    type: 'text',
    placeholder: 'Type...',
    menus: [
      {
        text: 'Dasbor',
        to: '/',
        icon: 'ri:database-2-line',
        hover: false,
        permission: ['dashboard-view'],
      },
      {
        text: 'Administrator',
        icon: 'ri:database-2-line',
        hover: false,
        children: [
          {
            text: 'Manajemen Pengguna',
            to: '/cms/manajemen-pengguna',
            permission: ['administrator-view'],
          },
          {
            text: 'Manajemen Peran',
            to: '/cms/manajemen-peran',
            permission: ['role-view'],
          },
        ],
      },
      {
        text: 'Manajemen Dokter',
        icon: 'ri:database-2-line',
        to: '/cms/manajemen-dokter',
        permission: ['doctor-view'],
      },
      {
        text: 'Manajemen Fitur',
        to: '/cms/manajemen-fitur',
        icon: 'ri:database-2-line',
        hover: false,
      },
      {
        text: 'Manajemen Tes & Panel',
        icon: 'ri:database-2-line',
        children: [
          {
            text: 'Tes Populer',
            to: '/cms/tes-panel/tes-populer',
          },
          {
            text: 'Panel Populer',
            to: '/cms/tes-panel/panel-populer',
          },
        ],
      },
      {
        text: 'Manajemen Spanduk',
        to: '/cms/manajemen-spanduk',
        icon: 'ri:database-2-line',
        hover: false,
        permission: ['banner-view'],
      },
      {
        text: 'Manajemen Praktik & SIP',
        to: '/cms/manajemen-praktik-sip',
        icon: 'ri:database-2-line',
        hover: false,
      },
      {
        text: 'Riwayat Pemesanan',
        to: '/cms/riwayat-pemesanan',
        icon: 'ri:database-2-line',
        hover: false,
        permission: ['order-view'],
      },
      {
        text: 'Manajemen Informasi',
        icon: 'ri:database-2-line',
        children: [
          {
            text: 'Informasi',
            to: '/cms/manajemen-informasi',
            permission: ['information-view'],
          },
          {
            text: 'Informasi Populer',
            to: '/cms/manajemen-informasi/populer',
            permission: ['information-view'],
          },
        ],
      },
      {
        text: 'Log Aktivitas',
        to: '/cms/log-aktivitas',
        icon: 'ri:database-2-line',
        hover: false,
      },
      {
        text: 'Kontak Kami',
        to: '/cms/kontak-kami',
        icon: 'ri:database-2-line',
        hover: false,
      },
    ],
  },
} as Meta;

const Template: Story = (args) => ({
  components: {MyNavbarDrawer},
  setup() {
    return {args};
  },
  template: `
  <MyNavbarDrawer v-bind="args">
    <template #logo.mini>
      <div class="text-center font-semibold">GITS</div>
    </template>
  </MyNavbarDrawer>
  `,
});

export const NavDrawer = Template.bind({});
NavDrawer.parameters = {
  docs: {
    source: {
      code: '<v-nav-drawer :menus="menus" />',
    },
  },
};

export const ExpandHover = Template.bind({});
ExpandHover.args = {
  expandHover: true,
};
ExpandHover.parameters = {
  docs: {
    source: {
      code: '<v-nav-drawer :menus="menus" />',
    },
  },
};

export const CustomAttributes = Template.bind({});
CustomAttributes.args = {
  class: 'bg-blue-800',
};
CustomAttributes.parameters = {
  docs: {
    source: {
      code: '<v-nav-drawer :menus="menus" />',
    },
  },
};
