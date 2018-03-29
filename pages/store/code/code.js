var App = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    codeImg:'',
     APP_ID : 'wxeb4ada740a5cea84',//输入小程序appid
     APP_SECRET : 'be6725bab23542e63079f3cd4d683948'//输入小程序app_secret
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var storeId = options.storeId
    // var storeId = '124145'
    // var that = this
    // wx.request({
    //   url: 'https://api.weixin.qq.com/cgi-bin/token',
    //   method:"GET",
    //   data:{
    //     grant_type:'client_credential',
    //     appid: that.data.APP_ID,
    //     secret: that.data.APP_SECRET
    //   },
    //   success:function(res){
    //     if (res.statusCode == 200){
    //       wx.request({
    //         url: 'https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=' + res.data.access_token,
    //         method:"POST",
    //         data:{
    //           scene: storeId
    //         },
    //         success:function(res){
    //             that.setData({
    //               codeImg:res.data
    //             })
    //         }
    //       })
    //     }
    //   }
    // })


    wx.request({
      url: 'https://www.greatforworld.com/wx',
      method:'POST',
      data:{
        num:123
      },
      success:function(res){
        debugger
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