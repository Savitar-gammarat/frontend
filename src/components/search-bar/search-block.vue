<template>
	<div>
		<md-autocomplete
				v-model="search_message"
				:md-options="search_message_list"
				:md-open-on-focus="false"
				md-layout="box"
				@md-selected="search"
				@keyup.enter.native="noMessage"
				md-dense>
			<label>Search Headlines...</label>
		</md-autocomplete>
		<md-dialog-alert
				:md-active.sync="first"
				md-content="我们没有搜索到您要的信息"
				md-confirm-text="抱歉!" />
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: "search-block",
		data(){
			return{
				first:false,
				search_message:null,
				search_message_list: []
			}
		},
		methods:{
			search(value){
				let searching = value.split(':')
				axios.post('search',{
					search_message : searching[1]
				}).then(response=>{
					let search_item = response.data.search_item
					// 0 success
					if (search_item.status === 0){
						window.location.href = search_item.url
						// window.open(search_item.url)
					}
					else {
						this.first = true
					}
				})
			},
			get_search_message_list(){
				axios.get('search').then(response=>{
					this.search_message_list = response.data.search_message_list
				})
			},
			noMessage(){
				this.first = true
			}
		},
		mounted() {
			this.get_search_message_list()
		}
	}
</script>

<style scoped>

</style>