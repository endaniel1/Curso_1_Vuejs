let DirectiveFor = {
	template:
	`
	<div>
		<h1 v-text="title"></h1>
		<p v-html="message"></p>
		<h3>Lista de un Array</h3>
		<ul>
			<li v-for="(list,index) of lists" :key="index" v-text="list"></li>
		</ul>
		<h3>Lista de un Objeto</h3>
		<ul>
			<li v-for="(item, key, index) of object_list" :key="index">
				{{ key }} : {{ item }}
			</li>
		</ul>
		<h3>Lista de un Array con Objeto</h3>
		<ul>
			<li v-for="(item, index) of other_list" :key="index">
				Nombre : {{ item.name }} <br/>
				Apellido : {{ item.last_name }} <br/>
				Alias : {{ item.alias }} <br/>
			</li>
		</ul>
	</div>
	`,
	data(){
		return{
			title:"Directivas v-for",
			message:"<b>Hola desde directives v-for</b>",
			lists:["Rojo","Amarillo","Purpura","Azul","Rosa"],
			object_list:{
				name:"Enrique",
				last_name:"Rodriguez",
				alias:"endaniel1",
			},
			other_list:[
				{
					name:"Enrique",
					last_name:"Rodriguez",
					alias:"endaniel1",
				},
				{
					name:"Jorge",
					last_name:"Martines",
					alias:"jmar",
				},
				{
					name:"Ismael",
					last_name:"Carranca",
					alias:"ismaca",
				}

			]

		}
	}
}