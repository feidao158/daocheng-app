<template>
	<view class="bg-white">
		<view class="zw-container">
			<form @submit="formSubmit">
			
				
				<view class="form-item">
					<input type="text" name="name"  value="" placeholder="姓名" />
				</view>
				
				<view class="form-item">
					<radio-group name="gender"  >
						<label class="radio"><radio  value="1" checked="true" />男</label>
						<label class="radio"><radio  value="0" />女</label>
					</radio-group>
				</view>
				
				<view class="form-item">
					
					<picker class="list-right" mode="selector" :range="positionList"   @change="positionSelected">
						<view class="yg-margin-top">{{position==null? '请选择': position }}</view>
					</picker>
				</view>
				
			<view class="form-item margin-top">
				<view class="uni-title">负责年级:</view>
				<view>
					<slider name="grade" min="2015" max="2025" value="2018" show-value @change="selectGrade"/>
				</view>
			</view>
				
				
				<view class="form-item">
					<view class="uni-title">负责班级:</view>
					<view>
							<slider name="classes" min="1" max="30" value="1" show-value  @change="selectClassNumber"/>
					</view>
				</view>
				
				<view class="form-item">
					
					<input name="phoneNumber" type="text"  value="" placeholder="电话" />
				</view>
				
				<view class="form-item">
					
					<input name="qqNumber" type="text" value="" placeholder="QQ" />
				</view>
				
				<view class="form-item">
				
					<input type="text" name="wechatNumber"  value="" placeholder="微信" />
				</view>
				
				
				<button type="primary" form-type="submit">提交</button>
				
			</form>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				positionList:['校长秘书','班主任','年级主任','普通老师','校长'],
				position:null,
				grade:null,
				classNumber:null,
				schoolId:null

			}
		},
		methods: {
			positionSelected(e)
			{
				this.position = this.positionList[e.target.value]
			},
			selectGrade(e)
			{
				console.log(e.target.value)
				this.grade = e.target.value
			},
			selectClassNumber(e)
			{
				console.log(e.target.value)
				this.classNumber = e.target.value
			},
			formSubmit(e)
			{
			
				var object = e.detail.value
				object.schoolId = this.schoolId
				obj.position = this.position
				
				uni.request({
					url: this.serverUrl + '/led/teacher_info/form',
					method: 'POST',
					dataType:"json",
					data: object,
					success: res => {
						uni.navigateBack({
							delta:1
						})
					},
					fail: () => {},
					complete: () => {}
				});
			}
			
		},
		onLoad(param) {
			this.schoolId = param.id
		}
	}
</script>

<style>

</style>
