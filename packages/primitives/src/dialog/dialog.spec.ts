import { mount } from "@vue/test-utils";
import { Dialog, DialogContent, DialogDescription, DialogOverlay, DialogPanel, DialogTitle } from "./dialog";
import { h } from "vue";

describe("Dialog", () => {
  test("mount component", () => {
    expect(Dialog).toBeTruthy();

    mount(Dialog, {
      slots: {
        default: () => [
          h(DialogOverlay, {}, [
          ]),
          h(DialogPanel, {}, [
            h(DialogTitle, {}, 'Dialog Title'),
            h(DialogDescription, {}, 'Description'),
            h(DialogContent, {}, 'Content')
          ])
        ]
      }
    });
  });
});
