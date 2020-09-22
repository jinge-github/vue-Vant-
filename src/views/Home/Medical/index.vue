<template>
    <div>
        <div style="background-color: #f8f8f8;">
            <!--上面互联网云诊室-->
            <div>
                <van-nav-bar
                        title="我的就诊人"
                        left-arrow
                        @click-left="onClickLeft"
                />
            </div>
            <!--已添加和还能添加-->
            <div class="title_one">
                <div class="size">
                    已添加1人,还能添加5人
                </div>
            </div>
            <!--电子卡-->
            <div class="title_two">
                <div>
                    <div>张三</div>
                    <div>本人</div>
                    <div>修改资料</div>
                    <div><van-icon name="arrow" /></div>
                </div>
                <div>
                    <van-grid direction="horizontal" :column-num="1">
                       <div>电子就诊卡-aas</div>
                    </van-grid>
                </div>
                <div style="height: 10px">

                </div>
            </div>
            <!--添加就诊人-->
            <!--   <div class="title_three">
                 <div class="size_one">
                     添加就诊人
                 </div>
               </div>-->
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
.title_one{
    width: 100%;
    height: 110px;
    background-color:#32AAFD;
    border-radius: 0 0 70px 70px;
}
    .size{
        text-align: center;
        color: #ffffff;
        font-size: 12px;
        padding-top: 20px;
    }
    .title_two{
        height: 140px;
        width: 96%;
        background-color: #ffffff;
        border-radius: 10px;
        margin: 0 auto;
    }
    .title_three{
        border-radius: 70px 70px 70px 70px;
        width: 90%;
        height: 35px;
        background-color: #32a9fd;
        margin: 0 auto;
    }
    .size_one{
        font-size: 18px;
        text-align: center;
        color: #ffffff;
    }
</style>
