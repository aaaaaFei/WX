var get = require("../../model/getopenid.js")
var App = getApp()
Page(
  {
    data: {
      userType: 0
    },
    ontap: function () {
      wx.switchTab({
        url: '../posts/post',
      })
    },
    ontapTodetil: function (event) {
      wx.navigateTo({
        url: '../posts/myPostList/myPostList'
      })
    },
    onLoad: function () {
      var that = this
      get.getOpenIdTap(App, function () {
        wx.request({
          url: 'https://www.greatforworld.com/begin',
          method: "POST",
          data: {
            openid: App.globalData.openid,
          },
          success: function (response) {
            var res = response.data;
            if (res.data && res.data.length != 0) {
              App.globalData.userType = 1
              App.globalData.storeList = res.data
              that.setData({
                userType: App.globalData.userType,
                storeList: App.globalData.storeList
              })
            }
            else {
              App.globalData.userType = 0
            }
            
          }
        })
      })
      
    }

  })
 