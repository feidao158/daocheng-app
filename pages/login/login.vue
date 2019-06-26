<template>
	
	<view class="container">
	
		<image class="logo" src="../../static/xixi.png" mode=""></image>
		<form action="">
				<view class="cu-form-group margin-top">
					<view class="title">用户名</view>
					<input name="input" v-model="username"></input>
				</view>
				
				<view class="cu-form-group">
					<view class="title">密码</view>
					<input type="password" value="" v-model="password" />
				</view>
				
				<view class="cu-form-group">
					
					<button type="primary" @tap="login">登录</button>
					
					<view class="cu-load load-modal" v-if="loadModal" >
					
							<view class="gray-text">加载中...</view>
					</view>
					
					
				</view>
				
			
			
		</form>
	</view>
	
</template>

<script>
	
	export default {
		data() {
			return {
				loadModal:false,
				username:null,
				password:null
				
			}
		},
		methods: {
			login()
			{
				// this.loadModal = true
				// uni.showToast({
				// 	title: this.username + this.password,
				// 	duration: 2000
				// })
				this.loadModal = true;
				var me = this;
				
				uni.setStorageSync("username",this.username)
				uni.setStorageSync("password",this.password)
				uni.request({
					url: me.serverUrl + '/login/mobile' ,
					method: 'POST',
					header:{
						"content-type":'application/x-www-form-urlencoded'
					},
					data: {
						username:this.username,
						password:this.password
					},
					success: res => {
						me.loadModal = false
						if(res.statusCode==404)
						{
							uni.showToast({
								title: "服务器超时",
								duration:2000
							})
						}
						
						
						if(res.data.status==200)
						{
							//登录成功
							uni.setStorageSync('userInfo',res.data.data)
							uni.navigateBack({
								delta: 1
							})
						}else
						{
							this.password = ''
							uni.showToast({
								title:res.data.msg,
								duration: 2000
							})
						}
						
						console.log(res.data)
					},
					fail: () => {
						console.log("出错了")
					},
					complete: () => {}
				});
				
				
			},
			
			
		},
		components:{
			
		}
	}
</script>

<style>
	.logo{
		width: 250upx;
		height: 250upx;
		margin: 0 auto;
		
		display: block;
	}
	
	.container{
		width: 100%;
		margin-top: 10%;
		
	}
	
	.title{
		width: 24%;
	}

</style>
