//MISMA FUNCIONALIDAD USANDO VUE
/* Aproximación declarativa: especificamos el resultado final y los datos y
   dejamos a vue que lo resuelva (que vea qué hay que crear en el DOM, modificar en el DOM, etc.)

   Creamos una app vue que tome el control, donde configuramos los datos a usar, 
   la app esta compuesta de key-value pairs ("data" es la key y su value la funcion, 
   "methods" es la key y lo de dentro es el value, ...) donde se gestionan los datos y la logica, 
   y se conecta con el html a traves de directivas v-*
*/


const miapp = Vue.createApp({
  //data: function (){}
  //una propiedad llamada data que tiene una funcion como valor
  data() {
    return {
      tasks: [],
      taskText: "", // conectaremos este valor con un elemento del html
      // con una directiva v-
      msg: "",
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
miapp.mount("#app");

