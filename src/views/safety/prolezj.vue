<template>

	<div>
		<!-- 面包屑导航 -->
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item>角色管理</el-breadcrumb-item>
			<el-breadcrumb-item>角色增加</el-breadcrumb-item>
		</el-breadcrumb>
		<br />
		<el-button type="success" icon="el-icon-check" @click="doSubmintMergeForm" circle></el-button>
		<el-form :model="mergeForm" ref="mergeForm" label-width="100px">
			<el-form-item label="角色名" prop="dictItem">
				<el-input v-model="mergeForm.rname"></el-input>
			</el-form-item>
			<el-form-item label="角色描述" prop="dictValue">
				<el-input v-model="mergeForm.content"></el-input>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				mergeForm: {
          rname: null, //角色名
          content:null,//角色描述
				}
			};
		},
		methods: {
			doSubmintMergeForm: function() {
				this.$refs['mergeForm'].validate((valid) => {
					if (false === valid) {
						return false;
					}
					let url = this.axios.urls.p2p_safety_prole_add;
					this.axios.post(url,this.mergeForm).then((resp) => {
						this.$message({
							message: resp.data.message,
							type: 'success',
						});
						this.$router.push({
							path: '/safety/prole'
						});

					}).catch((error) => {});
				});

			}
		},
	}
</script>

<style>

</style>
