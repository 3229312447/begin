// 二次封装请求接口
import request from "@/utils/request";
import type { LoginType, LoginResponseType, UserResponseType } from './type';

// 统一管理接口
enum API {
  // 登录接口
  Login_URL = "/login",
  // 获取用户信息
  UserInfo_URL = "/userInfo",
  // 获取用户列表
  UserList_URL = "/userList",
  // 获取用户角色
  UserRole_URL = "/userRole",
  // 获取用户权限
  UserPermission_URL = "/userPermission",
  // 获取用户菜单
  UserMenu_URL = "/userMenu",
}

// 对外暴露请求函数

// 登录接口方法
export const login = (data: LoginType) =>
  request.post<any, LoginResponseType>(API.Login_URL, data);

// 获取用户信息接口方法
export const getUserInfo = () =>
  request.get<any, UserResponseType>(API.UserInfo_URL);
