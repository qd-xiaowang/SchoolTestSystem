<template>
	<div class="class">
		<el-button type="primary" round class="back" @click="$router.back()">返回</el-button>
		<ul class="course">
			<li v-for="item in courseData" :key="item.name" @click="courseClick(item)">
				<p>课程：{{ item.name }}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: ['classes', 'college', 'profession'],
		name: 'courseCardList',
		components: {},
		data() {
			return {
				courseData: []
			};
		},
		methods: {
			async fetch() {
				const course = await this.$http.get('rest/course');
				if (!course.data) {
					return;
				}
				this.courseData = course.data;

			},
			courseClick(item) {
				this.$router.push({
					path: '/admin_main/class_score/list',
					query: {
						college: this.college,
						profession: this.profession,
						class: this.classes,
						course: item._id
					}
				})
			}
		},
		computed: {},
		created() {
			this.fetch();
		},
	}
</script>
<style scoped>
	.course li {
		list-style: none;
	}

	.course {
		display: flex;
		padding: 0;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}

	.course>li {
		border-radius: 5px;
		position: relative;
		text-align: center;
		box-shadow: 0px 0px 10px 2px #cdcdcd;
		min-width: 285px;
		height: 145px;
		cursor: pointer;
		border-left: 3px solid;
		border-left-color: rgb(86, 171, 251);
		background: #fafafa;
	}


	.back {
		margin-left: 20px;
		margin-bottom: 20px;
		box-shadow: 3px 4px 9px 0px #969b9f;
	}

	.course>li>p {
		position: absolute;
		color: #333;
		width: 100%;
		line-height: 145px;
		font-weight: bold;
		font-size: 24px;
		text-align: center;
	}

	.course>li:nth-child(1) {
		background: #fafafa;
	}

	.course>li:nth-child(2) {
		background: #fafafa;
	}

	.course>li:nth-child(3) {
		background: #fafafa;
	}

	.course>li:nth-child(4) {
		background: #fafafa;
	}

	.course>li:nth-child(5) {
		background: #fafafa;
	}

	.course>li:hover {
		background: rgba(135, 206, 250, 0.15);
		cursor: pointer;
	}
	
	:deep(.el-button.is-round){
		border-radius: 0px;
	}
</style>
