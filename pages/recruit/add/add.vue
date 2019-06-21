<template>
	<view class="body">
		
	
	<view class="container">
			<uni-collapse accordion="true" animation="true">
			
			<uni-collapse-item title="基本信息">
				<view class="cu-form-group margin-top">
					<view class="title">姓名</view>
					<input placeholder="" name="input"></input>
				</view>
				
				<view class="cu-form-group">
					<view class="title">性别</view>
					<radio-group>
						 <label class="radio"><radio value="r1" checked="true" />选中</label>
						 <label class="radio"><radio value="r2" />未选中</label>
					</radio-group>
				</view>
				
				
				<view class="cu-form-group">
					<view class="title">手机号</view>
					<input type="text" name="phoneNumber" value=""/>
					
				</view>
				
				<view class="cu-form-group">
					<view class="title">QQ号</view>
					<input type="text" name="qqNumber" value=""/>
					
				</view>
				
				<view class="cu-form-group">
					<view class="title">微信号</view>
					<input type="text" name="wechatNumber" value=""/>
				</view>
				
				<view class="cu-form-group">
					<view class="title">家庭住址</view>
					<input type="text" name="address" value=""/>
				</view>
				
				<view class="cu-form-group">
					<view class="title">省市区</view>
								<input type="text" :value="location" @tap="toggleTab(4)"   placeholder="省市区" />
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
				
				
				
				
			</uni-collapse-item>
			
			<uni-collapse-item title="学校信息">
				<view style="padding: 30upx;">
					手风琴效果
				</view>
			</uni-collapse-item>
			
			<uni-collapse-item title="紧急联系人信息">
				<view style="padding: 30upx;">
					手风琴效果
				</view>
			</uni-collapse-item>
			
			<uni-collapse-item title="咨询信息">
				<view style="padding: 30upx;">
					手风琴效果
				</view>
			</uni-collapse-item>
			
</uni-collapse>
		
		
		</view>
	
	</view>
</template>

<script>
	import {uniCollapse,uniCollapseItem} from "@dcloudio/uni-ui"
	import wPicker from "@/components/w-picker/w-picker.vue";
	
	export default {
		data() {
			return {
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
		methods: {
			toggleTab(index){
				this.tabIndex=index;
				console.log(this.$refs.picker)
				this.$refs.picker.show();
			},
			onConfirm(val){
				console.log(val);
				this.location = val.checkArr[0] + '/' + val.checkArr[1] + '/' + val.checkArr[2]
				this.province = val.checkArr[0]
				this.city     = val.checkArr[1]
				this.area =  val.checkArr[2]
				this.resultInfo=val;
			}
		},
		components:{
			uniCollapse,uniCollapseItem,wPicker
		},
		computed:{
			mode(){
				return this.tabList[this.tabIndex].mode
			},
			defaultVal(){
				return this.tabList[this.tabIndex].value
			}
		}
	}
</script>

<style>
	.container{
		margin: 0 10%;
		
	}
	.body{
		width: 100%;
		height: 9999upx;
		background: #fff;
	}
	
	.title{
		min-width: 27%;
	}

</style>
