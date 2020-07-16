Vue.component("hijo2",{
	template:`
		<div class="py-5">
			<button @click="aumentar">+</button>
			<button @click="disminuir(2)">-</button>
			<button @click="obtenerCursos">Obtener Cursos</button>
			
			<ul v-for="curso of cursos">
				<li>{{curso.nombre}}</li>
			</ul>
		</div>
	`,
	data(){
		return{
			
		}
	},
	props:[
		
	],
	computed:{
		...Vuex.mapState(["numero","cursos"])
	},
	methods:{
		...Vuex.mapMutations(["aumentar","disminuir"]),
		...Vuex.mapActions(["obtenerCursos"])
	}
});