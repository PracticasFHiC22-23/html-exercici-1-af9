



const app = Vue.createApp({
    data: function (){
        return {
            mensaje1: "Hello world",
            mensaje2: "Mi primer programa con",
            jsF: "Vue", 
            url: "https://vuejs.org"
        };
    },
    methods:{
        mostrarUrl(){
            return this.url;
    }
    }
});

app.mount("#app");