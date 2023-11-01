//登陆接口需要携带的参数ts类型
export interface loginForm {
    username: String,
    password: String
}
//登陆接口返回数据类型
interface dataType {
    token: String
}
export interface loginResponseData {
    code: number,
    data: dataType
}
//定义服务器返回用户信息相关的数据类型
interface userinfo {
    userid: number,
    avatar: String,
    username: String,
    password: String,
    desc: String,
    roles: String[],
    buttons: String[],
    routes: String[],
    token: String,
}
interface user {
    chekUser:
}
export interface userResponseData {
    code: number,
    data: user
}