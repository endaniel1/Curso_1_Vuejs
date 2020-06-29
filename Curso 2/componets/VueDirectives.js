Vue.component("vue-directives",{
	template:
	`
	<div>
		<h1 v-text="title"></h1>
		<p v-text="text"></p>
		<a :href="link.href" :title="link.title" v-text="link.text"></a>
		<!--
			h3>Otra forma con v-bind</h3>
			<a v-bind:href="link.href" v-bind:title="link.title" v-text="link.text"></a>
		-->
		<DirectiveHtml/>
		<DirectiveShow/>
		<DirectiveIf/>		
		<DirectiveFor/>
		<DirectiveOn/>
		<DirectiveModel/>
		<DirectiveSlot/>		
		<DirectiveOnce/>
	</div>
	`,
	data(){
		return{
			title:"Directivas De Vue.js",
			text:"Texto de Prueba v-text",
			link:{
				text:"javascript Home",
				href:"https://www.javascript.com",
				title:"Documentacion de Javascript"
			}
		}
	},
	components:{
		DirectiveHtml,
		DirectiveShow,
		DirectiveIf,
		DirectiveFor,
		DirectiveOn,
		DirectiveModel,
		DirectiveSlot,
		DirectiveOnce
	}
})