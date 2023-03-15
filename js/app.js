// Vue.component("hedearComponent", { hedearComponent });

import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import hedearComponent from "../components/hedearComponent.js";
import footerComponent from "../components/footerComponent.js";
import navComponent from "../components/navComponent.js";
import homeComponent from "../components/homeComponent.js";
import siamesComponent from "../components/siamesComponent.js";
import persaComponent from "../components/persaComponent.js";
import formComponent from "../components/formComponent.js";
import resultComponent from "../components/resultComponent.js";

const routes = {
  "/": homeComponent,
  "/siames": siamesComponent,
  "/persa": persaComponent,
  "/form": formComponent,
  "/result": resultComponent,
};

const app = createApp({
  components: {
    hedearComponent,
    footerComponent,
    navComponent,
    homeComponent,
    siamesComponent,
    formComponent,
    resultComponent,
  },

  data() {
    return {
      tasks: [],
      taskText: "",
      msg: "",
      message: "Gatalia: la web de los gatos",
      currentPath: window.location.hash,
    };
  },

  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || "/"] || NotFound;
    },
  },

  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
    });
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
