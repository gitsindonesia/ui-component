import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import GitsUi from "@morpheme/ui";
import "./assets/index.css";
import "@morpheme/ui/styles.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(GitsUi);

app.mount("#app");
