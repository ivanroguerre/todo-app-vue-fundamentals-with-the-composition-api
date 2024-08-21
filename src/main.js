import "./assets/main.css";

import { createApp } from "vue";
import PrimeVue from "primevue/config";
import CustomAura from "@/presets/custom-aura";
import App from "./App.vue";

const app = createApp(App);
app.use(PrimeVue, { unstyled: true, pt: CustomAura });
app.mount("#app");
