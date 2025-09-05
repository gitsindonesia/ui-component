import type {Meta, StoryFn} from '@storybook/vue3';
import {ref} from 'vue';
import VNavDrawer from './VNavDrawer.vue';
import VBtn from '@morpheme/button';

const menus = [
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
];

export default {
  title: 'Deprecated/NavDrawer',
  component: VNavDrawer,
  argTypes: {},
  args: {
    menus,
  },
} as Meta;

const Template: StoryFn = (args) => ({
  components: {VNavDrawer, VBtn},
  setup() {
    const isOpen = ref(false);
    return {args, isOpen};
  },
  template: `
  <div class="flex">
    <VNavDrawer v-bind="args" v-model="isOpen">
      <template #logo.mini>
        <div class="text-center font-semibold">Morpheme</div>
      </template>
    </VNavDrawer>
    <div>
      <v-btn @click="isOpen = !isOpen">Toggle NavDrawer</v-btn>
    </div>
  </div>
  `,
});

export const Default = Template.bind({});
Default.parameters = {
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
