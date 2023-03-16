import { inject } from "../js/vue.esm-browser.js";
import gatoItem from "./gatoItem.js";

export default {
  components: {
    gatoItem,
  },

  setup() {
    const sharedState = inject("sharedState");

    return {
      gatoList: sharedState.gatoList,
    };
  },

  template: `
      <div class="col-md-10 m-0 p-0 change-height-context h-100">
        <div class="d-flex flex-column justify-content-center" style="width: 87%; margin-left: 20px;">
          <div class="mt-3 mb-3 fw-bold fs-1 text-center">
            Gracias por presentarnos a tu gatos!
          </div>

          <div class="mt-4 mb-4 fw-bold fs-4 text-center">
            Lista de gatos registradis
          </div>

          <div class="mt-4 mb-4 table table-bordered d-flex justify-content-center">
            <table class="border" style="width: 300px;">
              <tbody class="border">
                <tr>
                  <th width="60%" align="left">Nombre</th>
                  <th width="40%" align="left">Edat</th>
                </tr>
                <gato-item v-for="gato in gatoList" :gato="gato" ></gato-item>
              </tbody>
            </table>
          </div>

          <div class="text-center">
            <a href="#/home">Volver al inicio</a>
          </div>

          <div style="height: 50px;"></div>

        </div>
      </div>`,
};
