import {mount} from '@vue/test-utils';
import VTimeline from './VTimeline.vue';
import VTimelineItem from './VTimelineItem.vue';

describe('VTimeline', () => {
  test('renders timeline items', () => {
    const items = [
      {
        title: 'Event 1',
        subtitle: 'Subtitle 1',
        date: 'January 1, 2022',
        description: 'Description of Event 1',
      },
      {
        title: 'Event 2',
        subtitle: 'Subtitle 2',
        date: 'February 1, 2022',
        description: 'Description of Event 2',
      },
      {
        title: 'Event 3',
        subtitle: 'Subtitle 3',
        date: 'March 1, 2022',
        description: 'Description of Event 3',
      },
    ];

    const wrapper = mount(VTimeline, {
      slots: {
        default: items.map((item) => {
          return mount(VTimelineItem, {
            props: {
              title: item.title,
              subtitle: item.subtitle,
              date: item.date,
            },
            slots: {
              default: item.description,
            },
          }).html();
        }),
      },
    });

    expect(wrapper.findAll('.v-timeline-item')).toHaveLength(3);
  });

  test('renders divider', () => {
    const wrapper = mount(VTimeline, {
      slots: {
        divider: '<hr class="test-divider" />',
      },
    });

    expect(wrapper.find('.test-divider').exists()).toBe(true);
  });
});
