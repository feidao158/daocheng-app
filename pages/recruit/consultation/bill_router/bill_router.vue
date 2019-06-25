<template name="basics">
	<view>
		<scroll-view scroll-y class="page">
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
		</scroll-view>
		
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
					// },
					// {
					// 	title: '文本',
					// 	name: 'text',
					// 	color: 'purple',
					// 	cuIcon: 'font'
					// },
					// {
					// 	title: '图标 ',
					// 	name: 'icon',
					// 	color: 'mauve',
					// 	cuIcon: 'cuIcon'
					// },
					// {
					// 	title: '按钮',
					// 	name: 'button',
					// 	color: 'pink',
					// 	cuIcon: 'btn'
					// },
					// {
					// 	title: '标签',
					// 	name: 'tag',
					// 	color: 'brown',
					// 	cuIcon: 'tagfill'
					// },
					// {
					// 	title: '头像',
					// 	name: 'avatar',
					// 	color: 'red',
					// 	cuIcon: 'myfill'
					// },
					// {
					// 	title: '进度条',
					// 	name: 'progress',
					// 	color: 'orange',
					// 	cuIcon: 'icloading'
					// },
					// {
					// 	title: '边框阴影',
					// 	name: 'shadow',
					// 	color: 'olive',
					// 	cuIcon: 'copy'
					// },
					// {
					// 	title: '加载',
					// 	name: 'loading',
					// 	color: 'green',
					// 	cuIcon: 'loading2'
					// }
				]
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	
	.page {
		height: 100vh;
	}

</style>
