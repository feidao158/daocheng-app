<template>
		<view class="container">
			<form class="form" @submit="formSubmit">
	        <view style="padding: 16upx;">
				
	            <view class="form-item">
	            	<input type="text" name="id" :value="id" placeholder="id" />
	            </view>
				
				 <view class="form-item">
					<input type="text" name="name" :value="name" placeholder="姓名"/>
				</view>
		
				<view class="form-item">
				   <picker mode="selector" :range="teacher" range-key="name" @change="selectTeacher" >
					<!-- 	<input type="text" :value="teacherName"  placeholder="负责教师" /> -->
					负责教师:<text>{{teacherName == null? '' : teacherName}}</text>
				   </picker>
				</view>
				
			</view>
			
			
			<button form-type="submit" type="primary">提交</button>
			</form>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				id:null,
				name:null,
				
				teacher:null,
				currentTeacher:null,
				holdId:null,
				teacherName:null,
				
				students:[],
			
				
			}
		},
		methods: {
			
			//教师信息
			selectTeacher(e)
			{
			   let index = e.detail.value
			   let currentTeacher = this.teacher[index]
			   this.teacherName = currentTeacher.name
			   this.holdId = currentTeacher.id
				
			},
			
			
			//提交表单
			formSubmit(e){
			// 	console.log(e.detail.value);
			 // 	var data = e.detail.value;
				// console.log(data)
			// 
			// 	data.holdId = this.holdId
			// 	data.students = this.id
			this.students.push(this.id)
			console.log(this.holdId)
		 	
				uni.request({
					header:{
						"cookie":uni.getStorageSync("userCookie")
					},
					url: this.serverUrl +  '/stu/input_holder',
					method: 'POST',
					data: {
					  holdId:this.holdId,
					  students:this.students
					},
					success: res => {
						console.log(res.data)
					},
					fail: () => {},
					complete: () => {}
				});
				
				
			},
			
			
			
			onLoad(param)
			{
				var me  = this;
				console.log(param.id)
				console.log(this.id)
				this.id = param.id;
				console.log(param.name)
				console.log(this.name)
				this.name = param.name;
				
				// 负责教师信息
				uni.request({
					url: this.serverUrl + '/stu/select_all_teacher',
					method:'GET',
					data:{},
					success: res => {
						this.teacher = res.data
					},
				})
				console.log("zahuishixiaolaodi")
			}
		}
	}
</script>

<style>
   	@import url("stu_modify.css");
</style>
