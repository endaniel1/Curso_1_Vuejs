let DirectiveModel = {
	template:
	`
	<div>
		<h1 v-text="title"></h1>
		<p v-html="message"></p>
		<input type="text" v-model="dataInputText"/>

		<h2>Tipo de Checkbox</h2>
		<label>
			<input type="checkbox" v-model="checked"/>
			Activado
		</label>
		<h2>Peliculas</h2>
		<label v-for="(movie, key) in movies" :key="key">
			<input type="checkbox" :value="movie" v-model="favoritesMovies" />
			{{movie}} 
		</label>
		<div v-show="favoritesMovies.length > 0">
			<h2>Peliculas Favoritas</h2>
			<ul>
				<li v-for="(pelicula, key) in favoritesMovies" :key="key" v-text="pelicula"></li>
			</ul>
		</div>
	</div>
	`,
	data(){
		return{
			title:"Directivas v-model",
			message:"<b>Hola desde directives v-model</b>",
			dataInputText:"Data del Input",
			checked:false,
			favoritesMovies:[],
			movies:["Buscando a Nemo","Titanic","Toy Story"]					
		}
	}
}