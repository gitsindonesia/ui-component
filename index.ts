import {App} from 'vue';
import VBtn from './packages/button';
import VAlert from './packages/alert';
import VSpinner from './packages/spinner';
import VAppBar from './packages/app-bar';
import VBadge from './packages/badge';
import VBreadcrumbs from './packages/breadcrumbs';
import VCard from './packages/card';
import VCheckbox from './packages/checkbox';
import {VDataTable, VDataTablePagination} from './packages/table';
import VDropdown from './packages/dropdown';
import VFormSelect from './packages/form-select';
import {VInput, VInputGroup, VInputRange} from './packages/input';
import VModal from './packages/modal';
import VPagination from './packages/pagination';
import VProgressBar from './packages/progress';
import {VRadio, VRadioGroup} from './packages/radio';
import VSelect from './packages/select';
import VSwitch from './packages/switch';
import VTabs from './packages/tabs';
import VTextarea from './packages/textarea';
import VTooltip from './packages/tooltip';
import VFormGroup from './packages/form-group';
import VNavbar from './packages/navbar';
import VNavDrawer from './packages/nav-drawer';
import VMenu from './packages/menu';
import VMenus from './packages/menus';
import VContainer from './packages/container';
import VLogo from './packages/logo';
import VToast from './packages/toast';
import VStats from './packages/stats';
import VFileUpload from './packages/file-input';
import {
  VCollapsible,
  VCollapse,
  VCollapsibleGroup,
} from './packages/collapsible';
import VMultiSelect from './packages/multi-select';
import VEditor from './packages/editor';
import {
  Auth as AuthLayout,
  Base as BaseLayout,
  Default as DefaultLayout,
} from './packages/layouts';
import {
  Activation,
  Auth,
  ForgotPassword,
  Login,
  ResetPassword,
} from './packages/pages';

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

export * from './packages/utils';
export * from './packages/types';
export * from './packages/services';
export * from './packages/app-bar/types';
export * from './packages/toast/types';
export * from './packages/badge/types';
export * from './packages/breadcrumbs/types';
export * from './packages/table/types';
export * from './packages/dropdown/types';
export * from './packages/input/types';
export * from './packages/navbar/types';
export * from './packages/tabs/types';
export * from './packages/toast/types';
export * from './packages/modal/types';
export default plugin;
