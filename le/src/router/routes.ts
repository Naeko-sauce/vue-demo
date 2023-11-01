//对外暴露常量路由
export const constantRoutes = [{
    //登陆的路由
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    name: 'login'//命名路由
},
{
    //登陆成功以后展示数据的路由
    path: "/",
    component: () => import("@/views/home/index.vue"),
    name: 'layout'
},
{
    //404页面
    path: "/404",
    component: () => import("@/views/404/index.vue"),
    name: '404'
},
{
    //任意路由没匹配到进入404
    path: "/:pathMatch(.*)*",
    redirect: '/404',
    name: 'Any'
}
]