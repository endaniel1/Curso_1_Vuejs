let DirectiveSlot = {
	template:
	`
	<div>
		<h1 v-text="title"></h1>
		<p v-html="message"></p>
		<button-comp>
			<template #action>
				Cerrar
			</template>
			<template #element>
				Modal
			</template>
		</button-comp>
	</div>
	`,
	data(){
		return{
			title:"Directivas v-slot",
			message:"<b>Hola desde directives v-slot</b>",						
		}
	},
	components : {
		buttonComp
	}
}