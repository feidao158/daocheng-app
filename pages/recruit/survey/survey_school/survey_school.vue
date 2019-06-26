<template>
	<view>
		<view class="cu-list menu">
			
			<view class=" margin-top padding flex flex-wrap justify-between align-center bg-white">
					<text>学校名称:</text>
					<input type="text" value="" style="border: #007AFF;"/>
					<button class="" style="width: 150upx;height: 70upx;"><text style="size: 20upx;">查询</text></button>
			</view>
			
			<view class=" margin-top padding flex flex-wrap justify-between align-center bg-white">
				<button class="cu-btn bg-blue">新增调研记录</button>
			</view>
			
			<view class="cu-item">
				<view class="half-content">
					<text class="text-grey">学校名称:</text>
					<text class="text-red">{{schoolInfo.schoolName}}</text>
				</view>
				
				<view class="half-content">
					<text class="text-grey">备注:</text>
					<text class="text-red"></text>
				</view>
			</view>
			
		       <view class="cu-list-menu">
				   <view class="content">
				   	<text class="text-grey">台账记录与教师信息:</text>
				   	<button class="cu-btn bg-blue" @tap="showSurveySchoolDetail">详情</button>
				   </view>
			   </view> 
			   
		</view>
			<view class="flex margin-top">
				<button @tap="prevent">上一页</button>
				<button @tap="next">下一页</button>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				schoolInfo:null,
				pageNum:1
			}
		},
		methods: {
			prevent()
			{
				if(this.pageNum>1)
				{
					this.pageNum--
					this.surverySchoolData()
				}
			},
			next()
			{
				this.pageNum++
				this.surverySchoolData()
			},
			surverySchoolData()
			{
				var me = this
				uni.request({
					url: this.serverUrl + '/inquire/school/' + this.pageNum + '?search=&limit=1',
					method:'GET',
					data:{},
					success: res =>{
						this.schoolInfo = res.data[0]
					},
					fail: () => {
						
					},
					complete: () => {
						
					},
				})
			},
			showSurveySchoolDetail()
			{
				uni.navigateTo({
					// url: "../ledger_school_detail/ledger_school_detail?schoolId=" + this.schoolInfo.id
				})
			}
		},
		onLoad() {
			this.surverySchoolData()
		}
	}
</script>

<style>

</style>
