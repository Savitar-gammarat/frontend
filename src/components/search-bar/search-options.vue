<template>
	<div>
		<div>
			<options-chooser @click.native="changeStatus(1)">
				<template slot="option-name">All Sites</template>
			</options-chooser>
			<options-dialog v-if="status1">
				<template>
					<div>All Sites</div>
					<span v-for="(item, index) in projects" :key="index">
						<md-checkbox v-model="selected" :value="item" class="md-primary">{{item}}</md-checkbox>
					</span>
				</template>
			</options-dialog>
			<options-chooser @click.native="changeStatus(2)">
				<template slot="option-name">Any Time</template>
			</options-chooser>
			<options-dialog v-if="status2">
				<template>
					<div class="md-layout md-alignment-center-center">
						<div class="md-layout-item md-size-45">
							<md-empty-state
									md-rounded
									md-icon="access_time"
									md-size="150"
							>
							</md-empty-state>
						</div>
						<div class="md-layout-item md-size-55">
							<span style="padding-left: 20px">此功能正在赶来的路上！</span>
						</div>
					</div>
				</template>
			</options-dialog>
		</div>
		<div class="options-chips">
			<md-chip class="md-primary" @click="deleteChips(index)" v-for="(chip, index) in selected" :key="chip" md-deletable>{{ chip }}</md-chip>
		</div>
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
				value:[],
				selected:[],
				status1:false,
				status2:false,
				status3:false
			}
		},
		methods:{
			deleteChips(index){
				this.selected.splice(index, 1)
			},
			changeStatus(index){
				if (index === 1){
					if (this.status3) {
						this.status2 = false
						this.status1 = !this.status1
					}
					else{
						this.projects_list()
						this.status3 = true
					}
				}
				else if(index === 2){
					this.status1 = false
					this.status2 = !this.status2
				}
				else {
					this.status1 = false
					this.status2 = false
				}
			},
			projects_list(){
				let b = this.$global.globalPublishList
				for (let i = 0; i< b.length; i++){
					this.projects.push(b[i]["name"])
				}
				this.$global.setSite_list(this.projects)
			}
		}
	}
</script>

<style scoped>
.options-chips{
	margin: 0 20px 15px 0;
}
.md-chip{
	margin: 0 5px 5px 0 ;
}
</style>