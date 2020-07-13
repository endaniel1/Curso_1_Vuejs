var vm = new Vue({

  el: "#app",
  data(){
  	return{
  		saludo:"Ciclo de Vida de Vue"
  	}
  },
  //metodos o funciones q se ejecutan antes de hacer algun tipo de accion en nuestro DOM
      beforeCreate() {//ANTES DE CREAR LA INSTANCIA
          console.log('beforeCreate');//MENSAJE Q SE HIZO LA ACCION
      },
      created() {//DESPUES DE CREAR LA INSTANCIA
        console.log('created');//MENSAJE Q SE HIZO LA ACCION
        console.log(this.saludo);
      },
      beforeMount() {//ANTES DE TENER CARGADO ALGO EN EL DOM
        console.log('beforeMount');//MENSAJE Q SE HIZO LA ACCION
      	console.log("despues de montar ", this.saludo);
      },
      mounted() {//DESPUES DE TENER CARGADO ALGO
        console.log('mounted');//MENSAJE Q SE HIZO LA ACCION
      },
      beforeUpdate() {//ANTES DE ACTUALIZAR O CAMBIARALG
        console.log('beforeUpdate');//MENSAJE Q SE HIZO LA ACCION
      },
      updated() {//DESPUES DE CAMBIAR ALGO
        console.log('updated');//MENSAJE Q SE HIZO LA ACCION  
      },
      beforeDestroy() {//ANTES DE ELEIMINAR NUETRA INSTANCIA  DESTRUIRLA
          console.log('beforeDestroy');//MENSAJE Q SE HIZO LA ACCION
      },
      destroyed() {//DESPUES DE DESTRUIRLA
        console.log('destroyed');//MENSAJE Q SE HIZO LA ACCION
      },
      methods:{
      	destruir(){
      		this.$destroy();
      	}
      }

})	