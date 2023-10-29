//引入组件让组件暴露
import Svglocn from '@/components/Svglcon/index.vue'
import pagination from '@/components/pagination/index.vue'
//设置一个对象存储这些组件
const a = { Svglocn, pagination }
// console.log(Object.keys(a))
// const b = Object.keys(a)
// 下面是三种可以把存储对象循环出来使用的方法
// for (const kye in b) {
//     console.log(124);
// }

// for (const key of Object.keys(a)) {
//     console.log(key);
// }

// Object.keys(a).forEach(i=>{

// })
export default {
    //这个方法必须叫做install
    install(app) {
        console.log(app);

        //vue6中有个方法叫做Objet.keys可以得到对象里的所有值
        Object.keys(a).forEach(key => {
            app.components(key, a[key])
        })
    }
}