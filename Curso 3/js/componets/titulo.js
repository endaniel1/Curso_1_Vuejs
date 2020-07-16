Vue.component("titulo",{
	template:`
		<div class="py-5">			
			<h1>numero: {{$store.state.numero}}</h1>
			<hijo2></hijo2>
		</div>
	`,
	data(){
		return{
			
		}
	},
	props:[
		
	],
	computed:{
		...Vuex.mapState(["numero"])
	}
});