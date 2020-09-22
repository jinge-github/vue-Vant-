<template>
<div>
    <h1 align="center">消息</h1>
    <van-tabs v-model="active">
        <!-- 问诊消息 -->
        <van-tab title="问诊消息">
            <!-- 问诊单个消息 -->
            <div class="enquiryAll">
                <!-- 左侧头像 -->
                <div style="float:left">
                    <img src="../../assets/image/组 339.png" />
                </div>

                <div style="float:left">
                    <span>王大福</span>
                    <span>
                        <img src="../../assets/image/红点.png" />
                    </span>
                    <span class="consulting">图文咨询</span>
                    <div style="color:#9A9A9A">您收到了一条信息</div>
                </div>
                <div style="float:right;padding-right: 30px;color:#9A9A9A">一小时前</div>
            </div>
            <br />
            <div class="enquiryAll">
                <!-- 左侧头像 -->

                <img src="../../assets/image/组 339.png" style="float:left;" />

                <div style="float:left">
                    <span>王大福</span>
                    <span>
                        <img src="../../assets/image/红点.png" />
                    </span>
                    <span class="consulting">图文咨询</span>
                    <div style="color:#9A9A9A">您收到了一条信息</div>
                </div>
                <div style="float:right;padding-right: 30px;color:#9A9A9A">一小时前</div>
            </div>
            <br />
            <div class="enquiryAll">
                <!-- 左侧头像 -->

                <img src="../../assets/image/组 339.png" style="float:left;" />

                <div style="float:left">
                    <span>王大福</span>
                    <span>
                        <img src="../../assets/image/红点.png" />
                    </span>
                    <span class="consulting">图文咨询</span>
                    <div style="color:#9A9A9A">您收到了一条信息</div>
                </div>
                <div style="float:right;padding-right: 30px;color:#9A9A9A">一小时前</div>
            </div>
            <br />
            <div class="enquiryAll">
                <!-- 左侧头像 -->

                <img src="../../assets/image/组 339.png" style="float:left;" />

                <div style="float:left">
                    <span>王大福</span>
                    <span>
                        <img src="../../assets/image/红点.png" />
                    </span>
                    <span class="consulting">图文咨询</span>
                    <div style="color:#9A9A9A">您收到了一条信息</div>
                </div>
                <div style="float:right;padding-right: 30px;color:#9A9A9A">一小时前</div>
            </div>
        </van-tab>
        <van-tab title="业务消息" class="ServiceMessage">
            <div class="business">
                <div class="else">
                    其他
                    <span>
                        <img src="../../assets/image/红点.png" height="15px" width="20px" />
                    </span>
                    <div class="fronttime">1小时前</div>
                </div>
                <div class="fronttimeGood">张大，您已成功取消发热云[门诊张大富的图文咨询。</div>
            </div>
            <van-divider />
            <div class="business">
                <div class="else">
                    支付消息
                    <div class="fronttime">1小时前</div>
                </div>
                <div class="fronttimeGood">张大，您已成功咨询在线咨询费用。</div>
            </div>
            <van-divider />

            <div class="business">
                <div class="else">
                    支付消息
                    <div class="fronttime">1小时前</div>
                </div>
                <div class="fronttimeGood">张大，您已成功咨询在线咨询费用。</div>
            </div>
            <van-divider />

            <div class="business">
                <div class="else">
                    张三
                    <div class="fronttime">1小时前</div>
                </div>
                <div class="fronttimeGood">你收到了一条信息</div>
            </div>
            <van-divider />
        </van-tab>
        <van-tab title="系统消息" class="ServiceMessage">
            <div class="business">
                <div class="else">
                    完善成功
                    <span>
                        <img src="../../assets/image/红点.png" height="15px" width="20px" />
                    </span>
                    <div class="fronttime">2020-05-21</div>
                </div>
                <div class="fronttimeGood">请上传个人头像，方便更好查询你！</div>
            </div>
            <van-divider />
            <div class="business">
                <div class="else">
                    注册成功
                    <div class="fronttime">1小时前</div>
                </div>
                <div class="fronttimeGood">您已注册完成请到我的完善个人信息</div>
            </div>
            <van-divider />

            <div class="business">
                <div class="else">
                    注册成功
                    <div class="fronttime">1小时前</div>
                </div>
                <div class="fronttimeGood">您已注册完成请到我的完善个人信息</div>
            </div>
            <van-divider />

            <div class="business">
                <div class="else">
                    其他
                    <div class="fronttime">1小时前</div>
                </div>
                <div class="fronttimeGood">你收到了一条信息</div>
            </div>
        </van-tab>
    </van-tabs>

    <!--底部切换-->
    <Bar></Bar>
</div>
</template>

<script>
import Bar from "../../components/Bar";
export default {
    components: {
        Bar
    },
    data() {
        return {
            active: 2,
        };
    },
};
</script>

<style scoped>
.enquiryAll {
    width: 100%;
    height: 70px;
    padding: 10px 0px -10px 10px;
}

.business {
    padding: 10px 0px 0px 0px;
}

.else {
    float: left;
    color: black;
    width: 100%;
    font-size: 18px;
    margin-left: 7px;
}

.fronttimeGood {
    padding-top: 7px;
    color: #989898;
    font-size: 14px;
    margin-left: 10px;
}

.fronttime {
    float: right;
    padding: 10px 10px 0px 0px;
    margin-right: 10px;
    color: #989898;
    font-size: 14px;
    text-align: right;
}

.consulting {
    border: 1px solid #32a9fd;
    padding: 3px 5px 3px 5px;

    background-color: #ffffff;
    color: #32a9fd;
    border-radius: 10px;
    margin-left: -10pt;
}

div.shijian {
    padding-top: 10px;
    text-align: center;
}

.content {
    background-color: whitesmoke;
    padding: 10px 10px 10px 10px;
}

.time {
    text-align: center;
    width: 150px;
    height: 20px;
    background-color: #e5e5e5;
    border-radius: 10px;
    padding: 5px 5px 5px 5px;
}
</style>
