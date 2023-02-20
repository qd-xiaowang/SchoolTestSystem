<template>
	<div>
		<!-- 提示 -->
		<div class="tips">
			<i class="el-icon-s-opportunity"></i>
			<span>Tips:</span>
			<!-- 描述 -->
			<span class="description">&nbsp;&nbsp;&nbsp;发布试卷流程：选择学院→选择专业→选择班级→选择课程→发布试卷</span>
		</div>
		<el-row :gutter="40" style="margin: 30px 0">
			<el-col :span="6" @click.native="$router.push('admin/list')">
				<el-card shadow="always" class="card-content">
					<i class="el-icon-user-solid"></i>
					<div style="font-size: 20px">
						教师人数：{{ people.adminNum }}<br>
						<span style="font-size: 5px;color:#AAA">点击进入查看管理员列表</span>
					</div>

				</el-card>
			</el-col>
			<el-col :span="6" @click.native="$router.push('student/list')">
				<el-card shadow="always" class="card-content">
					<i class="el-icon-s-custom"></i>
					<div style="font-size: 20px">学生人数：{{ people.studentNum }}<br>
						<span style="font-size: 5px;color:#AAA">点击进入查看学生列表</span>
					</div>
				</el-card>
			</el-col>
			<el-col :span="6" @click.native="$router.push('college/list')">
				<el-card shadow="always" class="card-content">
					<i class="el-icon-school"></i>
					<div style="font-size: 20px">学院个数：{{ collegesNum }}<br>
						<span style="font-size: 5px;color:#AAA">点击进入查看学院列表</span>
					</div>
				</el-card>
			</el-col>
			<el-col :span="6" @click.native="$router.push('college/list')">
				<el-card shadow="always" class="card-content">
					<i class="el-icon-reading"></i>
					<div style="font-size: 20px">专业个数：{{ professionsNum }}<br>
						<span style="font-size: 5px;color:#AAA">点击进入查看专业列表</span>
					</div>
				</el-card>
			</el-col>
		</el-row>

		<el-row :gutter="40" style="margin: 30px 0">
			<el-col :span="6" @click.native="$router.push('class/list')">
				<el-card shadow="always" class="card-content">
					<i class="el-icon-wallet"></i>
					<div style="font-size: 20px">班级个数：{{ classesNum }}<br>
						<span style="font-size: 5px;color:#AAA">点击进入查看班级列表</span>
					</div>
				</el-card>
			</el-col>
			<el-col :span="6" @click.native="$router.push('course/list')">
				<el-card shadow="always" class="card-content">
					<i class="el-icon-notebook-2"></i>
					<div style="font-size: 20px">课程个数：{{courseNum}}<br>
						<span style="font-size: 5px;color:#AAA">点击进入查看课程列表</span>
					</div>
				</el-card>
			</el-col>
			<el-col :span="6" @click.native="$router.push('published_paper/list')">
				<el-card shadow="always" class="card-content">
					<i class="el-icon-document"></i>
					<div style="font-size: 20px">已发试卷：{{testPpaperNum}}<br>
						<span style="font-size: 5px;color:#AAA">点击进入查看已发试卷</span>
					</div>
				</el-card>
			</el-col>
			<el-col :span="6" @click.native="$router.push('college_card/list')">
				<el-card shadow="always" class="card-content">
					<i class="el-icon-medal"></i>
					<div style="font-size: 20px">成绩查询<br>
						<span style="font-size: 5px;color:#AAA">点击进入查看成绩查询</span>
					</div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: 'Main',
		components: {},
		data() {
			return {
				//人数
				people: {
					// 教师人数
					adminNum: 0,
					// 学生人数
					studentNum: 0
				},
				// 学院个数
				collegesNum: 0,
				// 专业个数
				professionsNum: 0,
				// 班级个数
				classesNum: 0,
				// 课程个数
				courseNum: 0,
				// 已发试卷个数
				testPpaperNum: 0
			};
		},
		methods: {
			async getPeopleNum() {
				//人员
				let admin = await this.$http.get('rest/admin_users');
				let student = await this.$http.get('rest/student_users');
				this.people.adminNum = admin.data.length
				this.people.studentNum = student.data.length

				//学院专业班级
				let colleges = await this.$http.get('rest/colleges');
				let professions = await this.$http.get('rest/professions');
				let classes = await this.$http.get('rest/class');
				this.collegesNum = colleges.data.length
				this.professionsNum = professions.data.length
				this.classesNum = classes.data.length
				//课程，试卷
				let course = await this.$http.get('rest/course');
				let test_paper = await this.$http.get('rest/test_paper/save'); //已发布的试卷
				this.courseNum = course.data.length
				this.testPpaperNum = test_paper.data.length
			}
		},
		created() {
			this.getPeopleNum()
		},

	}
</script>
<style scoped>
	/* 提示 */
	.tips {
		display: flex;
		align-items: center;
		padding: 20px 20px;
		box-size: border-box;
		margin-bottom: 0px;
		align-items: center;
		display: flex;
		color: #ff7575;
	}
	/* 描述 */
	.description {
		color:#AAA;
	}
	/* 卡片内容 */
	.card-content {
		border-radius: 5px;
		text-align: center;
		color: #333;
		font-size: 40px;
		box-shadow: 0px 0px 10px 2px #cdcdcd;
		min-width: 200px;
		cursor: pointer;
		border-left: 3px solid;
		border-left-color: rgb(86, 171, 251);
		background: #fafafa;
	}

	/* hover 鼠标移入卡片效果 */
	.card-content:hover {
		background: rgba(135, 206, 250, 0.15);
	}
</style>
