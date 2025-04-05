import { Layout, Menu, Popconfirm } from 'antd'
import { HomeOutlined, DiffOutlined, EditOutlined, LogoutOutlined } from '@ant-design/icons'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import './index.scss'

// Hook
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// store 中的异步方法
import { clearUserInfo, fetchUserInfo } from '@/store/module/user'


const { Header, Sider } = Layout

const items = [
  {
    label: '首页',
    key: '/',
    icon: <HomeOutlined />
  },
  {
    label: '文章管理',
    key: '/article',
    icon: <DiffOutlined />
  },
  {
    label: '文章创建',
    key: '/publish',
    icon: <EditOutlined />
  }
]

const GeekyLayout = () => {
  // 点击菜单跳转 onMenuClick 回调函数
  const onMenuClick = (route) => {
    // console.log('菜单被点击了', route)
    const path = route.key
    navigate(path)
  }

  // 高亮路由菜单
  const location  = useLocation()
  // console.log(location.pathname)

  // 渲染个人信息，触发 store/user.js 中的 fetchUserInfo 方法
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUserInfo())
  },[dispatch])
  const username = useSelector(state => state.user.userInfo.username)
  // console.log(username)
  // 退出登录回调
  const navigate = useNavigate()
  const onConfirm = () => {
    // console.log('退出登录')
    dispatch(clearUserInfo())
    navigate('/login')
  }
  return (
    <Layout>
      <Header className="Header">
        <div className="logo" />
        <div className="user-info">
          {/* 用户名 */}
          <span className="user-name">{username}</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出" okText="退出" cancelText="取消" onConfirm={onConfirm}>
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout=background">
          <Menu
            mode="inline"
            theme="dark"
            selectedKeys={location.pathname}
            onClick={onMenuClick}
            items={items}
            style={{ height: '100%', borderRight: 0}}
          ></Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          {/* 二级路由出口 */}
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  )
}


export default GeekyLayout