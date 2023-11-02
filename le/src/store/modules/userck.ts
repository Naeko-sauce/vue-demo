//创建用户相关的小仓库
import { defineStore } from "pinia";
//创建小仓库，使用的是选择式api的写法
let useUserStore = defineStore("user", {
    //小仓库存数据的地方
    state: () => {
        return {}
    },
    //异步/逻辑的地方
    actions: {
        //用户登陆的方法
        userLogin() {

        }
    },
    //计算属性
    getters: {

    }
})
//对外暴露小仓库的方法
export default useUserStore;