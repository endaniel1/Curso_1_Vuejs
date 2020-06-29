let DirectiveIf = {
	template:
	`
	<div>
		<h1 v-text="title"></h1>
		<p v-if="mostrar" v-html="message"></p>
		<h1>Uso de v-if / v-else</h1>
		<p v-if="user.permission">El Usuario Tiene Permiso Para Ver Esto</p>
		<p v-else>El Usuario No Tiene Permiso</p>
		<h1>Uso de v-if / v-else-if / v-else</h1>
		<p v-if="user.permission && user.vip">El Usuario Tiene Permiso Para Ver Esto</p>
		<p v-else-if="user.permission">El Usuario Tiene Permiso</p>
		<p v-else-if="user.vip">El Usuario es Vip</p>
		<p v-else>El Usuario No Tiene Permiso ni es VIP</p>
	</div>
	`,
	data(){
		return{
			title:"Directivas v-if",
			message:"<b>Hola desde directives v-if</b>",
			mostrar:true,
			user:{
				permission:false,
				vip:false
			}			
		}
	}
}