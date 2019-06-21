<template>
	<view>
		
		<view class="bg-white">
			<view class="flex">
				<view class="flex-sub border-grey  padding-sm margin-xs radius text-lg">
					<text>id:</text>
					<text class="text-blue">{{stu.id}}</text>
			
				</view>
				<view class="flex-sub border-grey   padding-sm margin-xs radius text-lg">
					<text>地区:</text>
					<text class="text-blue">{{stu.province + '-' + stu.city + '-' + stu.area}}</text>
				</view>
			</view>
			
			<view class="flex">
				<view class="flex-sub border-grey   padding-sm margin-xs radius text-lg">
					<text>学员姓名:</text>
					<text class="text-blue">{{stu.name}}</text>
				
				</view>
				<view class="flex-sub border-grey  padding-sm margin-xs radius text-lg">
					<text>意向度:</text>
					<text class="text-blue">{{stu.intentionLevel}}</text>
				</view>
			</view>
			
			<view class="flex">
				<view class="flex-sub border-grey   padding-sm margin-xs radius text-lg">
					<text>来源渠道:</text>
					<text class="text-blue">{{stu.dicCode==null ? '' : stu.dicCode.dicName}}</text>
				
				</view>
				<view class="flex-sub border-grey   padding-sm margin-xs radius text-lg">
					<text>意向专业:</text>
					<text class="text-blue">{{stu.cultureSchoolMajor==null ? '' : stu.cultureSchoolMajor.majorName}}</text>
				</view>
			</view>
			
			<view class="flex">
				<view class="flex-sub border-grey  padding-sm margin-xs radius text-lg">
					<text>年级:</text>
					<text class="text-blue">{{stu.grade}}</text>
				
				</view>
				<view class="flex-sub border-grey   padding-sm margin-xs radius text-lg">
					<text>学校:</text>
					<text class="text-blue">{{stu.cultureSchool==null ? '': stu.cultureSchool.schoolName}}</text>
				</view>
			</view>
			
			<view class="flex">
				<view class="flex-sub border-grey   padding-sm margin-xs radius text-lg">
					<text>状态:</text>
					<text class="text-blue">{{stu.status}}</text>
				
				</view>
				<view class="flex-sub border-grey   padding-sm margin-xs radius text-lg">
					<text>报名时间:</text>
					<text class="text-blue">{{stu.entryDate==null ? '':stu.entryDate}}</text>
				</view>
			</view>
			
			<view class="flex">
				<view class="flex-sub border-grey   padding-sm margin-xs radius text-lg">
					<text>报名校区:</text>
					<text class="text-blue">{{stu.companyCampus==null ? '' :stu.companyCampus.schoolName}}</text>
				
				</view>
				<view class="flex-sub border-grey   padding-sm margin-xs radius text-lg">
					<text>账单:</text>
					<text class="text-blue">{{stu.billNum==null?'':stu.billNum}}</text>
				</view>
			</view>
			
			<view class="flex">
				<view class="flex-sub border-grey   padding-sm margin-xs radius text-lg">
					<text>有效回访:</text>
					<text class="text-blue">{{stu.visitCount==null?'':stu.visitCount}}</text>
				
				</view>
				<view class="flex-sub border-grey  padding-sm margin-xs radius text-lg">
					<text>备注:</text>
					<text class="text-blue">{{stu.remask}}</text>
				</view>
			</view>
			
			<view class="flex">
				<view class="flex-sub border-grey   padding-sm margin-xs radius text-lg">
					<text>录入人:</text>
					<text class="text-blue">{{stu.inputPerson==null ? '':stu.inputPerson.name}}</text>
				
				</view>
				<view class="flex-sub border-grey  padding-sm margin-xs radius text-lg">
					<text>录入时间:</text>
					<text class="text-blue">{{stu.inputDate}}</text>
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
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
