
import { createApp } from "./vue.esm-browser.js";
import hedearComponent from "../components/hedearComponent.js";
import footerComponent from "../components/footerComponent.js";
import containerComponent from "../components/containerComponent.js";

const app = createApp({
  components: {
    hedearComponent,
    footerComponent,
    containerComponent,
  },

  template: `
    <hedear-component></hedear-component>

    <container-component></container-component>

    <footer-component></footer-component>
  `,
});

app.mount("#app");
