import { mount } from "@vue/test-utils";
import { Collapsible, CollapsibleButton, CollapsibleContent } from "./collapsible";
import { h } from "vue";

describe("Collapsible", () => {
  test("mount component", () => {
    expect(Collapsible).toBeTruthy();

    mount(Collapsible, {
      slots: {
        default: () => [
          h(CollapsibleButton, {}, [
            h('h4', {}, 'Is it accessible?')
          ]),
          h(CollapsibleContent, {}, 'Yes. It adheres to the WAI-ARIA design pattern.')
        ]
      }
    });
  });
});
