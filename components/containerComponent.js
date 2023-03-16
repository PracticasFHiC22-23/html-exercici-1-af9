import { ref, provide, reactive } from "../js/vue.esm-browser.js";

import navComponent from "../components/navComponent.js";
import homeComponent from "../components/homeComponent.js";
import siamesComponent from "../components/siamesComponent.js";
import persaComponent from "../components/persaComponent.js";
import formComponent from "../components/formComponent.js";
import resultComponent from "../components/resultComponent.js";

const routes = {
  "/": homeComponent,
  "/home": homeComponent,
  "/siames": siamesComponent,
  "/persa": persaComponent,
  "/form": formComponent,
  "/result": resultComponent,
};

export default {
  components: {
    navComponent,
    homeComponent,
    siamesComponent,
    formComponent,
    resultComponent,
  },

  data() {

    const sharedState = reactive({
      gatoList: [{ name: "name1", age: 2 }],
    });

    provide("sharedState", sharedState);

    return {
      currentPath: window.location.hash
    }
  },

  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || "/"] || NotFound;
    },
  },

  mounted() {
    window.addEventListener('hashchange', () => {
		  this.currentPath = window.location.hash
		});
  },

  template: `
  <div class="container-fluid p-0 width-context">

    <div class="row g-0 w-100 h-100">

      <nav-component></nav-component>

      <component :is="currentView " />

    </div>
  </div>
  `,
};
