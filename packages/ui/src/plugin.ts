import type { App, Plugin } from 'vue';

import { VAlert, VAlertTitle, VAlertGroup } from './components/alert';
import { VBtn } from './components/button';
import { VAppBar } from './components/app-bar';
import { VBadge, VBadgeGroup, VBadgeContent } from './components/badge';
import { VBreadcrumbs, VBreadcrumbsItem, VBreadcrumbsDivider } from './components/breadcrumbs';
import { VCard, VCardHeader, VCardBody, VCardFooter, VCardImage } from './components/card';
import { default as VCheckbox } from './components/forms/checkbox/VCheckbox.vue';
import { VDataTable, VDataTablePagination } from './components/table';
import { Dropdown, DropdownItem, DropdownButton, DropdownBtn, DropdownHeader, DropdownActivator } from './components/dropdown';
import { default as VFormSelect } from './components/forms/form-select/VFormSelect.vue';
import { default as VInput } from './components/forms/input/VInput.vue';
import { default as VInputGroup } from './components/forms/input/VInput.vue';
import { default as VInputRange } from './components/forms/input/VInput.vue';
import { VModal } from './components/modal';
import { VPagination } from './components/pagination';
import { VProgressBar } from './components/progress';
import {
    default as VRadio,
} from './components/forms/radio/VRadio.vue';
import {
    default as VRadioGroup,
} from './components/forms/radio/VRadioGroup.vue';
import { VSelect } from './components/select';
import { VSwitch } from './components/switch';
import {
    VTabs,
    VTab,
    VTabsSlider,
    VTabGroup,
    VTabItem,
    VTabList,
    VTabPanels,
    VTabPanel
} from './components/tabs';
import { VTextarea } from './components/forms/textarea';
import { VTooltip } from './components/tooltip';
import { VFormGroup } from './components/forms';
import { VNavbar } from './components/navbar';
import { VNavDrawer } from './components/nav-drawer';
import { VMenu } from './components/menu';
import { VMenus } from './components/menus';
// import { VContainer, VRow, VCol } from './components/grid';
import { VToast } from './components/toast';
import { VSpinner } from './components/spinner';
import { VStats } from './components/stats';
import { default as VFileUpload } from './components/forms/file-input/VFileUpload.vue';
import { VCollapse, VCollapsible, VCollapsibleGroup } from './components/collapsible';
import { VMultiSelect } from './components/multi-select';
import {
    List,
    ListItem,
    ListItemDivider,
    ListItemHeader,
    ListCollapse,
    ListItemTitle,
    ListItemSubTitle,
    ListItemContent
} from './components/list';
import { Icon } from './components/icon';
import { default as Avatar, AvatarGroup } from './components/avatar';
import { default as Shimmer } from './components/shimmer';
import { VAutocomplete } from './components/autocomplete';
import { Rating } from './components/rating';
import {
    BottomSheet,
    BottomSheetHeader,
    BottomSheetBody,
    BottomSheetFooter,
    BottomSheetMenus,
    BottomSheetOverlay,
    BottomSheetHandle
} from './components/bottom-sheets';
import { Stepper, StepperItem, StepperDivider, StepperNumber } from './components/steppers';
import { VText } from './components/text';
import { VAppShell, VMain } from './components/app-shell';
import { VProgressCircular } from './components/progress-circlular';
import {
    VTimeline,
    VTimelineDivider,
    VTimelineItem,
    VTimelineItemDot,
    VTimelineItemContent
} from './components/timeline';
import { VBanner, VBannerText } from './components/banner';
import { VDivider } from './components/divider';
import { VBottomNavigation, VBottomNavigationItem } from './components/bottom-navigation';
import { VPopover, VPopoverButton, VPopoverGroup, VPopoverOverlay, VPopoverPanel } from './components/popover';
import { VCommand } from './components/command';

export type UserPlugin = (ctx: { app: App }) => void;

export interface MorphemePluginOptions {
    /** 
     * Enable or disable automatic registration of components
     */
    components: boolean
}

const defaultOptions: MorphemePluginOptions = {
    components: true
}

export const plugin: Plugin<MorphemePluginOptions> = {
    install: (app, options = defaultOptions) => {
        if (options.components) {
            // Automatic registration of all components
            // This assumes that all components are exported from their respective directories
            // and that they follow a consistent naming convention.
            // Example: import { VBtn } from './components/button'; app.component('VBtn', VBtn);
            // You would need to manually add each component here or use a dynamic import strategy.
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
            // app.component('VContainer', VContainer);
            app.component('VToast', VToast);
            app.component('VSpinner', VSpinner);
            app.component('VStats', VStats);
            app.component('VFileUpload', VFileUpload);
            app.component('VCollapse', VCollapse);
            app.component('VCollapsible', VCollapsible);
            app.component('VCollapsibleGroup', VCollapsibleGroup);
            app.component('VMultiSelect', VMultiSelect);
            // app.component('VLogo', VLogo);
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
            // app.component('VRow', VRow);
            // app.component('VCol', VCol);
            app.component('VCommand', VCommand);
        }
    }
}