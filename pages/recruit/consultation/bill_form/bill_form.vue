<template>
	<view>
		
			<view class="flex flex-wrap" style="margin:26upx;">
				<text style="margin-top:10upx;">姓名:</text>
				<input style="width:400upx;border: #CCE6FF 1upx solid;" type="text" value="" />
				<button style="height:0;padding:26upx 36upx;line-height:0;margin-left: 12upx;" class="cu-btn bg-blue">click</button>
			</view>
		
		<view class="cu-list menu" >
			<view class="cu-item" >
				<view class="half-content">
					<text class="text-grey">姓名：</text>
					<text class="text-red">{{billInfo.tLeatnerInfo.name}}</text>
				</view>
				
				<view class="half-content">
					<text class="text-grey">状态：</text>
					<text class="text-red">{{billInfo.tLeatnerInfo.status}}</text>
				</view>
			</view>
			
			<view class="cu-item" >
				<view class="half-content">
					<text class="text-grey">收费项目：</text>
					<text class="text-red">{{billInfo.billProject}}</text>
				</view>
				
				<view class="half-content">
					<text class="text-grey">总金额：</text>
					<text class="text-red">{{billInfo.totalBill}}</text>
				</view>
			</view>
			
			<view class="cu-item" >
				<view class="half-content">
					<text class="text-grey">已收金额：</text>
					<text class="text-red">{{billInfo.alreadyBill}}</text>
				</view>
				
				<view class="half-content">
					<text class="text-grey">报名校区：</text>
					<text class="text-red">{{billInfo.signUpCampus.schoolName}}</text>
				</view>
			</view>
			
			<view class="cu-item" >
				<view class="half-content">
					<text class="text-grey">专业：</text>
					<text class="text-red"></text>
				</view>
				
				<view class="half-content">
					<text class="text-grey">班别：</text>
					<text class="text-red">{{billInfo.companyClass.className}}</text>
				</view>
			</view>
			
			<view class="cu-item" >
				<view class="half-content">
					<text class="text-grey">学校：</text>
					<text class="text-red">{{billInfo.cultureSchool.schoolName}}</text>
				</view>
				
				<view class="half-content">
					<text class="text-grey">收款校区：</text>
					<text class="text-red">{{billInfo.gatheringCampus.schoolName}}</text>
				</view>
			</view>
			
			<view class="cu-item" >
				<view class="half-content">
					<text class="text-grey">账单日期：</text>
					<text class="text-red">{{billInfo.createDate}}</text>
				</view>
				
				<view class="half-content">
					<text class="text-grey">负责人：</text>
					<text class="text-red">{{billInfo.actor.name}}</text>
				</view>
			</view>
			
			<view class="border-yellow" v-for="item in billDetailList">
				
					<view class="cu-item" >
						<view class="half-content">
							<text class="text-grey">支付方式：</text>
							<text class="text-red">{{item.dicCode.dicName}}</text>
						</view>
						
						<view class="half-content">
							<text class="text-grey">收款金额：</text>
							<text class="text-red">{{item.collectedAmount}}</text>
						</view>
					</view>
					
					
					<view class="cu-item" >
						<view class="half-content">
							<text class="text-grey">创建时间：</text>
							<text class="text-red">{{item.createTime}}</text>
						</view>
						
						<view class="half-content">
							<text class="text-grey">截图凭证：</text>
							<button class="cu-btn bg-blue" @tap="showModel">查看</button>
							<view class="cu-modal" :class="modalName=='Image'?'show':''">
								<view class="cu-dialog">
									<view class="bg-img" :style="'background-image: url(' + item.voucher +');height:200px;'">
										<view class="cu-bar justify-end text-white">
											<view class="action" @tap="hideModal">
												<text class="cuIcon-close "></text>
											</view>
										</view>
									</view>
									<view class="cu-bar bg-white">
										<view class="action margin-0 flex-sub  solid-left" @tap="hideModal">我知道了</view>
									</view>
								</view>
							</view>
						</view>
					</view>
					
					
					<view class="cu-item" >
						<view class="content">
							<text class="text-grey">备注：</text>
							<text class="text-red">{{item.remark}}</text>
						</view>
						
						
						<!-- <view class="half-content">
							<text class="text-grey">截图凭证：</text>
							<text class="text-red">李四</text>
						</view> -->
					</view>
					
					<view class="cu-load load-modal" v-if="loadModal">
						<view class="gray-text">加载中...</view>
					</view>
			</view>
			
			
			<view class="flex margin-top">
				<button @tap="prevent">上一页</button>
				<button @tap="next">下一页</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				billInfo:null,
				billDetailInfo:null,
				pageNum:1,
				dataType:null,
				billDetailList:null,
				modalName: null,
				loadModal:false
				
			}
		},
		methods: {
			
			loadData()
			{
				var me = this
				if(this.dataType==0)
				{
					// uni.request({
					// 	url: this.serverUrl + '/sign_up/bill_info/un_complete/' + this.pageNum + '?name=&limit=1',
					// 	method: 'GET',
					// 	data: {},
					// 	success: res => {
					// 		me.billInfo = res.data[0]
					// 	},
					// 	fail: () => {},
					// 	complete: () => {}
					// });
					uni.request({
						url: this.serverUrl + '/sign_up/bill_info/un_complete/' + this.pageNum + '?name=&limit=1'
					})
					.then(data =>{
						
						var [error,res]  = data;
						if(this.billInfo!=null && this.billInfo.id == res.data[0].id)
						{
							uni.showToast({
								title: "到底了!"
							})
							this.pageNum--
							this.loadModal = false
							return
						}
						me.billInfo  = res.data[0]
						this.getBillDetailList()
						this.loadModal = false
					})
				}
				else
				{
					
					uni.request({
						url: this.serverUrl + '/sign_up/bill_info/complete/' + this.pageNum + '?name=&limit=1'
					})
					.then(data =>{
						
						var [error,res]  = data;
						if(this.billInfo!=null && this.billInfo.id == res.data[0].id)
						{
							uni.showToast({
								title: "到底了!"
							})
							this.pageNum--
							this.loadModal = false
							return
						}
						
						me.billInfo  = res.data[0]
						this.getBillDetailList()
						this.loadModal = false
					})
					
				}			
			},
			next()
			{
				this.loadModal = true
				this.pageNum++;
				this.loadData()
			},
			
			prevent()
			{
				if(this.pageNum>1)
				{
					this.loadModal = true
					this.pageNum--;
					this.loadData()
				}
			},
			
			getBillDetailList()
			{
				uni.request({
					url: this.serverUrl + '/sign_up/bill_details/info/json/' + this.billInfo.id,
					method: 'GET',
					data: {},
					success: res => {
						this.billDetailList = res.data
						console.log(this.billDetailList.length)
					},
					fail: () => {},
					complete: () => {}
				});
			},
			showModel()
			{
				this.modalName = 'Image'
			},
			hideModal()
			{
				this.modalName = null
			}
			
		},
		onLoad(e) {
			this.dataType = e.type
			this.loadData()
		}
	}
</script>

<style>
	.half-content{
		
		width: 50%;
	}
	
	.border-yellow{
		border-top: #eee solid 10upx ;
	}
	
	.border-yellow > .cu-item{
		position: relative;
		display: flex;
		padding-right: 10upx;
		height: 80upx;
		background-color: #ffffff;
		align-items: center
	}

</style>
