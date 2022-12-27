import {Args, Story} from '@storybook/vue3';
import VStepper from './Stepper.vue';
import vueRouter from 'storybook-vue3-router';
import {defineComponent, ref, computed, toRefs, PropType} from 'vue';
import {useRoute} from 'vue-router';

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
    linear: false,
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


export const Linear = (args:Args) => ({
  components: {
    VStepper,
  },
  setup() {
    const val = ref(args?.modelValue || 0);

    const linear = [true, false]

    const nuArgs = {
      args: linear.map((e) => {
        return {
          ...args,
          modelValue: val,
          disableRouteActive: true,
          linear : e,
        }
      }),
      linear
    }

    const onPrevClick = () => {
        val.value -= 1;
    }
    const onNextClick = () => {
      val.value += 1;
    }

    return {args:nuArgs, linear, val, onPrevClick, onNextClick};
  },
  template: `
    <div class="flex flex-col gap-4">
      <div v-for="(val, idx) in linear">
        <p class="mb-2">{{val ? 'Linear' : 'Non-linear'}}</p>
        <v-stepper v-bind="args.args[idx]"/>
      </div>

      <div class="flex gap-4 my-4 items-center justify-center">
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
Linear.parameters = {
  docs: {
    source: {
      code: `
<v-steppers />
<v-steppers :linear="true" />
      `,
    },
  },
};

export const Clickable = (args:Args) => ({
  components: {
    VStepper,
  },
  setup() {
    const val = ref(args?.modelValue || 0);

    const clickable = [true, false, true, true];
    const disableRouteActive = [false, false, true, false];
    const linkable = [false, false, false, true];

    const nuArgs = {
      args: clickable.map((e, idx) => {
        return {
          ...args,
          modelValue: val,
          disableRouteActive: disableRouteActive[idx],
          clickable: clickable[idx],
          linkable: linkable[idx],
        }
      }),
      clickable
    }

    const onPrevClick = () => {
        val.value -= 1;
    }
    const onNextClick = () => {
      val.value += 1;
    }

    const onStepClick = (step:any) => {
      alert('You clicked a step! ' + JSON.stringify(step));

      val.value = step.index;
    }

    return {args:nuArgs, clickable, val, onPrevClick, onNextClick, onStepClick};
  },
  template: `
    <div class="flex flex-col gap-4">
      <div v-for="(val, idx) in clickable">
        <p class="mb-2">
          {{idx === 0 ? 'Clickable w/ Disable Route Active' : '' }}
          {{idx === 1 ? 'Disable Route Active' : ''}}
          {{idx === 2 ? 'Clickable w/ Route Active and not Linkable' : ''}}
          {{idx === 3 ? 'Clickable w/ Route Active and Linkable' : ''}}
        </p>
        <v-stepper v-bind="args.args[idx]" @click="onStepClick"/>
      </div>

      <div class="flex gap-4 my-4 items-center justify-center">
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
Clickable.parameters = {
  docs: {
    source: {
      code: `
<v-steppers clickable disable-route-active />
<v-steppers :clickable="false" />
<v-steppers clickable />
      `,
    },
  },
};


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
