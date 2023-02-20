<!-- 登录页面 -->
<template>
	<div class="login-container">
		<el-card class="my_card">
			<!-- @submit.native.prevent="login('form')" 提交之后不刷新页面 -->
			<el-form @submit.native.prevent="login('form')" :rules="rules" ref="form" :model="model" class="login-card">
				<!-- 登录账户 -->
				<el-form-item label="教师账户：" prop="username">
					<el-input v-model="model.username"></el-input>
				</el-form-item>
				<!-- 密码 -->
				<el-form-item label="密码：" prop="password">
					<el-input type="password" v-model="model.password"></el-input>
				</el-form-item>
				<el-form-item>
				<!-- 登录按钮 -->
					<el-button type="primary" native-type="submit" class="submit_button">登录</el-button>
				</el-form-item>
			</el-form>
		</el-card>
	</div>
</template>
<script>
	export default {
		// 数据
		data() {
			return {
				options: [{
					value: 'admin',
					label: '管理员'
				}, 
				],
				value: 'admin',
				model: {},
				// 验证规则
				rules: {
					tId: [{
						required: true,
						// 如果没输入会显示 请输入教师编号 
						message: '请输入教师编号',
						trigger: 'blur'
					}],
					username: [{
						required: true,
						message: '请输入用户名',
						trigger: 'blur'
					}],
					password: [{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					}],
				}
			}
		},
		methods: {
			//登录规则
			login(formName) {
				this.$refs[formName].validate(async (valid) => {
					//所有表单验证成功后进入
					if (valid) {
						const res = await this.$http.post(`${this.value}/login`, this.model)
						if (!res.data.user && !res.data.token && !res.data.t_token) {
							this.$message({
								type: 'error',
								message: '用户不存在或密码错误!'
							});
							return false;
						}
						//存储管理员的token
						// localStorage 本地存储
						if (this.value == "admin") {
							localStorage.a_token = res.data.token;
							this.$router.push('/admin_main');
						} else {
							localStorage.t_user = JSON.stringify(res.data); //必须先吧json数据转为字符串
							this.$router.push('/teacher_main');
						}

						this.$message({
							type: "success",
							message: '登录成功'
						})
					} else {
						this.$message({
							type: 'error',
							message: '登录失败!'
						});
						return false;
					}
				});
			},
		},

	}
</script>
<style>
	.login-container {
		height: 100vh;
		width: 100%;
		/* background-color: beige; */
		background-image: url(login.jpg);
		background-size: 100% 100%;
	}

	.my_card {
		position: relative;
		left: 50%;
		top: 50%;
		border-radius: 30px;
		width: 500px;
		transform: translate(-50%, -50%);
		opacity: 0.99;
	}

	.my_card h2 {
		text-align: center;
	}

	.submit_button {
		width: 100%;
		margin-top: 20px;
	}
</style>
