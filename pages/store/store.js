var get=require("../../model/getopenid.js")
Page({

  
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    var info=e.detail.value;
    var that=this;
    get.getOpenIdTap(that,function(){ wx.request({
      url: 'http://127.0.0.1/onloadstore',
      method: "GET",
      data:{
        openid:that.data.openid,
        store:info.store,
        address:info.address,
        tel: info.tel,
        feature:info.feature
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
    })})
    wx.redirectTo({
      url: './goodslist/goodslist',
    })
   
  },
    formReset: function() {
      console.log('form发生了reset事件')
    }
,
  /**
   * 页面的初始数据
   */
  data: {
    
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