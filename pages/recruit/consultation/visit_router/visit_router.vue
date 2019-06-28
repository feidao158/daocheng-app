<template>
	<view>
		<view class="header">
			<image class="header-image" src="../../../../static/consultation/header.jpg" mode="scaleToFill"></image>
		</view>
		
		
		<view class="row">
			<view class="col-md-4">
				<view class="circle-yellow" @tap="toVisitDetail(0)">
					<image src="../../../../static/consultation/stu.png" mode=""></image>
					<p>有效回访记录</p>
				</view>
			</view>
			
			<view class="col-md-4">
				<view class="circle-green" @tap="toVisitDetail(1)">
					<image src="../../../../static/consultation/stu.png" mode=""></image>
					<p>无效回访记录</p>
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
			
			toVisitDetail(type){
				uni.navigateTo({
					url:"../return_visit/return_visit?type="+type
				})
				console.log(type)
				
			}
		}
	}
</script>

<style>
	@import url("router.css");
</style>
