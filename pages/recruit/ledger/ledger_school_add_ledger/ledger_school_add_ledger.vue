<template>
	<view>
		<view class="zw-container bg-white">
			
			<view class="form-item">
				
				<picker  mode="selector" :range="cultureTeacherInfoList"  range-key="name" @change="cultureTeacherSelected">
					<view class="yg-margin-top">{{selectedTeacherName==null? '文化教师': selectedTeacherName}}</view>
				</picker>
			</view>
			
			
			<view class="form-item">
				<picker mode="selector" :range="dicCodeList"  range-key="dicName" @change="dicCodeSelected">
					<view class="yg-margin-top">{{selectedDicCodeName==null? '对接方式': selectedDicCodeName}}</view>
				</picker>
			</view>
			
			<view class="form-item">
				
				<picker  mode="selector" :range="actorList" range-key="name" @change="actorSelected">
					<view class="yg-margin-top">{{selectedActorName==null? '对接人': selectedActorName}}</view>
				</picker>
			</view>
			
			<view class="form-item">
				<textarea v-model="content" placeholder="对接内容"></textarea>
			</view>
			
			<button type="primary" @tap="submit">提交</button>
		</view>
		
	</view>
	
	
</template>

<script>
	export default {
		data() {
			return {
				cultureTeacherInfoList:null,
				actorList:null,
				dicCodeList:null,
				schoolId:null,
				selectedTeacherName:null,
				selectedTeacherId:null,
				selectedDicCodeName:null,
				selectedDicCodeId:null,
				selectedActorName:null,
				selectedActorId:null,
				content:null
			}
		},
		methods: {
			
			cultureTeacherSelected(e)
			{
				
				let selecteObject = this.cultureTeacherInfoList[e.target.value]
				this.selectedTeacherName = selecteObject.name
				this.selectedTeacherId = selecteObject.id
				
			},
			
			dicCodeSelected(e)
			{
				let selecteObject = this.dicCodeList[e.target.value]
				this.selectedDicCodeName = selecteObject.dicName
				this.selectedDicCodeId = selecteObject.id
			},
			actorSelected(e)
			{
				let selecteObject = this.actorList[e.target.value]
				this.selectedActorName = selecteObject.name
				this.selectedActorId = selecteObject.id
			},
			submit()
			{
				
				if(this.selectedActorId==null || this.selectedDicCodeId==null || this.selectedActorId==null)
				{
					uni.showToast({
						title: "请先选择数据"
					})
					return
				}
				console.log(this.content)
				
				
				uni.request({
					url: this.serverUrl + '/led/teacher/form',
					method: 'POST',
					dataType:'json',
					data: {
						teacherId:this.selectedTeacherId,
						dockMode:this.selectedDicCodeId,
						jointPerson:this.selectedActorId,
						jointContent:this.content,
						schoolId:this.schoolId
					},
					success: res => {
						console.log(res.data)
						uni.navigateBack({
							delta:1
						})
					},
					fail: () => {},
					complete: () => {}
				});
				
			}
			
		},
		onLoad(param) {
			this.schoolId= param.id
			uni.request({
				url: this.serverUrl + '/led/school/form/info/json/' + this.schoolId
				
			}).then(data=>{
				var [error,res] = data
				this.cultureTeacherInfoList = res.data.cultureTeacherInfoList
				this.dicCodeList = res.data.dicCodeList
				this.actorList = res.data.actorList
			})
		}
	}
</script>

<style>
	
	
	

</style>
