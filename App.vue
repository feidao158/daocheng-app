<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import "colorui/main.css";
    @import "colorui/icon.css";
	
	/*每个页面公共css */
	.page-container{
		width:100%;
		margin: 0 20%;
	}
	
	.test-border{
		border: red solid 1upx;
	}
	
	.full-width{
		width: 100%;
	}
	
	.nav-list {
		display: flex;
		flex-wrap: wrap;
		padding: 0px 40upx 0px;
		justify-content: space-between;
	}
	
	.nav-li {
		padding: 30upx;
		border-radius: 12upx;
		width: 45%;
		margin: 0 2.5% 40upx;
		background-image: url(https://cdn.nlark.com/yuque/0/2019/png/280374/1552996358352-assets/web-upload/cc3b1807-c684-4b83-8f80-80e5b8a6b975.png);
		background-size: cover;
		background-position: center;
		position: relative;
		z-index: 1;
	}
	
	.nav-li::after {
		content: "";
		position: absolute;
		z-index: -1;
		background-color: inherit;
		width: 100%;
		height: 100%;
		left: 0;
		bottom: -10%;
		border-radius: 10upx;
		opacity: 0.2;
		transform: scale(0.9, 0.9);
	}
	
	.nav-li.cur {
		color: #fff;
		background: rgb(94, 185, 94);
		box-shadow: 4upx 4upx 6upx rgba(94, 185, 94, 0.4);
	}
	
	.nav-title {
		font-size: 32upx;
		font-weight: 300;
	}
	
	.nav-title::first-letter {
		font-size: 40upx;
		margin-right: 4upx;
	}
	
	.nav-name {
		font-size: 28upx;
		text-transform: Capitalize;
		margin-top: 20upx;
		position: relative;
	}
	
	.nav-name::before {
		content: "";
		position: absolute;
		display: block;
		width: 40upx;
		height: 6upx;
		background: #fff;
		bottom: 0;
		right: 0;
		opacity: 0.5;
	}
	
	.nav-name::after {
		content: "";
		position: absolute;
		display: block;
		width: 100upx;
		height: 1px;
		background: #fff;
		bottom: 0;
		right: 40upx;
		opacity: 0.3;
	}
	
	.nav-name::first-letter {
		font-weight: bold;
		font-size: 36upx;
		margin-right: 1px;
	}
	
	.nav-li text {
		position: absolute;
		right: 30upx;
		top: 30upx;
		font-size: 52upx;
		width: 60upx;
		height: 60upx;
		text-align: center;
		line-height: 60upx;
	}
	
	.text-light {
		font-weight: 300;
	}
	
	@keyframes show {
		0% {
			transform: translateY(-50px);
		}
	
		60% {
			transform: translateY(40upx);
		}
	
		100% {
			transform: translateY(0px);
		}
	}
	
	@-webkit-keyframes show {
		0% {
			transform: translateY(-50px);
		}
	
		60% {
			transform: translateY(40upx);
		}
	
		100% {
			transform: translateY(0px);
		}
	}
	
	.half-content{
		
		width: 50%;
	}
	.tab-hide{
		display: none;
	}
	
	
	.tab-list{
		
	}
	
	.tab-list .tab-item{
		display: none;
	}
	
	.tab-list .tab-show{
		display: block;
	}
	
	.zw-container{
		padding: 6% 10%;
	}
	.zw-form-label{
		display: inline-block;
		width:20%;
		/* padding: 8upx 30upx; */
		margin-top:16upx;
		font-weight: 400;
		line-height: 20upx;
	}
	
	
	
	.zw-form-group{
		
	}
	
	
	.zw-form-input{
		width: 300upx;
		display: inline-block;
	}
	
	
	.list-teacher{
		display: flex;
		justify-content: space-between;
		margin-top:40upx;
	}
	.list-left{
		display: inline-block;
		width:20%;
		/* padding: 8upx 30upx; */
		margin-top:16upx;
		font-weight: 400;
		line-height: 20upx;
	}
	.list-right{
		display: inline-block;
		/* margin-left:40upx; */
		/* padding: 8upx 16upx; */
		width: 80%;
		line-height: 20upx;
	}
	.list-right input{
		border:1upx solid #ccc;
		padding-left:4upx;
		border-radius:4upx;
	}
	
	.list-right textarea{
		border:1upx solid #ccc;
		padding-left:6upx;
		border-radius:4upx;
		width: 100%;
		margin-bottom: 40upx;
	}
	
	.header{
		width: 100%;
		height: 300upx;
	}
	
	.header-image{
		width: 100%;
		height: 100%;
	}
	
	.row{
		width: 100%;
		text-align:center;
		margin-top:20upx;
	}

	.col-md-4{
		display: inline-block;
		width: 44%;
		margin:0  13upx 10upx 13upx;
		
	}
	.col-md-4 p{
		font-size:26upx;
		padding:16upx 0;
	}
	.col-md-4 image{
		width:50upx;
		height:50upx;
		margin-top:20upx;
	}
	.col-md-4>view{
		color:#fff;
		border-radius:8upx
	}
	.circle-yellow{
		background-color:#feb641;
		
	}
	.circle-green{
		background-color:#25c9bd;
		
		
	}
	.circle-purple{
		background-color:#c889d5;
	}
	
	.circle-pink{
		background-color:#fe727b ;
	}
	.circle-blue{
		background-color:#05c6e9;
	}
	/* .row .col-md-4:nth-of-type(1),.row .col-md-4:nth-of-type(3){
		border-bottom:1upx solid #e5e5e5;
	}
	.row .col-md-4:nth-of-type(2){
		border-bottom:1upx solid #e5e5e5;
		border-left:1upx solid #e5e5e5;
		border-right:1upx solid #e5e5e5;
	} */
	
	p{
		font-size: 16px;
	}
	
	
	.yg-margin-top{
		margin-top: 14upx;
	}
	
	.hide{
		display: none;
	}
	
	.border-grey{
		border: #E5E5E5 solid 1upx;
	}
	
	.form-item{
		border:1upx solid #ccc; 
		padding:8upx 12upx;
		margin:0 0 40upx 0;
		border-radius:8upx;
	}
	
	
	.cu-form-group {
		border-bottom:1upx solid #eee;
		padding-top:10upx;
		padding-bottom:10upx;
	}
	.cu-form-group .title {
		min-width: calc(4em + 24px);
		font-size:26upx;
	}
	.cu-form-group text {
		font-size:28upx;
		color:red;
	}
	
</style>
