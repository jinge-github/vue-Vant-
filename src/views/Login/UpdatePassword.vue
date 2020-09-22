<template>
  <div class="Base">
    <div class="label">
      <van-icon name="arrow-left" color="black" size="2rem" />
      <div class="login">修改密码</div>
    </div>
    <div>
      <van-form validate-first @failed="onFailed">
        <!-- 通过 pattern 进行正则校验 -->
        <van-field
          v-model="value1"
          label="原密码"
          name="pattern"
          placeholder="请输入原密码"
          right-icon="eye-o"
          :rules="[{ pattern, message: '请输入正确内容' }]"
        />  
        <!-- 通过 validator 进行函数校验 -->
        <van-field
          v-model="value2"
          name="新密码"
          label="新密码"
          placeholder="请输入新密码"
          right-icon="eye-o"
          :rules="[{ validator, message: '请输入正确内容' }]"
        />
        <!-- 通过 validator 进行异步函数校验 -->
        <van-field
          v-model="value3"
          label="确认密码"
          name="确认密码"
          placeholder="请输入确认密码"
          right-icon="closed-eye"
          :rules="[{ validator: asyncValidator, message: '请输入正确内容' }]"
        />
        <div class="annotation">注:密码由6- -20位数字和大小写字母组成</div>
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit" @click="submit">提交</van-button>
        </div>
      </van-form>
      
    </div>
  </div>
</template>

<script>
import Bar from "../../components/Bar";
export default {
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
      pattern: /\d{6}/,
    };
  },
  methods: {
    //跳转页面
    submit(){
         this.$router.push("/Perfectmessage")
    },
    // 校验函数返回 true 表示校验通过，false 表示不通过
    validator(val) {
      return /1\d{10}/.test(val);
    },
    // 异步校验函数返回 Promise
    asyncValidator(val) {
      return new Promise((resolve) => {
        Toast.loading("验证中...");

        setTimeout(() => {
          Toast.clear();
          resolve(/\d{6}/.test(val));
        }, 1000);
      });
    },
    onFailed(errorInfo) {
      console.log("failed", errorInfo);
    },
  },
};
</script>

<style scoped>

.annotation {
  color: #9A9A9A;
  font-size: 15px;
  line-height: 30px;
  margin-left: 5%;
  margin-bottom: 30px;
  
}
.Base {
  width: 100%;
  height: 100%;
}
.login {
  margin-left: 95px;
  float: right;
  color: black;
  font-size: 16pt;
  
}
.label {
  margin: 20px 0px 50px 20px;
  float: left;
}
</style>
