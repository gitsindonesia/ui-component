import VAlert from './components/VAlert/VAlert.vue';
import VBtn from './components/VBtn/VBtn.vue';
import VAppBar from './components/VAppBar/VAppBar.vue';
import VBadge from './components/VBadge/VBadge.vue';
import VBreadcrumbs from './components/VBreadcrumbs/VBreadcrumbs.vue';
import VCard from './components/VCard/VCard.vue';
import VCheckbox from './components/VCheckbox/VCheckbox.vue';
import VDataTable from './components/VDataTable/VDataTable.vue';
import VDataTablePagination from './components/VDataTablePagination/VDataTablePagination.vue';
import VDropdown from './components/VDropdown/VDropdown.vue';
import VFormSelect from './components/VFormSelect/VFormSelect.vue';
import VInput from './components/VInput/VInput.vue';
import VInputGroup from './components/VInputGroup/VInputGroup.vue';
import VInputRange from './components/VInputRange/VInputRange.vue';
import VModal from './components/VModal/VModal.vue';
import VPagination from './components/VPagination/VPagination.vue';
import VProgressBar from './components/VProgressBar/VProgressBar.vue';
import VRadio from './components/VRadio/VRadio.vue';
import VRadioGroup from './components/VRadioGroup/VRadioGroup.vue';
import VSelect from './components/VSelect/VSelect.vue';
import VSwitch from './components/VSwitch/VSwitch.vue';
import VTabs from './components/VTabs/VTabs.vue';
import VTextarea from './components/VTextarea/VTextarea.vue';
import VTooltip from './components/VTooltip/VTooltip.vue';
import VFormGroup from './components/VFormGroup/VFormGroup.vue';
import VNavbar from './components/VNavbar/VNavbar.vue';
import VNavDrawer from './components/VNavDrawer/VNavDrawer.vue';
import VMenu from './components/VMenu/VMenu.vue';
import VMenus from './components/VMenus/VMenus.vue';
import VContainer from './components/VContainer/VContainer.vue';
import VLogo from './components/VLogo/VLogo.vue';
import VToast from './components/VToast/VToast.vue';
import VSpinner from './components/VSpinner/VSpinner.vue';
import VStats from './components/VStats/VStats.vue';
import AuthLayout from './layouts/Auth.vue';
import BaseLayout from './layouts/Base.vue';
import DefaultLayout from './layouts/Default.vue';
import Activation from './pages/auth/Activation.vue';
import Auth from './pages/auth/Auth.vue';
import ForgotPassword from './pages/auth/ForgotPassword.vue';
import Login from './pages/auth/Login.vue';
import ResetPassword from './pages/auth/ResetPassword.vue';
import { App } from 'vue';

export default {
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
};
