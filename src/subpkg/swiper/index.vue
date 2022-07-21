<template>
  <view class="main">
    <!-- 轮播图背景 -->
    <view class="swiper-bg"></view>
    <!-- 轮播图列表 -->
    <swiper indicator-dots autoplay circular indicator-color="#ffffff99" indicator-active-color="#fa2c19">
      <block v-for="(item, i) in swiperList" :key="i">
        <swiper-item><image class="image" :src="item.image" mode="scaleToFill" /></swiper-item>
      </block>
    </swiper>
  </view>
</template>

<script>
import swiperList from "./mock";

export default {
  components: {},
  data: () => ({
    swiperList: swiperList,
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
// 页面
.main {
  padding: $uni-spacing-row-base;
}

// 轮播图背景
.swiper-bg {
  position: absolute;
  background-image: linear-gradient(0deg, #f1503b, #c82519 50%);
  width: 150%;
  height: 240rpx;
  top: 0;
  left: -25%;
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;
}

// 轮播图列表
swiper {
  overflow: hidden;
  border-radius: $uni-border-radius-lg;
}
</style>
