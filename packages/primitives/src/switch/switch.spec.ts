import { mount } from "@vue/test-utils";
import { Switch } from "./switch";

describe("Switch", () => {
  test("mount component", () => {
    expect(Switch).toBeTruthy();

    mount(Switch, {
      props: {},
    });
  });
});
