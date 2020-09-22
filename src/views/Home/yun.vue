<template>
    <div>
        <!--上面互联网云诊室-->
        <div>
            <van-nav-bar
                    title="互联网云诊室"
                    left-arrow
                    @click-left="onClickLeft"
            />
        </div>
        <!--互联网云诊室的图片-->
        <div>
            <div class="picture">
                <div class="picture_left">
                    <div class="font_yi">互联网云诊室</div>
                    <div class="font_zu">足不出户享受诊疗服务</div>
                </div>
                <div class="picture_right">
                    <img src="../../assets/image/picture.png"/>
                </div>
            </div>
        </div>
        <!--智能导诊-->
        <div>
            <div class="serve">
                <img src="../../assets/image/timexian.png"/>
            </div>
        </div>
        <!--在线咨询-->
        <div>
            <div class="consult">
                <div class="consult_left">
                    <img src="../../assets/image/consult.png"/>
                </div>
                <div class="consult_button">
                    <div style="font-size: 16px;color: #262626">
                        在线咨询
                    </div>
                    <div style="font-size: 10px;color: #b3b3b3;margin-top: 8px">
                        名医在线解决问题
                    </div>
                </div>
                <div class="consult_right">
                    <van-icon name="arrow" size="40"/>
                </div>
            </div>
        </div>
        <!--智能导诊+云支付-->
        <div>
            <div class="smart">
                <div style="font-size: 14px;margin-left: 20px;margin-top: 20px">
                    智能导诊
                </div>
                <div style="font-size: 10px;color: #b2b2b2;margin-left: 20px;">
                    智能指引患者就诊
                </div>
            </div>
            <div class="pay">
                <div style="font-size: 14px;margin-left: 20px;margin-top: 20px">
                    云支付
                </div>
                <div style="font-size: 10px;color: #b2b2b2;margin-left: 20px;">
                    院内服务 在线支付
                </div>
            </div>
        </div>
        <!--就诊记录-->
        <div>
            <div class="record">
                <!---->
                <div style="margin-top: 10px;margin-left: 10px;font-size:16px; ">就诊记录</div>
                <div style="margin-top: 10px" class="pothos">
                    <div style="float: left;width: 33%;" >
                        <img src="../../assets/image/record1.png" alt="">
                        <div class="size">问诊记录</div>
                    </div>
                    <div style="float: left;width: 33%">
                        <img src="../../assets/image/record2.png" alt="">
                        <div class="size">药品配送</div>
                    </div>
                    <div style="float: left;width: 33%" class="">
                        <img src="../../assets/image/record3.png" alt="">
                        <div class="size">云档案</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            onClickLeft: function () {
                this.$router.replace('/')
            }
        },
    };
</script>

<style scoped>

    .smart {
        width: 50%;
        height: 100px;
        float: left;
        background-image: url("../../assets/image/smart.png");
        background-repeat: no-repeat;
        background-position: 5px 3px;
    }

    .pay {
        width: 50%;
        height: 100px;
        float: right;
        background-image: url("../../assets/image/pay.png");
        background-repeat: no-repeat;
        background-position: 5px 3px;

    }

    .consult_right {
        float: right;
        width: 30px;
        height: 20px;
        margin-top: 15px;
        margin-right: 15px;

    }

    .consult_button {
        float: left;
        padding-left: 20px;
        margin-top: 10px;
    }

    .consult_left {
        float: left;
        margin-top: 20px;
        margin-left: 10px;
    }

    .picture {
        width: 100%;
        height: 154px;
        background-color: #EEF7FF;
    }

    .picture_left {
        float: left;
    }

    .picture_right {
        float: right;
        margin-right: 36px;
    }

    .picture_right img {
        width: 98px;
        height: 100%;
    }

    .font_yi {
        font-size: 25px;
        color: #32a9fd;
        padding-top: 32px;
        padding-left: 42px;
    }

    .font_zu {
        font-size: 14px;
        color: #32a9fd;
        padding-top: 12px;
        padding-left: 42px;
    }

    .serve {
        width: 97%;
        height: 78px;
        border: 1px solid #B3B8B4;
        margin: 0 auto;
        border-radius: 10px;
        background-color: white;
        transform: translateY(-50%); /**上移元素**/
        -ms-transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
    }

    .serve img {
        width: 360px;
        height: 70px;
        border-radius: 5px;
    }

    .consult {
        width: 97%;
        height: 78px;
        border: 1px solid #B3B8B4;
        margin: 0 auto;
        border-radius: 10px;
        background-color: white;
        margin-top: -20px;
    }

    .record {
        width: 97%;
        height: 100px;
        border: 1px solid #B3B8B4;
        margin: 0 auto;
        border-radius: 10px;
        background-color: white;
        margin-top: 100px;
    }
    .pothos img{
        padding-left: 40px;
    }
    .size{
        padding-left: 25px;
    }
</style>
