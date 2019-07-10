<template>
	<view>
		<view class="cu-timeline" v-for="item in cultureTeacherLedgerList" :key="item.id">
			<view class="cu-time">{{item.inputDate}}</view>
			
			<view class="cu-item text-blue">
				<view class="bg-blue content">
					<!-- <text>{{item.joint.name + "--"}}</text>
					<text>{{item.cultureTeacherInfo==null ? '' :item.cultureTeacherInfo.name }}</text>
					<br/> -->
					<view class="cu-capsule radius">
						<view class="cu-tag bg-cyan">{{item.joint.name}}</view>
						<view class="cu-tag bg-brown" :class="item.cultureTeacherInfo==null? 'hide': '' ">{{item.cultureTeacherInfo==null ? '' :item.cultureTeacherInfo.name}}</view>
					</view>
					</br>
					<rich-text :nodes="item.jointContent"></rich-text>
				</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cultureTeacherLedgerList:null
				
			}
		},
		methods: {
			
		},
		onLoad(param) {
			console.log(param.id)
			uni.request({
				url: this.serverUrl + '/led/teacher/ledger/json/' + param.id
				
			})
			.then(data=>{
				var [error,res] = data;
				console.log(res.data.length)
				this.cultureTeacherLedgerList = res.data
			})
			
		}
	}
</script>

<style>

</style>
