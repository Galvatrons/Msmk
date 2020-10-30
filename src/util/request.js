import axios from 'axios'
import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);
// 路由引入
// import router from '../router'
// 实例化axios

const serve = axios.create({

    baseURL: 'http://120.53.31.103:84',
    timeout: "3000"


})

// 请求拦截
serve.interceptors.request.use((config) => {
    // token验证请求
    // if (window.sessionStorage.getItem('token')) {
    //     config.headers.Authorization = window.sessionStorage.getItem('token')
    // }
    Toast.loading({
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