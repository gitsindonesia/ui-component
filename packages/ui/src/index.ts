import type {Plugin} from 'vue';
import VBtn from '@morpheme/button';
import VAlert from '@morpheme/alert';
import VSpinner from '@morpheme/spinner';
import VAppBar from '@morpheme/app-bar';
import VBadge from '@morpheme/badge';
import VBreadcrumbs from '@morpheme/breadcrumbs';
import VCard from '@morpheme/card';
import {
  VCheckbox,
  VFileUpload,
  VInput,
  VInputGroup,
  VInputRange,
  VFormSelect,
  VRadio,
  VRadioGroup,
  VFormGroup,
  VTextarea,
} from '@morpheme/forms';
import {VDataTable, VDataTablePagination} from '@morpheme/table';
import {Dropdown, DropdownItem, DropdownButton} from '@morpheme/dropdown';
import VModal from '@morpheme/modal';
import VPagination from '@morpheme/pagination';
import VProgressBar from '@morpheme/progress-bar';
import VSelect from '@morpheme/select';
import VSwitch from '@morpheme/switch';
import VTabs from '@morpheme/tabs';
import VTooltip from '@morpheme/tooltip';
import VNavbar from '@morpheme/navbar';
import VNavDrawer from '@morpheme/nav-drawer';
import VMenu from '@morpheme/menu';
import VMenus from '@morpheme/menus';
import VContainer from '@morpheme/container';
import VLogo from '@morpheme/logo';
import VToast from '@morpheme/toast';
import VStats from '@morpheme/stats';
import {
  VCollapsible,
  VCollapse,
  VCollapsibleGroup,
} from '@morpheme/collapsible';
import VMultiSelect from '@morpheme/multi-select';
import {
  List,
  ListItem,
  ListItemDivider,
  ListCollapse,
  ListItemHeader,
} from '@morpheme/list';
import {Icon} from '@morpheme/icon';
import Avatar from '@morpheme/avatar';
import Shimmer from '@morpheme/shimmer';
import VAutocomplete from '@morpheme/autocomplete';
import './style.scss';
import {Rating} from '@morpheme/rating';
import {
  BottomSheet,
  BottomSheetHeader,
  BottomSheetBody,
  BottomSheetFooter,
  BottomSheetMenus,
  BottomSheetOverlay,
  BottomSheetHandle,
} from '@morpheme/bottom-sheet';
import {
  Stepper,
  StepperItem,
  StepperDivider,
  StepperNumber,
} from '@morpheme/stepper';
import VText from '@morpheme/text';

const plugin: Plugin = {
  install: (app) => {
    app.component('VAlert', VAlert);
    app.component('VBtn', VBtn);
    app.component('VAppBar', VAppBar);
    app.component('VBadge', VBadge);
    app.component('VBreadcrumbs', VBreadcrumbs);
    app.component('VCard', VCard);
    app.component('VCheckbox', VCheckbox);
    app.component('VDataTable', VDataTable);
    app.component('VDataTablePagination', VDataTablePagination);
    app.component('VDropdown', Dropdown);
    app.component('VDropdownItem', DropdownItem);
    app.component('VDropdownButton', DropdownButton);
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
    app.component('VList', List);
    app.component('VListItem', ListItem);
    app.component('VListItemDivider', ListItemDivider);
    app.component('VListItemHeader', ListItemHeader);
    app.component('VListCollapse', ListCollapse);
    app.component('VIcon', Icon);
    app.component('VAvatar', Avatar);
    app.component('VShimmer', Shimmer);
    app.component('VAutocomplete', VAutocomplete);
    app.component('VRating', Rating);
    app.component('VBottomSheet', BottomSheet);
    app.component('VBottomSheetHeader', BottomSheetHeader);
    app.component('VBottomSheetBody', BottomSheetBody);
    app.component('VBottomSheetFooter', BottomSheetFooter);
    app.component('VBottomSheetMenus', BottomSheetMenus);
    app.component('VBottomSheetOverlay', BottomSheetOverlay);
    app.component('VBottomSheetHandle', BottomSheetHandle);
    app.component('VStepper', Stepper);
    app.component('VStepperItem', StepperItem);
    app.component('VStepperDivider', StepperDivider);
    app.component('VStepperNumber', StepperNumber);
    app.component('VText', VText);
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
  VCollapse,
  VCollapsible,
  VCollapsibleGroup,
  VFileUpload,
  DropdownButton as VDropdownButton,
  DropdownItem as VDropdownItem,
  Dropdown as VDropdown,
  VMultiSelect,
  List as VList,
  ListCollapse as VListCollapse,
  ListItem as VListItem,
  ListItemDivider as VListItemDivider,
  ListItemHeader as VListItemHeader,
  Icon as VIcon,
  Avatar as VAvatar,
  Shimmer as VShimmer,
  VAutocomplete,
  VText,
};

export * from '@morpheme/utils';
export * from '@morpheme/toast';
export * from '@morpheme/app-bar/src/types';
export * from '@morpheme/badge/src/types';
export * from '@morpheme/breadcrumbs/src/types';
export * from '@morpheme/table/src/types';
export * from '@morpheme/dropdown/src/types';
export * from '@morpheme/forms/src/input/types';
export * from '@morpheme/navbar/src/types';
export * from '@morpheme/tabs/src/types';
export * from '@morpheme/modal/src/types';
export * from '@morpheme/dropdown/src/types';
export * from '@morpheme/bottom-sheet/src/types';
export * from './component-resolver';
export * from './colors';
export * from './plugin';
export default plugin;
