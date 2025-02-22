// 引入axios二次封装
import axios from "axios";
import { ElMessage } from "element-plus";

//  使用预设的baseURL创建axios实例
const request = axios.create({
  baseURL: import.meta.env.BASE_URL, //使用提前设定好的基础路径
  timeout: 5000, //超时时间5s
});

// request实例添加请求和响应拦截器
request.interceptors.request.use(
  (config) => {
    // 请求头携带公共参数
    // config.headers.xxx = xxx;

    // 返回配置对象
    return config;
  }
);

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    // 返回简化数据
    return response.data;

  }, (error) => {
    let message = "";
    switch (error.response.status) {
      case 400:
        message = "token过期，请重新登录";
        break;
      case 401:
        message = "未授权，请重新登录";
        break;
      case 403:
        message = "无权限访问";
        break;
      case 404:
        message = "请求地址错误";
        break;
      case 408:
        message = "请求超时";
        break;
      case 500:
        message = "响应错误";
        break;
      default:
        message = "网络错误";
        break;
    }
    // 提示错误信息
    // 用element-puls的组件来弹出提示
    ElMessage({
      message: message,
      type: "error",
    });
    return Promise.reject(error);
  }
);

export default request;
