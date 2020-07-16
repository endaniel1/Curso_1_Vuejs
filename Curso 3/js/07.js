const store = new Vuex.Store({
	state:{
		numero:10,
		cursos:[]
	},
	mutations:{
		aumentar(state){
			state.numero++
		},
		disminuir(state,n){
			state.numero -= n
		},
		llenarCursos(state,cursosAction){
			state.cursos = cursosAction
		}
	},
	actions:{
		obtenerCursos: async function({commit}){
			const data= await fetch("cursos.json");
			const cursos = await data.json();
			commit("llenarCursos",cursos)
		}
	}
});

var vm = new Vue({

  el: "#app",
  data(){
  	return{
  		saludo:"Hola desde Vuejs aprendiendo Vuex"
  	}
  },
  store:store

})