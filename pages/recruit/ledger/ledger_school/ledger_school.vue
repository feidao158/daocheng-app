<template>
	<view>
		<view class="cu-list menu">
			<view class="cu-item">
				<view class="half-content">
					<text class="text-grey">学校名称:</text>
					<text class="text-red">{{schoolInfo.schoolName}}</text>
				</view>
				
				<view class="half-content">
					<text class="text-grey">地区:</text>
					<text class="text-red">{{schoolInfo.province + '-' + schoolInfo.city + '-' + schoolInfo.area}}</text>
				</view>
			</view>
			
			<view class="cu-item">
				<view class="half-content">
					<text class="text-grey">类别:</text>
					<text class="text-red">{{'普通高中'}}</text>
				</view>
				
				<view class="half-content">
					<text class="text-grey">合作状态:</text>
					<text class="text-red">{{schoolInfo.jointInfo}}</text>
				</view>
			</view>
			
			<view class="cu-item">
				<view class="half-content">
					<text class="text-grey">台账数量:</text>
					<text class="text-red">{{schoolInfo.ledgerCount}}</text>
				</view>
				
				<view class="half-content">
					<text class="text-grey">教师数量:</text>
					<text class="text-red">{{schoolInfo.teacherCount}}</text>
				</view>
			</view>
			
			
			<view class="cu-item">
				<view class="half-content">
					<text class="text-grey">地址:</text>
					<text class="text-red">{{schoolInfo.address}}</text>
				</view>
				
				<view class="half-content">
					<text class="text-grey">联系电话:</text>
					<text class="text-red">{{schoolInfo.phoneNumber}}</text>
				</view>
			</view>
			
			
			<view class="cu-item">
				<view class="content">
					<text class="text-grey">台账记录与教师信息:</text>
					<button class="cu-btn bg-blue" @tap="showLedgerAndTeacherInfo">show</button>
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
			loadData()
			{
				var me = this
				uni.request({
					url: this.serverUrl + '/led/school/' + this.pageNum + '?name=&limit=1',
					method: 'GET',
					data: {},
					success: res => {
						me.schoolInfo = res.data[0]
					},
					fail: () => {},
					complete: () => {}
				});
			},
			prevent()
			{
				if(this.pageNum>1)
				{
					this.pageNum--
					this.loadData()
				}
			},
			next()
			{
				this.pageNum++
				this.loadData()
			},
			showLedgerAndTeacherInfo()
			{
				uni.navigateTo({
					url: "../ledger_school_detail/ledger_school_detail?schoolId=" + this.schoolInfo.id
				})
			}
		},
		onLoad() {
			this.loadData()
		}
	}
</script>

<style>

</style>
