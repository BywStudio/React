// 封装高阶组件

import { Navigate} from 'react-router-dom'

import { getToken } from "@/utils"

// 核心逻辑：有 Token 正常跳转，无 Token 跳转登录
 export function AuthRoute({children}) {
  const token = getToken()
  // 有 token 返回要跳转的路由组件
  if(token) {
    return <>{children}</>
  }else {
    // 无 Token 重定向登录地址
    // 使用 react-router-dom 中 Navigate 的重定向
    return <Navigate to={'login'} replace />
  }
}
