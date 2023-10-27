import { mount } from "@vue/test-utils";
import { Menu, MenuButton, MenuItems, MenuItem } from "./menu";
import { h } from "vue";

describe("Menu", () => {
  test("mount component", () => {
    expect(Menu).toBeTruthy();

    mount(Menu, {
      slots: {
        default: () => [
          h(MenuButton, {}, [
            h('h4', {}, 'Is it accessible?')
          ]),
          h(MenuItems, {}, [
            h(MenuItem, {}, 'Yes. It adheres to the WAI-ARIA design pattern.')
          ])
        ]
      }
    });
  });
});
