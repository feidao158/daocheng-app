<template>
	<view >
		<!-- <view class="header bg-gray">
			<text style="width: 120upx;">姓名:</text>
			<input type="text" value="" class="form-input" />
			<button class="cu-btn bg-green">查询</button>
		</view> -->
		<!-- #ifdef MP-WEIXIN -->
		<view class=" margin-top padding flex flex-wrap justify-between align-center bg-white">
				<text>姓名:</text>
				<input type="text" value="" class="form-input" />
				<button class="cu-btn bg-green">查询</button>
		</view>
		<!-- #endif -->
		
		<!-- #ifdef APP-PLUS -->
		
			<!-- <view>
				<span style="border: #007AFF solid 1upx;float:left;margin-left:60upx;">姓名:</span>
				<input type="text" value="" style="border: #007AFF solid 1upx;width:400upx;float:left;margin:0 20upx;"/>
				<button style="width:120upx;float:left;margin-right:60upx;">查询</button>
				<view style="clear:both;"></view>
			</view> -->
			
			<view class="flex flex-wrap" style="margin:26upx;">
				<text style="margin:10upx 16upx 0 0;">姓名:</text>
				<input style="width:400upx;border: #CCE6FF 1upx solid;" type="text" v-model="inputValue" />
				<button style="height:0;padding:26upx 36upx;line-height:0;margin-left: 16upx;" class="cu-btn bg-blue" @tap="search" >click</button>
			</view>
			
		<!-- #endif -->
		
	
		
			<!-- <view class="cu-bar margin-top bg-white solid-bottom">
				<view class="action">
					<text class="cuIcon-title text-blue"></text>功能
				</view>
			</view> -->
			
			<view v-if="pageType==0" class=" margin-top padding flex flex-wrap justify-between align-center bg-white">
				<button class="cu-btn bg-cyan" @tap="stuModify(stu.id)">修改</button>
				<button class="cu-btn bg-cyan">报名</button>
				<button class="cu-btn bg-cyan">续报名</button>
				<button class="cu-btn bg-cyan" @tap="returnVisit(stu.id)">回访</button>
			</view>
			
			<view  v-if="pageType==0" class="padding flex flex-wrap justify-between align-center bg-white">
				<button class="cu-btn bg-cyan" @tap="setGood">优生</button>
				<button class="cu-btn bg-cyan" @tap="allocationTeacher(stu.id,stu.name)">分配负责老师</button>
				<button class="cu-btn bg-cyan">学生状态修改</button>
			</view>
			
			<view class="bg-white">
				<!-- <view class="flex">
					<view class="flex-sub border-grey  padding-sm margin-xs radius text-lg">
						<text>id:</text>
						<text class="text-blue">{{stu.id}}</text>
	
					</view>
					<view class="flex-sub border-grey   padding-sm margin-xs radius text-lg">
						<text>地区:</text>
						<text class="text-blue">{{stu.province + '-' + stu.city + '-' + stu.area}}</text>
					</view>
				</view> -->
				
				<view class="cu-form-group">
					<view class="title">id:</view>
					<view class="full-width">
						<text>{{stu.id}}</text>
					</view>
				</view>
				<view class="cu-form-group">
					<view class="title">地区:</view>
					<view class="full-width">
						<text>{{stu.province + '-' + stu.city + '-' + stu.area}}</text>
					</view>
				</view>
				
				<!-- <view class="flex">
					<view class="flex-sub border-grey   padding-sm margin-xs radius text-lg">
						<text>学员姓名:</text>
						<text class="text-blue">{{stu.name}}</text>
					</view>
					<view class="flex-sub border-grey  padding-sm margin-xs radius text-lg">
						<text>意向度:</text>
						<text class="text-blue">{{stu.intentionLevel}}</text>
					</view>
				</view> -->
				
				<view class="cu-form-group">
					<view class="title">学员姓名:</view>
					<view class="full-width">
						<text>{{stu.name}}</text>
					</view>
				</view>
				<view class="cu-form-group">
					<view class="title">意向度:</view>
					<view class="full-width">
						<text>{{stu.intentionLevel}}</text>
					</view>
				</view>
				
				<!-- <view class="flex">
					<view class="flex-sub border-grey   padding-sm margin-xs radius text-lg">
						<text>来源渠道:</text>
						<text class="text-blue">{{stu.dicCode==null ? '' : stu.dicCode.dicName}}</text>
					
					</view>
					<view class="flex-sub border-grey   padding-sm margin-xs radius text-lg">
						<text>意向专业:</text>
						<text class="text-blue">{{stu.cultureSchoolMajor==null ? '' : stu.cultureSchoolMajor.majorName}}</text>
					</view>
				</view> -->
				
				<view class="cu-form-group">
					<view class="title">来源渠道:</view>
					<view class="full-width">
						<text>{{stu.dicCode==null ? '' : stu.dicCode.dicName}}</text>
					</view>
				</view>
				<view class="cu-form-group">
					<view class="title">意向专业:</view>
					<view class="full-width">
						<text>{{stu.cultureSchoolMajor==null ? '' : stu.cultureSchoolMajor.majorName}}</text>
					</view>
				</view>
				
				<!-- <view class="flex">
					<view class="flex-sub border-grey padding-sm margin-xs radius text-lg">
						<text>文化学校:</text>
						<text class="text-blue">{{stu.cultureSchool==null ? '': stu.cultureSchool.schoolName}}</text>
					</view>
					
					<view class="flex-sub border-grey padding-sm margin-xs radius text-lg">
						<text>副科:</text>
						<text class="text-blue">{{stu.subject}}</text>
					</view>
				</view> -->
				
				<view class="cu-form-group">
					<view class="title">文化学校:</view>
					<view class="full-width">
						<text>{{stu.cultureSchool==null ? '': stu.cultureSchool.schoolName}}</text>
					</view>
				</view>
				<view class="cu-form-group">
					<view class="title">副科:</view>
					<view class="full-width">
						<text>{{stu.subject}}</text>
					</view>
				</view>
				
				
				<!-- <view class="flex">
					<view class="flex-sub border-grey  padding-sm margin-xs radius text-lg">
						<text>年级:</text>
						<text class="text-blue">{{stu.grade}}</text>
					
					</view>
					<view class="flex-sub border-grey   padding-sm margin-xs radius text-lg">
						<text>学校:</text>
						<text class="text-blue">{{stu.cultureSchool==null ? '': stu.cultureSchool.schoolName}}</text>
					</view>
				</view> -->
				
				<view class="cu-form-group">
					<view class="title">年级:</view>
					<view class="full-width">
						<text>{{stu.grade}}</text>
					</view>
				</view>
				<view class="cu-form-group">
					<view class="title">学校:</view>
					<view class="full-width">
						<text>{{stu.cultureSchool==null ? '': stu.cultureSchool.schoolName}}</text>
					</view>
				</view>
				
				<!-- <view class="flex">
					<view class="flex-sub border-grey   padding-sm margin-xs radius text-lg">
						<text>状态:</text>
						<text class="text-blue">{{stu.status}}</text>
						
					</view>
					<view class="flex-sub border-grey   padding-sm margin-xs radius text-lg">
						<text>报名时间:</text>
						<text class="text-blue">{{stu.entryDate==null ? '':stu.entryDate}}</text>
					</view>
				</view> -->
				
				<view class="cu-form-group">
					<view class="title">状态:</view>
					<view class="full-width">
						<text>{{stu.status}}</text>
					</view>
				</view>
				<view class="cu-form-group">
					<view class="title">报名时间:</view>
					<view class="full-width">
						<text>{{stu.entryDate==null ? '':stu.entryDate}}</text>
					</view>
				</view>
				
				<!-- <view class="flex">
					<view class="flex-sub border-grey   padding-sm margin-xs radius text-lg">
						<text>报名校区:</text>
						<text class="text-blue">{{stu.companyCampus==null ? '' :stu.companyCampus.schoolName}}</text>
					
					</view>
					<view class="flex-sub border-grey   padding-sm margin-xs radius text-lg">
						<text>账单:</text>
						<text class="text-blue">{{stu.billNum==null?'':stu.billNum}}</text>
					</view>
				</view> -->
				
				<view class="cu-form-group">
					<view class="title">报名校区:</view>
					<view class="full-width">
						<text>{{stu.companyCampus==null ? '' :stu.companyCampus.schoolName}}</text>
					</view>
				</view>
				<view class="cu-form-group">
					<view class="title">账单:</view>
					<view class="full-width">
						<text>{{stu.billNum==null?'':stu.billNum}}</text>
					</view>
				</view>
				
				<!-- <view class="flex">
					<view class="flex-sub border-grey   padding-sm margin-xs radius text-lg">
						<text>有效回访:</text>
						<text class="text-blue">{{stu.visitCount==null?'':stu.visitCount}}</text>
					
					</view>
					<view class="flex-sub border-grey  padding-sm margin-xs radius text-lg">
						<text>备注:</text>
						<text class="text-blue">{{stu.remask}}</text>
					</view>
				</view> -->
				
				<view class="cu-form-group">
					<view class="title">有效回访:</view>
					<view class="full-width">
						<text>{{stu.visitCount==null?'':stu.visitCount}}</text>
					</view>
				</view>
				<view class="cu-form-group">
					<view class="title">备注:</view>
					<view class="full-width">
						<text>{{stu.remask}}</text>
					</view>
				</view>
				
				<!-- <view class="flex">
					
					<view class="flex-sub border-grey   padding-sm margin-xs radius text-lg">
						<text>文化分数:</text>
						<text class="text-blue">{{stu.score}}</text>
					</view>
					
					<view class="flex-sub border-grey   padding-sm margin-xs radius text-lg">
						<text>负责人:</text>
						<text class="text-blue">{{stu.holder==null ? '':stu.holder.name}}</text>
					</view>
				</view> -->
				
				<view class="cu-form-group">
					<view class="title">文化分数:</view>
					<view class="full-width">
						<text>{{stu.score}}</text>
					</view>
				</view>
				<view class="cu-form-group">
					<view class="title">负责人:</view>
					<view class="full-width">
						<text>{{stu.holder==null ? '':stu.holder.name}}</text>
					</view>
				</view>
				
				
				<!-- <view class="flex">
					<view class="flex-sub border-grey   padding-sm margin-xs radius text-lg">
						<text>录入人:</text>
						<text class="text-blue">{{stu.inputPerson==null ? '':stu.inputPerson.name}}</text>
					
					</view>
					<view class="flex-sub border-grey  padding-sm margin-xs radius text-lg">
						<text>录入时间:</text>
						<text class="text-blue">{{stu.inputDate}}</text>
					</view>
				</view> -->
				
				<view class="cu-form-group">
					<view class="title">录入人:</view>
					<view class="full-width">
						<text>{{stu.inputPerson==null ? '':stu.inputPerson.name}}</text>
					</view>
				</view>
				<view class="cu-form-group">
					<view class="title">录入时间:</view>
					<view class="full-width">
						<text>{{stu.inputDate}}</text>
					</view>
				</view>
				
				
				<view class="flex">
					<button @tap="prevent" :class="currentNum>1? 'bg-red':''" >上一页</button>
					<button @tap="next" class="bg-red">下一页</button>
				</view>
				
					<view class="cu-load load-modal" v-if="loadModal" >
				
						<view class="gray-text">加载中...</view>
				</view>
				
			</view>
			
		
	<!-- 	<view class="selected">
			<view class="selected-content">
				<span>修改</span>
				<span>报名</span>
				<span>续报名</span>
				<span>回访</span>
				<button type="primary" class="cu-btn">修改</button>
				<button type="primary" class="cu-btn">报名</button>
				<button type="primary" class="cu-btn">续报名</button>
				<button type="primary" class="cu-btn">回访</button>
			</view>
			
			<view class="selected-content">
				<span>优生</span>
				<span>分配负责老师</span>
				<span>学生状态修改</span>
			</view>
		</view> -->
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentNum:1,
				stu:null,
				dataList:null,
				pageType:null,
				loadModal:false,
				inputValue:'',
				enterModifyPage:false
			}
		},
		methods: {
			next()
			{
				
				this.loadModal=true;
				this.currentNum++;
				this.loadStudentInfo()
				
			},
			prevent()
			{
			
				if(this.currentNum>1)
				{
					this.currentNum--;
					this.loadModal = true;
					this.loadStudentInfo()
				}
			},
			
			loadStudentInfo()
			{
				let me = this
				let inputStr = encodeURI(this.inputValue)
				
				uni.request({
					url: this.serverUrl + '/stu/mystudent/'  + this.pageType + '/' + this.currentNum + '?name=' + inputStr + '&limit=1',
					method: 'GET',
					data: {},
					success: res => {
						
						if(this.stu!=null && this.stu.id==res.data[0].id)
						{
							uni.showToast({
								title: "到底了!"
							})
							this.currentNum--
							this.loadModal = false
							return
							
						}
						
						this.stu = res.data[0]
						this.loadModal = false
					},
					fail: () => {},
					complete: () => {}
				});
			},
			stuModify(id)
			{
				this.enterModifyPage = true
				uni.navigateTo({
					url:"../stu_modify/stu_modify?id=" + id
				})
			},
			// 标记优生
			setGood()
			{
				uni.request({
					url: this.serverUrl + '/stu/sign_cancel_good/' + this.stu.id,
					method: 'GET',
					data: {},
					success: res => {
						
						if(res.data.status==200)
						{
							uni.showToast({
								title: res.data.msg
							})
							return;
						}
						
						uni.showToast({
							title: "未知错误！"
						})
						
						
					},
					fail: () => {},
					complete: () => {}
				});
				
			},
	    //  跳转到回访页面
		returnVisit(id)	
		   {
				uni.navigateTo({
					url:"../stu_return_visit/stu_return_visit?id=" + id
				})
				
			},	
		// computed:{
		// 	hasPrevent:function(){
		// 		return{
		// 			'bg-red': true
		// 		}
		// 	}
		// },
		//跳转到分配负责教师页面
		allocationTeacher(id,name)
		{
			uni.navigateTo({
				url:"../stu_allocation_teacher/stu_allocation_teacher?id=" + id + "&name=" + name
			})
			
		},	
		onShow() {
			
			let me = this
			let inputStr = encodeURI(this.inputValue)
			if(this.enterModifyPage==true)
			{
				uni.request({
					url: this.serverUrl + '/stu/mystudent/'  + this.pageType + '/' + this.currentNum + '?name=' + inputStr + '&limit=1',
					method: 'GET',
					data: {},
					success: res => {
						this.enterModifyPage = false
						this.stu = res.data[0]
						
					},
					fail: () => {},
					complete: () => {}
				});
			}
			
		},
		onLoad(param)
		{
		
			this.pageType = param.type
			this.loadStudentInfo()
		},
		search()
		{
			this.currentNum=1
			
			this.loadStudentInfo()
		},
		}
	}
</script>

<style>
	@import url("holder.css");
</style>
