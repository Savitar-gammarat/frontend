<template>
	<div>
		<search-block></search-block>
		<search-options ref="search"></search-options>
	</div>
</template>

<script>
	import SearchBlock from "@/components/search-bar/search-block";
	import SearchOptions from "@/components/search-bar/search-options";
	export default {
		name: "search-bar",
		components: {SearchOptions, SearchBlock}
	}
</script>

<style scoped>

</style>