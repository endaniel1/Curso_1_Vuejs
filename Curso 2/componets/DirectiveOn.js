let DirectiveOn =  {
	template:
	`
	<div style="background: red;">
		<h1 v-text="title"></h1>
		<p v-html="message"></p>

		<p v-text="pelicula"></p>
		<button @click.stop="comprarEntrada">Comprar Entrada</button> Disponibles <span v-text="entradas"></span>
		<input type="text" @keydown="decirHola"/>
		<div>
			<h1>Modificando Vista y Modelo</h1>
			<input type="text" :value="textinput" @keyup="updateDataInputText" />
		</div>
	</div>
	`,
	data(){
		return{
			title:"Directivas v-on",
			message:"<b>Hola desde directives v-on</b>",	
			welcome_text:"Bienvenido desde la data",
			entradas:5,
			pelicula:"Malefica 2",
			textinput:"Valor Por Defecto del Input Text",	
		}
	},
	methods:{
		decirHola(){
			alert(this.welcome_text);
		},
		comprarEntrada(){			
			if(this.entradas > 0){
				this.entradas--;
				return alert("Entrada Para "+this.pelicula+" Comprada");
			}
			return alert("Ya No Ay Entradas De "+this.pelicula)
		},
		updateDataInputText(event){
			this.textinput=event.target.value
		}
	}
}