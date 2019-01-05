<template>
	<div>
		<div>
			<options-chooser @click.native="changeStatus(1)">
				<template slot="option-name">All Sites</template>
			</options-chooser>
			<options-dialog v-if="status1">
				<template>All Sites</template>
			</options-dialog>
			<options-chooser @click.native="changeStatus(2)">
				<template slot="option-name">Any Time</template>
			</options-chooser>
			<options-dialog v-if="status2">
				<template>Any Time</template>
			</options-dialog>
		</div>
		<!--<div class="options-chips">-->
			<!--<md-chip class="md-primary" @click="deleteChips(index)" v-for="(chip, index) in projects" :key="chip" md-deletable>{{ chip }}</md-chip>-->
		<!--</div>-->
	</div>
</template>

<script>
	import OptionsChooser from "@/components/search-bar/search-options/options-chooser";
	import OptionsDialog from "@/components/search-bar/search-options/options-dialog";
	export default {
		name: "search-options",
		components: {OptionsDialog, OptionsChooser},
		currentProject: 'Vue Material',
		data(){
			return{
				projects: [],
				status1:false,
				status2:false
			}
		},
		methods:{
			deleteChips(index){
				this.projects.splice(index, 1)
			},
			changeStatus(index){
				if (index === 1){
					this.status2 = false
					this.status1 = !this.status1
				}
				else if(index === 2){
					this.status1 = false
					this.status2 = !this.status2
				}
				else {
					this.status1 = false
					this.status2 = false
				}
			}
		},
		created() {
			let a = this.projects
			let b = this.$global.globalPublishList
			for (let i = 0; i< b.length; i++){
				a.push(b[i]["name"])
			}
		}
	}
</script>

<style scoped>
.options-chips{
	margin: 0 20px 15px 0;
}
</style>