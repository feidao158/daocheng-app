<template>
	<view>
		
		<view class="flex flex-wrap" style="margin:26upx;">
			<text style="margin-top:10upx;">姓名:</text>
			<input style="width:400upx;border: #CCE6FF 1upx solid;" type="text" value="" v-model="inputValue" />
			<button style="height:0;padding:26upx 36upx;line-height:0;margin-left: 12upx;" class="cu-btn bg-blue" @tap="search">搜索</button>
		</view>
		<view class="cu-list menu">
			<view class="cu-item">
				<view class="half-content">
					<text class="text-grey">教师:</text>
					<text class="text-red">{{teacherInfo.name}}</text>
				</view>
				
				<view class="half-content">
					<text class="text-grey">性别:</text>
					<text class="text-red">{{teacherInfo.gender==0 ? '女':'男'}}</text>
				</view>
			</view>
			
			<view class="cu-item">
				<view class="half-content">
					<text class="text-grey">所在学校:</text>
					<text class="text-red">{{teacherInfo.cultureSchool.schoolName}}</text>
				</view>
				
				<view class="half-content">
					<text class="text-grey">当前职位:</text>
					<text class="text-red">{{teacherInfo.position}}</text>
				</view>
			</view>
			
			<view class="cu-item">
				<view class="half-content">
					<text class="text-grey">负责年级:</text>
					<text class="text-red">{{teacherInfo.grade}}</text>
				</view>
				
				<view class="half-content">
					<text class="text-grey">负责班级:</text>
					<text class="text-red">{{teacherInfo.classes}}</text>
				</view>
			</view>
			
			
			<view class="cu-item">
				<view class="half-content">
					<text class="text-grey">qq:</text>
					<text class="text-red">{{teacherInfo.qqNumber}}</text>
				</view>
				
				<view class="half-content">
					<text class="text-grey">wechat:</text>
					<text class="text-red">{{teacherInfo.wechatNumber}}</text>
				</view>
			</view>
			
			
			<view class="cu-item">
				<view class="content">
					<text class="text-grey">台账记录与教师信息:</text>
					<button class="cu-btn bg-blue" @tap="showTeacherLedgerInfo">show</button>
				</view>
				
			</view>
			
			<view class="cu-load load-modal" v-if="loadModal" >
			
					<view class="gray-text">加载中...</view>
			</view>
			
		</view>
		
		
		<view class="flex margin-top">
		<button @tap="prevent" :class="pageNum>1? 'bg-red':''">上一页</button>
		<button @tap="next" class="bg-red">下一页</button>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pageNum:1,
				teacherInfo:null,
				loadModal:false,
				inputValue:''
				
			}
		},
		methods: {
			loadData()
			{
				var me = this
				var convertStr = encodeURI(this.inputValue)
				uni.request({
					url: this.serverUrl + '/led/manager/teacher/' + this.pageNum + '?name=' + convertStr + '&limit=1',
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
					this.pageNum--
					this.loadData()
					
				}
			},
			next()
			{
				this.loadModal = true
				this.pageNum++
				this.loadData()
			},
			showTeacherLedgerInfo()
			{
				uni.navigateTo({
					url: "../ledger_teacher_detail/ledger_teacher_detail?id=" + this.teacherInfo.id
				})
			},
			search()
			{
				
				this.pageNum=1
				
				this.loadData()
			}
		},
		onLoad() {
			this.loadData()
		}
	}
</script>

<style>

</style>
