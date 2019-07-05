<template>
	<view class="container">
			<form class="form" @submit="formSubmit">
				
		<uni-collapse accordion="true" animation="true">
	    <uni-collapse-item title="基本信息" animation="true">
	        <view style="padding: 16upx;">
	            <view class="form-item">
	            	<input type="text" name="name" :value="stuInfo.name" placeholder="请输入姓名" />
	            </view>
	            
	            <view class="form-item">
	            	 <view class="uni-padding-wrap">
						 
						<view>
							<radio-group name="gender">
								<label class="radio"><radio  value="1" :checked="stuInfo.gender==1" />男</label>
								<label class="radio"><radio  value="0" :checked="stuInfo.gender==0" />女</label>
							</radio-group>
						</view>
					</view>
	            </view>
	            
	            <view class="form-item">
	            	<input type="text" name="phoneNumber" :value="stuInfo.phoneNumber" placeholder="手机号" />
	            </view>
	            
	            <view class="form-item">
	            	<input type="text" name="qqNumber" :value="stuInfo.qqNumber" placeholder="QQ号" />
	            </view>
	            
	            <view class="form-item">
	            	<input type="text" name="wechatNumber" :value="stuInfo.wechatNumber" placeholder="微信号" />
	            </view>
	            
	            <view class="form-item">
	            	<input type="text" name="address" :value="stuInfo.address" placeholder="家庭住址" />
	            </view>
			
				
				<view class="form-item">
	<!-- 				<view class="tab" :class="[{'active':index==tabIndex}]" @tap="toggleTab(4)" v-for="(item,index) in tabList" :key="index">{{item.name}}</view>
	 -->
					<!-- <input type="text" :value="location" @tap="toggleTab(4)"   placeholder="省市区" /> -->		
					<span @tap="toggleTab(4)" >
					省市区:<text>{{location}}</text>
					</span>		
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
					
				</view>
				
				<view class="form-item">
					<picker mode="date" @change="selectedBirthday">
						<!-- <input type="text"  name="birthday" :value="stuInfo.birthday" placeholder="出生日期"/> -->
						出生日期:<text>{{birthday == null? '': birthday}}</text>
					</picker>
				</view>
				
				
				<view class="form-item">
					<input type="text" :value="stuInfo.score" name="score" placeholder="文化分数" />
				</view>
				
				<view class="form-item">
					<input type="text" :value="stuInfo.height" name="height" placeholder="身高/cm" />
				</view>
				
				<view class="form-item">
					<input type="text" :value="stuInfo.weight" name="weight" placeholder="体重/kg" />
				</view>
				
				<view class="form-item">
					<input type="text" :value="stuInfo.idNumber" name="idNumber" placeholder="身份证号" />
				</view>
				
	        </view>
	    </uni-collapse-item>
		
		
	    <uni-collapse-item class="setting" title="学校信息" animation="true">
			
			<view style="padding: 16upx;">
				<view class="form-item">
				  <picker mode="selector" :range="schools" :value="selectedSchoolIndex" range-key="schoolName" @change="selectSchool" >
					<!-- 	<input type="text" :value="selectedSchoolName"  placeholder="文化学校" /> -->
						文化学校:<text>{{selectedSchoolName ==null? '':selectedSchoolName}}</text>
				   </picker>
				</view>
				
				<view class="form-item">
					<view class="uni-title">班级</view>
					<view>
						<slider :value="stuInfo.classNumber" min="1" max="30"  show-value  @change="selectClassNumber"/>
					</view>
				</view>
				
				<view class="form-item">
					<view class="uni-title">年级</view>
					<view>
						<slider :value="stuInfo.grade" min="2015" max="2025" show-value @change="selectGrade"/>
					</view>
				</view>
				
				<view class="form-item">
					
					<input type="text" :value="stuInfo.subject" placeholder="副科(选填三门)" />
				</view>
			</view>
			
	    </uni-collapse-item>
	 <!--   <uni-collapse-item class="setting" title="紧急联系人信息" animation="true">
			<view style="padding: 16upx;">
				<view class="form-item">
					<picker mode="selector" :range="relationShip" @change="selectRelationShip">
						<input type="text" :value="selectedRelationShip" name="relationship"  placeholder="关系" />
					</picker>
				</view>
				
				<view class="form-item">
					<input type="text" value="" name="cName" placeholder="姓名" />
				</view>
				
				<view class="form-item">
					<input type="text" value="" name="cPhoneNumber" placeholder="电话" />
				</view>
				
				<view class="form-item">
					<input type="text" value="" name="cQqNumber" placeholder="QQ" />
				</view>
				
				<view class="form-item">
					<input type="text" value="" name="cWechatNumber" placeholder="微信" />
				</view>
				
				<view class="form-item">
					<input type="text" value="" name="cOccupation" placeholder="职业" />
				</view>
				
				<view class="form-item">
					<input type="text" value="" name="workUnit" placeholder="工作单位" />
				</view>
			</view>
			
	    </uni-collapse-item> -->
		
		 <uni-collapse-item class="setting" title="资讯信息" animation="true">
			 
			<view style="padding: 16upx;">
				<view class="form-item">
					<picker mode="selector" :range="resourceFormTypes" range-key="dicName" @change="selectResourceFrom">
						<!-- <input type="text" :value="selectedResourceFromName" placeholder="来源渠道" /> -->
						来源渠道:<text>{{selectedResourceFromName ==null? '':selectedResourceFromName}}</text>
					</picker>
				</view>
				
				<view class="form-item">
					<picker mode="selector" :range="cultureSchoolTeachers" range-key="name" @change="selecteTeacher">
						推荐班主任:<text>{{selectedCultureTeacherName == null? '':selectedCultureTeacherName}}</text>
					</picker>
					
				</view>
				
				<view class="form-item">
					<input type="text" name="recommendRemask" :value="stuInfo.recommendRemask" placeholder="推荐备注" />
				</view>
				
				<view class="form-item">
					<input type="text" value="意向专业" />
				</view>
				
				<view class="form-item">
					<picker mode="selector" :range="intentionLevel" @change="selectIntentionLevel">
					<!-- 	<input type="text" :value="selectedIntentionLevel" name="intentionLevel" placeholder="意向等级" /> -->
						意向等级:<text>{{selectedIntentionLevel == null? '':selectedIntentionLevel}}</text>
					</picker>
				</view>
				
				<view class="form-item">
					<picker mode="date" @change="selectVisitDate" @confirm="selectVisit">
						<!-- <input type="text" name="visitDate" :value="stuInfo.visitDate" placeholder="参观时间"/> -->
						参观时间:<text>{{selectedVisitDate == null? '':selectedVisitDate}}</text>
					</picker>
				</view>
				
				<view class="form-item">
					<view class="uni-textarea">
						<textarea :value="stuInfo.remask" name="remask" placeholder="咨询备注" />
					</view>
				</view>
			</view>
		</uni-collapse-item>
	</uni-collapse>
			<button form-type="submit" type="primary">提交</button>
			</form>
		</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
	
	export default {
		data() {
			return {
				id:null,
				stuInfo:null,
				selectedIntentionLevel:null,
				intentionLevel:['A','B','C'],
				selectedRelationShip:null,
				relationShip:['父亲','母亲','哥哥','姐姐'],
				selectedVisitDate:null,
				province:null,
				city:null,
				area:null,
				classNumber:null,
				grade:null,
				selectedCultureTeacherName:null,
				selectedCultureTeacherId:null,
				cultureSchoolTeachers:null,
				selectedResourceFromName:null,
				selectedResourceFromId:null,
				resourceFormTypes:null,
				birthday:null,
				selectedSchoolName:null,
				selectedSchoolId:null,
				selectedSchoolIndex:4,
				array: ['中国', '美国', '巴西', '日本'],
				schools:null,
				location:'',
				title: 'Hello',
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
					mode:"region",
					name:"省市区",
					value:[10,0,5]
				},
				{
					mode:"selector",
					name:"单列选择",
					value:[1]
				}],
				tabIndex:0,
				selectList:[{
					label:"男",
					value:0
				},{
					label:"女",
					value:1
				}],
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
			// 省市区
			onConfirm(val){
				console.log(val);
				this.location = val.checkArr[0] + '/' + val.checkArr[1] + '/' + val.checkArr[2]
				this.province = val.checkArr[0]
				this.city     = val.checkArr[1]
				this.area =  val.checkArr[2]
				this.resultInfo=val;
			},
			selectSchool(e){
				var currentSchool = this.schools[e.detail.value]
				this.selectedSchoolName = currentSchool.schoolName
				this.selectedSchoolId = currentSchool.id
				uni.request({
					header:{
						"cookie":uni.getStorageSync("userCookie")
					},
					// url: 'http://localhost:8080/stu/school/teacher/' + this.selectedSchoolId,
					url: this.serverUrl + '/stu/school/teacher/' + this.selectedSchoolId,
					method: 'GET',
					data: {},
					success: res => {
						console.log(res.data)
						this.cultureSchoolTeachers = res.data;
					},
					fail: () => {},
					complete: () => {}
				});
				
			},
			// 提交表单
			// 文化学校 紧急联系人关系 来源渠道 推荐班主任 意向专业 意向等级
			formSubmit(e){
				console.log(e.detail.value);
				var data = e.detail.value;
				data.id = this.id;
				data.province = this.province;
				data.city = this.city;
				data.area = this.area;
				data.schoolId = this.selectedSchoolId;
				data.classNumber = this.classNumber;
				data.chanel = this.selectedResourceFromId
				data.recommend_id = this.selectedCultureTeacherId
				data.grade = this.grade;
				
				
				// 提交修改表单
				uni.request({
					header:{
						"cookie":uni.getStorageSync("userCookie")
					},
					url: this.serverUrl +  '/stu/mystudent',
					method: 'POST',
					data: data,
					success: res => {
						console.log(res.data)
					},
					fail: () => {
						
					},
					complete: () => {}
				});
				
				
			},
			
			selectedBirthday(e)
			{
				this.birthday = e.detail.value;
				this.stuInfo.birthday = e.detail.value;
			},
			selectResourceFrom(e)
			{
				var index = e.detail.value;
				var currentResourceFrom = this.resourceFormTypes[index];
				this.selectedResourceFromId = index;
				this.selectedResourceFromName = currentResourceFrom.dicName;
			},
			selecteTeacher(e)
			{
				var index = e.detail.value;
				var currentTeacher = this.cultureSchoolTeachers[index];
				this.selectedCultureTeacherId = currentTeacher.id;
				this.selectedCultureTeacherName = currentTeacher.name;
				
			},
			selectVisitDate(e)
			{
				this.selectedVisitDate = e.detail.value;
				this.stuInfo.visitDate = e.detail.value;
			},
			selectClassNumber(e)
			{
				
				this.classNumber = e.detail.value;
			},
			selectGrade(e)
			{
				
				this.grade = e.detail.value;
			},
			selectRelationShip(e)
			{
				
				this.selectedRelationShip = this.relationShip[e.detail.value]
			},
			selectIntentionLevel(e)
			{
				this.selectedIntentionLevel = this.intentionLevel[e.detail.value];
			}
			
			
			
		},
		computed:{
			mode(){
				return this.tabList[this.tabIndex].mode
				
			},
			defaultVal(){
				return this.tabList[this.tabIndex].value
			}
		},
		onLoad(param) {
			var me  = this;
			this.id = param.id
			
			
			
			
			// 获取所有文化学校信息
			uni.request({
				url: this.serverUrl + '/reception/schools',
				method: 'GET',
				data: {},
				header:{
					"cookie":uni.getStorageSync("userCookie")
				},
				success: res => {
					
					this.schools = res.data
					
				}
			});
			// 获取来源渠道信息
			// uni.request({
			// 	url:  this.serverUrl + '/sys/dic_info/type/10',
			// 	method: 'GET',
			// 	data: {},
			// 	header:{
			// 		"cookie":uni.getStorageSync("userCookie")
			// 	},
			// 	success: res => {
			// 		this.resourceFormTypes = res.data;
			// 	}
			// });
			
			uni.request({
				url: this.serverUrl + '/sys/dic_info/type/10'
			})
			.then(data =>{
				var [error, res]  = data;
				this.resourceFormTypes = res.data;
					uni.request({
					url: this.serverUrl + '/stu/mystudent/json/' + param.id,
					method: 'GET',
					data: {},
					success: res => {
						console.log(res.data)
						this.stuInfo = res.data;
						this.location = res.data.province + '/' + res.data.city + '/' + res.data.area;
						let hasCommandTeacher = res.data.holder!=null
						let response = res
						// 学生的文化学校信息不为空
						if(res.data.cultureSchool!=null)
						{
							
							this.selectedSchoolId = res.data.cultureSchool.id
							this.selectedSchoolName = res.data.cultureSchool.schoolName
							// 根据文化学校id 查询此文化学校下的所有教师 header info可删除 如项目移植小程序请自行实现
							// 
							uni.request({
								header:{
									"cookie":uni.getStorageSync("userCookie")
								},
								// url: 'http://localhost:8080/stu/school/teacher/' + this.selectedSchoolId,
								url: this.serverUrl + '/stu/school/teacher/' + this.selectedSchoolId,
								method: 'GET',
								data: {},
								success: res => {
									console.log(res.data)
									this.cultureSchoolTeachers = res.data;
									
									// 存在推荐教师
									if(response.data.recommendId!=null)
									{
										let teacherId = response.data.recommendId
										let teacherIndex = this.cultureSchoolTeachers.findIndex(item => item.id==teacherId)
										this.selectedCultureTeacherId = response.data.recommendId
										this.selectedCultureTeacherName = this.cultureSchoolTeachers[teacherIndex].name
										
									}
								},
								fail: () => {},
								complete: () => {}
							});
						}
						// 学生的来源渠道不为空
						if(res.data.dicCode!=null)
						{
							let fromId = res.data.dicCode.id
							
							var fromIndex = this.resourceFormTypes.findIndex(item => item.id ==fromId)
							this.selectedResourceFromId = fromId
							this.selectedResourceFromName = this.resourceFormTypes[fromIndex].dicName
						}
						
						
						if(res.data.intentionLevel!=null)
						{
							let index = this.intentionLevel.findIndex(item =>item ==res.data.intentionLevel)
							
							this.selectedIntentionLevel = this.intentionLevel[index]
						}
						
						
						
					},
					fail: () => {},
					complete: () => {}
				});
				
				

			})
			
			
			
			// 获取学生信息
		
			
		}
	}
</script>

<style>
	@import url("stu_modify.css");

</style>
