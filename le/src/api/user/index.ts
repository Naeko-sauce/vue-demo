//统一管理用户接口i
import request from "@/utils/request";
import { loginForm, loginResponseData, userResponseData } from "./type";
//统一管理接口
enum API {
    LOG_URL = "/user/login",
    USERINFO_URL = "/user/info"
}
//暴露请求函数
//登陆接口方法
export const reqLogin = (data: loginForm) => request.post<any, loginResponseData>(API.LOG_URL, data)
//获取用户信息方法
export const reqUserInfo = () => request.get<any, userResponseData>(API.USERINFO_URL)
