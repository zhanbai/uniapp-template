<template>
  <view class="main">
    <!-- 搜索栏 -->
    <view class="search-bar">
      <view class="left-btn"
        ><image class="image" src="@/subpkg/static/image/search-bar/cate_btn.png" mode="scaleToFill"
      /></view>
      <view class="search-box">
        <view class="icon"
          ><image class="image" src="@/subpkg/static/image/search-bar/search.svg" mode="scaleToFill"
        /></view>
        <view class="text">唐诗三百首</view>
      </view>
      <view class="right-btn" @click="goto('/subpkg/login/index')">登录</view>
    </view>
    <!-- 填充内容 -->
    <view class="filling"
      >兰叶春葳蕤，桂华秋皎洁。 欣欣此生意，自尔为佳节。 谁知林栖者，闻风坐相悦。 草木有本心，何求美人折？
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  data: () => ({}),
  computed: {},
  methods: {
    // 跳转登录页面
    goto(url) {
      uni.$common.goto(url);
    },
  },
  watch: {},

  // 页面周期函数--监听页面加载
  onLoad() {},
  // 页面周期函数--监听页面初次渲染完成
  onReady() {},
  // 页面周期函数--监听页面显示(not-nvue)
  onShow() {},
  // 页面周期函数--监听页面隐藏
  onHide() {},
  // 页面周期函数--监听页面卸载
  onUnload() {},
  // 页面处理函数--监听用户下拉动作
  // onPullDownRefresh() { uni.stopPullDownRefresh(); },
  // 页面处理函数--监听用户上拉触底
  // onReachBottom() {},
  // 页面处理函数--监听页面滚动(not-nvue)
  // onPageScroll(event) {},
  // 页面处理函数--用户点击右上角分享
  // onShareAppMessage(options) {},
};
</script>

<style lang="scss" scoped>
// 搜索栏
.search-bar {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24rpx;
  width: 710rpx;
  height: 88rpx;
  background: #c82519;
  z-index: 1;

  // 左侧按钮
  .left-btn {
    width: 40rpx;
    height: 36rpx;
  }

  // 搜索框
  .search-box {
    display: flex;
    align-items: center;
    width: 560rpx;
    height: 60rpx;
    border-radius: 60rpx;
    background: #f7f7f7;

    // 图标
    .icon {
      margin: 0 24rpx;
      width: 36rpx;
      height: 36rpx;
    }

    // 搜索关键词
    .text {
      color: #00000066;
      font-size: 24rpx;
    }
  }

  // 右侧按钮
  .right-btn {
    color: #fff;
  }
}

// 填充内容
.filling {
  padding-top: 100rpx;
  height: 1500rpx;
}
</style>
