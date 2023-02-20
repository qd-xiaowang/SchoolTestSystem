<template>
	<div class="class">
		<el-button type="primary" round class="back" @click="$router.back()">返回</el-button>
		<ul class="classItem">
			<li v-for="item in classItemData" :key="item.name" @click="classItemClick(item)">
				<p>班级：{{ item.name }}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: ['profession', 'college'],
		name: 'ClassItemCardList',
		components: {},
		data() {
			return {
				classItemData: []
			};
		},
		methods: {
			async fetch() {
				const classItems = await this.$http.get('rest/class');
				if (!classItems.data) {
					return;
				}
				classItems.data.forEach((item, index) => {
					if (item.profession._id === this.profession) {
						this.classItemData.push(classItems.data[index]);
					}
				});
			},
			classItemClick(item) {
				this.$router.push({
					path: '/admin_main/course_card/list',
					query: {
						college: this.college,
						profession: this.profession,
						class: item._id
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
	.classItem li {
		list-style: none;
	}

	.classItem {
		display: flex;
		padding: 0;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}

	.back {
		margin-left: 20px;
		margin-bottom: 20px;
		box-shadow: 3px 4px 9px 0px #969b9f;
	}

	.classItem>li {
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

	.classItem>li>p {
		position: absolute;
		color: #333;
		width: 100%;
		line-height: 145px;
		font-weight: bold;
		font-size: 24px;
		text-align: center;
	}

	.classItem>li:nth-child(1) {
		background: #fafafa;
	}

	.classItem>li:nth-child(2) {
		background: #fafafa;
	}

	.classItem>li:nth-child(3) {
		background: #fafafa;
	}

	.classItem>li:nth-child(4) {
		background: #fafafa;
	}

	.classItem>li:nth-child(5) {
		background: #fafafa;
	}

	.classItem>li:hover {
		background: rgba(135, 206, 250, 0.15);
		cursor: pointer;
	}
	:deep(.el-button.is-round){
		border-radius: 0px;
	}
</style>
