<template>
  <div class="sum">
    <div id="reset">
      <van-nav-bar
        title="完善消息"
        class="meg"
        left-text
        right-text
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
    <div class="name">
      <div class="multi">
        <van-cell-group>
          <van-cell title="姓名" class="font" value="请输入" />
        </van-cell-group>
      </div>
      <div class="multi">
        <van-cell class="back" is-link title="证件类型" @click="show = true" />
        <van-action-sheet v-model="show" :actions="actions" cancel-text="取消" description="请选择证件类型" />
      </div>
      <div class="multi">
        <van-cell class="back" is-link title="性别" @click="show = true" />
        <van-action-sheet
          v-model="show"
          :actions="actions"
          cancel-text="取消"
          close-on-click-action
          @cancel="onCancel"
        />
      </div>
      <div class="multi">
        <van-cell-group>
          <van-cell title="证件号码" class="font" value="请输入" />
        </van-cell-group>
      </div>
      <div class="multi">
        <van-cell class="back" title="生日日期" :value="date" is-link @click="show = true" />
        <van-calendar v-model="shows" @confirm="onConfirm" />
      </div>
      <div class="multi">
        <van-cell class="back" title="手机号" value="18336712744" size="large" />
      </div>
      <div class="multi">
        <van-button class="submit" round block type="info" native-type="submit" @click="perfect" >提交</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import Bar from "../../components/Bar";
export default {
  data() {
    return {
      date: "",
      shows: false,
      show: false,
      actions: [
        { name: "居民身份证" },
        { name: "港澳居民身份证" },
        { name: "台湾居民身份证" },
      ],
      show: false,
      actions: [{ name: "男" }, { name: "女" }],
    };
  },

  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    perfect() {
      this.$router.push("/perfect");
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
  },
};
</script>
<style scoped>
.submit {
  margin-top: 3%;
}
.multi {
  margin: 5px 0px 10px 0px;
}
.back {
  font-size: 12pt;
}
/* 修改组件的css样式 */
#reset /deep/ .van-ellipsis {
  font-weight: 600;
  font-size: 15pt;
}

.meg {
  margin: 10px 0px 3px 4px;
}

.font {
  font-size: 12pt;
}
</style>
