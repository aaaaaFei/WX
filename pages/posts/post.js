var storeinfo = require("../../servicedata/storeinfo.js");
var App = getApp()
Page({
  data: {
    imgUrls: [],
    store:[],
    haveStroe:false
  },
  onLoad: function (options) {
    var storeImg = []
    if(App.storelist.length == 0){
      this.setData({
        haveStroe: true,
        store: []
      });
    }else {
      for (var i = 0; i< 3;i++){
        storeImg.push(App.storelist[i].pic)
      }
      this.setData({
        store: App.storelist,
      });
    }
    
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
