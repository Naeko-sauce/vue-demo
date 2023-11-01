<template>
    <div>
        <h1>测试axios二次封装</h1>
        <el-button type="primary" size="default" :icon="Plus">主要</el-button>
        <Svglcon nam="phone" color="red"></Svglcon>
    </div>
</template>
<script setup lang="ts">
//引入图标组件
import { Plus } from "@element-plus/icons-vue";
//引入自定义svg组件
// import Svglocn from '@/components/Svglcon/index.vue'//注册为了全局组件就不需要引入
import { onMounted } from "vue";
//当你组件挂载测试完毕发一个请求
//测试登陆接口
import { reqLogin } from "./api/user";
onMounted((() => {
    reqLogin({
        username: 'admin',
        password: '111111'
    }
    )
}))
</script>

<style scoped lang="scss">
h1 {
    color: $color;
}
</style>
