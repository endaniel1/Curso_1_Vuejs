var vm = new Vue({

  el: "#app",
  data(){
  	return {
  		titulo:"Hola Mundo con Vue",
  		frutas:[
  			{nombre:"Pera",cantidad:10},
  			{nombre:"Manzana",cantidad:0},
  			{nombre:"Platano",cantidad:12}
  		],
  		nuevaFruta:"",
  		totalFruta:0

  	}
  },
  methods:{
  	agregarFruta(){
  		this.frutas.push({
  			nombre:this.nuevaFruta,
  			cantidad:0
  		});
  		this.nuevaFruta=""
  	}
  },
  computed:{
  	sumarFruta(){
  		this.totalFruta=0;
  		for (fruta of this.frutas) {
  			this.totalFruta=this.totalFruta + fruta.cantidad;
  		}
  		return this.totalFruta;
  	}
  }

})	