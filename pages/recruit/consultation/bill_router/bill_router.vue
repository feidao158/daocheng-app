<template name="basics">
	<view>
		<!-- <scroll-view scroll-y class="page">
			<image src="../../../../static/bill_header.jpg"
			 mode="widthFix" class="response"></image>
			<view class="nav-list">
				<navigator hover-class="none" :url="item.url" class="nav-li" navigateTo :class="'bg-'+item.color"
				 :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]" v-for="(item,index) in elements" :key="index">
					<view class="nav-title">{{item.title}}</view>
					<view class="nav-name">{{item.name}}</view>
					<text :class="'cuIcon-' + item.cuIcon"></text>
				</navigator>
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view> -->
		<view class="header">
			<image class="header-image" src="../../../../static/consultation/header.jpg" mode="scaleToFill"></image>
		</view>
		
		<view class="row">
			<view class="col-md-4">
				<view class="circle-yellow" @tap="toDetail(0)">
					<image src="../../../../static/consultation/stu.png" mode=""></image>
					<p>未收齐账单</p>
				</view>
			</view>
			
			<view class="col-md-4">
				<view class="circle-blue" @tap="toDetail(1)">
					<image src="../../../../static/consultation/stu.png" mode=""></image>
					<p>已收齐账单</p>
				</view>
			</view>
			
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				elements: [{
						title: '账单',
						name: '未收齐',
						color: 'cyan',
						cuIcon: 'newsfill',
						url: '/pages/recruit/consultation/bill_form/bill_form?type=0'
					},
					{
						title: '账单',
						name: '已收齐',
						color: 'blue',
						cuIcon: 'colorlens',
						url: '/pages/recruit/consultation/bill_form/bill_form?type=1'
					}
				]
				
			}
		},
		methods: {
			toDetail(index)
			{
				// switch(index)
				// {
				// 	case 0 : 
				// 		uni.navigateTo({
				// 			url: "/pages/recruit/consultation/bill_form/bill_form?type=0"
				// 		})
				// 		break;
				// 	case 1 :
				// 		uni.navigateTo({
				// 			url: "/pages/recruit/consultation/bill_form/bill_form?type=1"
				// 		})
				// 		break;
				// 	default : 
				// 		break;
				// }
				
				uni.navigateTo({
					url: '/pages/recruit/consultation/bill_form/bill_form?type=' + index
				})
			}
			
			
		}
	}
</script>

<style>
	
	.page {
		height: 100vh;
	}

</style>
