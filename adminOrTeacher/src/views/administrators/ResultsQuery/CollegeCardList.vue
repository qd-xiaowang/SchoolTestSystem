<template>
	<div class="college">
		<ul class="collegeItem">
			<li v-for="item in collegeData" :key="item.name" @click="collegeClick(item)">
				<p>学院：{{ item.name }}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'CollegeCardList',
		components: {},
		data() {
			return {
				collegeData: []
			};
		},
		methods: {
			async fetch() {
				const res = await this.$http.get('rest/colleges');
				//   console.log(res);
				this.collegeData = res.data;
				//可以在这里获取所有学院的所有成绩
			},
			async collegeClick(item) {
				this.$router.push({
					path: '/admin_main/profession_card/list',
					query: {
						college: item._id
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
	.college .collegeItem li {
		list-style: none;
	}

	.collegeItem {
		display: flex;
		padding: 0;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}

	.collegeItem>li {
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

	.collegeItem>li>p {
		position: absolute;
		color: #333;
		width: 100%;
		line-height: 145px;
		font-weight: bold;
		font-size: 24px;
		text-align: center;
	}

	.collegeItem>li:nth-child(1) {
		background: #fafafa;
	}

	.collegeItem>li:nth-child(2) {
		background: #fafafa;
	}

	.collegeItem>li:nth-child(3) {
		background: #fafafa;
	}

	.collegeItem>li:nth-child(4) {
		background: #fafafa;
	}

	.collegeItem>li:nth-child(5) {
		background: #fafafa;
	}

	.collegeItem>li:hover {
		background: rgba(135, 206, 250, 0.15);
		cursor: pointer;
	}
</style>
