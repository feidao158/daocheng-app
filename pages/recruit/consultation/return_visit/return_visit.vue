<template>
	<view >
	
		<!-- #ifdef MP-WEIXIN -->
		<view class=" margin-top padding flex flex-wrap justify-between align-center bg-white">
				<text>姓名:</text>
				<input type="text" value="" class="form-input" />
				<button class="cu-btn bg-green">查询</button>
		</view>
		<!-- #endif -->
		
		<!-- #ifdef APP-PLUS -->
		
			<view>
				<span style="border: #007AFF solid 1upx;float:left;margin-left:60upx;">姓名:</span>
				<input type="text" value="" style="border: #007AFF solid 1upx;width:400upx;float:left;margin:0 20upx;"/>
				<button style="width:120upx;float:left;margin-right:60upx;">查询</button>
				<view style="clear:both;"></view>
			</view>
			
		<!-- #endif -->
			
			<!-- <view v-if="pageType==0" class=" margin-top padding flex flex-wrap justify-between align-center bg-white">
				<button class="cu-btn bg-cyan" @tap="stuModify(stu.id)">无效回访日志</button>
			</view> -->
			
			<view class="bg-white">
				<view class="flex">
					<view class="flex-sub border-grey  padding-sm margin-xs radius text-lg">
						<text>id:</text>
						<text class="text-blue">{{stu.id}}</text>
	
					</view>
				</view>
				
				<view class="flex">
					<view class="flex-sub border-grey   padding-sm margin-xs radius text-lg">
						<text>学员姓名:</text>
						<text class="text-blue">{{stu.tLeatnerInfo.name}}</text>
					
					</view>
					<view class="flex-sub border-grey  padding-sm margin-xs radius text-lg">
						<text>回访类型:</text>
						<text class="text-blue">{{stu.visitDirection}}</text>
					</view>
				</view>
				
				<view class="flex">
					<view class="flex-sub border-grey   padding-sm margin-xs radius text-lg">
						<text>联系方式:</text>
						<text class="text-blue">{{stu.visitType}}</text>
					
					</view>
					<view class="flex-sub border-grey   padding-sm margin-xs radius text-lg">
						<text>回访方向:</text>
						<text class="text-blue">{{stu.visitDirection}}</text>
					</view>
				</view>
				
				<view class="flex">
					<view class="flex-sub border-grey padding-sm margin-xs radius text-lg">
						<text>回访内容:</text>
						<text class="text-blue">{{stu.paidDetails}}</text>
					</view>
					
					<view class="flex-sub border-grey padding-sm margin-xs radius text-lg">
						<text>下次联系日期:</text>
						<text class="text-blue">{{stu.nextDate}}</text>
					</view>
					
					
				</view>
				
				<view class="flex">
					<view class="flex-sub border-grey  padding-sm margin-xs radius text-lg">
						<text>创建日期:</text>
						<text class="text-blue">{{stu.paidDate}}</text>
					
					</view>
				</view>
				
				<view class="flex">
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
				currentNum:1,
				stu:null,
				dataList:null,
				pageType:null
			}
		},
		methods: {
			next()
			{
				this.currentNum++;
					if(this.pageType == 0){
						this.validReturnLog()
					}else if(this.pageType == 1){
						this.invalidReturnLog()
					}	
			},
			prevent()
			{
				this.currentNum--;
				if(this.pageType == 0){
					this.validReturnLog()
				}else if(this.pageType == 1){
					this.invalidReturnLog()
				}
				
			},
			
			// 有效回访日志
			validReturnLog()
			{
					console.log("我进来了吗")
			    uni.request({
			    	url:this.serverUrl + '/stu/visit_info/valid/'  + this.currentNum + '?name=&limit=1',
					method:'GET',
					data:{},
			
					success: visitDate =>{
						console.log(visitDate)
						this.stu = visitDate.data[0]
						console.log("复制成功了吗")
					},
					fail() {},
					complete() {},
			    });
			},	
			// 无效回访日志
			invalidReturnLog()
			{
				console.log(this.currentNum)
			    uni.request({
			    	url:this.serverUrl + '/stu/visit_info/invalid/'  + this.currentNum + '?limit=1',	
					method:'GET',
					data:{},
					success: invalidVisitDate =>{
						console.log(invalidVisitDate)
						this.stu = invalidVisitDate.data[0]
						console.log("stu:"+this.stu)
					},
					fail() {},
					complete() {},
			    });
			},	
		},
		computed:{
			hasPrevent:function(){
				return{
					'bg-red': true
				}
			}
		},
		onShow(param) {
			var me = this;
		},
		onLoad(param)
		{
			console.log("load... type:" + param.type)
			this.pageType = param.type;
			if(this.pageType == 0){
				this.validReturnLog();
			}else if(this.pageType == 1){
				this.invalidReturnLog();
			}
		}
		
	}
</script>

<style>
	@import url("holder.css");
</style>
