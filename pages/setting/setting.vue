<template>
	<view>
		
		<view class="cu-list menu-avatar">
			<view class="cu-item">
				<view class="cu-avatar radio lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Taric.png);"></view>
				
				<view class="content">
					<view class="text-pink">
						<view class="text-cut">{{userInfo.name}}</view>
					</view>
					<view class="text-gray">
						<view class="text-cut">我吃过的路 比你走过的屎还多</view>
					</view>
				</view>
			</view>
			
			<view class="btn-block-group">
				<button class="cu-btn block bg-grey" @tap="changeAccount">切换账户</button>
			</view>
			
			<view class="btn-block-group">
				<button class="cu-btn block bg-red" @tap="logout">退出</button>
			</view>
		
			
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo:null
			}
		},
		methods: {
			
			changeAccount()
			{
				uni.showToast({
					title: "暂未开发"
				})
			},
			logout()
			{
				
				uni.removeStorageSync('username')
				uni.removeStorageSync('password')
				uni.request({
					url: this.serverUrl + '/logout',
					method: 'GET',
					data: {},
					success: res => {
						uni.navigateBack({
							delta: 1
						})
					},
					fail: () => {},
					complete: () => {}
				});
			}
			
		},
		onLoad() {
			this.userInfo = uni.getStorageSync('userInfo')
		}
	}
</script>

<style>
	
	.btn-block-group{
		width: 90%;
		display: block;
		margin: 16upx auto 0;
		
	}

</style>
