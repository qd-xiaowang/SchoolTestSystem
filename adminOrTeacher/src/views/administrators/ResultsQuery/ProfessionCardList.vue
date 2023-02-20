<template>
	<div class="profession">
		<el-button type="primary" class="back" round @click="$router.back()">返回</el-button>
		<ul class="professionItem">
			<li v-for="item in professionData" :key="item.name" @click="professionClick(item)">
				<p>专业：{{ item.name }}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: ['college'],
		name: 'ProfessionCardList',
		components: {},
		data() {
			return {
				professionData: []
			};
		},
		methods: {
			async fetch() {
				const professions = await this.$http.get('rest/professions'); //获取所有专业
				// const class1 = await this.$http.get('rest/class');
				if (!professions.data) {
					return;
				}
				professions.data.forEach((item, index) => {
					//比较学院名字
					if (item.college._id === this.college) {
						this.professionData.push(professions.data[index]);
					}
				});
				// console.log(class1.data);
			},
			professionClick(item) {
				this.$router.push({
					path: '/admin_main/class_card/list',
					query: {
						college: this.college,
						profession: item._id
					}
				})
			}
		},
		computed: {},
		created() {
			this.fetch();
			// console.log(this.college);
		},
	}
</script>
<style scoped>
	.profession .professionItem li {
		list-style: none;
	}

	.professionItem {
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

	.professionItem>li {
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


	.professionItem>li>p {
		position: absolute;
		color: #333;
		width: 100%;
		line-height: 145px;
		font-weight: bold;
		font-size: 24px;
		text-align: center;
	}

	.professionItem>li:nth-child(1) {
		background: #fafafa;
	}

	.professionItem>li:nth-child(2) {
		background: #fafafa;
	}

	.professionItem>li:nth-child(3) {
		background: #fafafa;
	}

	.professionItem>li:nth-child(4) {
		background: #fafafa;
	}

	.professionItem>li:nth-child(5) {
		background: #fafafa;
	}

	.professionItem>li:nth-child(6) {
		background: #fafafa;
	}

	.professionItem>li:nth-child(7) {
		background: #fafafa;
	}

	.professionItem>li:nth-child(8) {
		background: #fafafa;
	}

	.professionItem>li:nth-child(9) {
		background: #fafafa;
	}

	.professionItem>li:hover {
		background: rgba(135, 206, 250, 0.15);
		cursor: pointer;
	}
	
	:deep(.el-button.is-round){
		border-radius: 0px;
	}
</style>
