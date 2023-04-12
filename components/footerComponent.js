export default {
  data() {
    return { message: "Copyright FHiC 2023" };
  },
  template: `
  <footer class="w-100 bg-warning position-relative" style="height: 10vh;">
    <div class="position-absolute top-0 end-0 text-white fs-5 p-3"><i>{{ message }}</i></div>
  </footer>`,
};
