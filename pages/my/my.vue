<template>
	<view>
		
		<view class="cu-list menu-avatar">
			
			<view class="cu-item" v-if="login" @tap="toSetting">
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
			
			<view class="cu-item" @tap="toLogin" v-else>
				<view class="cu-avatar radio lg"></view>
				
				<view class="content">
					<view class="text-pink">
						<view class="text-cut">未登录</view>
					</view>
					
				</view>
			</view>
			
			
		</view>
			
			
			
		<view class="cu-list menu ">
			
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-circlefill text-gray"></text>
					<text class="text-gray">账号管理</text>
				</view>
			</view>
			
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-circlefill text-gray"></text>
					<text class="text-gray">新消息通知</text>
				</view>
			</view>
			
			<view class="cu-item margin-top">
				<view class="content">
					<text class="cuIcon-circlefill text-gray"></text>
					<text class="text-gray">帮助与反馈</text>
				</view>
			</view>
			
			<view class="cu-item ">
				<view class="content">
					<text class="cuIcon-circlefill text-gray"></text>
					<text class="text-gray">服务条款与隐私</text>
				</view>
			</view>
			
			<view class="cu-item ">
				<view class="content">
					<text class="cuIcon-circlefill text-gray"></text>
					<text class="text-gray">关于应用</text>
				</view>
			</view>
			
			<view class="cu-item ">
				<view class="content">
					<text class="cuIcon-circlefill text-gray"></text>
					<text class="text-gray">您当前使用设备：{{phoneInfo}}</text>
				</view>
			</view>
			
			<!-- <view class="cu-item " v-if="login" >
				<view class="content">
					<text class="cuIcon-circlefill text-gray"></text>
					<text class="text-gray">退出登录</text>
				</view>
			</view> -->
			
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				login:false,
				phoneInfo:null,
				userInfo:null
				
			}
		},
		methods: {
			toLogin()
			{
				uni.navigateTo({
					url: "../login/login"
				})
			},
			toSetting()
			{
				uni.navigateTo({
					url: "../setting/setting"
				})
			}
		},
		onLoad() {
			var me = this;
			
			uni.vibrateLong({
				success() {
					
				}
			})
			uni.getSystemInfo({
				success:function(res){
					me.phoneInfo = res.model;
				}
			})
		},
		onShow() {
			var me = this;
			uni.request({
				url: me.serverUrl + '/login/status',
				method: 'GET',
				data: {},
				success: res => {
					console.log(res.data)
					if(res.data.status==200)
					{
						// 仍旧是登录状态
						me.login = true;
						me.userInfo = uni.getStorageSync('userInfo')
					}else
					{
						me.login = false;
						uni.removeStorageSync('userInfo')
					}
					
				},
				fail: () => {},
				complete: () => {}
			});
		}
	}
</script>

<style>

</style>
