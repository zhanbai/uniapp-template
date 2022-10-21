// 通用方法
export default {
  // 消息提示
  showMsg(title = "数据加载失败！", duration = 1500) {
    uni.showToast({
      title,
      duration,
      icon: "none",
    });
  },
};
