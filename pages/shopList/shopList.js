// pages/fenlei/fenlei.js
const config = require('../../config/config.js');
const util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winHeight: "",
    hideLoading:true,
    len:0,
    // fixed:false,
    tabView: [
      { name: '西贝', _id: '01', children: [{ name: '凉菜1', add: false, money: '￥18', num: '0',size:true, describe: '这是凉菜，哈哈哈' }, { name: '凉菜1', add: false, money: '￥18', num: '0', describe: '这是凉菜，哈哈哈' }, { name: '凉菜1', add: false, money: '18', num: '0', describe: '这是凉菜，哈哈哈' }, { name: '凉菜1', add: false, money: '￥18', num: '0', describe: '这是凉菜，哈哈哈' }, { name: '凉菜1', add: false, money: '￥18', num: '0', describe: '这是凉菜，哈哈哈' }, { name: '凉菜1', add: false, money: '￥18', num: '0', describe: '这是凉菜，哈哈哈' }, { name: '凉菜1', add: false, money: '￥18', num: '0', describe: '这是凉菜，哈哈哈' }, { name: '凉菜1', add: false, money: '￥18', num: '0', describe: '这是凉菜，哈哈哈' },]},
      { name: '小南国', _id: '02', add: false, children: ['凉菜2', '炒菜', '炖菜', '特色', '饮料', '主食', '小笼包', ] },
      { name: '杨国福', _id: '03', add: false, children: ['凉菜3', '炒菜', '炖菜', '特色', '饮料', '主食', '冬瓜', '香菇', '海带', '凉皮', '花菜', '包菜', '蒸饺', '挂面', '西贝小鱼', '枣糕'] },
      { name: '豪大大', _id: '04', add: false, children: ['凉菜4', '炒菜', '炖菜', '特色', '饮料', '主食', '鱿鱼', '猪排', '鸡排', '凉皮', '花菜', '包菜', '蒸饺', '挂面', '西贝小鱼', '枣糕'] },
      { name: 'a梦', _id: '05', add: false, children: ['凉菜5', '炒菜', '炖菜', '特色', '饮料', '主食', '砂锅', '粉丝', '凉皮', '花菜', '包菜', '蒸饺', '挂面', '西贝小鱼', '枣糕'] },
      { name: '秋满膳房', _id: '06', add: false, children: ['凉菜6', '炒菜', '炖菜', '特色', '饮料', '主食', '卷饼', '小米粥', '凉皮', '花菜', '包菜', '蒸饺', '挂面', '西贝小鱼', '枣糕'] },
    ],
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
    ],
    specification: [{ name: '多点辣'},
    { name: '多点醋'},
    { name: '香油'},
    { name: '香菜'},
    { name: '不要辣椒'},
    { name: 'hahahah'}],
    currentTab: 0,
    inputVal:'',
    showModel: false,

  },
  tabNavChange: function (e) {
    var cur = e.target.dataset.current;
    console.log(cur)
    if (this.data.currentTab == cur) { return false; }
    else {
      this.setData({
        currentTab: cur
      })
    }
  },
  switchTab: function (e) {
    console.log(e)
    let cur = e.detail.current;
    let len = this.data.tabView[cur].children.length +1;
    this.setData({
      len,
    })
    this.setData({
      currentTab: e.detail.current
    });
  },


  // 跳转到菜品详情
  evt_goto: function (e) {
    let _id = e.currentTarget.dataset._id
    wx.navigateTo({
      url: '/pages/detail/detail?cat_id=' + _id
    });
  },
  // input
  inputTyping: function(e) {
    let inpVal = e.detail.value;

  },
  clear: function() {
    this.setData({
      inputVal:''
    })
  },
  confirmInput:function(e) {
    console.log(e.detail.value)
  },
  // 规格提交
  formSubmit: function(e){
    console.log(e.detail.value)
    this.setData({
      showModel: false
    })
  },

// 挑选规格
  checkboxChange: function(e){
    let checkeds = e.detail.value;
    let list = this.data.specification;
    list.forEach((item, index) => {
      let check = checkeds.some(v => v == item.name);
      if (check) {
        list[index].checked = true;
      } else {
        list[index].checked = false;
      }
    })
    this.setData({
      specification: list
    })
  },
  // 添加商品
  addNumber: function(e) {
    let cur = this.data.currentTab;
    let index = e.currentTarget.dataset.index;
    this.data.tabView[cur].children[index].add = true;
    this.data.tabView[cur].children[index].num ++;
    this.setData({
      tabView: this.data.tabView
    })
  },
  //减去商品
  reduceNumber: function(e) {
    let cur = this.data.currentTab;
    let index = e.currentTarget.dataset.index;
    this.data.tabView[cur].children[index].num--;
    if (this.data.tabView[cur].children[index].num < 1) {
      this.data.tabView[cur].children[index].add = false
    }
    this.setData({
      tabView: this.data.tabView
    })
  },
  // 选规格
  seletedSize: function(e) {
    console.log(e)
    let cur = this.data.currentTab;
    let index = e.currentTarget.dataset.index;
    this.setData({
      showModel: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    var that = this;
    this.setData({
      len: this.data.tabView[0].children.length + 1
    })
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