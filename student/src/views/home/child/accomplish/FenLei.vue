<template>
	<div class="course">
		<div class="schoolCourse" @click="schoolCourse">校级课程</div>
	</div>
</template>

<script>
	export default {
		name: 'FenLei',
		components: {},
		data() {
			return {

			};
		},
		methods: {
			schoolCourse() {
				this.$router.push({
					path: 'accomplish_course',
					query: {
						name: 'school'
					}
				})
			},
			professionCourse() {
				this.$router.push({
					path: 'accomplish_course',
					query: {
						name: 'profession'
					}
				})
			},
		},
	}
</script>
<style scoped>
	.course {
		display: flex;
		flex-wrap: wrap;
		align-content: stretch;
		justify-content: space-evenly;
	}

	.schoolCourse {
		display: flex;
		width: 285px;
		min-width: 200px;
		height: 150px;
		border-radius: 5px;
		align-items: center;
		justify-content: center;
		border-left: 3px solid;
		border-left-color: rgb(86, 171, 251);
		background: #fafafa;
		color: #333;
		font-weight: bold;
		font-size: 24px;
		cursor: pointer;
	}

	.schoolCourse:hover {
		background: rgba(135, 206, 250, 0.15);
		cursor: pointer;
	}
</style>
