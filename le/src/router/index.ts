//通过vue-router插件实现模板的路由配置
import { createRouter, createWebHashHistory } from "vue-router";
import { constantRoutes } from "./routes";
//创建路由器,createRouter会返回一个路由对象
let router = createRouter({
    //路由模式hash
    history: createWebHashHistory(),
    //路由配置
    routes: constantRoutes,
    //滚动行为
    scrollBehavior() {
        return {
            left: 0,
            top: 0
        }
    }
});
export default router;