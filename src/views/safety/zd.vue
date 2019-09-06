<template>
	<div>
		<el-breadcrumb separator=">">
			<el-breadcrumb-item>安全管理</el-breadcrumb-item>
			<el-breadcrumb-item>数据字典管理</el-breadcrumb-item>
		</el-breadcrumb>
		<!-- 搜索筛选 -->
		<el-form :inline="true" class="searchBox">
			<el-form-item label="类别">
				<el-input size="small" @blur="search" v-model="queryForm.dictType" placeholder="类别"></el-input>
			</el-form-item>
			<el-form-item label="条目">
				<el-input size="small" @blur="search" v-model="queryForm.dictItem" placeholder="条目"></el-input>
			</el-form-item>
			<el-form-item label="值">
				<el-input size="small" @blur="search" v-model="queryForm.dictValue" placeholder="值"></el-input>
			</el-form-item>

			<el-form-item>
				<el-button size="small" type="primary" icon="el-icon-plus" @click="doOpenDialog()">添加</el-button>

			</el-form-item>
		</el-form>
		<!--列表-->
		<el-table :data="result" border style="width: 100%" max-height="350">
			<el-table-column type="index" label="序号" :index="indexMethod" min-width="10">
			</el-table-column>
		<!-- 	<el-table-column prop="dictId" label="编号" width="180" min-width="10" align="center">
			</el-table-column> -->
			<el-table-column prop="dictType" label="类别" width="180" min-width="10" align="center">
			</el-table-column>
			<el-table-column prop="dictItem" label="条目" min-width="20" align="center">
			</el-table-column>
			<el-table-column prop="dictValue" label="值" min-width="20" align="center">
			</el-table-column>
			<el-table-column prop="dictIsEditable" label="是否可编辑" min-width="20" align="center">
				<template slot-scope="scope">
					<span v-if='scope.row.dictIsEditable===1'>是</span>
					<span v-if='scope.row.dictIsEditable===0'>否</span>
				</template>
			</el-table-column>

			<el-table-column label="操作" min-width="20" align="center">
				<template slot-scope="scope">
					<span v-if='scope.row.dictIsEditable===1'>
						<el-button size="mini" @click="handleEdit(scope.$index, scope.row)"><i class="el-icon-edit"></i></el-button>
						<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)"><i class="el-icon-delete"></i></el-button>
					</span>
					<span v-else='scope.row.dictIsEditable===0'>
						<h1>无</h1>
					</span>
				</template>
			</el-table-column>
		</el-table>
		<br />
		<!-- 分页组件 -->
		<el-pagination style="margin-top:10px ;text-align: center;" @size-change="handleSizeChange" @current-change="handleCurrentChange"
		 :current-page="queryForm.page" :page-sizes="[2, 20, 30, 100]" :page-size="queryForm.rows" layout="total, sizes, prev, pager, next, jumper"
		 :total="queryForm.total">
		</el-pagination>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				queryForm: {
					dictType: null,
					dictItem: null,
					dictValue: null,
					dictIsEditable: null,
					page: 1,
					rows: 2,
					total: 0
				},
				result: []
			};
		},
		methods: {
			doOpenDialog: function() {
				this.$router.push({
					path: '/safety/zdZj'
				});
			},
			doSubmintMergeForm() {
				this.$router.push({
					path: '/xx/Message'
				});
			},
			indexMethod(index) {
				return (this.queryForm.page - 1) * this.queryForm.rows + (index + 1);
			},
			handleSizeChange(rows) {
				console.log('rows=%i', rows);
				this.queryForm.rows = rows;
				this.queryForm.page = 1;
				this.search();
			},
			handleCurrentChange(page) {
				console.log('page=%i', page);
				this.queryForm.page = page;
				this.search();
			},
			search: function() {
				let url = this.axios.urls.p2p_safety_list;
				this.axios.post(url, this.queryForm).then((resp) => {
					this.result = resp.data.result;
					this.queryForm.total = resp.data.total;
					this.queryForm.page = resp.data.page;
					this.queryForm.rows = resp.data.rows;
				}).catch((error) => {

				});
			},
			handleEdit: function(index, row) {
				this.$router.push({
					path: '/safety/bjsj'
				});
				this.$store.commit('setresulta', {
					resulta: row
				});


			},
			handleDelete: function(index, row) {
				this.$confirm('确定删除此记录, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					let url = this.axios.urls.p2p_safety_del;
					this.axios.post(url, {
						dictId: row.dictId
					}).then((resp) => {
						this.$message({
							message: resp.data.message,
							type: 'success'
						});
						this.search();
					}).catch((error) => {});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			}
		},
		created: function() {
			this.search();
		}
	}
</script>

<style scoped>
	.searchBox {
		text-align: center;
		margin-top: 20px;
	}

	.userRole {

		width: 100%;
	}
</style>
