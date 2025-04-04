import './index.scss'
import { Card, Form, Input, Button, message } from 'antd'
import logo from '@/assets/logo.png'

// react-router-dom
import { useNavigate } from 'react-router-dom'

// react-redux
import { useDispatch } from 'react-redux'

// 导入 store 中的 state 和 action
import { fetchLogin } from '@/store/module/user'

const Login = () => {
  // 创建实例
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // 提交表单的方法
  const onFinish = async (values) => {
    console.log(values)
    // 触发 fetchLogin 方法, 传递用户信息的 values 传递给 fetchLogin 中的 loginForm
    await dispatch(fetchLogin(values))
    // 跳转到首页
    navigate('/')
    // 提示用户（使用 Antd 提供的 message 方法）
    message.success('登录成功')
  }

  // 渲染
  return (
    <div className='login'>
      <Card className='login-container'>
        {/* logo 图片 */}
        <img className='login-logo' src={logo} alt='logo'/>
        {/* 登录表单 */}
        <Form validateTrigger="onBlur" onFinish={onFinish}>
          <Form.Item
            name='phone'
            // 多条检验规则，按顺序执行，第一条通过才会触发第二条
            rules={[
              {
                required: true,
                message: '手机号不能为空'
              },
              {
                pattern: /1[3-9]\d{9}/,
                message: '请输入正确的手机号格式'
              }
            ]}
          >
            <Input size='large' placeholder="请输入手机号"/>
          </Form.Item>
          <Form.Item
            name='password'
            rules={[
              {
                required: true,
                message: '密码不能为空'
              }
            ]}
          >
            <Input size='large' placeholder="请输入密码"/>
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit' size='laige' block>登录</Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login