import { createApp } from "vue";
import "./style.css";
import router from "./router";
import { createHead } from "@unhead/vue/client";
import App from "./App.vue";

const app = createApp(App);
const head = createHead();

app.use(head);
app.use(router);
app.mount("#app");
