<template>
	<view>
		<view class="header">
			<image class="header-image" src="../../../../static/vist_remind_header.jpg" mode="scaleToFill"></image>
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
			
		</view>
		
		<view class="row">
			<view class="col-md-4">
				<view class="circle-purple" @tap="toVisitTimDetail(2)">
					<image src="../../../../static/consultation/stu.png" mode=""></image>
					<p>7日回访提醒</p>
				</view>
			</view>
			
			<view class="col-md-4">
				<view class="circle-pink" @tap="toVisitTimDetail(3)">
					<image src="../../../../static/consultation/stu.png"></image>
					<p>15日回访提醒</p>
				</view>
			</view>
		</view>
		
		<view class="row">
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
				
				uni.request({
					url:this.serverUrl + '/stu/visit_remind/count/' + type,
					method:'GET',
					data:{},
					success: visitRemindCount => {
						console.log(visitRemindCount.data)
						if(visitRemindCount.data == 0){
							uni.showToast({
								title: '没有更多的数据了'
							})
							return
							}
							else{
							uni.navigateTo({
								url: "../visit_remind/visit_remind?type=" + type
							})
							}
			            }
			    })
			}
		}
	}
</script>

<style>
	/* @import url("router.css");	 */
</style>
