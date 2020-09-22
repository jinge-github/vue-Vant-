<template>
    <div>
        <van-tabbar v-model="active">
            <van-tabbar-item   to="/" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item   to="/news" icon="chat-o"">消息</van-tabbar-item>
            <van-tabbar-item   to="/my" icon="manager-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                active: 0,
            };
        },
    };
</script>

<style scoped>

</style>
