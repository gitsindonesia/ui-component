import {App, defineAsyncComponent} from 'vue';
import VAlert from './src/components/VAlert/VAlert.vue';
import VBtn from './src/components/VBtn/VBtn.vue';
import VAppBar from './src/components/VAppBar/VAppBar.vue';
import VBadge from './src/components/VBadge/VBadge.vue';
import VBreadcrumbs from './src/components/VBreadcrumbs/VBreadcrumbs.vue';
import VCard from './src/components/VCard/VCard.vue';
import VCheckbox from './src/components/VCheckbox/VCheckbox.vue';
import VDataTable from './src/components/VDataTable/VDataTable.vue';
import VDataTablePagination from './src/components/VDataTablePagination/VDataTablePagination.vue';
import VDropdown from './src/components/VDropdown/VDropdown.vue';
import VFormSelect from './src/components/VFormSelect/VFormSelect.vue';
import VInput from './src/components/VInput/VInput.vue';
import VInputGroup from './src/components/VInputGroup/VInputGroup.vue';
import VInputRange from './src/components/VInputRange/VInputRange.vue';
import VModal from './src/components/VModal/VModal.vue';
import VPagination from './src/components/VPagination/VPagination.vue';
import VProgressBar from './src/components/VProgressBar/VProgressBar.vue';
import VRadio from './src/components/VRadio/VRadio.vue';
import VRadioGroup from './src/components/VRadioGroup/VRadioGroup.vue';
import VSelect from './src/components/VSelect/VSelect.vue';
import VSwitch from './src/components/VSwitch/VSwitch.vue';
import VTabs from './src/components/VTabs/VTabs.vue';
import VTextarea from './src/components/VTextarea/VTextarea.vue';
import VTooltip from './src/components/VTooltip/VTooltip.vue';
import VFormGroup from './src/components/VFormGroup/VFormGroup.vue';
import VNavbar from './src/components/VNavbar/VNavbar.vue';
import VNavDrawer from './src/components/VNavDrawer/VNavDrawer.vue';
import VMenu from './src/components/VMenu/VMenu.vue';
import VMenus from './src/components/VMenus/VMenus.vue';
import VContainer from './src/components/VContainer/VContainer.vue';
import VLogo from './src/components/VLogo/VLogo.vue';
import VToast from './src/components/VToast/VToast.vue';
import VSpinner from './src/components/VSpinner/VSpinner.vue';
import VStats from './src/components/VStats/VStats.vue';
import AuthLayout from './src/layouts/Auth.vue';
import BaseLayout from './src/layouts/Base.vue';
import DefaultLayout from './src/layouts/Default.vue';
import Activation from './src/pages/auth/Activation.vue';
import Auth from './src/pages/auth/Auth.vue';
import ForgotPassword from './src/pages/auth/ForgotPassword.vue';
import Login from './src/pages/auth/Login.vue';
import ResetPassword from './src/pages/auth/ResetPassword.vue';
import VFileUpload from './src/components/VFileUpload/VFileUpload.vue';
import VCollapse from './src/components/VCollapsible/VCollapse.vue';
import VCollapsible from './src/components/VCollapsible/VCollapsible.vue';
import VMultiSelect from './src/components/VMultiSelect/VMultiSelect.vue';

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
  VFileUpload,
};

export * from './src/components/VToast';
export * from './src/utils';
export default plugin;
