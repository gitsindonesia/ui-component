import { mount } from '@vue/test-utils';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import VModal from './VModal.vue';

// Mock HeadlessUI components
const mockTransitionRoot = {
  name: 'TransitionRoot',
  template: '<div v-if="show"><slot /></div>',
  props: ['appear', 'show', 'as']
};

const mockTransitionChild = {
  name: 'TransitionChild',
  template: '<div><slot /></div>',
  props: ['as', 'enter', 'enterFrom', 'enterTo', 'leave', 'leaveFrom', 'leaveTo']
};

const mockDialog = {
  name: 'Dialog',
  template: '<div class="dialog"><slot /></div>',
  props: ['static', 'open', 'as', 'class'],
  emits: ['close'],
  methods: {
    close() {
      this.$emit('close');
    }
  }
};

const mockDialogTitle = {
  name: 'DialogTitle',
  template: '<div class="dialog-title"><slot /></div>',
  props: ['as', 'class']
};

const mockDialogPanel = {
  name: 'DialogPanel',
  template: '<div class="dialog-panel"><slot /></div>',
  props: ['class', 'style']
};

// Mock VBtn and Icon
const mockVBtn = {
  name: 'VBtn',
  template: '<button class="v-btn" :disabled="disabled" @click="$emit(\'click\')"><slot /></button>',
  props: ['icon', 'text', 'rounded', 'fab', 'size', 'class', 'disabled', 'color', 'loading'],
  emits: ['click']
};

const mockIcon = {
  name: 'Icon',
  template: '<span class="icon"><slot /></span>',
  props: ['name', 'class']
};

const defaultGlobal = {
  stubs: {
    TransitionRoot: mockTransitionRoot,
    TransitionChild: mockTransitionChild,
    Dialog: mockDialog,
    DialogTitle: mockDialogTitle,
    DialogPanel: mockDialogPanel,
    VBtn: mockVBtn,
    Icon: mockIcon
  }
};

describe('VModal', () => {
  beforeEach(() => {
    // create teleport target
    const el = document.createElement('div');
    el.id = 'modal';
    document.body.appendChild(el);
  });

  afterEach(() => {
    // clean up
    document.body.innerHTML = '';
  });

  it('mounts component successfully', () => {
    const wrapper = mount(VModal, {
      global: defaultGlobal
    });

    expect(wrapper).toBeDefined();
    expect(VModal).toBeTruthy();
  });

  it('does not show modal by default', () => {
    const wrapper = mount(VModal, {
      global: defaultGlobal
    });

    const transitionRoot = wrapper.findComponent(mockTransitionRoot);
    expect(transitionRoot.props('show')).toBe(false);
  });

  it('shows modal when modelValue is true', () => {
    const wrapper = mount(VModal, {
      global: defaultGlobal,
      props: {
        modelValue: true
      }
    });

    const transitionRoot = wrapper.findComponent(mockTransitionRoot);
    expect(transitionRoot.props('show')).toBe(true);
  });

  it('emits update:modelValue when closed', async () => {
    const wrapper = mount(VModal, {
      global: defaultGlobal,
      props: {
        modelValue: true
      }
    });

    const dialog = wrapper.findComponent(mockDialog);
    await dialog.vm.$emit('close');

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([false]);
  });

  it('emits close event when closed', async () => {
    const wrapper = mount(VModal, {
      global: defaultGlobal,
      props: {
        modelValue: true
      }
    });

    const dialog = wrapper.findComponent(mockDialog);
    await dialog.vm.$emit('close');

    expect(wrapper.emitted('close')).toBeTruthy();
  });

  it('displays title when provided', () => {
    const title = 'Test Modal Title';
    const wrapper = mount(VModal, {
      global: defaultGlobal,
      props: {
        modelValue: true,
        title
      }
    });

    expect(wrapper.text()).toContain(title);
    expect(wrapper.find('.v-modal-title').text()).toBe(title);
  });

  it('hides header when hideHeader is true', () => {
    const wrapper = mount(VModal, {
      global: defaultGlobal,
      props: {
        modelValue: true,
        hideHeader: true
      }
    });

    expect(wrapper.findComponent(mockDialogTitle).exists()).toBe(false);
  });

  it('hides footer when hideFooter is true', () => {
    const wrapper = mount(VModal, {
      global: defaultGlobal,
      props: {
        modelValue: true,
        hideFooter: true
      }
    });

    expect(wrapper.find('.v-modal-footer').exists()).toBe(false);
  });

  it('shows confirm button when confirm is true', () => {
    const wrapper = mount(VModal, {
      global: defaultGlobal,
      props: {
        modelValue: true,
        confirm: true
      }
    });

    const confirmButton = wrapper.findAllComponents(mockVBtn).find(btn => 
      btn.text() === 'Confirm'
    );
    expect(confirmButton).toBeTruthy();
  });

  it('shows close button by default', () => {
    const wrapper = mount(VModal, {
      global: defaultGlobal,
      props: {
        modelValue: true
      }
    });

    const closeButton = wrapper.findAllComponents(mockVBtn).find(btn => 
      btn.text() === 'Close'
    );
    expect(closeButton).toBeTruthy();
  });

  it('customizes confirm text', () => {
    const confirmText = 'Save Changes';
    const wrapper = mount(VModal, {
      global: defaultGlobal,
      props: {
        modelValue: true,
        confirm: true,
        confirmText
      }
    });

    expect(wrapper.text()).toContain(confirmText);
  });

  it('customizes close text', () => {
    const closeText = 'Cancel';
    const wrapper = mount(VModal, {
      global: defaultGlobal,
      props: {
        modelValue: true,
        closeText
      }
    });

    expect(wrapper.text()).toContain(closeText);
  });

  it('applies confirm button color', () => {
    const wrapper = mount(VModal, {
      global: defaultGlobal,
      props: {
        modelValue: true,
        confirm: true,
        confirmColor: 'danger'
      }
    });

    const confirmButton = wrapper.findAllComponents(mockVBtn).find(btn => 
      btn.text() === 'Confirm'
    );
    expect(confirmButton!.props('color')).toBe('danger');
  });

  it('emits confirm event with payload', async () => {
    const wrapper = mount(VModal, {
      global: defaultGlobal,
      props: {
        modelValue: true,
        confirm: true
      }
    });

    const confirmButton = wrapper.findAllComponents(mockVBtn).find(btn => 
      btn.text() === 'Confirm'
    );
    await confirmButton!.vm.$emit('click');

    expect(wrapper.emitted('confirm')).toBeTruthy();
    const confirmPayload = wrapper.emitted('confirm')![0][0] as any;
    expect(confirmPayload).toHaveProperty('open');
    expect(confirmPayload).toHaveProperty('close');
    expect(typeof confirmPayload.open).toBe('function');
    expect(typeof confirmPayload.close).toBe('function');
  });

  it('closes modal when close button is clicked', async () => {
    const wrapper = mount(VModal, {
      global: defaultGlobal,
      props: {
        modelValue: true
      }
    });

    const closeButton = wrapper.findAllComponents(mockVBtn).find(btn => 
      btn.text() === 'Close'
    );
    await closeButton!.vm.$emit('click');

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([false]);
  });

  it('closes modal when x button is clicked', async () => {
    const wrapper = mount(VModal, {
      global: defaultGlobal,
      props: {
        modelValue: true
      }
    });

    const xButton = wrapper.findAllComponents(mockVBtn).find(btn => 
      btn.props('icon') && btn.props('fab')
    );
    await xButton!.vm.$emit('click');

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([false]);
  });

  it('hides x button when hideXButton is true', () => {
    const wrapper = mount(VModal, {
      global: defaultGlobal,
      props: {
        modelValue: true,
        hideXButton: true
      }
    });

    const xButton = wrapper.findAllComponents(mockVBtn).find(btn => 
      btn.props('icon') && btn.props('fab')
    );
    expect(xButton).toBeFalsy();
  });

  it('applies modal classes correctly', () => {
    const wrapper = mount(VModal, {
      global: defaultGlobal,
      props: {
        modelValue: true,
        centered: true,
        fullscreen: true,
        loading: true,
        persistent: true
      }
    });

    const dialog = wrapper.findComponent(mockDialog);
    const classes = dialog.classes();
    expect(classes).toContain('v-modal--centered');
    expect(classes).toContain('v-modal--fullscreen');
    expect(classes).toContain('v-modal--loading');
    expect(classes).toContain('v-modal--persistent');
  });

  it('applies custom classes correctly', () => {
    const wrapper = mount(VModal, {
      global: defaultGlobal,
      props: {
        modelValue: true,
        headerClass: 'custom-header',
        bodyClass: 'custom-body',
        footerClass: 'custom-footer',
        modalClass: 'custom-modal',
        titleClass: 'custom-title'
      }
    });

    expect(wrapper.find('.v-modal-header').classes()).toContain('custom-header');
    expect(wrapper.find('.v-modal-body').classes()).toContain('custom-body');
    expect(wrapper.find('.v-modal-footer').classes()).toContain('custom-footer');
    expect(wrapper.find('.v-modal-panel').classes()).toContain('custom-modal');
    expect(wrapper.find('.v-modal-title').classes()).toContain('custom-title');
  });

  it('applies panel styles correctly', () => {
    const wrapper = mount(VModal, {
      global: defaultGlobal,
      props: {
        modelValue: true,
        width: '500px',
        maxWidth: '90vw'
      }
    });

    const panel = wrapper.findComponent(mockDialogPanel);
    const style = panel.attributes('style');
    expect(style).toContain('width: 500px');
    expect(style).toContain('max-width: 90vw');
  });

  it('does not close when persistent and dialog close is triggered', async () => {
    const wrapper = mount(VModal, {
      global: defaultGlobal,
      props: {
        modelValue: true,
        persistent: true
      }
    });

    const dialog = wrapper.findComponent(mockDialog);
    await dialog.vm.$emit('close');

    expect(wrapper.emitted('update:modelValue')).toBeFalsy();
  });

  it('disables buttons when loading', () => {
    const wrapper = mount(VModal, {
      global: defaultGlobal,
      props: {
        modelValue: true,
        confirm: true,
        loading: true
      }
    });

    const buttons = wrapper.findAllComponents(mockVBtn);
    buttons.forEach(button => {
      expect(button.props('disabled')).toBe(true);
    });
  });

  it('shows loading state on confirm button', () => {
    const wrapper = mount(VModal, {
      global: defaultGlobal,
      props: {
        modelValue: true,
        confirm: true,
        loading: true
      }
    });

    const confirmButton = wrapper.findAllComponents(mockVBtn).find(btn => 
      btn.text() === 'Confirm'
    );
    expect(confirmButton!.props('loading')).toBe(true);
  });

  it('applies overlay blur when overlayBlur is true', () => {
    const wrapper = mount(VModal, {
      global: defaultGlobal,
      props: {
        modelValue: true,
        overlayBlur: true
      }
    });

    expect(wrapper.find('.v-modal-overlay--blur').exists()).toBe(true);
  });

  it('does not show spacer when fullscreen', () => {
    const wrapper = mount(VModal, {
      global: defaultGlobal,
      props: {
        modelValue: true,
        fullscreen: true
      }
    });

    expect(wrapper.find('.v-modal-spacer').exists()).toBe(false);
  });

  it('shows spacer when not fullscreen', () => {
    const wrapper = mount(VModal, {
      global: defaultGlobal,
      props: {
        modelValue: true,
        fullscreen: false
      }
    });

    expect(wrapper.find('.v-modal-spacer').exists()).toBe(true);
  });

  it('passes confirm props to confirm button', () => {
    const confirmProps = { size: 'lg', variant: 'outlined' };
    const wrapper = mount(VModal, {
      global: defaultGlobal,
      props: {
        modelValue: true,
        confirm: true,
        confirmProps
      }
    });

    const confirmButton = wrapper.findAllComponents(mockVBtn).find(btn => 
      btn.text() === 'Confirm'
    );
    expect(confirmButton!.attributes()).toMatchObject(confirmProps);
  });

  it('passes close props to close button', () => {
    const closeProps = { size: 'sm', variant: 'text' };
    const wrapper = mount(VModal, {
      global: defaultGlobal,
      props: {
        modelValue: true,
        closeProps
      }
    });

    const closeButton = wrapper.findAllComponents(mockVBtn).find(btn => 
      btn.text() === 'Close'
    );
    expect(closeButton!.attributes()).toMatchObject(closeProps);
  });

  it('passes x button props to x button', () => {
    const xButtonProps = { size: 'xs' };
    const wrapper = mount(VModal, {
      global: defaultGlobal,
      props: {
        modelValue: true,
        xButtonProps
      }
    });

    const xButton = wrapper.findAllComponents(mockVBtn).find(btn => 
      btn.props('icon') && btn.props('fab')
    );
    expect(xButton!.attributes()).toMatchObject(xButtonProps);
  });

  it('applies x icon class', () => {
    const xIconClass = 'text-red-500';
    const wrapper = mount(VModal, {
      global: defaultGlobal,
      props: {
        modelValue: true,
        xIconClass
      }
    });

    const xIcon = wrapper.findComponent(mockIcon);
    expect(xIcon.classes()).toContain(xIconClass);
  });

  describe('slots', () => {
    it('renders default slot content', () => {
      const content = 'Modal body content';
      const wrapper = mount(VModal, {
        global: defaultGlobal,
        props: {
          modelValue: true
        },
        slots: {
          default: content
        }
      });

      expect(wrapper.find('.v-modal-body').text()).toBe(content);
    });

    it('renders activator slot', () => {
      const wrapper = mount(VModal, {
        global: defaultGlobal,
        slots: {
          activator: '<button class="activator-btn">Open Modal</button>'
        }
      });

      expect(wrapper.find('.activator-btn').text()).toBe('Open Modal');
    });

    it('renders header slot', () => {
      const headerContent = '<h2 class="custom-header">Custom Header</h2>';
      const wrapper = mount(VModal, {
        global: defaultGlobal,
        props: {
          modelValue: true
        },
        slots: {
          header: headerContent
        }
      });

      expect(wrapper.find('.custom-header').text()).toBe('Custom Header');
    });

    it('renders footer slot', () => {
      const footerContent = '<div class="custom-footer">Custom Footer</div>';
      const wrapper = mount(VModal, {
        global: defaultGlobal,
        props: {
          modelValue: true
        },
        slots: {
          footer: footerContent
        }
      });

      expect(wrapper.find('.custom-footer').text()).toBe('Custom Footer');
    });

    it('renders close slot', () => {
      const closeContent = '<button class="custom-close">×</button>';
      const wrapper = mount(VModal, {
        global: defaultGlobal,
        props: {
          modelValue: true
        },
        slots: {
          close: closeContent
        }
      });

      expect(wrapper.find('.custom-close').text()).toBe('×');
    });

    it('renders closeIcon slot', () => {
      const closeIconContent = '<span class="custom-close-icon">✕</span>';
      const wrapper = mount(VModal, {
        global: defaultGlobal,
        props: {
          modelValue: true
        },
        slots: {
          closeIcon: closeIconContent
        }
      });

      expect(wrapper.find('.custom-close-icon').text()).toBe('✕');
    });

    it('renders overlay slot', () => {
      const overlayContent = '<div class="custom-overlay">Custom Overlay</div>';
      const wrapper = mount(VModal, {
        global: defaultGlobal,
        props: {
          modelValue: true
        },
        slots: {
          overlay: overlayContent
        }
      });

      expect(wrapper.find('.custom-overlay').text()).toBe('Custom Overlay');
    });
  });

  describe('slot props', () => {
    it('provides open function to activator slot', async () => {
      const activatorSlot = vi.fn().mockReturnValue('<button>Open</button>');
      
      mount(VModal, {
        global: defaultGlobal,
        slots: {
          activator: activatorSlot
        }
      });

      expect(activatorSlot).toHaveBeenCalledWith({ open: expect.any(Function) });
    });

    it('provides correct props to close slot', () => {
      const closeSlot = vi.fn().mockReturnValue('<button>Close</button>');
      
      mount(VModal, {
        global: defaultGlobal,
        props: {
          modelValue: true,
          loading: true,
          hideXButton: true,
          xButtonProps: { size: 'sm' }
        },
        slots: {
          close: closeSlot
        }
      });

      expect(closeSlot).toHaveBeenCalledWith({
        isLoading: true,
        props: { size: 'sm' },
        closeModal: expect.any(Function),
        hideXButton: true
      });
    });

    it('provides xIconClass to closeIcon slot', () => {
      const closeIconSlot = vi.fn().mockReturnValue('<span>×</span>');
      
      mount(VModal, {
        global: defaultGlobal,
        props: {
          modelValue: true,
          xIconClass: 'text-red-500'
        },
        slots: {
          closeIcon: closeIconSlot
        }
      });

      expect(closeIconSlot).toHaveBeenCalledWith({ xIconClass: 'text-red-500' });
    });

    it('provides correct props to footer slot', () => {
      const footerSlot = vi.fn().mockReturnValue('<div>Footer</div>');
      
      mount(VModal, {
        global: defaultGlobal,
        props: {
          modelValue: true,
          loading: true,
          confirmProps: { size: 'lg' }
        },
        slots: {
          footer: footerSlot
        }
      });

      expect(footerSlot).toHaveBeenCalledWith({
        loading: true,
        confirmProps: { size: 'lg' },
        onConfirm: expect.any(Function),
        close: expect.any(Function)
      });
    });
  });

  describe('reactivity', () => {
    it('watches modelValue changes', async () => {
      const wrapper = mount(VModal, {
        global: defaultGlobal,
        props: {
          modelValue: false
        }
      });

      let transitionRoot = wrapper.findComponent(mockTransitionRoot);
      expect(transitionRoot.props('show')).toBe(false);

      await wrapper.setProps({ modelValue: true });
      transitionRoot = wrapper.findComponent(mockTransitionRoot);
      expect(transitionRoot.props('show')).toBe(true);
    });

    it('emits open event when modal is opened', async () => {
      const wrapper = mount(VModal, {
        global: defaultGlobal,
        props: {
          modelValue: false
        }
      });

      await wrapper.setProps({ modelValue: true });
      expect(wrapper.emitted('open')).toBeTruthy();
    });
  });
});
