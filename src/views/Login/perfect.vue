<template>
<div class="sum">
    <div id="reset">
        <van-nav-bar title="身份认证" class="meg" left-text right-text left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    </div>
    <div class="name">
        <div class="multi">
            <van-cell class="back" title="姓名" value="张三" size="large" />
            <div class="division">
                <van-divider />
            </div>
        </div>
        <div class="multi">
            <van-cell class="back" title="居民身份证" value="41032520010710994" size="large" />
            <div class="division">
                <van-divider />
            </div>
        </div>
        <div class="multi">
            <van-cell class="back" title="认证方式" value="卡认证" is-link />
            <van-dropdown-menu>
                <van-dropdown-item class="menu" v-model="value1" :options="option1" />
            </van-dropdown-menu>
            <div class="division">
                <van-divider />
            </div>
        </div>
        <div class="multi">
            <van-cell class="back" title="认证类型" value="卡类型" is-link />
            <div class="division">
                <van-divider />
            </div>
        </div>
        <div class="multi">
            <van-cell class="back" title="卡号" value size />
            <div class="division">
                <van-divider />
            </div>
        </div>
        <div class="multi">
            <van-button class="submit" round block type="info" native-type="submit" @click="perfect">提交</van-button>
        </div>
    </div>
</div>
</template>

<script>
import Bar from "../../components/Bar";
export default {
    data() {
        return {
            value1: 0,
            option1: [{
                    text: '医保卡',
                    value: 0
                },
                {
                    text: '身份证',
                    value: 1
                },
                {
                    text: '电子健康卡',
                    value: 2
                },
                {
                    text: '就诊卡',
                    value: 2
                },
            ]
        };
    },

    methods: {},
};
</script>

<style scoped>
.menu {
    background-color: yellow;
}

.name {
    margin-top: 3%;
}

.submit {
    margin-top: 3%;
}

.division {
    margin-top: -15px;
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
</style>
