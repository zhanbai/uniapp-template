// HTTP 请求设置
import Request from "luch-request";

const http = new Request();

// 配置请求根路径
let baseURL = "";

if (process.env.NODE_ENV === "production") {
  baseURL = "";
} else {
  baseURL = "";
}

// 修改全局默认配置
http.setConfig((config) => {
  config.baseURL = baseURL;
  return config;
});

// 请求开始之前做一些事情
http.interceptors.request.use(
  (config) => {
    // 设置请求头
    config.header = {
      Authorization: uni.getStorageSync("token") ?? "",
    };
    uni.showLoading({
      title: "加载中",
      mask: true,
    });
    return config;
  },
  (config) => {
    return Promise.reject(config);
  }
);

// 请求完成之后做一些事情
http.interceptors.response.use(
  (response) => {
    uni.hideLoading();
    if (response.data.code === 401) {
      // 未认证，跳转登录页
      uni.navigateTo({ url: "/subpkg/login/index" });
    } else if (response.data.code !== 200) {
      uni.$common.showMsg(response.data.msg);
      return Promise.reject(response);
    } else {
      return response.data;
    }
    return response;
  },
  (response) => {
    uni.$common.showMsg("服务器错误");
    return Promise.reject(response);
  }
);

export default http;
