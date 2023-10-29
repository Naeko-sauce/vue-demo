<template>
    <!-- 测试svg文件使用 -->
    <!-- svg图标外层容器节点，内部需要与use标签结合使用 -->
    <svg :width="width" :height="height">
        <!-- xlink: href执行用哪一个图标，属性值务必# icon-图标名字 -->
        <!-- usr标签fill属性可以设置图标颜色 -->
        <use :xlink:href="prefix + nam" :fill="color"></use>
    </svg>
</template>

<script setup lang="ts">
// 使用defineProps接收父组件传来的参数
//defineProps 是 Vue 3 中的一个 Composition API 函数，用于在一个组件中声明并接收父组件传递的属性。这个函数的主要目的是提供一个类型安全的方式来定义和使用 props，以及明确组件的 API
//接收父组件传过来的参数
defineProps({
    //prefix中文翻译为：前缀
    //xlink:href属性值的前缀
    prefix: {
        type: String,//默认传递类型
        default: '#icon-'//默认传递值为#icon
    },//提供使用图标的名字
    nam: String
    ,//接收父组件传递的颜色
    color: {
        type: String,
        default: ''
    },
    //设置svg宽高
    width: {
        type: String,//默认类型
        default: '100px'//默认大小
    }, height: {
        type: String,//默认类型
        default: '100px'//默认大小
    }
});
</script>

<style scoped lang="scss"></style>

