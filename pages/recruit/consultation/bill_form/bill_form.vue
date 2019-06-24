<template>
	<view>
		<view class="cu-list menu" >
			<view class="cu-item" >
				<view class="half-content">
					<text class="text-grey">姓名：</text>
					<text class="text-red">李四</text>
				</view>
				
				<view class="half-content">
					<text class="text-grey">状态：</text>
					<text class="text-red">李四</text>
				</view>
			</view>
			
			<view class="cu-item" >
				<view class="half-content">
					<text class="text-grey">收费项目：</text>
					<text class="text-red">李四</text>
				</view>
				
				<view class="half-content">
					<text class="text-grey">总金额：</text>
					<text class="text-red">李四</text>
				</view>
			</view>
			
			<view class="cu-item" >
				<view class="half-content">
					<text class="text-grey">已收金额：</text>
					<text class="text-red">李四</text>
				</view>
				
				<view class="half-content">
					<text class="text-grey">报名校区：</text>
					<text class="text-red">李四</text>
				</view>
			</view>
			
			<view class="cu-item" >
				<view class="half-content">
					<text class="text-grey">专业：</text>
					<text class="text-red">李四</text>
				</view>
				
				<view class="half-content">
					<text class="text-grey">班别：</text>
					<text class="text-red">李四</text>
				</view>
			</view>
			
			<view class="cu-item" >
				<view class="half-content">
					<text class="text-grey">学校：</text>
					<text class="text-red">李四</text>
				</view>
				
				<view class="half-content">
					<text class="text-grey">收款校区：</text>
					<text class="text-red">李四</text>
				</view>
			</view>
			
			<view class="cu-item" >
				<view class="half-content">
					<text class="text-grey">账单日期：</text>
					<text class="text-red">李四</text>
				</view>
				
				<view class="half-content">
					<text class="text-grey">负责人：</text>
					<text class="text-red">李四</text>
				</view>
			</view>
			
			<view class="border-yellow">
				
					<view class="cu-item" >
						<view class="half-content">
							<text class="text-grey">支付方式：</text>
							<text class="text-red">李四</text>
						</view>
						
						<view class="half-content">
							<text class="text-grey">收款方式：</text>
							<text class="text-red">李四</text>
						</view>
					</view>
					
					
					<view class="cu-item" >
						<view class="half-content">
							<text class="text-grey">创建时间：</text>
							<text class="text-red">李四</text>
						</view>
						
						<view class="half-content">
							<text class="text-grey">截图凭证：</text>
							<button class="cu-btn bg-blue">查看</button>
						</view>
					</view>
					
					
					<view class="cu-item" >
						<view class="content">
							<text class="text-grey">备注：</text>
							<text class="text-red">李四</text>
						</view>
						
						<!-- <view class="half-content">
							<text class="text-grey">截图凭证：</text>
							<text class="text-red">李四</text>
						</view> -->
					</view>
			</view>
			
			
			<view class="flex margin-top">
				<button>上一页</button>
				<button>下一页</button>
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
			
		},
		onLoad(e) {
			var type = e.type
		
			
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
