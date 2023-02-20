<template>
	<el-container>
		<el-aside width="200px">
			<div class="top-title">基于Vue的线上考试系统</div>
			<el-menu class="el-menu-vertical-demo" background-color="#404962" text-color="#fff"
				active-text-color="#fff">
				<el-menu-item index="1" @click="topage(1)">
					<i class="el-icon-document"></i>
					<span style="color: #fff;">成绩概览</span>
				</el-menu-item>
				<el-menu-item index="2" @click="topage(2)">
					<i class="el-icon-menu"></i>
					<span style="color: #fff;">个人信息</span>
				</el-menu-item>
			</el-menu>
		</el-aside>
		<el-main>
			<!-- 路由的缓存，include表示只缓存My路由 -->
			<keep-alive :include="['My']">
				<router-view />
			</keep-alive>
			<!-- <TabBar /> -->
		</el-main>
	</el-container>
</template>

<script>
	import Home from '../views/home/Home.vue'
	export default {
		name: 'Main',
		methods:{
			topage(id){
				console.log(id)
				if(id==1){
					this.$router.push('/main/home')
				}
				if(id==2){
					this.$router.push('/main/my')
				}
			}
		},
		components: {
			Home
		},
		data() {
			return {

			};
		},
		computed: {},
	}
</script>
<style scoped>
	.el-container {
		height: 100vh;
	}

	.el-aside {
		background-color: #404962;
	}

	.top-title {
		height: 60px;
		line-height: 60px;
		display: flex;
		justify-content: center;
		background-color: #404962;
		color: #fff;
	}

	.el-menu {
		background-color: #404962;
		color: #fff;
		border-right: 0px;
	}


	.el-menu-item-group {
		color: #fff;
	}

	.el-menu-item {
		color: #fff;
	}

	.el-menu-item:hover {
		background: #2e343d;
	}

	.el-card__body,
	.el-main {
		padding: 0px;
		background: #fff;
	}
</style>
