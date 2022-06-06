import { resolve } from "path";
import { fileURLToPath } from "url";
import { defineNuxtModule, addPlugin } from "@nuxt/kit";

export interface ModuleOptions {
  //
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "gits-ui",
    configKey: "gitsUi",
  },
  setup(options, nuxt) {
    const runtimeDir = fileURLToPath(new URL("./runtime", import.meta.url));
    nuxt.options.build.transpile.push(runtimeDir);
    addPlugin(resolve(runtimeDir, "plugin"));
  },
});
