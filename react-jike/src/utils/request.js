// axios 封装处理
// 导入 axios 实例
import axios from "axios"

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
  return Promise.reject(error)
})


// 按需导出实例对象
export { request }
