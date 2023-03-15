// Vue.component("hedearComponent", { hedearComponent });

import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import hedearComponent from "../components/hedearComponent.js";
import footerComponent from "../components/footerComponent.js";

const app = createApp({
  components: {
    hedearComponent,
    footerComponent,
  },

  data() {
    return {
      tasks: [],
      taskText: "",
      msg: "",
      message: "Gatalia: la web de los gatos",
    };
  },

  //funciones que se pueden llamar desde el html
  methods: {
    addTask() {
      console.log(this.taskText);
      this.tasks.push(this.taskText);
      this.taskText = "";
    },
  },
});

app.mount("#app");
