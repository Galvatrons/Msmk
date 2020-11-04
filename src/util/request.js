import axios from 'axios'
import { Guid } from "./guid"
import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);
// 路由引入
// import router from '../router'
// 实例化axios


// Vue.prototype.toast = Toast
let deviceid = null;
let id = window.localStorage.getItem("deviceid")
if(id){
    deviceid = id
}else{
    deviceid = Guid.NewGuid().ToString("D")
}
window.localStorage.setItem("deviceid",deviceid)

const serve = axios.create({

    baseURL: 'http://120.53.31.103:84',
    // baseURL:"https://wap.365msmk.com/",
    timeout: "3000"

})

// 请求拦截
serve.interceptors.request.use((config) => {
    // token验证请求
    let token = JSON.parse(window.sessionStorage.getItem("token"))
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    config.headers.deviceid = deviceid;
    config.headers.devicetype = "H5";
    // if (window.sessionStorage.getItem('token')) {
    //     config.headers.Authorization = window.sessionStorage.getItem('token')
    // }
    Toast.loading({
        message: '加载中...',
        forbidClick: true,
        loadingType: 'spinner',
        duration: 3000,
        message: '加载中...',
        forbidClick: true,
    });
    return config
})

// 响应拦截
serve.interceptors.response.use(config => {
    // token验证响应
    // if(config.data.meta.status == 400){
    //     window.sessionStorage.removeItem("token")
    // }
    Toast.clear()

    // 在最后必须 return config
    return config
})

serve.post
export default serve