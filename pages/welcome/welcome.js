var get = require("../../model/getopenid.js")
var App = getApp()
Page(
  {
    data: {
      userType: App.globalData.userType
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

    }

  })
 