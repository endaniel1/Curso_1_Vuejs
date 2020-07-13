var vm = new Vue({

  el: "#app",
  data(){
  	return{
  		title:"GYM",
  		tareas:[],
  		nuevaTarea:"",
  	}
  },
  methods:{
  	agregarTarea(){
  		this.tareas.push({
  			nombre:this.nuevaTarea,
  			estado:false
  		});
  		this.nuevaTarea="";
  		this.cargalocalStorage()
  	},
  	editarTarea(index){
  		
  		this.tareas[index].estado=true

  		this.cargalocalStorage()
  	},
  	eliminarTarea(index){

  		this.tareas.splice(index,1)

  		this.cargalocalStorage()
  	},
  	cargalocalStorage(){
  		localStorage.setItem('gym-vue', JSON.stringify(this.tareas))
  	}
  },
  created(){

  	let datosDB = JSON.parse(localStorage.getItem('gym-vue'));

  	if (datosDB === null) {
  		this.tareas=[];
  	}else{
  		this.tareas=datosDB;
  	}
  }

})