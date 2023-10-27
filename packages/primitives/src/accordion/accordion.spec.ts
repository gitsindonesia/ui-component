import { mount } from "@vue/test-utils";
import { Accordion, AccordionButton, AccordionContent, AccordionItem } from "./accordion";
import { h } from "vue";

describe("Accordion", () => {
  test("mount component", () => {
    expect(Accordion).toBeTruthy();

    mount(Accordion, {
      slots: {
        default: () => [
          h(AccordionItem, {
            value: 'item-1'
          }, [
            h(
              AccordionButton,
              {},
              [
                h('h4', {}, 'Is it accessible?')
              ]
            ),
            h(AccordionContent, {}, 'Yes. It adheres to the WAI-ARIA design pattern.')
          ])
        ],
      }
    });
  });
});
