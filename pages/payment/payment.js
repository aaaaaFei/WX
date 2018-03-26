
var get=require("../../model/getopenid.js");
Page({


  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    get.getOpenIdTap(that,function(){
      wx.login({
        success:function(){
          wx.getUserInfo({
            success: function (userinfo) {
              var userInfo=JSON.parse(userinfo.rawData)
              console.log(JSON.parse(userinfo.rawData).nickName);
              that.setData({ user: userInfo})
            }
          })
        }
      })
     
    });
    
  },
  formSubmit: function(event){
    var payment=event.detail.value.pay;
    this.setData({ cost: payment });
    wx.request({
      url: 'http://127.0.0.1/pay',
      data: {
        openid: this.data.openid,
        userinfo:this.data.user,
        store: "锦城大酒店",
        cost: this.data.cost
      },
      method: "GET",
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      success: function (res) {
        console.log(res);
      }
    })
  },
  get_pay_info: function(event){
    var payment=event.detail.value;
    this.setData({cost:payment});
    wx.request({
      url: 'http://127.0.0.1/pay',
      data:{openid:this.data.openid,
            user:this.data.user,
            store:"锦城大酒店",
            cost:this.data.cost
      },
      method:"GET",
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      success:function(res){
        console.log("success");
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