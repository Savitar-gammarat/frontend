<template>
	<div class="md-layout">
		<div class="md-layout-item md-large-size-33 md-xlarge-size-33 md-medium-size-33 md-small-size-50 md-xsmall-size-100 publisher-block"
			v-for="item in publishList" :key="item.id">
			<publisher-card :item="item"></publisher-card>
		</div>
		<div v-if="!Load" class="loading">
			<div style="margin: auto">
				<md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
			</div>
		</div>
	</div>
</template>

<script>
	import PublisherCard from "@/components/publisher-block/publisher-card";
	import axios from 'axios'
	export default {
		name: "publisher-block",
		components: {PublisherCard},
		data() {
			return{
				publishList:[],
				Load:false
			}
		},
		methods:{
			publish(){
				axios.get("/news").then(response=>{
					this.publishList = response.data.publishList
					this.$global.setGlobalPublishList(this.publishList)
					this.Load = true
				})
			}
		},
		mounted:function () {
			this.publish()
		}
	}
</script>

<style scoped>
.publisher-block{
	position: relative;
	overflow: hidden;
	height: 400px;
	padding: 8px;
}
.loading{
	width: 100%;
	height: 300px;
	display: flex;
}
</style>