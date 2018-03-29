var storeinfo = require("../../servicedata/storeinfo.js");
var App = getApp()
Page({
  data: {
    imgUrls: [],
    store:[],
    haveStroe:false
  },
  onLoad: function (options) {
    var that = this
    var storeImg = []
    wx.request({
      url: 'https://www.greatforworld.com/ranking',
      method:'GET',
      success:function(res){
        if(res.data.code == 0){
          that.setData({
            store:res.data.data
          })
        }
      }
    })
    
  },
  onPostTap: function (event) {
    var postid = event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: 'post-detail/post-detail?id=' + postid,
    })
  },
  gotoorder: function () {
    wx.navigateTo({
      url: '../order/order',

    })
  }
})
