// 和用户相关的状态管理

import { createSlice } from '@reduxjs/toolkit'

// utils
import { setToken as _setToken, getToken, removeToken } from '@/utils'

// 导入 requerst 请求函数
import { request } from '@/utils'

// 创建实例
const userStore = createSlice({
  name: 'user',
  // 数据状态
  initialState: {
    // token
    token: getToken() || '',
    // 用户信息
    userInfo: {}
  },
  // 同步的修改方法
  reducers: {
    setToken(state, action) {
      state.token = action.payload
      // 保存 Token
      _setToken(action.payload)
    },
    // userInfo 的同步方法
    setUserInfo(state, action) {
      state.userInfo = action.payload
    },
    // 清除用户信息的同步方法
    clearUserInfo(state) {
      state.token = ''
      state.userInfo = {}
      removeToken()
    }
  }
})

// 解构出 actionCreater
const { setToken, setUserInfo, clearUserInfo } = userStore.actions

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

// 获取 userInfo 的异步方法，完成登录
const fetchUserInfo = () => {
  return async (dispatch) => {
    // 1. 请求接口获取信息
    const res = await request.get('/my/userinfo')
    // console.log(res.data.data)
    dispatch(setUserInfo(res.data.data))
  }
}

// 导出
// actionsCreater 一般使用按需导出
export { setToken, fetchLogin, fetchUserInfo, clearUserInfo }
// reducer 需要做组合，所以一般默认导出
export default userReducer