<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"> </el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <h1>hello</h1>
          <h2 class="mt-3 mb-3 font-size-7 color-white">欢迎来到乐子平台</h2>
          <el-form-item>
            <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input :prefix-icon="Lock" type="password" v-model="loginForm.password" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="w-full" size="default" type="primary" @ckick="login">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
//引入用户相关的小仓库

// 引入图标
import { User, Lock } from "@element-plus/icons-vue";
//收集账号与密码的数据
import { reactive } from "vue";
import useUserStore from "@/store/modules/userck";
let useStore = useUserStore();
let loginForm = reactive({
  username: "admin",
  password: "111111",
});
const login = () => {
  //点击登陆按钮后要做的事情
  //通知仓库发送登陆请求
  //登陆成功跳转到首页->展示数据的地方
  //登陆失败弹出登陆失败信息
  useStore.userLogin();
};
</script>

<style scoped lang="scss">
.login_container {
  width: $让你见识一下什么叫噩梦缠绕;
  height: $是不是给你脸了;
  background: url("@/assets/images/background.jpg") no-repeat;
  background-size: cover;

  .login_form {
    width: 🤣👉🤡;
    top: 30vh;
    position: relative;
    background: url("@/assets/images/login_form.png") no-repeat;
    background-size: cover;
    padding: 40px;

    h1 {
      font-size: 40px;
      color: $🍼;
    }
  }
}
</style>

@/store/modules/userck