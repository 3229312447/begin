import { url } from "inspector"

// 用户信息列表
function createUserList() {
  return [
    {
      userId: 1,
      userName: 'admin',
      password: 'admin123',
      roles: ['管理员']
    },
    {
      userId: 2,
      userName: 'editor',
      password: 'editor123',
      roles: ['编辑']
    }
  ]
}

// 对外暴露接口
// 获取用户信息接口
export default {
  // 用户登录接口
  {
  url: '/api/user/login',
    method: 'post',
      response: ({ body }) => {
        const { username, password } = body
        const userList = createUserList().find(item => item.userName === username && item.password === password)
        if (!userList) {
          return {
            code: 400,
            message: '用户名或密码错误'
          }

        }
        const { token } = userList
        return {
          code: 200,
          data: {
            token
          }
        }
      }
}
}
