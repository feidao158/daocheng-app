<template>
	<view >
		
		<!-- #ifdef MP-WEIXIN -->
		<view class=" margin-top padding flex flex-wrap justify-between align-center bg-white">
				<text>姓名:</text>
				<input type="text" value="" class="form-input" />
				<button class="cu-btn bg-green">查询</button>
		</view>
		<!-- #endif -->
		
		<!-- #ifdef APP-PLUS -->
		
			<view>
				<span style="border: #007AFF solid 1upx;float:left;margin-left:60upx;">姓名:</span>
				<input type="text" value="" style="border: #007AFF solid 1upx;width:400upx;float:left;margin:0 20upx;"/>
				<button style="width:120upx;float:left;margin-right:60upx;">查询</button>
				<view style="clear:both;"></view>
			</view>
			
		<!-- #endif -->
			
			<view class="bg-white">
				<view class="flex">
					<view class="flex-sub border-grey  padding-sm margin-xs radius text-lg">
						<text>id:</text>
						<text class="text-blue">{{stu.id}}</text>
	
					</view>
					<view class="flex-sub border-grey   padding-sm margin-xs radius text-lg">
						<text>地区:</text>
						<text class="text-blue">{{stu.tLeatnerInfo.province + '-' + stu.tLeatnerInfo.city + '-' + stu.tLeatnerInfo.area}}</text>
					</view>
				</view>
				
				<view class="flex">
					<view class="flex-sub border-grey   padding-sm margin-xs radius text-lg">
						<text>学员姓名:</text>
						<text class="text-blue">{{stu.tLeatnerInfo.name}}</text>
					
					</view>
					<view class="flex-sub border-grey  padding-sm margin-xs radius text-lg">
						<text>生日</text>
						<text class="text-blue">{{stu.tLeatnerInfo.intentionLevel}}</text>
					</view>
				</view>
				
				<view class="flex">
					<view class="flex-sub border-grey   padding-sm margin-xs radius text-lg">
						<text>报名校区:</text>
						<text class="text-blue">{{stu.tLeatnerInfo==null ? '':stu.tLeatnerInfo.dicCode.dicName}}</text>
						<!-- <text class="text-blue">{{stu.inputPerson==null ? '':stu.inputPerson.name}}</text> -->
					
					</view>
					<view class="flex-sub border-grey   padding-sm margin-xs radius text-lg">
						<text>报名专业:</text>
						<text class="text-blue">{{stu.cultureSchoolMajor.majorName}}</text>
					</view>
				</view>
				
				<view class="flex">
					<view class="flex-sub border-grey padding-sm margin-xs radius text-lg">
						<text>文化学校:</text>
						<text class="text-blue">{{stu.cultureSchool.schoolName}}</text>
					</view>	
				</view>
				
				<view class="flex">
					<view class="flex-sub border-grey  padding-sm margin-xs radius text-lg">
						<text>备注:</text>
						<text class="text-blue">{{stu.holder.name}}</text>
					</view>
				</view>
				
				<view class="flex">
					<button @tap="prevent">上一页</button>
					<button @tap="next">下一页</button>
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
				pageType:null
			}
		},
		methods: {
			next()
			{
				this.currentNum++;
				this.birthdayRemindData()
				
				
			},
			prevent()
			{
				this.currentNum--;
				this.birthdayRemindData()
			},
			
			birthdayRemindData()
			{
				uni.request({
					url:this.serverUrl + '/stu/birthday/' + this.pageType + '/' + this.currentNum + '?limit=1',
					method:"GET",
					data:{},
					success: birthdayData =>{
						this.stu = birthdayData.data[0]
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
