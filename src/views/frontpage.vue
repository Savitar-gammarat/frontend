<template>
	<div class="md-layout">
		<div class="md-layout-item md-size-15"></div>
		<div class="md-layout-item md-size-70">
			<navigation></navigation>
			<search-bar></search-bar>
			<publisher-block></publisher-block>
			<bottom-bar></bottom-bar>
		</div>
		<div class="md-layout-item md-size-15"></div>
	</div>
</template>

<script>
	import Navigation from "@/components/navigation";
	import SearchBar from "@/components/search-bar";
	import PublisherBlock from "@/components/publisher-block";
	import BottomBar from "@/components/common/bottom-bar";
	export default {
		name: "frontpage",
		components: {BottomBar, PublisherBlock, SearchBar, Navigation},
	}
</script>

<style scoped>

</style>