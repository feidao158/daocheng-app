<template>
	<view>
		<view class="cu-list menu">
			<view class="cu-item">
				<view class="half-content">
					<text class="text-grey">教师:</text>
					<text class="text-red">{{schoolInfo.schoolName}}</text>
				</view>
				
				<view class="half-content">
					<text class="text-grey">性别:</text>
					<text class="text-red">{{schoolInfo.province + '-' + schoolInfo.city + '-' + schoolInfo.area}}</text>
				</view>
			</view>
			
			<view class="cu-item">
				<view class="half-content">
					<text class="text-grey">所在学校:</text>
					<text class="text-red">{{'普通高中'}}</text>
				</view>
				
				<view class="half-content">
					<text class="text-grey">当前职位:</text>
					<text class="text-red">{{schoolInfo.jointInfo}}</text>
				</view>
			</view>
			
			<view class="cu-item">
				<view class="half-content">
					<text class="text-grey">负责年级:</text>
					<text class="text-red">{{schoolInfo.ledgerCount}}</text>
				</view>
				
				<view class="half-content">
					<text class="text-grey">负责班级:</text>
					<text class="text-red">{{schoolInfo.teacherCount}}</text>
				</view>
			</view>
			
			
			<view class="cu-item">
				<view class="half-content">
					<text class="text-grey">qq:</text>
					<text class="text-red">{{schoolInfo.address}}</text>
				</view>
				
				<view class="half-content">
					<text class="text-grey">wechat:</text>
					<text class="text-red">{{schoolInfo.phoneNumber}}</text>
				</view>
			</view>
			
			
			<view class="cu-item">
				<view class="content">
					<text class="text-grey">台账记录与教师信息:</text>
					<button class="cu-btn bg-blue">show</button>
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
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
