Vue.component("saludo",{
	template:`
		<div>			
			<h3>{{saludo}}</h3>
			<h3>rere</h3>
		</div>
	`,
	data(){
		return{
			saludo:"Hola desde Vuejs"
		}
	}
});