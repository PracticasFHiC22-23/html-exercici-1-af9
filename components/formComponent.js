import {
  provide,
  reactive,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

export default {
  setup() {
    const sharedState = reactive({
      message: "message",
    });

    provide("sharedState", sharedState);

    return {
      message: sharedState.message,
    };
  },

  methods: {
    guardar() {},
  },

  template: `
      <div class="col-md-10 m-0 p-0 change-height-context h-100">
        <div class="d-flex flex-column justify-content-center align-items-center"
          style="width: 87%; margin-left: 20px;">

          <div class="mt-3 mb-3 fw-bold fs-1 text-center">
            Introduce los datos de tu gato
          </div>

          <div class=" border border-secondary-subtle rounded bg-secondary-subtle p-3" style="width: 400px;">
            <form action="#/result">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Nombre: </label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  placeholder="Mishi">
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Edad: </label>
                <input type="password" class="form-control mb-5
                " id="exampleInputPassword1" placeholder="3">
              </div>
              <div class="d-grid gap-2">
                <button type="submit" class="btn btn-success" @click="guardar()">Guardar</button>
              </div>
            </form>
          </div>

          <div style="height: 50px;"></div>
        </div>
      </div>`,
};
