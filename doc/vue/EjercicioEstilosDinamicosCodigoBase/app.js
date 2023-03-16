
const miapp = Vue.createApp({
  data () {
    return{
      contador: 0,
      texto:'texto inicial',
      numero: 0
    };
  },
  //no se pide en el ejercicio
  // watch: { //cuando cambia la data el watcher numero se ejecuta
  //   numero(nuevoValor, valorAnterior){
  //     console.log("El numero ha pasado de ser %s a %s", valorAnterior, nuevoValor);
  //   }
  // },
  //funciones que se pueden llamar desde el html
  methods: {
    suma(incremento){
       console.log("Ejecutando suma()...");
       this.contador+=incremento;
    },
    reset(){
      console.log("Ejecutando reset()...");
      this.contador=0;
    },
    setTexto(event){ //event se pasa automáticamente sp que se genera un evento
      console.log("Ejecutando setTexto()...");
      this.texto = event.target.value; //r-value es vanilla JS
    }
     
  },
  computed:{
    colorTexto: function (){
      return (this.contador < 0) ? 'red':'blue'
    }
  }
});

miapp.mount('#app');


