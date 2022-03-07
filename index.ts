import {App, defineAsyncComponent} from 'vue';
import VBtn from '@gits/button';
import VAlert from '@gits/alert';
import VSpinner from '@gits/spinner';

// const VAlert = defineAsyncComponent(
//   () => import('./src/components/VAlert/VAlert.vue'),
// );
// const VBtn = defineAsyncComponent(
//   () => import('./src/components/VBtn/VBtn.vue'),
// );
const VAppBar = defineAsyncComponent(
  () => import('./src/components/VAppBar/VAppBar.vue'),
);
const VBadge = defineAsyncComponent(
  () => import('./src/components/VBadge/VBadge.vue'),
);
const VBreadcrumbs = defineAsyncComponent(
  () => import('./src/components/VBreadcrumbs/VBreadcrumbs.vue'),
);
const VCard = defineAsyncComponent(
  () => import('./src/components/VCard/VCard.vue'),
);
const VCheckbox = defineAsyncComponent(
  () => import('./src/components/VCheckbox/VCheckbox.vue'),
);
const VDataTable = defineAsyncComponent(
  () => import('./src/components/VDataTable/VDataTable.vue'),
);
const VDataTablePagination = defineAsyncComponent(
  () =>
    import('./src/components/VDataTablePagination/VDataTablePagination.vue'),
);
const VDropdown = defineAsyncComponent(
  () => import('./src/components/VDropdown/VDropdown.vue'),
);
const VFormSelect = defineAsyncComponent(
  () => import('./src/components/VFormSelect/VFormSelect.vue'),
);
const VInput = defineAsyncComponent(
  () => import('./src/components/VInput/VInput.vue'),
);
const VInputGroup = defineAsyncComponent(
  () => import('./src/components/VInputGroup/VInputGroup.vue'),
);
const VInputRange = defineAsyncComponent(
  () => import('./src/components/VInputRange/VInputRange.vue'),
);
const VModal = defineAsyncComponent(
  () => import('./src/components/VModal/VModal.vue'),
);
const VPagination = defineAsyncComponent(
  () => import('./src/components/VPagination/VPagination.vue'),
);
const VProgressBar = defineAsyncComponent(
  () => import('./src/components/VProgressBar/VProgressBar.vue'),
);
const VRadio = defineAsyncComponent(
  () => import('./src/components/VRadio/VRadio.vue'),
);
const VRadioGroup = defineAsyncComponent(
  () => import('./src/components/VRadioGroup/VRadioGroup.vue'),
);
const VSelect = defineAsyncComponent(
  () => import('./src/components/VSelect/VSelect.vue'),
);
const VSwitch = defineAsyncComponent(
  () => import('./src/components/VSwitch/VSwitch.vue'),
);
const VTabs = defineAsyncComponent(
  () => import('./src/components/VTabs/VTabs.vue'),
);
const VTextarea = defineAsyncComponent(
  () => import('./src/components/VTextarea/VTextarea.vue'),
);
const VTooltip = defineAsyncComponent(
  () => import('./src/components/VTooltip/VTooltip.vue'),
);
const VFormGroup = defineAsyncComponent(
  () => import('./src/components/VFormGroup/VFormGroup.vue'),
);
const VNavbar = defineAsyncComponent(
  () => import('./src/components/VNavbar/VNavbar.vue'),
);
const VNavDrawer = defineAsyncComponent(
  () => import('./src/components/VNavDrawer/VNavDrawer.vue'),
);
const VMenu = defineAsyncComponent(
  () => import('./src/components/VMenu/VMenu.vue'),
);
const VMenus = defineAsyncComponent(
  () => import('./src/components/VMenus/VMenus.vue'),
);
const VContainer = defineAsyncComponent(
  () => import('./src/components/VContainer/VContainer.vue'),
);
const VLogo = defineAsyncComponent(
  () => import('./src/components/VLogo/VLogo.vue'),
);
const VToast = defineAsyncComponent(
  () => import('./src/components/VToast/VToast.vue'),
);
// const VSpinner = defineAsyncComponent(
//   () => import('./src/components/VSpinner/VSpinner.vue'),
// );
const VStats = defineAsyncComponent(
  () => import('./src/components/VStats/VStats.vue'),
);
const AuthLayout = defineAsyncComponent(() => import('./src/layouts/Auth.vue'));
const BaseLayout = defineAsyncComponent(() => import('./src/layouts/Base.vue'));
const DefaultLayout = defineAsyncComponent(
  () => import('./src/layouts/Default.vue'),
);
const Activation = defineAsyncComponent(
  () => import('./src/pages/auth/Activation.vue'),
);
const Auth = defineAsyncComponent(() => import('./src/pages/auth/Auth.vue'));
const ForgotPassword = defineAsyncComponent(
  () => import('./src/pages/auth/ForgotPassword.vue'),
);
const Login = defineAsyncComponent(() => import('./src/pages/auth/Login.vue'));
const ResetPassword = defineAsyncComponent(
  () => import('./src/pages/auth/ResetPassword.vue'),
);
const VFileUpload = defineAsyncComponent(
  () => import('./src/components/VFileUpload/VFileUpload.vue'),
);
const VCollapse = defineAsyncComponent(
  () => import('./src/components/VCollapsible/VCollapse.vue'),
);
const VCollapsible = defineAsyncComponent(
  () => import('./src/components/VCollapsible/VCollapsible.vue'),
);
const VCollapsibleGroup = defineAsyncComponent(
  () => import('./src/components/VCollapsible/VCollapsibleGroup.vue'),
);
const VMultiSelect = defineAsyncComponent(
  () => import('./src/components/VMultiSelect/VMultiSelect.vue'),
);

const VEditor = defineAsyncComponent(
  () => import('./src/components/VEditor/VEditor.vue'),
);

const plugin = {
  install: (app: App, options = {}) => {
    app.component('VAlert', VAlert);
    app.component('VBtn', VBtn);
    app.component('VAppBar', VAppBar);
    app.component('VBadge', VBadge);
    app.component('VBreadcrumbs', VBreadcrumbs);
    app.component('VCard', VCard);
    app.component('VCheckbox', VCheckbox);
    app.component('VDataTable', VDataTable);
    app.component('VDataTablePagination', VDataTablePagination);
    app.component('VDropdown', VDropdown);
    app.component('VFormSelect', VFormSelect);
    app.component('VInput', VInput);
    app.component('VInputGroup', VInputGroup);
    app.component('VInputRange', VInputRange);
    app.component('VModal', VModal);
    app.component('VPagination', VPagination);
    app.component('VProgressBar', VProgressBar);
    app.component('VRadio', VRadio);
    app.component('VRadioGroup', VRadioGroup);
    app.component('VSelect', VSelect);
    app.component('VSwitch', VSwitch);
    app.component('VTabs', VTabs);
    app.component('VTextarea', VTextarea);
    app.component('VTooltip', VTooltip);
    app.component('VFormGroup', VFormGroup);
    app.component('VNavbar', VNavbar);
    app.component('VNavDrawer', VNavDrawer);
    app.component('VMenu', VMenu);
    app.component('VMenus', VMenus);
    app.component('VContainer', VContainer);
    app.component('VToast', VToast);
    app.component('VSpinner', VSpinner);
    app.component('VStats', VStats);
    app.component('VFileUpload', VFileUpload);
    app.component('VCollapse', VCollapse);
    app.component('VCollapsible', VCollapsible);
    app.component('VCollapsibleGroup', VCollapsibleGroup);
    app.component('VMultiSelect', VMultiSelect);
  },
};

export {
  VAlert,
  VBtn,
  VAppBar,
  VBadge,
  VBreadcrumbs,
  VCard,
  VCheckbox,
  VDataTable,
  VDataTablePagination,
  VDropdown,
  VFormSelect,
  VInput,
  VInputGroup,
  VInputRange,
  VModal,
  VPagination,
  VProgressBar,
  VRadio,
  VRadioGroup,
  VSelect,
  VSwitch,
  VTabs,
  VTextarea,
  VTooltip,
  VFormGroup,
  VNavbar,
  VNavDrawer,
  VMenu,
  VMenus,
  VContainer,
  VLogo,
  VToast,
  VSpinner,
  VStats,
  AuthLayout,
  BaseLayout,
  DefaultLayout,
  Activation,
  Auth,
  ForgotPassword,
  Login,
  ResetPassword,
  VEditor,
  VCollapse,
  VCollapsible,
  VCollapsibleGroup,
  VFileUpload,
};

export * from './src/components/VToast';
export * from './src/utils';
export * from './src/types';
export * from './src/services';
export * from './src/components/VAppBar/VAppBar';
export * from './src/components/VBadge/VBadge';
export * from './src/components/VBreadcrumbs/VBreadcrumbs';
export * from './src/components/VDataTable/VDataTable';
export * from './src/components/VDropdown/VDropdown';
export * from './src/components/VInput/VInput';
export * from './src/components/VNavbar/VNavbar';
export * from './src/components/VTabs/VTabs';
export * from './src/components/VToast/VToast';
export * from './src/components/VModal/VModal';
export default plugin;
