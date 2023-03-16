export default {
  data() {
    return { message: "Gatalia: la web de los gatos" };
  },
  template: `
        <header
          class="w-100 bg-warning d-flex flex-row align-items-center justify-content-center"
          style="height: 10vh; min-height: 75px"
        >
                    <div class="text-white fs-1 fw-bold">
                        {{ message }}
                    </div>
                </header>
        `,
};
