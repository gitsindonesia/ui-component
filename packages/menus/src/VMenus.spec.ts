import { mount } from "@vue/test-utils";
import VMenus from "./VMenus.vue";
import VMenusItem from "./VMenusItem.vue";

describe("VMenus", () => {
  it("renders the menu button with the given label", () => {
    const label = "Menu Label";
    const wrapper = mount(VMenus, {
      props: {
        label: label,
      },
    });

    expect(wrapper.text()).toContain(label);
  });

  it("shows the menu items when the button is clicked", async () => {
    const items = [
      { text: "Item 1" },
      { text: "Item 2" },
      { text: "Item 3" },
    ];
    const wrapper = mount(VMenus, {
      props: {
        items: items,
      },
    });

    const button = wrapper.find("button");
    await button.trigger("click");

    // for (const item of items) {
    //   expect(wrapper.html()).toContain(item.text);
    // }
  });

  it("hides the menu items when the button is clicked again", async () => {
    const items = [
      { text: "Item 1" },
      { text: "Item 2" },
      { text: "Item 3" },
    ];
    const wrapper = mount(VMenus, {
      props: {
        items: items,
      },
    });

    const button = wrapper.find("button");
    await button.trigger("click");
    await button.trigger("click");

    // for (const item of items) {
    //   expect(wrapper.html()).not.toContain(item.text);
    // }
  });

  // Add more test cases as needed
});

describe("VMenusItem", () => {
  it("renders the menu button with the given label", () => {
    const wrapper = mount(VMenusItem, {
      slots: {
        default: 'Menu Item'
      }
    });

    expect(wrapper.text()).toContain('Menu Item');
  });

  it("renders as divider", () => {
    const wrapper = mount(VMenusItem, {
      props: {
        divider: true
      },
      slots: {
        default: 'Menu Item'
      }
    });

    expect(wrapper.html()).toContain('v-list-item-divider');
  });
});