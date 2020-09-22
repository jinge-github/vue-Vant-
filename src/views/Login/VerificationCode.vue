<template>
  <div>
    <div class="label">
      <van-icon name="arrow-left" color="black" size="2rem" />
      <div class="login">登录</div>
    </div>
    <div class="loginWay">
      <span class="password" @click="goBack">密码登录</span>
      <span style="color:#CCCCCC">|</span>
      <span class="verification">
        <b>验证码登录</b>
      </span>
    </div>
    <div class="Logininput">
      <van-form @submit="onSubmit">
        <van-field v-model="username" name label placeholder="+186 请输入手机号" />
        <van-field v-model="sms"  placeholder="请输入短信验证码">
          <template #button>
            <van-button size="small" type="primary">获取验证码</van-button>
          </template>
        </van-field>
        

        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">提交</van-button>
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
    goback() {
      this.$router.push("/login");
    },
    onSubmit(values) {
      console.log("submit", values);
    },
  },
};
</script>

<style scoped>
.Logininput {
  margin-top: 20px;
}
.verification {
  padding: 10px 10px 10px 10px;
  color: "#999999";
  font-size: 16pt;
  color: #262626;
  padding-right: 10px;
  border-bottom: solid #ff0000;
}
.password {
  padding: 10px 10px 10px 10px;
  color: #262626;
  font-size: 16pt;
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
