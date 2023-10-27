import { mount } from "@vue/test-utils";
import { Alert } from "./alert";

describe("Alert", () => {
  test("mount component", () => {
    expect(Alert).toBeTruthy();

    mount(Alert, {
      props: {},
    });
  });
});
