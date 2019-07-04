<template>
	<view>
		
			<view class="flex flex-wrap" style="margin:26upx;">
				<text style="margin-top:10upx;">姓名:</text>
				<input style="width:400upx;border: #CCE6FF 1upx solid;" type="text" v-model="inputValue" />
				<button style="height:0;padding:26upx 36upx;line-height:0;margin-left: 12upx;" class="cu-btn bg-blue" @tap="search">搜索</button>
			</view>
		<view class="cu-list menu">
			<view class="cu-item">
				<view class="half-content">
					<text class="text-grey">学校名称:</text>
					<text class="text-red">{{schoolInfo.schoolName}}</text>
				</view>
				
				<view class="half-content">
					<text class="text-grey">地区:</text>
					<text class="text-red">{{schoolInfo.province + '-' + schoolInfo.city + '-' + schoolInfo.area}}</text>
				</view>
			</view>
			
			<view class="cu-item">
				<view class="half-content">
					<text class="text-grey">类别:</text>
					<text class="text-red">{{'普通高中'}}</text>
				</view>
				
				<view class="half-content">
					<text class="text-grey">合作状态:</text>
					<text class="text-red">{{schoolInfo.jointInfo}}</text>
				</view>
			</view>
			
			<view class="cu-item">
				<view class="half-content">
					<text class="text-grey">台账数量:</text>
					<text class="text-red">{{schoolInfo.ledgerCount}}</text>
				</view>
				
				<view class="half-content">
					<text class="text-grey">教师数量:</text>
					<text class="text-red">{{schoolInfo.teacherCount}}</text>
				</view>
			</view>
			
			
			<view class="cu-item">
				<view class="half-content">
					<text class="text-grey">地址:</text>
					<text class="text-red">{{schoolInfo.address}}</text>
				</view>
				
				<view class="half-content">
					<text class="text-grey">联系电话:</text>
					<text class="text-red">{{schoolInfo.phoneNumber}}</text>
				</view>
			</view>
			
			
			<view class="cu-item">
				<view class="content">
					<text class="text-grey">台账记录与教师信息:</text>
					<button class="cu-btn bg-blue" @tap="showLedgerAndTeacherInfo">show</button>
				</view>
				
			</view>
			
			
			<view class="cu-item">
				<view class="half-content">
					<text class="text-gray">新增台账</text>
					<button class="cu-btn margin-left bg-blue" @tap="addSchoolLedger">click</button>
				</view>
				
				<view class="half-content">
					<text class="text-gray">新增教师:</text>
					<button class="cu-btn margin-left bg-blue" @tap="addSchoolTeacher">click</button>
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
				schoolInfo:null,
				pageNum:1,
				loadModal:false,
				inputValue:''
			}
		},
		methods: {
			loadData()
			{
				let me = this
				let convertStr = encodeURI(this.inputValue)
				uni.request({
					url: this.serverUrl + '/led/school/' + this.pageNum + '?name=' + convertStr +  '&limit=1',
					method: 'GET',
					data: {},
					success: res => {
						console.log(res.data)
						if(this.schoolInfo!=null && this.schoolInfo.id == res.data[0].id)
						{
							uni.showToast({
								title: "到底了!"
							})
							this.pageNum--
							this.loadModal = false
							return
						}
						
						
						me.schoolInfo = res.data[0]
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
					this.pageNum--
					this.loadModal = true
					this.loadData()
				}
			},
			next()
			{
				this.loadModal = true
				this.pageNum++
				this.loadData()
			},
			showLedgerAndTeacherInfo()
			{
				uni.navigateTo({
					url: "../ledger_school_detail/ledger_school_detail?schoolId=" + this.schoolInfo.id
				})
			},
			addSchoolLedger()
			{
				uni.navigateTo({
					url: "../ledger_school_add_ledger/ledger_school_add_ledger?id=" + this.schoolInfo.id
				})
			},
			addSchoolTeacher()
			{
				uni.navigateTo({
					url: "../ledger_school_add_teacher/ledger_school_add_teacher?id=" + this.schoolInfo.id
				})
			},
			search()
			{
				
				this.pageNum=1
				console.log("开始搜素")
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
