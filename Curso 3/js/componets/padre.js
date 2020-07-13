Vue.component("padre",{
	template:`
		<div class="p-5 bg-dark text-white">			
			<h2>Componente padre: {{numeroPadre}} </h2>
			Aumentar numero padre <button @click="numeroPadre++" class="btn btn-warning">+</button>
			<hijo :numero="numeroPadre"></hijo>
		</div>
	`,
	data(){
		return{
			numeroPadre:0
		}
	}
});