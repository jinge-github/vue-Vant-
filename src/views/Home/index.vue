<template>
    <div class="total">
        <div class="title">维度云医</div>
        <div class="slideshow">
            <!--轮播图-->
            <van-swipe class="my-swipe" indicator-color="white">
                <van-swipe-item><img src="../../assets/image/slideshow.png"></van-swipe-item>
                <van-swipe-item>2</van-swipe-item>
                <van-swipe-item>3</van-swipe-item>
                <van-swipe-item>4</van-swipe-item>
            </van-swipe>
        </div>
        <!--预约挂号 和互联网医院和 下面的-->
        <div class="middle">
            <div style="height: 90px;">
                <!--预约电话-->
                <div class="middle_left">
                    <div style="float: left" class="middle_left_one"><img src="../../assets/image/subscribe.png" alt="">
                    </div>
                    <div style="float: right;" class="middle_left_two">预约挂号</div>
                </div>
                <!--互联网医院-->
                <div class="middle_right" @click="toMarkDown">
                    <div style="float: left" class="middle_right_one"><img src="../../assets/image/hospital.png" alt="">
                    </div>
                    <div style="float: right" class="middle_right_two">互联网医院</div>
                </div>
            </div>
            <!--4*2宫格-->
            <div class="gongge">
                <van-swipe class="gongge_title" indicator-color="#32AAFD">
                    <van-swipe-item>
                        <div>
                            <van-row>
                                <van-col span="6">
                                    <div>
                                        <div class="gongge_one">
                                            <img src="../../assets/image/examining.png" alt="">
                                        </div>
                                        <div class="gongge_one" >智能导诊</div>
                                    </div>
                                </van-col>
                                <van-col span="6">
                                    <div>
                                        <div class="gongge_one">
                                            <img src="../../assets/image/sign.png" alt="">
                                        </div>
                                        <div class="gongge_one">签到取号</div>
                                    </div>
                                </van-col>
                                <van-col span="6">
                                    <div>
                                        <div class="gongge_one">
                                            <img src="../../assets/image/line.png" alt="">
                                        </div>
                                        <div class="gongge_one">排队叫号</div>
                                    </div>
                                </van-col>
                                <van-col span="6">
                                    <div>
                                        <div class="gongge_one">
                                            <img src="../../assets/image/top.png" alt="">
                                        </div>
                                        <div class="gongge_one">掌上充值</div>
                                    </div>
                                </van-col>
                            </van-row>
                        </div>
                        <div>
                            <van-row>
                                <van-col span="6">
                                    <div>
                                        <div class="gongge_one">
                                            <img src="../../assets/image/examining.png" alt="">
                                        </div>
                                        <div class="gongge_one" >智能导诊</div>
                                    </div>
                                </van-col>
                                <van-col span="6">
                                    <div>
                                        <div class="gongge_one">
                                            <img src="../../assets/image/sign.png" alt="">
                                        </div>
                                        <div class="gongge_one">签到取号</div>
                                    </div>
                                </van-col>
                                <van-col span="6">
                                    <div>
                                        <div class="gongge_one">
                                            <img src="../../assets/image/line.png" alt="">
                                        </div>
                                        <div class="gongge_one">排队叫号</div>
                                    </div>
                                </van-col>
                                <van-col span="6">
                                    <div>
                                        <div class="gongge_one">
                                            <img src="../../assets/image/top.png" alt="">
                                        </div>
                                        <div class="gongge_one">掌上充值</div>
                                    </div>
                                </van-col>
                            </van-row>
                        </div>
                    </van-swipe-item>
                    <van-swipe-item>2</van-swipe-item>
                </van-swipe>
            </div>
        </div>
        <!--底部的住院服务 健康记录-->
        <div class="bottom">
            <div class="bottom_left">
                <div class="bottom_left_one">
                    住院服务
                </div>
                <div class="bottom_left_two">
                    提供住院全流程服务
                </div>
            </div>
            <div class="bottom_right" >
                <div class="bottom_right_one" @click="toMedical">
                    <div class="pard">点子就诊卡</div>
                    <div class="pard_one">出示二维码便捷就医</div>
                </div>
                <div class="bottom_right_two">
                    <div class="records">健康记录</div>
                    <div class="records_one">查看所有健康记录</div>
                </div>
            </div>
        </div>
        <!--底部切换栏-->
        <Bar></Bar>
    </div>
</template>

<script>
    import Bar from '../../components/Bar'

    export default {
        components: {Bar},
        data() {
            return {};
        },
        methods: {
            toMarkDown: function () {
                this.$router.replace('/yun')
            },
            toMedical: function () {
                this.$router.replace('/ml')
            }
        }
    };
</script>

<style scoped>
    .title {
        font-size: 16px;
        text-align: center;
        padding-top: 10px;
    }

    .gongge_title {
        background-color: #ffffff;
        width: 100%;
        height: 220px;
    }

    .total {
        background-color: #f8f8f8;
    }

    .slideshow {
        width: 100%;
        height: 150px;
        /*  background-color: #229922;*/
    }

    .middle {
        width: 100%;
        background-color: #ffffff;
        margin-top: 10px;
        height: 250px;
        /* background-color: aquamarine;*/
    }

    .bottom {
        width: 100%;
        height: 200px;
        background-color: #ffffff;
        padding-top: 85px;
    }

    .my-swipe img {
        margin: 0 auto;
        width: 375px;
        height: 148px;

    }

    .middle_left {
        float: left;
        margin: 20px;
    }

    .middle_right {
        float: right;
        margin: 20px;
    }

    .middle_left_two {
        padding-top: 10px;
        padding-left: 20px;
    }

    .middle_right_two {
        padding-top: 10px;
        padding-left: 10px;
    }

    .middle_right_one {
        padding-right: 10px;
    }

    .gongge {
        width: 100%;
        height: 200px;

    }

    .bottom_left {
        float: left;
        width: 50%;
        height: 180px;
        background-image: url("../../assets/image/inhospital.png");
        background-repeat: no-repeat;
        background-position: 20px 10px;
    }

    .bottom_right_one {
        width: 100%;
        height: 100px;
        background-image: url("../../assets/image/patient.png");
        background-repeat: no-repeat;
        background-position: 5px 10px;
    }

    .bottom_right_two {
        width: 100%;
        height: 100px;
        background-image: url("../../assets/image/records.png");
        background-repeat: no-repeat;
        background-position: 5px 3px;
    }

    .bottom_right {
        float: right;
        width: 50%;
        height: 200px;

    }

    .bottom_left_one {
        font-size: 14px;
        color: #262626;
        padding-left: 32px;
        padding-top: 24px;
    }

    .bottom_left_two {
        font-size: 10px;
        color: #9a9a9a;
        padding-left: 32px;
        padding-top: 10px;
    }

    .pard {
        font-size: 14px;
        color: #262626;
        padding-left: 20px;
        padding-top: 20px;
    }

    .pard_one {
        font-size: 10px;
        color: #9a9a9a;
        padding-left: 20px;
        padding-top: 2px;
    }

    .records {
        font-size: 14px;
        color: #262626;
        padding-left: 20px;
        padding-top: 20px;
    }

    .records_one {
        font-size: 10px;
        color: #9a9a9a;
        padding-left: 20px;
        padding-top: 2px;
    }
    .gongge_one{
        margin-left: 17px;
    }
</style>
