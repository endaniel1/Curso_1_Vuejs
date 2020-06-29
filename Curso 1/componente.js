//para crear un componente se utiliza la clase componet, luego sele pasa el nombre del cmponente y una funcion
Vue.component("componente_mi",{
	template://template es la plantilla
	`
	<div>
		<h3>{{numero}}</h3>
		<button type="button" @click="numero++" class="btn btn-primary">+</button>
	</div>
	`,data(){//data son lo datos q va a manejar siempre retorna algo
		return{
           	numero:0
       	}
	}
});