var vm = new Vue({

  el: "#app",
  data(){
  	return{
  		message:"Hola mundo",
  		contador:0
  	}
  },
  computed:{
  	invertidoMessage(){
  		return this.message.split("").reverse().join("");
  	},
  	color(){
  		return{
  			"bg-primary": this.contador <= 10,
  			"bg-success": this.contador > 10 && this.contador <= 20,  			
  			"bg-warning": this.contador > 20 && this.contador <= 30, 			
  			"bg-danger": this.contador > 30,
  		}
  	}
  }

})