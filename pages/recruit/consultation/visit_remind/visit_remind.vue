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
						<text class="text-blue">{{stu.tLeatnerInfo.province + '-' + stu.tLeatnerInfo.city + '-' + stu.tLeatnerInfo.area}}</text>
					</view>
				</view> -->
				
				<view class="cu-form-group">
					<view class="title">id:</view>
					<view class="full-width">
						<text>{{stu.id}}</text>
					</view>
				</view>
				<view class="cu-form-group">
					<view class="title">地区:</view>
					<view class="full-width">
						<text>{{stu.tLeatnerInfo.province + '-' + stu.tLeatnerInfo.city + '-' + stu.tLeatnerInfo.area}}</text>
					</view>
				</view>
				
				<!-- <view class="flex">
					<view class="flex-sub border-grey   padding-sm margin-xs radius text-lg">
						<text>学员姓名:</text>
						<text class="text-blue">{{stu.tLeatnerInfo.name}}</text>
					
					</view>
					<view class="flex-sub border-grey  padding-sm margin-xs radius text-lg">
						<text>意向等级</text>
						<text class="text-blue">{{stu.tLeatnerInfo.intentionLevel}}</text>
					</view>
				</view> -->
				
				<view class="cu-form-group">
					<view class="title">学员姓名:</view>
					<view class="full-width">
						<text>{{stu.tLeatnerInfo.name}}</text>
					</view>
				</view>
				<view class="cu-form-group">
					<view class="title">意向等级:</view>
					<view class="full-width">
						<text>{{stu.tLeatnerInfo.intentionLevel}}</text>
					</view>
				</view>
				
				<!-- <view class="flex">
					<view class="flex-sub border-grey   padding-sm margin-xs radius text-lg">
						<text>来源渠道:</text>
						<text class="text-blue">{{stu.tLeatnerInfo==null ? '':stu.tLeatnerInfo.dicCode.dicName}}</text>
					</view>
					<view class="flex-sub border-grey   padding-sm margin-xs radius text-lg">
						<text>意向专业:</text>
						<text class="text-blue">{{stu.cultureSchoolMajor.majorName}}</text>
					</view>
				</view> -->
				
				<view class="cu-form-group">
					<view class="title">来源渠道:</view>
					<view class="full-width">
						<text>{{stu.tLeatnerInfo==null ? '':stu.tLeatnerInfo.dicCode.dicName}}</text>
					</view>
				</view>
				<view class="cu-form-group">
					<view class="title">意向专业:</view>
					<view class="full-width">
						<text>{{stu.cultureSchoolMajor.majorName}}</text>
					</view>
				</view>
				
				<!-- <view class="flex">
					<view class="flex-sub border-grey padding-sm margin-xs radius text-lg">
						<text>年级:</text>
						<text class="text-blue">{{stu.tLeatnerInfo.grade}}</text>
					</view>
					
					<view class="flex-sub border-grey padding-sm margin-xs radius text-lg">
						<text>文化学校:</text>
						<text class="text-blue">{{stu.cultureSchool.schoolName}}</text>
					</view>
						
				</view> -->
				
				<view class="cu-form-group">
					<view class="title">年级:</view>
					<view class="full-width">
						<text>{{stu.tLeatnerInfo.grade}}</text>
					</view>
				</view>
				<view class="cu-form-group">
					<view class="title">文化学校:</view>
					<view class="full-width">
						<text>{{stu.cultureSchool.schoolName}}</text>
					</view>
				</view>
				
				
				<!-- <view class="flex">
					<view class="flex-sub border-grey  padding-sm margin-xs radius text-lg">
						<text>负责人:</text>
						<text class="text-blue">{{stu.holder.name}}</text>
					
					</view>
					<view class="flex-sub border-grey   padding-sm margin-xs radius text-lg">
						<text>下次回访日期:</text>
						<text class="text-blue">{{stu.nextDate}}</text>
					</view>
				</view> -->
				
				<view class="cu-form-group">
					<view class="title">负责人:</view>
					<view class="full-width">
						<text>{{stu.holder.name}}</text>
					</view>
				</view>
				<view class="cu-form-group">
					<view class="title" style="min-width: calc(4em + 52px);">下次回访日期:</view>
					<view class="full-width">
						<text>{{stu.nextDate}}</text>
					</view>
				</view>
				
				<view class="cu-load load-modal" v-if="loadModal" >
				
						<view class="gray-text">加载中...</view>
				</view>
				
				<view class="flex">
					<button @tap="prevent" :class="currentNum>1? 'bg-red':''" >上一页</button>
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
				this.loadModal=true;
				this.currentNum++;
				this.visitRemindDate()
				
				
			},
			prevent()
			{
				if(this.currentNum>1)
				{
					this.currentNum--;
					this.loadModal = true;
					this.visitRemindDate()
				}
				
			},
			
			visitRemindDate()
			{
				console.log(this.pageType)
				uni.request({
					url:this.serverUrl + '/stu/visit_remind/' + this.pageType + '/' + this.currentNum + '?limit=1',
					method:'GET',
					data:{},
					success: visitTimeDate => {
						
						if(this.stu!=null && this.stu.id == visitTimeDate.data[0].id)
						{
							uni.showToast({
								title: "到底了!"
							})
							this.currentNum--
							this.loadModal = false
							return
						}
						
						
						console.log(visitTimeDate)
						this.stu = visitTimeDate.data[0]
						this.loadModal = false
						
					},
					fail: () => {},
					complete: () => {}
					
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
			this.visitRemindDate()
			
			
			
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
