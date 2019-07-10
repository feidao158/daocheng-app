<template>
	<view>
		<view class="header">
			<image class="header-image" src="../../../../static/consultation/header.jpg" mode="scaleToFill"></image>
		</view>
		
		<view class="row">
			<view class="col-md-4">
				<view class="circle-yellow" @tap="toDetail(0)">
					<image src="../../../../static/consultation/stu.png" mode=""></image>
					<p>我负责的学员</p>
				</view>
			</view>
			<view class="col-md-4">
				<view class="circle-green" @tap="toDetail(1)">
					<image src="../../../../static/consultation/stu.png" mode=""></image>
					<p>我录入的学员</p>
				</view>
			</view>
		</view>
		
		<view class="row">
			<view class="col-md-4">
				<view class="circle-purple" @tap="toDetail(2)">
					<image src="../../../../static/consultation/stu.png" mode=""></image>
					<p>我报名的学员</p>
				</view>
			</view>
			
			<view class="col-md-4">
				<view class="circle-pink" @tap="toDetail(3)">
					<image src="../../../../static/consultation/stu.png"></image>
					<p>我的优生学员</p>
				</view>
			</view>
		</view>
		
		<view class="row">
			<view class="col-md-4">
				<view class="circle-yellow" @tap="toDetail(4)">
					<image src="../../../../static/consultation/stu.png"></image>
					<p>我曾经的学员</p>
				</view>
			</view>
			
			<view class="col-md-4">
				<view class="circle-green" @tap="toDetail(5)">
					<image src="../../../../static/consultation/stu.png"></image>
					<p>我的无效学员</p>
				</view>
			</view>
		</view>
		
		
		<view class="row">
			<view class="col-md-4">
				<view class="circle-purple" @tap="toDetail(6)">
					<image src="../../../../static/consultation/stu.png"></image>
					<p>待跟进的学员</p>
				</view>
			</view>
			
			<view class="col-md-4">
				<view class="circle-blue" @tap="toDetail(7)">
					<image src="../../../../static/consultation/stu.png"></image>
					<p>待续费的学员</p>
				</view>
			</view>
			<!-- <view class="col-md-4" style="border:none;">
				<view >
					<image ></image>
					<p></p>
				</view>
			</view> -->
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
			
			toDetail(type)
			{
				uni.navigateTo({
					url: "../holder/holder?type=" + type
				})
				console.log(type)
			}
			
		}
	}
</script>

<style>
	/* @import url("router.css");	 */
</style>
