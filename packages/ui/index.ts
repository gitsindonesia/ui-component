import {App} from 'vue';
import VBtn from '@gits-id/button/src/types';
import VAlert from '@gits-id/alert';
import VSpinner from '@gits-id/spinner';
import VAppBar from '@gits-id/app-bar';
import VBadge from '@gits-id/badge';
import VBreadcrumbs from '@gits-id/breadcrumbs';
import VCard from '@gits-id/card';
import VCheckbox from '@gits-id/checkbox';
import {VDataTable, VDataTablePagination} from '@gits-id/table';
import VDropdown from '@gits-id/dropdown';
import VFormSelect from '@gits-id/form-select';
import {VInput, VInputGroup, VInputRange} from '@gits-id/input';
import VModal from '@gits-id/modal';
import VPagination from '@gits-id/pagination';
import VProgressBar from '@gits-id/progress-bar';
import {VRadio, VRadioGroup} from '@gits-id/radio';
import VSelect from '@gits-id/select';
import VSwitch from '@gits-id/switch';
import VTabs from '@gits-id/tabs';
import VTextarea from '@gits-id/textarea';
import VTooltip from '@gits-id/tooltip';
import VFormGroup from '@gits-id/form-group';
import VNavbar from '@gits-id/navbar';
import VNavDrawer from '@gits-id/nav-drawer';
import VMenu from '@gits-id/menu';
import VMenus from '@gits-id/menus';
import VContainer from '@gits-id/container';
import VLogo from '@gits-id/logo';
import VToast from '@gits-id/toast';
import VStats from '@gits-id/stats';
import VFileUpload from '@gits-id/file-input';
import {VCollapsible, VCollapse, VCollapsibleGroup} from '@gits-id/collapsible';
import VMultiSelect from '@gits-id/multi-select';
import VEditor from '@gits-id/editor';
import {
  Auth as AuthLayout,
  Base as BaseLayout,
  Default as DefaultLayout,
} from '@gits-id/layouts';
import {
  Activation,
  Auth,
  ForgotPassword,
  Login,
  ResetPassword,
} from '@gits-id/pages';

const plugin = {
  install: (app: App) => {
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
    app.component('VLogo', VLogo);
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

export * from '@gits-id/utils';
export * from '@gits-id/types';
export * from '@gits-id/services';
export * from '@gits-id/toast';
export * from '@gits-id/app-bar/types';
export * from '@gits-id/badge/types';
export * from '@gits-id/breadcrumbs/types';
export * from '@gits-id/table/types';
export * from '@gits-id/dropdown/types';
export * from '@gits-id/input/types';
export * from '@gits-id/navbar/types';
export * from '@gits-id/tabs/types';
export * from '@gits-id/toast/types';
export * from '@gits-id/modal/types';
export default plugin;
