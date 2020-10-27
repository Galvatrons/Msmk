import axios from 'axios'
// 路由引入
// import router from '../router'
// 实例化axios

const serve = axios.create({
    baseURL: '',
    timeout: ""
})

// 请求拦截
serve.interceptors.request.use((config) => {
    // token验证请求
    // if (window.sessionStorage.getItem('token')) {
    //     config.headers.Authorization = window.sessionStorage.getItem('token')
    // }
    return config
})

// 响应拦截
serve.interceptors.response.use(config => {
    // token验证响应
    // if(config.data.meta.status == 400){
    //     window.sessionStorage.removeItem("token")
    // }


    // 在最后必须 return config
    return config
})

export default serve