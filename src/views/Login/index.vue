<template>
  <div class="sum">
    <div class="label">
      <van-icon name="arrow-left" color="black" size="2rem" />
      <div class="login">登录</div>
    </div>
    <div class="loginWay">
      <span class="password">
        <b>密码登录</b>
      </span>
      <span style="color:#CCCCCC">|</span>
      <span class="verification" @click="go">验证码登录</span>
    </div>
    <div class="Logininput">
      <van-form @submit="onSubmit">
        <van-field v-model="username" name label placeholder="+186 请输入手机号" />
        <van-field
          v-model="password"
          type="password"
          name
          label
          placeholder="请输入密码"
          right-icon="eye-o"
        />

        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">提交</van-button>
          <div class="centers">
            <div class="forgetPassword" @click="modification">忘记密码</div>  
            <div class="Verticalbar"></div>
            <div class="add">注册</div>
          </div>
        </div>
        
      </van-form>
    </div>
  </div>
</template>

<script>
import Bar from "../../components/Bar";
export default {
  components: { Bar },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
     modification(){
         this.$router.push("/upd")
     } ,
    go() {
      this.$router.push("/verCode");
    },
    onSubmit(values) {
      console.log("submit", values);
    },
  },
};
</script>
<style scoped>
.centers{
    clear: both;
}

.Verticalbar {
  float: left;
  background-color: #cccccc;
  width: 2px;
  height: 20px;
}
.forgetPassword {
  float: left;
  color: #32a9fd;
  font-size: 14pt;
}
.add {
  float: left;

  color: #32a9fd;
  font-size: 14pt;
}
.Logininput {
  margin-top: 20px;
}
.verification {
  padding: 10px 10px 10px 10px;
  color: "#999999";
  font-size: 16pt;
  color: #999999;
  padding-right: 10px;
}
.password {
  padding: 10px 10px 10px 10px;
  color: #262626;
  font-size: 16pt;
  border-bottom: solid #ff0000;
}

.loginWay {
  clear: both;
  text-align: center;
}
.login {
  margin-left: 120px;
  float: right;
  color: black;
  font-size: 16pt;
}
.label {
  margin: 20px 0px 50px 20px;
  float: left;
}
</style>
