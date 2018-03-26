var storeinfo = require("../../servicedata/storeinfo.js");
Page({
  data: {
    imgUrls: [
      '/images/timg.jpg',
      '/images/timg1.jpg',
      '/images/timg2.jpg'
    ]
  },
  onLoad: function (options) {
    console.log(storeinfo.name);
    this.setData({
      store: storeinfo.storelist,
      name: storeinfo.name
    });

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
