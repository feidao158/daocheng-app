<template>
	<view>
		<scroll-view scroll-x class="bg-white nav text-center">
			<!-- <view class="cu-item" :class="index==tabCur?'text-blue cur':''" v-for="(item,index) in 3" :key="index" @tap="tabSelect" :data-id="index">
				
			</view> -->
			<view class="cu-item" :class="selectedTab==0 ? 'text-blue cur':''"  @tap="tabSelect" :data-id="0">
				台账记录
			</view>
			
			<view class="cu-item" :class="selectedTab==1 ? 'text-blue cur':''" @tap="tabSelect" :data-id="1">
				教师信息
			</view>
		</scroll-view>
		
		
		<view class="tab-list">
			<view class="tab-item" :class="selectedTab==0 ? 'tab-show':''">
				<view class="cu-timeline" v-for="item in cultuerTeacherLedgerList" :key=item.id>
					<view class="cu-time">{{item.inputDate}}</view>
				
					<view class="cu-item text-blue">
						<view class="bg-blue content">
							<text>{{item.joint.name + "--"}}</text>
							<text>{{item.cultureTeacherInfo==null ? '' :item.cultureTeacherInfo.name }}</text>
							<br/>
							<rich-text :nodes="item.jointContent"></rich-text>
						</view>
						
					</view>
				</view>
				
				<!-- <view class="cu-timeline">
					<view class="cu-time">昨天</view>
				
					<view class="cu-item text-blue">
						<view class="bg-blue content">
							<text>20:00</text> 【月球】快件已到达月球，准备发往地球
						</view>
						
					</view>
				</view> -->
				
			</view>
		
			<view class="tab-item" :class="selectedTab==1 ? 'tab-show':''">
				<view class="cu-list menu">
					<view class="cu-item">
						<view class="half-content">
							<text class="text-gray">教师:</text>
							<text class="text-red">{{teacherInfo.name}}</text>
						</view>
						
						<view class="half-content">
							<text class="text-gray">性别:</text>
							<text class="text-red">{{teacherInfo.gender==0? '女':'男'}}</text>
						</view>
					</view>
					
					<view class="cu-item">
						<view class="half-content">
							<text class="text-gray">职位:</text>
							<text class="text-red">{{teacherInfo.position}}</text>
						</view>
						
						<view class="half-content">
							<text class="text-gray">负责年级:</text>
							<text class="text-red">{{teacherInfo.grade}}</text>
						</view>
					</view>
					
					<view class="cu-item">
						<view class="half-content">
							<text class="text-gray">负责班级:</text>
							<text class="text-red">{{teacherInfo.classes}}</text>
						</view>
						
						<view class="half-content">
							<text class="text-gray">qq号码:</text>
							<text class="text-red">{{teacherInfo.qqNumber}}</text>
						</view>
					</view>
					
					<view class="cu-item">
						<view class="half-content">
							<text class="text-gray">微信:</text>
							<text class="text-red">{{teacherInfo.wechatNumber}}</text>
						</view>
						
							<view class="half-content">
							<text class="text-gray">手机:</text>
							<text class="text-red">{{teacherInfo.phoneNumber}}</text>
						</view>
						
						
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
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
				selectedTab:0,
				cultuerTeacherLedgerList:null,
				schoolId:null,
				pageNum:1,
				teacherInfo:null,
				loadModal:false
			}
		},
		methods: {
			tabSelect(e) {
				
				var id = e.currentTarget.dataset.id
				this.selectedTab = e.currentTarget.dataset.id
				
			},
			getTeacherInfo()
			{
					var me = this
					uni.request({
					url: this.serverUrl + '/led/school/teacher/' +this.schoolId + '/' + this.pageNum + '?limit=1' ,
					method: 'GET',
					data: {},
					success: res => {
							if(this.teacherInfo!=null && this.teacherInfo.id == res.data[0].id)
						{
							uni.showToast({
								title: "到底了!"
							})
							this.pageNum--
							this.loadModal = false
							return
						}
						me.teacherInfo = res.data[0]
						this.loadModal = false
					},
					fail: () => {},
					complete: () => {}
				});
			},
			
			prevent()
			{
				if(this.pageNum>1)
				{
					this.loadModal = true
					this.pageNum--;
					this.getTeacherInfo()
				}
			},
			next()
			{
				this.pageNum++
				this.loadModal = true
				this.getTeacherInfo()
			}
		},
		onLoad(param) {
			this.schoolId = param.schoolId
			uni.request({
				url: this.serverUrl + '/led/school/ledger/json/' + param.schoolId ,
				method: 'GET',
				data: {},
				success: res => {
					this.cultuerTeacherLedgerList = res.data.reverse()
					console.log(res.data)
				},
				fail: () => {},
				complete: () => {}
			});
			
			this.getTeacherInfo();
			
		
		}
	}
</script>

<style>

</style>
