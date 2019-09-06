<template>

	<div>
		<!-- 面包屑导航 -->
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item>数据字典管理</el-breadcrumb-item>
			<el-breadcrumb-item>新建数据字典条目</el-breadcrumb-item>
		</el-breadcrumb>
		<br />
		<el-button type="success" icon="el-icon-check" @click="doSubmintMergeForm" circle></el-button>

		<el-form :model="mergeForm" ref="mergeForm" label-width="100px">
			<el-form-item label="类别" prop="dictItem">
				<el-input v-model="mergeForm.dictType"></el-input>
			</el-form-item>
			<el-form-item label="条目" prop="dictValue">
				<el-input v-model="mergeForm.dictItem"></el-input>
			</el-form-item>
			<el-form-item label="值" prop="chcCusTname">
				<el-input v-model="mergeForm.dictValue"></el-input>
			</el-form-item>
			<el-form-item label="是否编辑">
				<el-checkbox v-model="mergeForm.dictIsEditable">
				</el-checkbox>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				mergeForm: {
					dictType: null, //字典类型
					dictItem: null, // 字典条目: 一般用来生成下拉框的文本
					dictValue: null, //字典值: 一般用来生成下拉框的值
					dictIsEditable: false //能否编辑: 1 可(默认) 0 不可
				}
			};
		},
		methods: {
			doSubmintMergeForm: function() {
				if (this.mergeForm.dictIsEditable) {
					this.mergeForm.dictIsEditable = 1;
				} else if (!this.mergeForm.dictIsEditable) {
					this.mergeForm.dictIsEditable = 0;
				}
				this.$refs['mergeForm'].validate((valid) => {
					if (false === valid) {
						return false;
					}
					let url = this.axios.urls.p2p_safety_add;
					this.axios.post(url,this.mergeForm).then((resp) => {
						this.$message({
							message: resp.data.message,
							type: 'success',
						});
						this.$router.push({
							path: '/safety/zd'
						});

					}).catch((error) => {});
				});

			}
		},
	}
</script>

<style>

</style>
