// axios 封装处理
// 导入 axios 实例
import axios from "axios"
import { getToken, removeToken } from "./token"
import router from "@/router"


// 1. 根域名配置
// 2. 超时时间
// 3. 请求拦截器 / 响应拦截器

// 创建实例对象
const request = axios.create({
  // 1. 根域名
  baseURL: 'http://127.0.0.1:9000',
  // 2. 超时时间
  timeout: 5000
})

// 3. 拦截器 (官网代码)
// 请求拦截器
request.interceptors.request.use(function(config) {
  // 在请求之前做的事情,做拦截，插入自定义配置（参数的处理）
  // 在 config 参数中做 Token 注入
  // 1. 获取到 Token（localStorage）(utils/token.js 中 getToken 方法)
  const token = getToken()
  if(token) {
    // 2. 按照后端的要求做 Token 的拼接: Axios 提供的 headers 和后端要求加上 Bearer
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, function (error) {
  // 请求错误时要做的事情
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(function(response) {
  // 响应数据回到之前要做的事情，重点处理返回的数据
  return response
},function(error) {
  // 响应发生错误时要做的事情
  // 监控 401 token 失败
  // console.dir(error)
  if(error.response.status === 401) {
    removeToken()
    router.navigate('/login')
    window.location.reload()
  }
  if(error.reject)
  return Promise.reject(error)
})


// 按需导出实例对象
export { request }
