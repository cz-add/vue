<template>
  <div>
    <el-breadcrumb separator=">">
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>员工管理</el-breadcrumb-item>
    </el-breadcrumb>

    <el-form :inline="true" class="usercheBox" align="right">
      <el-form-item>
        <el-button size="mini" type="primary" plain class="el-icon--right" @click="hh()">返回</el-button>
      </el-form-item>
    </el-form>

    <br />
    <!--列表-->
    <el-table :data="resultt" border style="width: 100%" max-height="350">

      <el-table-column type="index" label="序号" :index="indexMethod" min-width="10">
      </el-table-column>
      <el-table-column prop="uname" label="用户名" min-width="20" align="center">
      </el-table-column>
      <el-table-column prop="realname" label="用户真实姓名" min-width="20" align="center">
      </el-table-column>
      <el-table-column prop="email" label="邮箱" min-width="20" align="center">
      </el-table-column>
      <el-table-column prop="address" label="地址" min-width="20" align="center">
      </el-table-column>
      <el-table-column prop="tel" label="手机号" min-width="20" align="center">
      </el-table-column>
      <el-table-column prop="time" :formatter="dateFormat" label="注册时间" min-width="20" align="center">
      </el-table-column>
      <el-table-column prop="sfz" label="身份证" min-width="20" align="center">
      </el-table-column>
      <el-table-column prop="tx" label="头像" min-width="20" align="center">


      </el-table-column>
      <el-table-column prop="locked" label="状态" min-width="20" align="center">
        <template slot-scope="scope">
          <span v-if='scope.row.locked===1' style="color:red">已锁定</span>
          <span v-if='scope.row.locked===0' style="color: #4CAF50">正常</span>
        </template>
      </el-table-column>

      <el-table-column label="操作" min-width="20" align="center">
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)"><i class="el-icon-edit"></i></el-button>
      </el-table-column>
    </el-table>
    <br />
    <!-- 分页组件 -->
    <el-pagination style="margin-top:10px ;text-align: center;" @size-change="handleSizeChange" @current-change="handleCurrentChange"
                   :current-page="queryForm.page" :page-sizes="[1, 20, 30, 100]" :page-size="queryForm.rows" layout="total, sizes, prev, pager, next, jumper"
                   :total="queryForm.total">
    </el-pagination>
  </div>
</template>

<script>
  import moment from 'moment'
  export default {
    data() {

      return {
        tx:null,
        queryForm: {
          page: 1,
          rows: 1,
          total: 0
        },
        resultt: [],
      };
    },
    methods: {
      dateFormat(row, column) {
        let date = row[column.property];
        if (date == undefined) {
          return "";
        }
        return moment(date).format("YYYY-MM-DD");
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
      hh: function() {
        this.$router.go(-1);//返回上一层
      },
      search: function() {
        let url = this.axios.urls.p2p_user_list;
        this.axios.post(url, {
          rows:this.queryForm.rows,
          page:this.queryForm.page,
          total:this.queryForm.total,
        }).then((resp) => {
          this.resultt = resp.data.result;
          console.log(resp.data.total)
          this.queryForm.total = resp.data.total;
          this.queryForm.page = resp.data.page;
          this.queryForm.rows = resp.data.rows;

        }).catch((error) => {

        });
      },handleDelete: function(index, row) {
        this.$confirm('确定禁用改用户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let url = this.axios.urls.p2p_user_jy;
          this.axios.post(url, {
            atvId: row.atvId
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
            message: '已取消禁用'
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

</style>
