import { mount } from "@vue/test-utils";
import CollapseTransition from "./CollapseTransition.vue";

describe("CollapseTransition", () => {
  test("mount component", () => {
    expect(CollapseTransition).toBeTruthy();

    mount(CollapseTransition, {
      props: {},
    });
  });
});
