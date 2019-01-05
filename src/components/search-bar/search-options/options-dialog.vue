<template>
	<md-card class="options-card">
		<div class="options-dialog">
			<slot></slot>
		</div>
	</md-card>
</template>

<script>
	export default {
		name: "options-dialog"
	}
</script>

<style scoped>
.options-card{
	max-width: 450px;
	position: absolute;
	top: 270px;
	
}
.options-dialog{
	padding: 10px;
}
</style>