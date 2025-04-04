// 路由配置

import Layout from '@/pages/Layout/index'
import Login from '@/pages/Login/index'

// 配置路由
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />
  },
  {
    path: '/login',
    element: <Login />
  }
])

export default router