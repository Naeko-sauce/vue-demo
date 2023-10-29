<template>
    <div>
        <el-button type="primary" size="default" :icon="Plus">主要</el-button>
        <Svglocn nam="phone" color="red"></Svglocn>

    </div>
</template>
<script setup lang="ts">
//引入图标组件
import { Plus } from "@element-plus/icons-vue";
//引入自定义svg组件
import Svglocn from '@/components/Svglcon/index.vue'

</script>

<style scoped lang="scss"></style>
