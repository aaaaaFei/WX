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
      var postid = event.currentTarget.dataset.postid;
      wx.navigateTo({
        url: '../posts/post-detail/post-detail?id=' + postid +'&userType=1'
      })
    },
    onLoad: function () {

    }

  })
 