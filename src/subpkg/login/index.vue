<template>
  <view class="main">
    <!-- 短信验证码登录 -->
    <view v-if="type === 0">
      <view class="input-box">
        <view class="area-code">
          <view class="text">+86</view>
          <view class="icon"><image class="image" src="@/subpkg/static/image/down.png" mode="scaleToFill" /></view>
        </view>
        <input type="text" placeholder="请输入手机号" @input="onPhone"
      /></view>
      <view class="input-box"
        ><input type="text" placeholder="请输入收到的验证码" @input="onPasswd" />
        <view class="code-btn">获取验证码</view>
      </view>
    </view>
    <!-- 账号密码登录 -->
    <view v-if="type === 1">
      <view class="input-box"> <input type="text" placeholder="请输入手机号" @input="onPhone" /></view>
      <view class="input-box"
        ><input :type="passwdType" placeholder="请输入密码" @input="onPasswd" />
        <view class="passwd-icon" @click="changePasswdIcon"
          ><image class="image" :src="passwdIcon" mode="scaleToFill"
        /></view>
        <view class="code-btn">忘记密码</view>
      </view>
    </view>
    <view :class="loginBtnClass">登录</view>
    <view class="quick-btn">
      <view @click="changeType">{{ quickBtnText }}</view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  data: () => ({
    type: 0, // 0 手机快速注册，1 短信验证码登录
    phone: "",
    passwd: "",
    passwdIcon: require("@/subpkg/static/image/hidden.png"),
    passwdType: "password",
    loginBtnClass: "btn",
    quickBtnText: "账号密码登录",
  }),
  computed: {},
  methods: {
    // 切换登录方式
    changeType() {
      this.passwd = "";
      if (this.type === 0) {
        this.type = 1;
        this.quickBtnText = "短信验证码登录";
      } else {
        this.type = 0;
        this.quickBtnText = "账号密码登录";
      }
    },
    // 切换密码显示与隐藏
    changePasswdIcon() {
      this.passwdIcon =
        this.passwdIcon === require("@/subpkg/static/image/hidden.png")
          ? require("@/subpkg/static/image/show.png")
          : require("@/subpkg/static/image/hidden.png");
      this.passwdType = this.passwdType === "password" ? "text" : "password";
    },
    // 监听账号输入框
    onPhone(e) {
      console.log(e);
      this.phone = e.detail.value;
    },
    // 监听密码输入框
    onPasswd(e) {
      this.passwd = e.detail.value;

      if (this.phone && this.passwd) {
        this.loginBtnClass = "btn btn-active";
      }
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
// 页面
.main {
  padding: 24rpx 48rpx;
}

// 输入框
.input-box {
  margin-top: 24rpx;
  display: flex;
  align-items: center;
  height: 100rpx;
  border-bottom: 1rpx solid #efefef;

  input {
    width: 500rpx;

    .input-placeholder {
      color: #00000066;
    }
  }

  // 密码显示隐藏图标
  .passwd-icon {
    margin-right: 24rpx;
    width: 48rpx;
    height: 48rpx;
  }

  // 区号
  .area-code {
    display: flex;
    align-items: center;
    width: 144rpx;
    height: 100rpx;

    // 区号内容
    .text {
      width: 100rpx;
      line-height: 100rpx;
      text-align: center;
      color: #000;
      font-size: 32rpx;
    }

    // 区号图标
    .icon {
      width: 28rpx;
      height: 12rpx;

      .image {
        display: block;
      }
    }
  }

  // 发送验证码
  .code-btn {
    width: 220rpx;
    border-left: 1rpx solid #ccc;
    color: #848689;
    text-align: center;
  }
}

// 登录按钮
.btn {
  margin-top: 60rpx;
  width: 100%;
  height: 100rpx;
  line-height: 100rpx;
  background-image: linear-gradient(90deg, #fab3b3, #ffbcb3 73%, #ffcaba);
  border-radius: 50rpx;
  color: #fff;
  font-size: $uni-font-size-lg;
  text-align: center;
}

// 登录按钮激活状态
.btn-active {
  background-image: linear-gradient(90deg, #f10000, #ff2000 73%, #ff4f18);
}

// 切换登录方式按钮
.quick-btn {
  margin-top: 36rpx;
  color: #00000066;
}
</style>
