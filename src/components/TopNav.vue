<template>
	<el-menu class="el-menu-demo" mode="horizontal" background-color="#334157" text-color="#fff" active-text-color="#fff">
		<el-button class="buttonimg">
			<img class="showimg" :src="collapsed?imgshow:imgsq" @click="doToggle()">
		</el-button>
		<el-submenu index="2" class="submenu">
      <template slot="title" > <img style="margin:10px;" :src="tx" width="40" height="40" class="head_pic"/></template>
      <template slot="title">{{username}}</template>
      <el-menu-item index="2-2"><i class="el-icon-s-custom"></i>个人中心</el-menu-item>
              <el-menu-item @click="exit()" index="2-3">退出</el-menu-item>
          </el-submenu>
      </el-menu>
  </template>

  <script>
      export default {
          data: function() {
              return {
                  // collapsed:false,
                  imgshow: require('../assets/img/show.png'),
                  imgsq: require('../assets/img/sq.png')
              };
          },
          computed: {
        username: function() {
          return this.$store.getters.username.uname;
        },
            tx:function(){
          return this.$store.getters.username.tx;
            },
        collapsed: function() {
          return this.$store.getters.collapsed;
        }

          },
          methods: {


              doToggle: function() {
                  // 				this.collapsed=!this.collapsed;
                  this.$store.commit('setCollapsed', {
                      collapsed: !this.collapsed
                  });
                  this.$root.Bus.$emit("aside-toggle",this.collapsed);
              },
              exit: function() {
                  this.$confirm('确定退出系统, 是否继续?', '提示', {
                      confirmButtonText: '确定',
                      cancelButtonText: '取消',
                      type: 'warning'
                  }).then(() => {
                      this.$message({
                          type: 'success',
              message: '退出成功!',
                      });
                    this.$store.commit('setUsername', {
                      username: null
                    });
                      this.$router.push({
                          path: '/'
                      });
                  }).catch(() => {
                      this.$message({
                          type: 'info',
                          message: '已取消退出'
                      });
                  });
              }
          }
      }
  </script>

  <style scoped>
      .el-menu-vertical-demo:not(.el-menu--collapse) {
          border: none;
      }

      .submenu {
          float: right;
      }

      .buttonimg {
          height: 60px;
          background-color: transparent;
          border: none;
      }

      .showimg {
          width: 26px;
          height: 26px;
          position: absolute;
          top: 17px;
          left: 17px;
      }

      .showimg:active {
          border: none;
      }
  </style>
