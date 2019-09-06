<template>

	<div>
		<!-- 面包屑导航 -->
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item>数据字典管理</el-breadcrumb-item>
			<el-breadcrumb-item>编辑数据字典条目</el-breadcrumb-item>
		</el-breadcrumb>
		<br />
		<el-button type="success" icon="el-icon-check" @click="doSubmintMergeForm" circle></el-button>

		<el-form :model="resulta"   :label-position="labelPosition" ref="mergeForm" label-width="100px">
			<el-form-item label="类别" prop="dictItem">
				<el-input v-model="resulta.dictType"></el-input>
			</el-form-item>
			<el-form-item label="条目" prop="dictValue">
				<el-input v-model="resulta.dictItem"></el-input>
			</el-form-item>
			<el-form-item label="值" prop="chcCusTname">
				<el-input v-model="resulta.dictValue"></el-input>
			</el-form-item>
			<el-form-item label="是否编辑">
					<el-checkbox  checked  v-model="checked">
					</el-checkbox>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				checked:true,
				labelPosition: 'left',
				mergeForm: {
					dictType: null, //字典类型
					dictItem: null, // 字典条目: 一般用来生成下拉框的文本
					dictValue: null, //字典值: 一般用来生成下拉框的值
					dictIsEditable: false ,//能否编辑: 1 可(默认) 0 不可


				}
			};
		},
		methods: {
			doSubmintMergeForm: function() {
				if (this.checked) {
					this.checked = 1;
				} else if (!this.checked) {
					this.checked = 0;
				}
				this.$refs['mergeForm'].validate((valid) => {
					if (false === valid) {
						return false;
					}
					let url = this.axios.urls.p2p_safety_update;
					this.axios.post(url,{
						dictId:this.resulta.dictId,
						dictType:this.resulta.dictType,
						dictItem:this.resulta.dictItem,
						dictValue:this.resulta.dictValue,
						dictIsEditable:this.checked
					}).then((resp) => {
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
		},computed:{
				resulta: function() {
					return this.$store.getters.resulta;
				},

		}
	}
</script>

<style>

</style>
