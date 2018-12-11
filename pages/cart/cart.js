/**
 * @file demo page for apiDemo
 * @author renzhonghua
 */
/* globals Page, swan */

Page({
  data: {
    Number: 0,
    allSelect: true,
    carts: [
      {
        pic: "http://mz.djmall.xmisp.cn/files/product/20161201/148058328876.jpg",
        name: "日本资生堂洗颜",
        price: 200,
        isSelect: true,
        // 数据设定
        count: {
          quantity: 2,
          min: 1,
          max: 20
        },
      },
      {
        pic: 'http://mz.djmall.xmisp.cn/files/product/20161201/148058301941.jpg',
        name: "倩碧焕妍活力精华露",
        price: 340,
        isSelect: true,
        // 数据设定
        count: {
          quantity: 1,
          min: 1,
          max: 20
        },
      },
      {
        pic: 'http://mz.djmall.xmisp.cn/files/product/20161201/14805828016.jpg',
        name: "特效润肤露",
        price: 30,
        isSelect: true,
        // 数据设定
        count: {
          quantity: 2,
          min: 1,
          max: 20
        },
      },
      {
        pic: 'http://mz.djmall.xmisp.cn/files/product/20161201/148058228431.jpg',
        name: "倩碧水嫩保湿精华面霜",
        price: 490,
        isSelect: true,
        // 数据设定
        count: {
          quantity: 1,
          min: 1,
          max: 20
        },
      },
      {
        pic: 'http://mz.djmall.xmisp.cn/files/product/20161201/148057953326.jpg',
        name: "兰蔻清莹柔肤爽肤水",
        price: 289,
        isSelect: true,
        // 数据设定
        count: {
          quantity: 1,
          min: 1,
          max: 20
        },
      },
      {
        pic: "http://mz.djmall.xmisp.cn/files/product/20161201/148057921620_middle.jpg",
        name: "LANCOME兰蔻小黑瓶精华",
        price: 230,
        isSelect: true,
        // 数据设定
        count: {
          quantity: 1,
          min: 1,
          max: 20
        },
      },
    ],
  },
  // 结算
  closeAccount: function () {
    console.log(this.data.Number)
  },
  // 添加数量
  addNumber: function (e) {
    let index = e.currentTarget.dataset.index;
    this.data.carts[index].count.quantity++;
    if (this.data.carts[index].count.quantity >= this.data.carts[index].count.max) {
      this.data.carts[index].count.quantity = this.data.carts[index].count.max
    }
    if (this.data.carts[index].isSelect) {
      this.data.Number = this.data.Number + parseInt(this.data.carts[index].price)
    }
    this.setData({
      Number: this.data.Number,
      carts: this.data.carts
    })

  },
  // 减少数量
  minusNumber: function (e) {
    let index = e.currentTarget.dataset.index;
    this.data.carts[index].count.quantity--;
    if (this.data.carts[index].count.quantity <= this.data.carts[index].count.min) {
      this.data.carts[index].count.quantity = this.data.carts[index].count.min
    }
    if (this.data.carts[index].isSelect) {
      this.data.Number = this.data.Number - parseInt(this.data.carts[index].price)
    }
    this.setData({
      Number: this.data.Number,
      carts: this.data.carts
    })
  },
  // 是否选中
  isSelect: function (e) {
    let _this = this;
    let index = e.currentTarget.dataset.index;
    this.data.carts[index].isSelect = !this.data.carts[index].isSelect;
    if (!this.data.carts[index].isSelect) {
      this.data.Number = this.data.Number - parseInt(this.data.carts[index].price) * parseInt(this.data.carts[index].count.quantity)
    } else {
      this.data.Number = this.data.Number + parseInt(this.data.carts[index].price) * parseInt(this.data.carts[index].count.quantity)
    }
    let selected = this.data.carts.every((v, i) => { return v.isSelect })
    if (selected) {
      _this.setData({
        allSelect: true
      })
    } else {
      _this.setData({
        allSelect: false
      })
    }
    this.setData({
      Number: this.data.Number,
      carts: this.data.carts
    })
  },
  // 是否全选
  allSelect: function (e) {
    if (this.data.allSelect) {
      this.data.carts.forEach(function (v, i) {
        v.isSelect = false
      })
      this.setData({
        allSelect: false,
        carts: this.data.carts
      })
    } else {
      this.data.carts.forEach(function (v, i) {
        v.isSelect = true
      })
      this.setData({
        allSelect: true,
        carts: this.data.carts
      })
    }
  },
  // 删除
  delCart: function (e) {
    let index = e.currentTarget.dataset.index;
    this.data.carts.splice(index, 1)
    this.setData({
      carts: this.data.carts
    })
  },
  evt_tcoitem_start: function (e) {
    let index = e.currentTarget.dataset.index;
    if (!e.touches.length) return;
    let clientX = e.touches[0].clientX;
    this.data.carts[index]['start_clientx'] = clientX
    this.setData({
      carts: this.data.carts
    })
  },
  evt_tcoitem_move: function (e) {
    let index = e.currentTarget.dataset.index;
    if (!e.touches.length) return;
    let clientX = e.touches[0].clientX;
    let disX = this.data.carts[index].start_clientx - clientX;
    let trash_btn_width = 75;
    (disX < 0) && (disX = 0);
    if ((disX >= trash_btn_width) && (disX = trash_btn_width)) {
      this.data.carts[index]['margin_left'] = true
    } else if ((disX < trash_btn_width) && (disX = trash_btn_width)) {
      this.data.carts[index]['margin_left'] = false
    }
    this.setData({
      carts: this.data.carts
    })
  },
  evt_tcoitem_end: function (e) {
    // let trash_btn_width = 75;
    // let disX = this.data.coitem_transform_dis[e.currentTarget.dataset.ident]||0;
    // (disX >= trash_btn_width / 2) ? (disX = trash_btn_width) : (disX = 0);
    // let _set = {};
    // _set['coitem_transform_dis.' + e.currentTarget.dataset.ident] = disX;
    // this.setData(_set);
  },
// 跳转到购物车
  goCart: function () {
    wx.switchTab({
      url: '/pages/shopList/shopList',
    })
  },
  onLoad: function (options) {
    let addition = 0;
    let _this = this;
    this.data.carts.forEach(function (v, i) {
      addition += parseInt(parseInt(v.price) * parseInt(v.count.quantity))
    })
    this.setData({
      Number: addition
    })
  },

});
