// 统一中转工具模块函数
// 外界如果要使用 request 工具函数，只需要: import { request } from '@/utils'

import { request } from './request'
import { setToken, getToken, removeToken } from './token'

export { request, setToken, getToken, removeToken }