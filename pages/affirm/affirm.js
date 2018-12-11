// pages/affirm/affirm.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fromList: [{ url: '../../img/1.jpg', title: '土豆炖牛腩', size: '微辣', money: '40', num: '1' }, { url: '../../img/1.jpg', title: '酸菜鱼', size: '微辣', money: '32', num: '1' }, { url: '../../img/1.jpg', title: '清炒豆芽', size: '微辣', money: '12', num: '1' }],
    payment: ['微信', '支付宝','余额','金豆'],
    index: 0
  },
  bindViewEvent: function(e) {
    console.log(e)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})