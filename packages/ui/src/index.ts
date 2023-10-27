import type { Plugin } from 'vue';
import VBtn from '@morpheme/button';
import { VAlert, VAlertTitle, VAlertGroup } from '@morpheme/alert';
import VSpinner from '@morpheme/spinner';
import VAppBar from '@morpheme/app-bar';
import { VBadge, VBadgeGroup, VBadgeContent } from '@morpheme/badge';
import {
  VBreadcrumbs,
  VBreadcrumbsItem,
  VBreadcrumbsDivider,
} from '@morpheme/breadcrumbs';
import {
  VCard,
  VCardHeader,
  VCardBody,
  VCardFooter,
  VCardImage,
} from '@morpheme/card';
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
import { VDataTable, VDataTablePagination } from '@morpheme/table';
import {
  Dropdown,
  DropdownItem,
  DropdownButton,
  DropdownBtn,
  DropdownHeader,
  DropdownActivator,
} from '@morpheme/dropdown';
import VModal from '@morpheme/modal';
import VPagination from '@morpheme/pagination';
import VProgressBar from '@morpheme/progress-bar';
import VSelect from '@morpheme/select';
import VSwitch from '@morpheme/switch';
import {
  VTabs,
  VTab,
  VTabsSlider,
  VTabGroup,
  VTabItem,
  VTabList,
  VTabPanels,
  VTabPanel,
} from '@morpheme/tabs';
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
  ListItemTitle,
  ListItemSubTitle,
  ListItemContent,
} from '@morpheme/list';
import { Icon } from '@morpheme/icon';
import Avatar, { AvatarGroup } from '@morpheme/avatar';
import Shimmer from '@morpheme/shimmer';
import VAutocomplete from '@morpheme/autocomplete';
import './style.scss';
import { Rating } from '@morpheme/rating';
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
import { VAppShell, VMain } from '@morpheme/app-shell';
import VProgressCircular from '@morpheme/progress-circular';
import {
  VTimeline,
  VTimelineItem,
  VTimelineDivider,
  VTimelineItemDot,
  VTimelineItemContent,
} from '@morpheme/timeline';
import { VBanner, VBannerText } from '@morpheme/banner';
import { VDivider } from '@morpheme/divider';
import {
  VBottomNavigation,
  VBottomNavigationItem,
} from '@morpheme/bottom-navigation';
import {
  VPopover,
  VPopoverButton,
  VPopoverGroup,
  VPopoverOverlay,
  VPopoverPanel,
} from '@morpheme/popover';
import { VRow, VCol } from '@morpheme/layouts';
import VCommand from '@morpheme/command';
import { FloatingVuePlugin } from '@morpheme/tooltip'

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
export * from '@morpheme/toast';
export * from '@morpheme/app-bar/src/types';
export * from '@morpheme/badge/src/types';
export * from '@morpheme/breadcrumbs/src/types';
export * from '@morpheme/table/src/types';
export * from '@morpheme/dropdown';
export * from '@morpheme/forms';
export * from '@morpheme/navbar/src/types';
export * from '@morpheme/tabs/src/types';
export * from '@morpheme/modal';
export * from '@morpheme/bottom-sheet/src/types';
export * from './component-resolver';
export * from './colors';
export * from './plugin';
export * from '@morpheme/timeline';
export default plugin;
