<template>
  <div class="login-wrap">
    <el-form label-position="left" label-width="0px" class="demo-ruleForm login-container">
      <h3 class="title">用户登录</h3>
      <el-form-item>
        <el-input placeholder="账号" type="text" v-model="usernamea" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="密码" type="password" v-model="passworda" show-password autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%" @click="doSubmit">登录</el-button>
      </el-form-item>
      <el-form-item style="text-align: center;">
        <!-- <router-link type="primary" :underline="false" to="/Forget">忘记密码</router-link> -->
        <router-link type="primary" :underline="false" to="/Signin">快速注册</router-link>

        <router-view />
      </el-form-item>
    </el-form>
  </div>
</template>
<script >
import  axios from 'axios'
export default {
  name: 'Login',
  data: function() {
    return {
      usernamea: null,
      passworda: null
    }
  },
  methods: {
    doSubmit: function() {
      console.log('doSubmit');
      var form = {
        username: this.usernamea,
        password: this.passworda,
      }
      console.log(form);
      let url = 'http://localhost:8080/shiro02/user/login';
      								axios.get(url, { //注意数据是保存到json对象的params属性
      									params:form
      								}).then(function(response) {
      									console.log(response);
      								}).catch(function(error) {
      									console.log(error);
      								});


      				axios.post(url, form).then(function(response) {
      					console.log(response);
      				}).catch(function(error) {
      					console.log(error);
      				});

      /* axios */
      // let url = this.axios.urls.SYS_USER_DOLOGIN;
      // this.axios.post(url, form).then((resp) => {
      //   if (0 == resp.data.code) {
      //     this.$message({
      //       message: resp.data.message,
      //       type: 'success'
      //     });
      //     let jwt=resp.headers['jwt'];
      //     console.log(jwt);
      //     this.$store.commit('setUsername', {
      //       username: this.username
      //     });
      //     this.$store.commit('setUserid', {
      //       userid:resp.data.a['usrId']
      //     });
      //     this.$router.push({
      //       path: '/AppMain'
      //     });
      //   } else {
      //     this.$message.error(resp.data.message);
      //   }
      // }).catch((error) => {
      // });
    }
  }
}

</script>

<style scoped>

</style>
