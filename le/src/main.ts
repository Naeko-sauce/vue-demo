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
//将应用挂载到挂载点上
app.mount("#app");
