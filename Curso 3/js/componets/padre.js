Vue.component("padre",{
	template:`
		<div class="p-5 bg-dark text-white">			
			<h2>Componente padre: {{numeroPadre}} </h2>
			Aumentar numero padre <button @click="numeroPadre++" class="btn btn-warning">+</button>
			{{nombre_padre}}
			<hijo :numero="numeroPadre" @nombre_hijo="nombre_padre = $event"></hijo>
		</div>
	`,
	data(){
		return{
			numeroPadre:0,
			nombre_padre:""
		}
	}
});