<template>
	<view class="container">
			<form class="form" @submit="formSubmit">
	        <view style="padding: 16upx;">
	            <view class="form-item">
	            	<input type="text" name="id" :value="stuId" placeholder="id" />
	            </view>
	        
			<w-picker 
				:mode="selectedMode" 
				startYear="2019" 
				endYear="2030" 
				step="1" 
				:current="false" 
				@confirm="onConfirm" 
				ref="picker" 
				themeColor="#f00"
				:selectList="selectList"
			></w-picker>
			
			<view class="form-item">
			   <picker mode="selector" :range="visitType" @change="selectVisitType">
					<input type="text" :value="visitTypeId" name="visitType" placeholder="回访类型" />
			   </picker>
			</view>
			
			<view class="form-item">
			   <picker mode="selector" :range="visitDirection" @change="selectVisitDirection" >
					<input type="text" :value="visitDirectionId" name="visitDirection"  placeholder="回访方向" />
			   </picker>
			</view>
			
			<view class="form-item">
				<view class="uni-textarea">
					<textarea value="" name="paidDetails" placeholder="回访内容" />
				</view>
			</view>
		
			<view class="form-item">
				<picker mode="date" @change="visitReturnTime">
					<input type="text"  name="paidDate" :value="paidDate" placeholder="回访时间"/>
				</picker>
			</view>
			
			<view class="form-item">
			   <picker mode="selector" :range="dicCode" range-key="dicName" @change="selectDicCodeId" >
					<input type="text" :value="dicCodeName"  placeholder="回访状态" />
			   </picker>
			</view>
			
			<w-picker mode="date" startYear="2018" endYear="2019" 
			:defaultVal="defaultVal2" :current="true" @confirm="onConfirm2" 
			ref="picker2" themeColor="#f00" 
			:selectList="selectList2"></w-picker>

			<view class="form-item">
				<picker mode="date" @change="visitReturnTimeNext">
					<input type="text"  name="nextDate" :value="nextDate" placeholder="下次回访"/>
				</picker>
			</view>
			</view>
			<button form-type="submit" type="primary">提交</button>
			</form>
		</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
	
	export default {
		data() {
			return {
				dicCode:null,
				dicCodeId:null,
				dicCodeName:null,
				
				visitType : ['电话','微信','QQ'],
				visitTypeId:null,
	
				visitDirection:['我联系学员','学员联系我'],
	            visitDirectionId:null,
							
				paidDate : null,
				nextDate : null,
				
				stuId:null,
				
				// studentId:null,
			
				tabList:[{
					mode:"date",
					name:"日期选择",
					value:[0,1,3]
				},{
					mode:"yearMonth",
					name:"年月",
					value:[0,1]
				},{
					mode:"dateTime",
					name:"日期时间选择",
					value:[1,1,1,1,2,5]
				},{
					mode:"time",
					name:"时间选择",
					value:[1,1,0]
				},
				{
					mode:"selector",
					name:"单列选择",
					value:[1]
				}],
				tabIndex:0,
				resultInfo:{
					result:""
				},
				selectedMode:'region'
				}
		},
		components:{
			wPicker
		},
		methods: {
			toggleTab(index){
				this.tabIndex=index;
				console.log(this.$refs.picker)
				this.$refs.picker.show();
			},
			selectVisitType(e)
			{
				this.visitTypeId = this.visitType[e.detail.value]
			},
			
			selectVisitDirection(e)
			{
				this.visitDirectionId = this.visitDirection[e.detail.value]
			},
			visitReturnTime(e)
			{
				this.paidDate = e.detail.value
			},
			visitReturnTimeNext(e)
			{
				this.nextDate = e.detail.value
			},
			// 提交表单
			// 文化学校 紧急联系人关系 来源渠道 推荐班主任 意向专业 意向等级
			formSubmit(e){
				console.log(e.detail.value);
				var data = e.detail.value;
			
				data.paidStatus = this.dicCodeId
				
				uni.request({
					header:{
						"cookie":uni.getStorageSync("userCookie")
					},
					url: this.serverUrl +  '/stu/student_visit',
					method: 'POST',
					data: data,
					success: res => {
						console.log(res.data)
					},
					fail: () => {},
					complete: () => {}
				});
				
				
			},
			//回访状态
			selectDicCodeId(e)
			{
			   let index = e.detail.value
			   let currentDicCode = this.dicCode[index]
			   this.dicCodeName = currentDicCode.dicName
			   this.dicCodeId = currentDicCode.id
				
			},
		computed:{
			mode(){
				return this.tabList[this.tabIndex].mode
				
			},
			defaultVal(){
				return this.tabList[this.tabIndex].value
			}
		}
		
	  },
	   onLoad(param)
	   {
	   	var me  = this;
	   	console.log(this.studentId)
	   	console.log(param.id)
		this.stuId = param.id
	   	// 获取 回访状态
	   	uni.request({
	   		url: this.serverUrl + '/stu/select_dicCode',
	   		method:'GET',
	   		data:{},
	   		success: res => {
	   			console.log(res)
	   			console.log(res.data)
	   			this.dicCode = res.data
	   		},
	   	})
	   	console.log("zahuishixiaolaodi")
	    }
	}
</script>

<style>
	@import url("stu_modify.css");
</style>
