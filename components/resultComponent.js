export default {
  data() {
    return {};
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
                <tr class="table-secondary">
                  <td>Gato</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Tomillo</td>
                  <td>3</td>
                </tr>
                <tr class="table-secondary">
                  <td>Mishi</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>Dobby</td>
                  <td>5</td>
                </tr>
                <tr class="table-secondary">
                  <td>Test</td>
                  <td>6</td>
                </tr>
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
