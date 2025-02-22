// 数据限制

// 登录接口携带参数限制
export interface LoginType {
  username: string,
  password: string
}

interface dataStringType {
  token: string
}

// 登录接口返回数据类型限制
export interface LoginResponseType {
  code: number,
  data: dataStringType
}

interface dataObjectType {
  data: Object
}
interface dataUserInfoType {
  userId: number,
  avatar: string,
  username: string,
  password: string,
  desc: string,
  roles: string[],
  buttons: string[],
  routes: string[],
  token: string
}
// 服务器返回用户信息相关类型限制
export interface UserResponseType {
  code: number,
  data: dataObjectType
}
