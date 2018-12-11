//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    orderForm:[
      {name:'待支付',src:'../../img/home_fill.png'},
      { name: '待接单', src: '../../img/home_fill.png' },
      { name: '待签收', src: '../../img/home_fill.png' },
      { name: '已取消', src: '../../img/home_fill.png' },
      ]
  },
  //查看全部
  lookAll: function() {
    wx.navigateTo({
      url: '/pages/orderForm/orderForm'
    })
  },
  onLoad: function () {
    let userInfo = wx.getStorageSync('user_info');
    if (userInfo) {
      this.setData({
        userInfo: userInfo,
        hasUserInfo: true
      });
    } else {
      this.setData({
        hasUserInfo: false
      });
    };
  },
  getUserInfo: function(e) {
    wx.setStorageSync('user_info', e.detail.userInfo);
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
