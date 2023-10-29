import App from "@/App.vue";
import { createApp } from "vue";
//引入element-puls样式
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
//配置element-plus国际化
////@ts-ignore 是 TypeScript 中的注释，用于忽略 TypeScript 编译器的类型检查错误或警告。当你在代码中遇到某些情况下，你无法或不想修复 TypeScript 报告的类型问题时，可以使用 //@ts-ignore 注释
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//获取应用实例对象
const app = createApp(App);
//安装element-plus插件
app.use(ElementPlus, {
    locale: zhCn//element-puls国际化配置，就是配置中文
});
//获取环境配置变量
// import.meta 是 JavaScript 中 ES6 模块的特殊对象，提供了与模块自身相关的一些元信息。它通常用于访问模块的一些属性和信息
console.log(import.meta.env)
//配置先后isvg插件需要的代码
import 'virtual:svg-icons-register'
//注册全局组件Svglcon半成品
import Svglcon from '@/components/Svglcon/index.vue'
app.component("Svglcon", Svglcon)
//将应用挂载到挂载点上
app.mount("#app");
