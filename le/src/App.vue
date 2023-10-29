<template>
    <div>
        <h1>aaa</h1>
        <el-button type="primary" size="default" :icon="Plus">主要</el-button>
        <Svglcon nam="phone" color="red"></Svglcon>
    </div>
</template>
<script setup lang="ts">
//引入图标组件
import { Plus } from "@element-plus/icons-vue";
//引入自定义svg组件
// import Svglocn from '@/components/Svglcon/index.vue'//注册为了全局组件就不需要引入

</script>

<style scoped lang="scss">
h1 {
    color: $color;
}
</style>
