import {Args, Story} from '@storybook/vue3';
import VStepper from './Stepper.vue';
import vueRouter from 'storybook-vue3-router';
import {defineComponent, ref, computed, toRefs, PropType} from 'vue';
import {useRoute, useRouter} from 'vue-router';

export default {
  title: 'Components/Stepper',
  component: VStepper,
  argTypes: {},
  args: {
    modelValue: 0,
    items: Array.from({length: 5}, (v, k) => ({
      title: 'Title',
      subtitle: 'Subtitle',
      path: '/step/' + k,
    })),
    disableRouteActive: false,
    linkable: false,
    vertical: false,
  },
};

const Stepper = defineComponent({
  props: {
    id: {
      type: String,
      required: true
    },
    disableRouteActive: {
      type: Boolean,
      required: true
    },
    value: {
      type: Number,
      required: true
    },
    items: {
      type: Array as PropType<Record<any, string>[]>,
      required: true
    }
  },
  setup(props:any) {
    const {items} = toRefs(props);
    const route = useRoute();

    const getCurrentIdx = computed(() => {
      return items.value?.findIndex((e:Record<string, any>) => e?.path === route.path);
    });
    const getNext = computed(() =>{
      const currIndex = getCurrentIdx.value;
      const targetIdx = currIndex + 1;
      return targetIdx < items.value?.length ? items.value?.at(targetIdx) : {};
    });
    const getPrev = computed(() => {
      const currIndex = getCurrentIdx.value;
      const targetIdx = currIndex - 1;
      return targetIdx >= 0 ? items.value?.at(targetIdx) : {};
    });

    return {getCurrentIdx, getPrev, getNext};
  },
  template: `
    <div class="p-4 text-center">
      This is Stepper {{disableRouteActive ? value : (getCurrentIdx ?? '-')}} content.<br/>
      
      <div class="flex gap-4 my-4 items-center justify-center" v-if="!disableRouteActive">
        <template v-if="getPrev.path">
            <router-link :to="getPrev.path">
              <a class="text-blue-500 underline">Prev Step</a>
            </router-link>
        </template>
        <template v-if="getNext.path">
            <router-link :to="getNext.path || ''">
              <a class="text-blue-500 underline">Next Step</a>
            </router-link>
        </template>
      </div>
    </div>
  `
});

const defaultRoutes = [
  {
    path: '/step/:id',
    name: 'stepper',
    props: true,
    component: Stepper,
  }
]

const Template: Story = (args, ctx) => ({
  components: {
    VStepper,
  },
  setup() {
    const val = ref(args.modelValue);
    const disableRouteActive = ref(args.disableRouteActive);

    const onPrevClick = () => {
      if(disableRouteActive.value){
        val.value -= 1;
      }
    }
    const onNextClick = () => {
      if(disableRouteActive.value){
        val.value += 1;
      }
    }

    return {args, onPrevClick, onNextClick, val, disableRouteActive};
  },
  template: `
    <div>
      <VStepper v-bind="args" :model-value="val" />
    
      <router-view
          :value="val"
          :items="args.items"
          :disableRouteActive="disableRouteActive"
      />
      
      <div class="flex gap-4 my-4 items-center justify-center" v-if="disableRouteActive">
        <button class="border-[1px] border-gray-400 p-2" @click="onPrevClick">
          Prev
        </button>
        <button class="border-[1px] border-gray-400 p-2" @click="onNextClick">
          Next
        </button>
      </div>
    </div>
  `,
});


export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: `<v-steppers :items="items" />`,
    },
  },
};
Default.decorators = [
    (story, ctx) => {
        const initialRoute = ctx.args?.items?.at(ctx.args.modelValue)?.path
        return vueRouter(defaultRoutes, {
            initialRoute
        })(story, ctx)
    },
];


export const DisableRouteActive = Template.bind({});
DisableRouteActive.args = {
  disableRouteActive: true,
};
DisableRouteActive.parameters = {
  docs: {
    source: {
      code: `<v-steppers :items="items" disable-route-active />`,
    },
  },
};

export const Linkable = Template.bind({});
Linkable.args = {
  linkable: true,
};
Linkable.parameters = {
  docs: {
    source: {
      code: `<v-steppers :items="items" linkable />`,
    },
  },
};
Linkable.decorators = [
    (story, ctx) => {
        const initialRoute = ctx.args?.items?.at(ctx.args.modelValue)?.path
        return vueRouter(defaultRoutes, {
            initialRoute
        })(story, ctx)
    },
];


export const Vertical = Template.bind({});
Vertical.args = {
  vertical: true,
};
Vertical.parameters = {
  docs: {
    source: {
      code: `<v-steppers :items="items" vertical />`,
    },
  },
};


export const VModel = Template.bind({});
VModel.args = {
  modelValue: 1,
  items: [
    {
      title: 'Title 1',
      subtitle: 'Subtitle 1',
      path: '/step/1',
    },
    {
      title: 'Title 2',
      subtitle: 'Subtitle 2',
      path: '/step/2',
    },
  ]
};
VModel.parameters = {
  docs: {
    source: {
      code: `<v-steppers :items="items" v-model="value" />`,
    },
  },
};
VModel.decorators = [
  (story, ctx) => {
    const initialRoute = ctx.args?.items?.at(ctx.args.modelValue)?.path
    return vueRouter(defaultRoutes, {
      initialRoute
    })(story, ctx)
  },
];
