<template>
	<view>
		<view class="header">
			<image class="header-image" src="../../../../static/birthday_remind_header.jpg" mode="scaleToFill"></image>
		</view>
		
		
		<view class="row">
			<view class="col-md-4">
				<view class="circle-yellow" @tap="toBirthdayDetail(0)">
					<image src="../../../../static/consultation/stu.png" mode=""></image>
					<p>今日过生学员</p>
				</view>
			</view>
			
			<view class="col-md-4">
				<view class="circle-green" @tap="toBirthdayDetail(1)">
					<image src="../../../../static/consultation/stu.png" mode=""></image>
					<p>明日过生学员</p>
				</view>
			</view>
			
			
			
		</view>
		
		<view class="row">
			
			<view class="col-md-4">
				<view class="circle-purple" @tap="toBirthdayDetail(2)">
					<image src="../../../../static/consultation/stu.png" mode=""></image>
					<p>本周过生学员</p>
				</view>
			</view>
			
			<view class="col-md-4">
				<view class="circle-pink" @tap="toBirthdayDetail(3)">
					<image src="../../../../static/consultation/stu.png"></image>
					<p>下周过生学员</p>
				</view>
			</view>
			
					
		</view>
		
		<view class="row">
			
			<view class="col-md-4">
				<view class="circle-yellow" @tap="toBirthdayDetail(4)">
					<image src="../../../../static/consultation/stu.png"></image>
					<p>本月过生学员</p>
				</view>
			</view>	
			
			<view class="col-md-4">
				<view class="circle-purple" @tap="toBirthdayDetail(5)">
					<image src="../../../../static/consultation/stu.png" mode=""></image>
					<p>下月过生学员</p>
				</view>
			</view>
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
			
			toBirthdayDetail(type)
			{
				uni.navigateTo({
					url:"../birthday_remind/birthday_remind?type=" + type,
				})
				console.log(type)
			}
			
		}
	}
</script>

<style>
	/* @import url("router.css");	 */
</style>
