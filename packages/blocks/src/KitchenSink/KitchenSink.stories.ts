import MorphemeUI from '@morpheme/ui';
import {Meta, Story} from '@storybook/vue3';
import KitchenSinkComponent from './KitchenSink.vue';
import AppLayout from './AppLayout.vue';
import {app} from '@storybook/vue3';

app.use(MorphemeUI);

export default {
  title: 'Blocks/KitchenSink',
} as Meta;

export const KitchenSink: Story = () => ({
  components: {KitchenSinkComponent, AppLayout},
  template: `
    <AppLayout>
      <KitchenSinkComponent />
    </AppLayout>
  `,
});
