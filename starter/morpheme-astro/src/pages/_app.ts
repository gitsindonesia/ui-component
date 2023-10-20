import type { App } from 'vue';
import MorphemeUI from "@morpheme/ui";

export default (app: App) => {
  app.use(MorphemeUI);
};