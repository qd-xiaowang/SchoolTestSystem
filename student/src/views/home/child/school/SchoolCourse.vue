<template>
	<div class="course_exam">
		<ul class="course_introductio">
			<li v-for="(item, index) in courses">
				<div class="right">
					<div>课程：{{ item.name }}</div>
					<div>作者：{{ item.writer }}</div>
					<button class="btn" @click="courseClick(index)">
						课程详情
						<van-icon name="arrow" />
					</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'CourseExam',
		components: {},
		data() {
			return {
				courses: []
			};
		},
		computed: {},
		methods: {
			courseClick(index) {
				this.$router.push('/main/school_exam/' + this.courses[index]._id);
			},
			async fetch() {
				let res = await this.$http.get('rest/course');
				this.courses = res.data
			}
		},
		created() {
			this.fetch()
		},
	}
</script>
<style scoped>
	.course_exam {
		margin-bottom: 3rem;
	}

	.course_introductio {
		display: flex;
		flex-wrap: wrap;
		align-content: stretch;
		justify-content: space-evenly;
	}

	.course_introductio li {
		display: flex;
		width: 23.4375rem;
		min-width: 22.1875rem;
		height: 6.9375rem;
		border-radius: 5px;
		margin: 0.625rem;
		border-left: 3px solid;
		border-left-color: rgb(86, 171, 251);
		background: #fafafa;
		cursor: pointer;
	}

	.course_introductio li .right {
		width: 70%;
		height: 100%;
		position: relative;
	}

	.right div {
		position: absolute;
		color: #333;
		font-size: 1.125rem;
	}

	.right div:nth-of-type(1) {
		width: 90%;
		top: 10px;
		overflow: hidden;
		word-wrap: break-word;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		padding: 0.3125rem 0.625rem 0 0.625rem;
	}

	.right div:nth-of-type(2) {
		padding: 0.3125rem 0.625rem 0.3125rem 0.625rem;
		bottom: 0.8125rem;
	}

	.right .btn {
		position: absolute;
		border: none;
		outline: none;
		background-color: #fafafa;
		border-radius: 20px;
		padding: 0.3125rem 0.625rem;
		color: #333;
		font-weight: bold;
		bottom:14%;
		right: -33%;
		font-size: 14px;
	}
</style>
