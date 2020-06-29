let DirectiveShow = {
	template:
	`
	<div>
		<h1 v-text="title"></h1>
		<p v-show="mostrar" v-html="message"></p>
		<p v-show="user.permission">El Usuario Tiene Permiso Para Ver Esto</p>
		<p v-show="!user.permission">El Usuario No Tiene Permiso</p>
	</div>
	`,
	data(){
		return{
			title:"Directivas v-show",
			message:"<b>Hola desde directives v-show</b>",
			mostrar:true,
			user:{
				permission:false,
			}			
		}
	}
}