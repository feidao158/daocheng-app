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
							uni.setStorageSync("username",me.username)
							uni.setStorageSync("password",me.password)
							uni.setStorageSync('userInfo',res.data.data)
							console.log("登陆成功 准备跳转")
							uni.switchTab({
								url: "../index/index"
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
			
		},
		onLoad() {
			var me = this;
			// 1.首先判断用户登录状态是否为已登录 如果为已登录 直接跳转index页面 
			// 2.如果用户状态为未登录 判断localStorage中是否保存有用户的账号密码 如果有 尝试登录 登录成功 跳转页面 如果服务器返回密码错误 localStorage清空数据 其他错误不清空
			uni.request({
				url: me.serverUrl + '/login/status',
				success(res) {
					console.log(res.data.msg)
					if(res.data.status==500 && res.data.msg== '未登录')
					{
						var username =  uni.getStorageSync('username');
						var password = uni.getStorageSync('password');
						console.log("username:" + username)
						console.log("password:" + password)
						if(username!='' && password!='')
						{
							uni.request({
								url: me.serverUrl + '/login/mobile',
								method: 'POST',
								header:{
									"content-type":'application/x-www-form-urlencoded'
								},
								data: {
									username:username,
									password:password
								}
							})
							.then(data=>{
							
								var [error,res] = data
								// console.log(res.data)
								// console.log(JSON.stringify(data))
								if(res.data.status==200)
								{
									uni.setStorageSync('userInfo',res.data.data)
									uni.switchTab({
										url: "../index/index"
									})
								}
							})
						}
					}else if (res.data.status==200)
					{
						uni.switchTab({
							url: "../index/index"
						})
						
					}
					
					
				}
			})
			
			
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
