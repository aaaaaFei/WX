var App = getApp()
// pages/posts/myPostList/myPostList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    store: App.globalData.storeList
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://api.weixin.qq.com/cgi-bin/token',
      data: {
        grant_type: 'client_credential',
        appid: 'wxeb4ada740a5cea84',
        secret: 'be6725bab23542e63079f3cd4d683948'
      },
      method: 'GET',
      success: function (res) {
        if (res.data && res.data.access_token) {
          // var b = new Base64(); 
          // var math = Math.random()
          // var img = 'https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=' + res.data.access_token + '&scene=123451&width=430&_r=' + math
          // that.setData({ imgSrc: img })
          var where = {
            scene: '123451',
            width: 430
          }
          wx.request({
            url: 'https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=' + res.data.access_token,
            data: where,
            method: 'POST',
            success: function (res) {
              console.log(res.data)
              that.setData({ imgSrc: 'data:image/jpeg;base64,' + res.data })
            }
          })

        }
      }
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