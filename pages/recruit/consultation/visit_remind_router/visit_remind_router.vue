<template>
	<view>
		<view class="header">
			<image class="header-image" src="../../../../static/consultation/header.jpg" mode="scaleToFill"></image>
		</view>
		
		
		<view class="row">
			<view class="col-md-4">
				<view class="circle-yellow" @tap="toVisitTimDetail(0)">
					<image src="../../../../static/consultation/stu.png" mode=""></image>
					<p>今日回访提醒</p>
				</view>
			</view>
			
			<view class="col-md-4">
				<view class="circle-green" @tap="toVisitTimDetail(1)">
					<image src="../../../../static/consultation/stu.png" mode=""></image>
					<p>3日回访提醒</p>
				</view>
			</view>
			
			<view class="col-md-4">
				<view class="circle-purple" @tap="toVisitTimDetail(2)">
					<image src="../../../../static/consultation/stu.png" mode=""></image>
					<p>7日回访提醒</p>
				</view>
			</view>
			
		</view>
		
		<view class="row">
			
			<view class="col-md-4">
				<view class="circle-pink" @tap="toVisitTimDetail(3)">
					<image src="../../../../static/consultation/stu.png"></image>
					<p>15日回访提醒</p>
				</view>
			</view>
			
			<view class="col-md-4">
				<view class="circle-yellow" @tap="toVisitTimDetail(4)">
					<image src="../../../../static/consultation/stu.png"></image>
					<p>30日回访提醒</p>
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
			
			toVisitTimDetail(type)
			{
				uni.navigateTo({
					url: "../visit_remind/visit_remind?type=" + type
				})
				console.log(type)
			}
			
		}
	}
</script>

<style>
	@import url("router.css");	
</style>
