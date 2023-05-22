import {Meta, Story} from '@storybook/vue3';
import VTimeline from './VTimeline.vue';
import VTimelineItem from './VTimelineItem.vue';
import VTimelineItemDot from './VTimelineItemDot.vue';
import VTimelineItemContent from './VTimelineItemContent.vue';
import VText from '@morpheme/text';
import VIcon from '@morpheme/icon';
import VBtn from '@morpheme/button';

export default {
  title: 'Components/Timeline',
  component: VTimeline,
  parameters: {
    layout: 'padded',
  },
} as Meta;

export const Default: Story<{}> = (args) => ({
  setup() {
    const items = [
      {
        date: 'June 2022',
        title: 'New feature release',
        description:
          "We've released an exciting new feature that will change the way you use our product.",
        link: '#',
        icon: 'mdi:rocket',
        button: 'View release notes',
        dot: {
          color: 'primary.100',
          textColor: 'primary.600',
        },
      },
      {
        date: 'May 2022',
        title: 'User interface redesign',
        description:
          "We've updated our user interface to improve usability and make it more intuitive.",
        link: '#',
        icon: 'mdi:palette',
        dot: {
          color: 'gray.100',
          textColor: 'gray.600',
        },
      },
      {
        date: 'April 2022',
        title: 'Server migration',
        description:
          "We're moving our servers to a new data center to improve performance and reliability.",
        link: '#',
        icon: 'mdi:server',
        dot: {
          color: 'warning.100',
          textColor: 'warning.600',
        },
      },
      {
        date: 'March 2022',
        title: 'New logo',
        description:
          "We've updated our logo to make it more recognizable and memorable.",
        link: '#',
        icon: 'mdi:brush',
        dot: {
          color: 'error.100',
          textColor: 'error.600',
        },
      },
    ];

    return {args, items};
  },
  components: {
    VTimeline,
    VTimelineItem,
    VTimelineItemDot,
    VTimelineItemContent,
    VText,
    VIcon,
    VBtn,
  },
  template: `
<div :class="args.dark ? 'dark dark:bg-neutral-900 dark:text-neutral-200 p-6' : ''">
  <VTimeline v-bind="args">
    <VTimelineItem v-for="item in items" :key="item.title">
      <VTimelineItemDot v-bind="item.dot">
        <VIcon :name="item.icon" size="xs" :class="args.dark ? '!text-current' : ''" />
      </VTimelineItemDot>
      <VTimelineItemContent>
        <VText font-weight="semibold">
          {{ item.title }}
        </VText>
        <VText variant="sm" color="gray.500" class="mt-1">
          Published on {{ item.date }}
        </VText>
        <VText color="gray.600" class="mt-1">
          {{ item.description }}
        </VText>
        <VBtn v-if="item.button" class="mt-4">
          {{ item.button }}
        </VBtn>
      </VTimelineItemContent>
    </VTimelineItem>
  </VTimeline>
</div>
  `,
});

export const Dashed = Default.bind({});
Dashed.args = {
  dashed: true,
};

export const Horizontal = Default.bind({});
Horizontal.args = {
  horizontal: true,
};

export const StyledContent: Story<{}> = (args) => ({
  setup() {
    const items = [
      {
        date: 'June 2022',
        title: 'New feature release',
        description:
          "We've released an exciting new feature that will change the way you use our product.",
        link: '#',
        icon: 'mdi:rocket',
        button: 'View release notes',
        dot: {
          color: 'primary.100',
          textColor: 'primary.600',
        },
      },
      {
        date: 'May 2022',
        title: 'User interface redesign',
        description:
          "We've updated our user interface to improve usability and make it more intuitive.",
        link: '#',
        icon: 'mdi:palette',
        dot: {
          color: 'gray.100',
          textColor: 'gray.600',
        },
      },
      {
        date: 'April 2022',
        title: 'Server migration',
        description:
          "We're moving our servers to a new data center to improve performance and reliability.",
        link: '#',
        icon: 'mdi:server',
        dot: {
          color: 'warning.100',
          textColor: 'warning.600',
        },
      },
      {
        date: 'March 2022',
        title: 'New logo',
        description:
          "We've updated our logo to make it more recognizable and memorable.",
        link: '#',
        icon: 'mdi:brush',
        dot: {
          color: 'error.100',
          textColor: 'error.600',
        },
      },
    ];

    return {args, items};
  },
  components: {
    VTimeline,
    VTimelineItem,
    VTimelineItemDot,
    VTimelineItemContent,
    VText,
    VIcon,
    VBtn,
  },
  template: `
<VTimeline v-bind="args">
  <VTimelineItem
    v-for="item in items"
    :key="item.title"
  >
    <VTimelineItemDot v-bind="item.dot">
      <VIcon :name="item.icon" size="xs" />
    </VTimelineItemDot>
    <VTimelineItemContent class="shadow-sm px-4 py-3 rounded-md border">
      <VText font-weight="semibold">
        {{ item.title }}
      </VText>
      <VText variant="sm" color="gray.500" class="mt-1">
        Published on {{ item.date }}
      </VText>
      <VText color="gray.600" class="mt-1">
        {{ item.description }}
      </VText>
      <VBtn v-if="item.button" class="mt-4">
        {{ item.button }}
      </VBtn>
    </VTimelineItemContent>
  </VTimelineItem>
</VTimeline>
  `,
});

export const Dark = Default.bind({});
Dark.args = {
  dark: true,
};
