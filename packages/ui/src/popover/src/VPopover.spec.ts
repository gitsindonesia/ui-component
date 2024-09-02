import { mount } from "@vue/test-utils";

import VPopover from "./VPopover.vue";

describe("VPopover", () => {
  test("mount component", () => {
    expect(VPopover).toBeTruthy();

    mount(VPopover, {
      props: {},
    });
  });
});
