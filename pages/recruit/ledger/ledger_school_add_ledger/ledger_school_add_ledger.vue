<template>
	<view>
		<view class="zw-container">
			
			<view class="list-teacher">
				<span class="list-left">教师:</span>
				<picker class="list-right" mode="selector" :range="cultureTeacherInfoList"  range-key="name" @change="cultureTeacherSelected">
					<input type="text" :value="selectedTeacherName" placeholder="请选择" />
				</picker>
			</view>
			
			
			<view class="list-teacher">
				<span class="list-left">方式:</span>
				<picker class="list-right" mode="selector" :range="dicCodeList"  range-key="dicName" @change="dicCodeSelected">
					<input type="text" :value="selectedDicCodeName" placeholder="请选择" />
				</picker>
			</view>
			
			
				
			<view class="list-teacher">
				<span class="list-left">对接人:</span>
				<picker class="list-right" mode="selector" :range="actorList" range-key="name" @change="actorSelected">
					<input type="text" :value="selectedActorName" placeholder="请选择" />
				</picker>
			</view>
			
		<!-- 	<view class="uni-textarea">
				 <textarea style="height: 300upx;border:solid red 1upx;padding-right: 10upx;" class="margin-top margin-bottom"  placeholder-style="color:#F76260" placeholder="详情内容" v-model="content"  />
			</view> -->
			<view class="list-teacher">
				<span class="list-left">内容:</span>
				<view class="list-right">
					<textarea v-model="content" name="" id=""  ></textarea>
				</view>
			
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
