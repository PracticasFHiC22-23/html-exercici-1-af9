export default {
  data() {
    return {
      btnMessage: "Sobre tu gato",
      listName: "Razas",
    };
  },
  template: `
            <div class="col-md-2 g-0 m-0 p-0 bg-secondary-subtle change-height-nav" style="min-height: 150px;">

                <div
                    class="row row-cols-xs-2 row-cols-sm-2 row-cols-md-1 m-0 w-100 h-100 d-flex  justify-content-between">

                    <div class="col mt-4 ms-xxl-5 ms-xl-5 ms-sm-4 ms-md-4  w-25">
                        <div class="mt-2">
                            <div class="fs-4 fw-bold mb-2">
                                Razas
                            </div>
                            <div class="mt-2" style="height: 60px;">
                                <ul style="padding-inline-start: 15px;">
                                    <li><a href="./siames.html"> Siames</a></li>
                                    <li><a href="./persa.html"> Persa</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col mb-5  mt-auto mb-5 mb-md-4 ms-xxl-5 ms-xl-4">
                        <a href="#/result">
                            <button type="button" class="btn btn-warning  btn-lg  fs-5">
                                Sobre tu gato
                            </button>
                        </a>
                    </div>

                </div>
                `,
};
