
import http from '@/appConfig/axios'//引入axios.js文件
 
export function loginByUsername(obj) {
     return http.post(`/api/a/login`, obj)
}
export function logout() {
    //退出  
    return http.post(`/api/a/logout`)
}