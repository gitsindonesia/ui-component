import type { Plugin } from 'vue';
import VBtn from './button/src';
import { VAlert, VAlertTitle, VAlertGroup } from './alert/src';
import VSpinner from './spinner/src';
import VAppBar from './app-bar/src';
import { VBadge, VBadgeGroup, VBadgeContent } from './badge/src';
import {
  VBreadcrumbs,
  VBreadcrumbsItem,
  VBreadcrumbsDivider,
} from './breadcrumbs/src';
import {
  VCard,
  VCardHeader,
  VCardBody,
  VCardFooter,
  VCardImage,
} from './card/src';
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
} from './forms/src';
import { VDataTable, VDataTablePagination } from './table/src';
import {
  Dropdown,
  DropdownItem,
  DropdownButton,
  DropdownBtn,
  DropdownHeader,
  DropdownActivator,
} from './dropdown/src';
import VModal from './modal/src';
import VPagination from './pagination/src';
import VProgressBar from './progress/src';
import VSelect from './select/src';
import VSwitch from './switch/src';
import {
  VTabs,
  VTab,
  VTabsSlider,
  VTabGroup,
  VTabItem,
  VTabList,
  VTabPanels,
  VTabPanel,
} from './tabs/src';
import VTooltip, { FloatingVuePlugin } from './tooltip/src';
import VNavbar from './navbar/src';
import VNavDrawer from './nav-drawer/src';
import VMenu from './menu/src';
import VMenus from './menus/src';
import VContainer from './container/src';
import VLogo from './logo/src';
import VToast from './toast/src';
import VStats from '@morpheme/stats';
import {
  VCollapsible,
  VCollapse,
  VCollapsibleGroup,
} from './collapsible/src';
import VMultiSelect from './multi-select/src';
import {
  List,
  ListItem,
  ListItemDivider,
  ListCollapse,
  ListItemHeader,
  ListItemTitle,
  ListItemSubTitle,
  ListItemContent,
} from './list/src';
import { Icon } from './icon/src';
import Avatar, { AvatarGroup } from './avatar/src';
import Shimmer from './shimmer/src';
import VAutocomplete from './autocomplete/src';
import './style.scss';
import { Rating } from './rating/src';
import {
  BottomSheet,
  BottomSheetHeader,
  BottomSheetBody,
  BottomSheetFooter,
  BottomSheetMenus,
  BottomSheetOverlay,
  BottomSheetHandle,
} from './bottom-sheets/src';
import {
  Stepper,
  StepperItem,
  StepperDivider,
  StepperNumber,
} from './steppers/src';
import VText from './text/src';
import { VAppShell, VMain } from './app-shell/src';
import VProgressCircular from './progress-circular/src';
import {
  VTimeline,
  VTimelineItem,
  VTimelineDivider,
  VTimelineItemDot,
  VTimelineItemContent,
} from './timeline/src';
import { VBanner, VBannerText } from './banner/src';
import { VDivider } from './divider/src';
import {
  VBottomNavigation,
  VBottomNavigationItem,
} from './bottom-navigation/src';
import {
  VPopover,
  VPopoverButton,
  VPopoverGroup,
  VPopoverOverlay,
  VPopoverPanel,
} from './popover/src';
import { VRow, VCol } from './layouts/src';
import VCommand from './command/src';

const plugin: Plugin = {
  install: (app) => {
    // register custom floating vue
    app.use(FloatingVuePlugin)

    // register components
    app.component('VAlert', VAlert);
    app.component('VAlertTitle', VAlertTitle);
    app.component('VAlertGroup', VAlertGroup);
    app.component('VBtn', VBtn);
    app.component('VAppBar', VAppBar);
    app.component('VBadge', VBadge);
    app.component('VBreadcrumbs', VBreadcrumbs);
    app.component('VBreadcrumbsItem', VBreadcrumbsItem);
    app.component('VBreadcrumbsDivider', VBreadcrumbsDivider);
    app.component('VCard', VCard);
    app.component('VCardHeader', VCardHeader);
    app.component('VCardBody', VCardBody);
    app.component('VCardFooter', VCardFooter);
    app.component('VCardImage', VCardImage);
    app.component('VCheckbox', VCheckbox);
    // FIXME: fix types
    app.component('VDataTable', (VDataTable as any));
    app.component('VDataTablePagination', VDataTablePagination);
    app.component('VDropdown', Dropdown);
    app.component('VDropdownItem', DropdownItem);
    app.component('VDropdownButton', DropdownButton);
    app.component('VDropdownBtn', DropdownBtn);
    app.component('VDropdownHeader', DropdownHeader);
    app.component('VDropdownActivator', DropdownActivator);
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
    app.component('VTab', VTab);
    app.component('VTabsSlider', VTabsSlider);
    app.component('VTabSlider', VTabsSlider); // alias
    app.component('VTabGroup', VTabGroup);
    app.component('VTabItem', VTabItem);
    app.component('VTabList', VTabList);
    app.component('VTabPanels', VTabPanels);
    app.component('VTabPanel', VTabPanel);
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
    app.component('VListItemTitle', ListItemTitle);
    app.component('VListItemSubTitle', ListItemSubTitle);
    app.component('VListItemContent', ListItemContent);
    app.component('VIcon', Icon);
    app.component('VAvatar', Avatar);
    app.component('VAvatarGroup', AvatarGroup);
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
    app.component('VAppShell', VAppShell);
    app.component('VMain', VMain);
    app.component('VProgressCircular', VProgressCircular);
    app.component('VTimeline', VTimeline);
    app.component('VTimelineDivider', VTimelineDivider);
    app.component('VTimelineItem', VTimelineItem);
    app.component('VTimelineItemDot', VTimelineItemDot);
    app.component('VTimelineItemContent', VTimelineItemContent);
    app.component('VBanner', VBanner);
    app.component('VBannerText', VBannerText);
    app.component('VDivider', VDivider);
    app.component('VBottomNavigation', VBottomNavigation);
    app.component('VBottomNavigationItem', VBottomNavigationItem);
    app.component('VPopover', VPopover);
    app.component('VPopoverButton', VPopoverButton);
    app.component('VPopoverGroup', VPopoverGroup);
    app.component('VPopoverOverlay', VPopoverOverlay);
    app.component('VPopoverPanel', VPopoverPanel);
    app.component('VBadgeGroup', VBadgeGroup);
    app.component('VBadgeContent', VBadgeContent);
    app.component('VRow', VRow);
    app.component('VCol', VCol);
    app.component('VCommand', VCommand);
  },
};

export {
  VAlert,
  VBtn,
  VAppBar,
  VBadge,
  VBreadcrumbs,
  VBreadcrumbsItem,
  VBreadcrumbsDivider,
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
  VAppShell,
  VProgressCircular,
  VTimeline,
  VTimelineDivider,
  VTimelineItem,
  VTimelineItemDot,
  VTimelineItemContent,
  VBanner,
  VBannerText,
  VDivider,
  VBottomNavigation,
  VBottomNavigationItem,
  VPopover,
  VPopoverButton,
  VPopoverGroup,
  VPopoverOverlay,
  VPopoverPanel,
  VBadgeGroup,
  VBadgeContent,
  VRow,
  VCol,
};

export * from '@morpheme/utils';
export * from './toast/src';
export * from './app-bar/src/types';
export * from './badge/src/types';
export * from './breadcrumbs/src/types';
export * from './table/src/types';
export * from './dropdown/src';
export * from './forms/src';
export * from './navbar/src/types';
export * from './tabs/src/types';
export * from './modal/src/types';
export * from './bottom-sheets/src/types';
export * from './component-resolver';
export * from './colors';
export * from './plugin';
export * from './timeline/src';
export default plugin;
