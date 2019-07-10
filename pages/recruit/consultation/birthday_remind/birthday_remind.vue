<template>
	<view>
	
			<view class="bg-white">
				<!-- <view class="flex">
					<view class="flex-sub border-grey  padding-sm margin-xs radius text-lg">
						<text>id:</text>
						<text class="text-blue">{{stu.id}}</text>
	
					</view>
					<view class="flex-sub border-grey   padding-sm margin-xs radius text-lg">
						<text>地区:</text>
						<text class="text-blue">{{stu.province + '-' + stu.city + '-' + stu.area}}</text>
					</view>
				</view> -->
				
				<view class="cu-form-group">
					<view class="title">id</view>
					<view class="full-width">
						<text class="text-blue">{{stu.id}}</text>
					</view>
				</view>
				
				<view class="cu-form-group">
					<view class="title">地区:</view>
					<view class="full-width">
						<text class="text-blue">{{stu.province + '-' + stu.city + '-' + stu.area}}</text>
						
					</view>
				</view>
				
				
				<!-- <view class="flex">
					<view class="flex-sub border-grey   padding-sm margin-xs radius text-lg">
						<text>学员姓名:</text>
						<text class="text-blue">{{stu.name}}</text>
					
					</view>
					<view class="flex-sub border-grey  padding-sm margin-xs radius text-lg">
						<text>生日</text>
						<text class="text-blue">{{stu.birthday}}</text>
					</view>
				</view> -->
				
				<view class="cu-form-group">
					<view class="title">姓名:</view>
					<view class="full-width">
						<text class="text-blue">{{stu.name}}</text>
					</view>
				</view>
				
				
				<view class="cu-form-group">
					<view class="title">生日:</view>
					<view class="full-width">
						<text class="text-blue">{{stu.birthday}}</text>
					</view>
				</view>
				
				
				
				
				
			<!-- 	<view class="flex">
					<view class="flex-sub border-grey   padding-sm margin-xs radius text-lg">
						<text>报名校区:</text>
						<text class="text-blue">{{stu.companyCampus==null ? '': stu.companyCampus.schoolName}}</text>
					
					</view>
					<view class="flex-sub border-grey   padding-sm margin-xs radius text-lg">
						<text>报名专业:</text>
						<text class="text-blue">{{stu.cultureSchoolMajor==null ? '' :stu.cultureSchoolMajor.majorName}}</text>
					</view>
				</view> -->
				
				<view class="cu-form-group">
					<view class="title">报名校区:</view>
					<view class="full-width">
						<text class="text-blue">{{stu.companyCampus==null ? '': stu.companyCampus.schoolName}}</text>
					</view>
				</view>
				
				
					<view class="cu-form-group">
					<view class="title">报名专业:</view>
					<view class="full-width">
						<text class="text-blue">{{stu.cultureSchoolMajor==null ? '' :stu.cultureSchoolMajor.majorName}}</text>
					</view>
				</view>
				
				
				
				<!-- <view class="flex">
					<view class="flex-sub border-grey padding-sm margin-xs radius text-lg">
						<text>文化学校:</text>
						<text class="text-blue">{{stu.cultureSchool==null ? '': stu.cultureSchool.schoolName}}</text>
					</view>	
				</view>
				
				<view class="flex">
					<view class="flex-sub border-grey  padding-sm margin-xs radius text-lg">
						<text>备注:</text>
						<text class="text-blue">{{stu.remask}}</text>
					</view>
				</view> -->
				
				
				<view class="cu-form-group">
					<view class="title">文化学校:</view>
					<view class="full-width">
						<text class="text-blue">{{stu.cultureSchool==null ? '': stu.cultureSchool.schoolName}}</text>
					</view>
				</view>
				
				
				<view class="cu-form-group">
					<view class="title">备注:</view>
					<view class="full-width">
						<text class="text-blue">{{stu.remask}}</text>
					</view>
				</view>
				
				
				<view class="cu-load load-modal" v-if="loadModal" >
				
						<view class="gray-text">加载中...</view>
				</view>
				
				<view class="flex">
					<button @tap="prevent" :class="currentNum>1?'bg-red':''">上一页</button>
					<button @tap="next" class="bg-red">下一页</button>
				</view>
				
			</view>
			
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentNum:1,
				stu:null,
				dataList:null,
				pageType:null,
				loadModal:false
			}
		},
		methods: {
			next()
			{
				this.currentNum++;
				this.loadModal=true
				this.birthdayRemindData()	
			},
			prevent()
			{
				if(this.currentNum>1){
					this.currentNum--;
					this.loadModal=true
					this.birthdayRemindData()
					
				}
				
			},
			
			birthdayRemindData()
			{
				uni.request({
					url:this.serverUrl + '/stu/birthday/' + this.pageType + '/' + this.currentNum + '?limit=1',
					method:"GET",
					data:{},
					success: birthdayData =>{
					
						if(this.stu!=null && this.stu.id == birthdayData.data[0].id){
							
							uni.showToast({
								title:"到底了!"
							})
							this.currentNum--
							this.loadModal=false
							return
							
						}
						console.log(birthdayData)
						this.stu = birthdayData.data[0]
						this.loadModal=false 
					},
					fail: () => {},
					complete: () => {},
				})
			},
		},
		computed:{
			hasPrevent:function(){
				return{
					'bg-red': true
				}
			}
		},
		onShow(param) {
			var me = this;
			this.birthdayRemindData()
				
		},
		onLoad(param)
		{
			console.log("load... type:" + param.type)
			this.pageType = param.type
			
		}
		
	}
</script>

<style>
	@import url("holder.css");
</style>
