<template>
  <view class="main">
    <swiper indicator-dots circular>
      <block v-for="(items, i) in navGridList" :key="i">
        <swiper-item>
          <view class="nav-grid">
            <block v-for="(item, i) in items" :key="i">
              <view class="nav-grid-item">
                <view class="icon"><image class="image" :src="item.image" mode="scaleToFill" /></view>
                <view class="title">{{ item.title }}</view>
              </view>
            </block>
          </view>
        </swiper-item>
      </block>
    </swiper>
  </view>
</template>

<script>
import navGridList from "./mock";

export default {
  components: {},
  data: () => ({
    navGridList: navGridList,
  }),
  computed: {},
  methods: {},
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
// 轮播图区域
swiper {
  height: 360rpx;
}

// 金刚区
.nav-grid {
  margin-top: 24rpx;
  display: flex;
  flex-wrap: wrap;

  .nav-grid-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 150rpx;
    height: 150rpx;
  }

  .icon {
    width: 80rpx;
    height: 80rpx;
  }

  .title {
    margin-top: 12rpx;
    color: #666;
    font-size: 24rpx;
  }
}
</style>
