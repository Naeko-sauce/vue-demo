//对axxios二次封装，使用请求与响应拦截器、
import axios from "axios"
import { ElMessage } from "element-plus"
//利用axios对象的create方法，去创建axios实例（可以配置其他配置）
let request = axios.create({
    //基础路径、
    baseURL: import.meta.env.VITE_APP_BASE_API,//配置基础路径会携带/api
    timeout: 5000//超时时间设置
})
//给request实例添加请求与响应拦截器
request.interceptors.response.use((config) => {
    // config配置对象有headers属性请求头，经常给服务器端携带公共参数
    //要返回配置对象
    return config
})
//配置响应拦截器,响应拦截器有两个回调一个是成功的回调以一个是失败的回调
request.interceptors.response.use((response) => {
    //成功回调
    //简化数据
    return response.data
}, (error) => {
    //失败回调：处理http网络错误
    //定义一个变量存储网络错误信息
    let message = ''
    let status = error.response.status
    switch (status) {
        case 401:
            message = "TOKEN过期"
            break;
        case 403:
            message = "无权访问"
            break;
        case 404:
            message = "请求地址错误"
            break;
        case 500:
            message = "服务器出现问题"
            break;
        default:
            message = "网络出现问题"
            break;
    }
    //提示错误信息
    ElMessage({
        type: 'error',
        message
    })
    return Promise.reject(error)
})
//对外暴露
export default request