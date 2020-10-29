import axios from 'axios'

//设置环境的切换  第一个开发环境   第二个 生产环境
if(process.env.NODE_ENV=='development'){
	axios.defaults.baseURL = 'http://120.53.31.103:84/'
}else if(process.env.NODE_ENV=='production'){
	axios.defaults.baseURL = 'https://wap.365msmk.com/'
}
//设置超时时间
axios.defaults.timeout = 15000;
		
// 请求拦截
axios.interceptors.request.use(
    config =>{
		config.headers={DeviceType:'H5'}
		config.headers.Authorization = 'Bearer ' + window.localStorage.getItem('token')
		
		return config
	}
)

//响应拦截
axios.interceptors.response.use(
    response =>{
		
		return response
	}
)

//get请求
export function get(url,params){
	return new Promise((resolve,reject)=>{
		axios.get(url,{
			params
		}).then(res=>{
			resolve(res)
		}).catch(err=>{
			reject(err)
		})
	})
}

//post请求
export function post(url,params){
	return new Promise((resolve,reject)=>{
		axios.post(url,params).then(res=>{
			resolve(res)
		}).catch(err=>{
			reject(err)
		})
	})
}

//put请求
export function put(url,params){
	return new Promise((resolve,reject)=>{
		axios.put(url,params).then(res=>{
			resolve(res)
		}).catch(err=>{
			reject(err)
		})
	})
}