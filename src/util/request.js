import axios from 'axios'
// 路由引入
// import router from '../router'
// 实例化axios

const serve = axios.create({
<<<<<<< HEAD
    baseURL: '',
    timeout: ""
=======
    baseURL: 'http://120.53.31.103:84',
    timeout: "3000"

>>>>>>> ab29c76e91578a7b4ca6a4ce791fd06dafc71068
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