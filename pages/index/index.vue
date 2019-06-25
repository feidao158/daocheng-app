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
							<view class="collapse-item-content" @tap="billInfoRouter">
							   我的账单
							</view>
							<view class="collapse-item-content">
							   我的回访
							</view>
							<view class="collapse-item-content">
							   回访提醒
							</view>
							<view class="collapse-item-content">
							  生日提醒
							</view>
						</uni-collapse-item>
						
						<uni-collapse-item title="台账">
							<view class="collapse-item-content" @tap="ledgerSchool">
								学校台账
							</view>
							
							<view class="collapse-item-content">
								教师台账
							</view>
							
						</uni-collapse-item>
						
						<uni-collapse-item title="调研">
							<view class="collapse-item-content">
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
			billInfoRouter()
			{
				this.showDrawer = false;
				uni.navigateTo({
					url: "../recruit/consultation/bill_router/bill_router"
				})
			},
			ledgerSchool()
			{
				this.showDrawer = false;
				uni.navigateTo({
					url: "../recruit/ledger/ledger_school/ledger_school"
				})
			}
		},
		components:{
			uniCollapse,uniCollapseItem,uniDrawer
		}
	}
</script>

<style>
	.collapse-item-content{
		padding: 30upx;
		text-align: center;
	}

</style>
