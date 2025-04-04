// 和用户相关的状态管理

import { createSlice } from '@reduxjs/toolkit'

// utils
import { setToken as _setToken, getToken } from '@/utils'

// 导入 requerst 请求函数
import { request } from '@/utils'

// 创建实例
const userStore = createSlice({
  name: 'user',
  // 数据状态
  initialState: {
    token: getToken() || ''
  },
  // 同步的修改方法
  reducers: {
    setToken(state, action) {
      state.token = action.payload
      // 保存 Token
      _setToken(action.payload)
    }
  }
})

// 解构出 actionCreater
const { setToken } = userStore.actions

// 获取 reducer 函数
const userReducer = userStore.reducer

// 获取 Token 的异步方法，完成登录
const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    // 1. 发送异步请求, 路径 + 传参
    const res = await request.post('/user/login', loginForm)
    // 2. 提交同步 action 进行 token 存入(使用 dispatch)
    dispatch(setToken(res.data.token))
  }
}


// 导出
// actionsCreater 一般使用按需导出
export { setToken, fetchLogin }
// reducer 需要做组合，所以一般默认导出
export default userReducer