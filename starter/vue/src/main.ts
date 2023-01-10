import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import GitsUi from "@gits-id/ui";
import "./assets/index.css";
import "@gits-id/ui/styles.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(GitsUi);

app.mount("#app");
