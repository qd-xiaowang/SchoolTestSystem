<template>
	<div>
		<el-button type="primary"  round style="margin-bottom: 20px" @click="$router.back()">返回
		</el-button>
		<span class="course">课程：{{ courseName }}</span>
		<el-table :data="searchResult" style="width: 100%" stripe border highlight-current-row>
			<el-table-column label="姓名" prop="name"> </el-table-column>
			<el-table-column label="学号" prop="sId"> </el-table-column>
			<el-table-column label="试卷" prop="test_paper.name"> </el-table-column>
			<el-table-column label="成绩" prop="score"></el-table-column>
			<el-table-column  fixed="right" width="150px">
				<template slot="header" slot-scope="scope">
					<div>操作</div>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		name: "StudentList",
		props: ['college', 'profession', 'classes', 'course'],
		data() {
			return {
				tableData: [],
				search: '',
				courseName: ''
			}
		},
		computed: {
			//搜索，toLowerCase：将字符串转为小写
			searchResult() {
				return this.tableData.filter(data => {
					return !this.search || data.name.toLowerCase().includes(this.search.toLowerCase());
				})
			}
		},
		methods: {
			async fetch() {
				const res = await this.$http.get(
					`rest/test_paper_score/${this.college}/${this.profession}/${this.classes}/${this.course}`);
				// console.log(res);
				this.tableData = res.data;
			},
			async getCourseName() {
				const res = await this.$http.get('rest/course/' + this.course);
				this.courseName = res.data.name;
			}
		},
		created() {
			this.fetch();
			this.getCourseName()
		},

	}
</script>
<style scoped>
	.course {
		position: absolute;
		color: #333;
		margin-bottom: 20px;
		font-size: 28px;
		font-weight: bold;
		left: 50%;
	}
</style>
