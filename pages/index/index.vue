<template>
	<view>
		<view class="padding flex flex-direction">
			<button class="cu-btn bg-grey lg" @tap="openMenu">菜单</button>
			<button class="cu-btn bg-red margin-tb-sm lg" @tap="addStudent">新增用户</button>
		</view>
		
<uni-drawer :visible="showDrawer" :mode="right" @close="fuck">
			<uni-list>
			
					<uni-collapse accordion="true" animation="true">
						
						<uni-collapse-item title="咨询" animation="true">
						    <view  class="collapse-item-content" @tap="myStudentRouter">
						       我的学员
						    </view>
							<view class="collapse-item-content" @tap="billInfo">
							   我的账单
							</view>
							<view class="collapse-item-content" @tap="myReturnVisitRouter">
							   我的回访
							</view>
							<view class="collapse-item-content" @tap="returnVisitToRemind">
							   回访提醒
							</view>
							<view class="collapse-item-content" @tap="birthdayReminder">
							   生日提醒
							</view>
						</uni-collapse-item>
						
						<uni-collapse-item title="台账">
							<view class="collapse-item-content" @tap="ledgerSchool">
								学校台账
							</view>
							
							<view class="collapse-item-content" @tap="ledgerTeacher">
								教师台账
							</view>
							
						</uni-collapse-item>
						
						<uni-collapse-item title="调研">
							<view class="collapse-item-content" @tap="surveySchool" >
								学校调研
							</view>
							<view class="collapse-item-content">
								竞争对手调研
							</view>
							
						</uni-collapse-item>
					</uni-collapse>
					
			
			</uni-list>
			
		</uni-drawer>
		

	</view>
</template>

<script>
	
	import {uniCollapse,uniCollapseItem} from "@dcloudio/uni-ui"
	import uniDrawer from "@/components/uni-drawer/uni-drawer.vue"

	
	export default {
		data() {
			return {
				showDrawer:false
				
			}
		},
		methods: {
			openMenu()
			{
				this.showDrawer = true;
			},
			fuck()
			{
				this.showDrawer = false;
			},
			addStudent()
			{
				uni.navigateTo({
					url:"../recruit/add2/add2"
				})
			},
			myStudentRouter()
			{
				this.showDrawer = false;
				uni.navigateTo({
					url: "../recruit/consultation/router/router"
				})
			},
			//我的回访
			myReturnVisitRouter()
			{
				this.showDrawer = false;
				uni.navigateTo({
					url:"../recruit/consultation/visit_router/visit_router"
				})
			},
			//回访提醒
			returnVisitToRemind()
			{
				this.showDrawer = false;
				uni.navigateTo({
					url:"../recruit/consultation/visit_remind_router/visit_remind_router"
				})
			},
			//生日提醒
			birthdayReminder()
			{
				this.showDrawer = false;
				uni.navigateTo({
					url:"../recruit/consultation/birthday_reminder_router/birthday_reminder_router"
				})
			},
			//学校调研
			surveySchool()
			{
				this.showDrawer = false;
				uni.navigateTo({
					url:"../recruit/survey/survey_school/survey_school"
				})
				
				
			},
			ledgerSchool()
			{
				this.showDrawer = false;
				uni.navigateTo({
					url: "../recruit/ledger/ledger_school/ledger_school"
				})
			},
			ledgerTeacher()
			{
				this.showDrawer = false;
				uni.navigateTo({
					url: "../recruit/ledger/ledger_teacher/ledger_teacher"
				})
			},
			billInfo()
			{
				this.showDrawer = false;
				uni.navigateTo({
					url: "../recruit/consultation/bill_router/bill_router",
					
				})
			}
		},
		components:{
			uniCollapse,uniCollapseItem,uniDrawer
		},
		onLoad() {
			var me = this
			uni.request({
				url: me.serverUrl + '/login/status',
				method: 'GET',
				data: {},
				success: res => {
					console.log(res.data)
					if(res.data.status==200)
					{
						// 仍旧是登录状态
					
					}else
					{
						// me.login = false;
						// uni.removeStorageSync('userInfo')
						var username = uni.getStorageSync("username")
						var password = uni.getStorageSync("password")
						if(username!=null & password !=null)
						{
							uni.request({
								url: me.serverUrl + '/login/mobile' ,
								method: 'POST',
								header:{
									"content-type":'application/x-www-form-urlencoded'
								},
								data: {
									username:username,
									password:password
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
										
									}else
									{
										
										uni.showToast({
											title:res.data.msg,
											duration: 2000
										})
									}
									
									console.log(res.data)
									console.log("我到达首页了")
								},
								fail: () => {
									console.log("出错了")
								},
								complete: () => {}
							});
						}

					}
					
				},
				fail: () => {},
				complete: () => {}
			});
		}
	}
</script>

<style>
	.collapse-item-content{
		padding: 30upx;
		text-align: center;
	}

</style>
