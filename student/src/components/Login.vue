<template>
	<div class="login">
		<div class="border">
			<van-nav-bar title="欢迎登录线上考试系统"> </van-nav-bar>
		</div>
		<div class="loginItem-wrapped">
			<div class="loginItem">
				<span
					style="height: 46px;width: 100%;display: flex;align-items: center;justify-content: center;">登录学生账号</span>
				<van-form @submit="login">
					<div class="borderItem-wrapped">
						<div class="borderItem">
							<van-field v-model="model.sId" name="sId" label="学号：" placeholder="学号" />
						</div>
						<div class="borderItem">
							<van-field v-model="model.password" type="password" name="password" label="密码："
								placeholder="密码" />
						</div>
					</div>
					<div class="password">
					</div>
					<div style="width: 100%;display: flex;align-items: center;justify-content: center;">
						<div style="width: 300px;">
							<van-button round block type="info" native-type="submit" color="#65affd">登录</van-button>
						</div>
					</div>
				</van-form>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		name: 'Login',
		components: {},
		data() {
			return {
				model: {}
			};
		},
		computed: {},
		methods: {
			forgotPassword() {
				console.log('找回密码')
			},
			async login(values) {
				const res = await this.$http.post('student/login', this.model)
				if (!res.data.user) {
					this.$message.error('账号密码不存在或错误');
					return;
				}
				localStorage.s_user = JSON.stringify(res.data.user);
				localStorage.s_token = res.data.user.s_token;
				let introductionToThe = res.data.user; //详情
				if (introductionToThe) {
					if (!introductionToThe.college || !introductionToThe.profession || !introductionToThe.class) {
						this.$router.replace('/main/my');
					} else {
						this.$router.replace('/');
					}
				} else {
					this.$router.replace('/main/my');
				}
				this.$message({
					message: '登录成功',
					type: 'success'
				});
			},
		},
	}
</script>
<style scoped>
	.border {
		border-bottom: 1px solid #ccc;
	}

	.login {
		height: 100vh;
		background-color: #fff;
	}

	.loginItem-wrapped {
		width: 100%;
		height: calc(100% - 47px);
		display: flex;
		justify-content: center;
		align-items: center;
		background-image: url(login.jpg);
		background-size: 100% 100%;
	}

	.loginItem {
		width: 400px;
		height: 300px;
		background-color: #fff;
		border-radius: 20px;
	}

	.borderItem-wrapped {
		display: flex;
		width: 100%;
		background-color: #fff;
		align-items: center;
		flex-direction: column;
	}

	.borderItem {
		border-bottom: 1px solid #50bfff;
		margin-top: 10px;
		width: 300px;
	}

	.password {
		text-align: right;
		margin: 20px;
	}

	.password span:nth-of-type(1) {
		color: #ccc;
	}

	.password span:nth-of-type(2) {
		color: #50bfff;
		font-weight: 400;
		cursor: pointer;
	}
</style>
