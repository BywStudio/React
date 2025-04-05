// 路由配置

import Layout from '@/pages/Layout/index'
import Login from '@/pages/Login/index'

// 高阶组件
import { AuthRoute } from '@/components/AuthRoute'

// 配置路由
import { createBrowserRouter } from 'react-router-dom'

// 二级路由组件
import Home from '@/pages/Home'
import Article from '@/pages/Article'
import Publish from '@/pages/Publish'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthRoute><Layout /></AuthRoute>,
    children: [
      {
        // 默认二级路由
        index: true,
        element: <Home />
      },
      {
        path: 'article',
        element: <Article />
      },
      {
        path: 'publish',
        element: <Publish />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
])

export default router