<template>
	<div class="options">
		<span>
			<slot name="option-name"></slot>
		</span>
		<span><i class="material-icons">keyboard_arrow_down</i></span>
	</div>
</template>

<script>
	export default {
		name: "options-chooser"
	}
</script>

<style scoped>
.options{
	display: inline-block;
	margin: 0 20px 15px 5px;
}
.options :hover{
	cursor: pointer;
}
.options .material-icons {
	position: relative;
	left: 0;
	top: 7px;
}
</style>