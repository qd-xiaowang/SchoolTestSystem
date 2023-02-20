<template>
	<!-- 侧边栏列表 -->
	<div>
		<el-container style="height: 100vh;">
			<el-aside width="200px" style="background-color:#404962;color:#fff;">
				<div class="top-title">基于Vue的线上考试系统</div>
				<el-menu router unique-opened :default-active="$route.path">
					<el-menu-item-group>
						<el-menu-item index="/admin_main/main">
							学校概览
						</el-menu-item>
					</el-menu-item-group>
					<!-- </el-submenu> -->
					<el-submenu index="2">
						<template slot="title">学生模块</template>
						<el-menu-item-group>
							<template slot="title">教师模块</template>
							<el-menu-item index="/admin_main/admin/create">添加教师</el-menu-item>
							<el-menu-item index="/admin_main/admin/list">教师列表</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="学生模块">
							<el-menu-item index="/admin_main/student/create">添加学生</el-menu-item>
							<el-menu-item index="/admin_main/student/list">学生列表</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title">学院模块</template>
						<el-menu-item-group>
							<template slot="title">学院</template>
							<el-menu-item index="/admin_main/college/create">添加学院</el-menu-item>
							<el-menu-item index="/admin_main/college/list">学院列表</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="专业">
							<el-menu-item index="/admin_main/profession/create">添加专业</el-menu-item>
							<el-menu-item index="/admin_main/profession/list">专业列表</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="班级">
							<el-menu-item index="/admin_main/class/create">添加班级</el-menu-item>
							<el-menu-item index="/admin_main/class/list">班级列表</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="4">
						<template slot="title">课程模块</template>
						<el-menu-item-group>
							<template slot="title">课程</template>
							<el-menu-item index="/admin_main/course/create">添加课程</el-menu-item>
							<el-menu-item index="/admin_main/course/list">课程列表</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="5">
						<template slot="title">试卷模块</template>
						<el-menu-item-group title="试题">
							<el-menu-item index="/admin_main/test_paper/create">添加试卷</el-menu-item>
							<el-menu-item index="/admin_main/test_paper/list">试卷列表</el-menu-item>
							<el-menu-item index="/admin_main/published_paper/list">已发试卷</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="6">
						<template slot="title">成绩模块</template>
						<el-menu-item-group>
							<el-menu-item index="/admin_main/college_card/list">成绩管理</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="7">
						<template slot="title">管理员模块</template>
						<el-menu-item-group>
							<el-menu-item index="/admin_main/my">查询个人信息</el-menu-item>
							<el-menu-item index="/admin_main/set_pwd">修改密码</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
			</el-aside>
			<el-container>
				<!-- 顶部栏 -->
				<el-header style=" font-size: 12px;display: flex;justify-content: space-between;background-color: #eee;">
					<div>
						<span style="font-size: 14px;"><span style="font-weight: 600;">{{ username }}</span>&nbsp;&nbsp;教师，欢迎您登录考试系统</span>
					</div>
					<div>
					<el-dropdown style="margin-right: 10px;">
						<el-button type="text">个人设置</el-button>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item @click.native="getPersonage">个人信息</el-dropdown-item>
							<el-dropdown-item @click.native="exitLogin">退出登录</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
					<img :src="icon" alt="" class="adminIcon" v-if="icon" />
					<img src="~assets/img/头像.jpg" alt="" class="adminIcon" v-else />
					</div>
				</el-header>
				<el-main>
					<router-view />
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>
<script>
	export default {
		name: "AdminMain",
		data() {
			return {
				username: "",
				icon: ""
			}
		},
		methods: {
			//退出登录
			exitLogin() {
				localStorage.clear();
				this.$router.replace('/login');
			},
			//路由跳转到个人信息页
			getPersonage() {
				this.$router.push("/admin_main/my");
			},
			//获取个人信息
			async getMy() {
				const res = await this.$http.get(`rest/admin_users/admin`); //自定义携带的参数
				this.username = res.data.name;
				this.icon = res.data.icon;
			}
		},
		// 在页面创建的时候调用getMy()这个函数
		created() {
			this.getMy()
		},
	};
</script>
<style>
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
	
	.el-submenu__title {
		color: #fff;
	}
	
	.el-submenu__title:hover {
		background: #2e343d;
	}

	.el-header {
		background-color: #b3c0d1;
		color: #333;
		line-height: 60px;
	}

	.el-aside {
		background-color: #404962;
		color: #fff;
	}

	.adminIcon {
		position: relative;
		top: 15%;
		left: 1%;
		height: 30px;
		border-radius: 50%;
		width: 30px;
		overflow: hidden;
	}

</style>
