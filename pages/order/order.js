var userinfo = require("../../servicedata/userinfo.js");
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
    var user=userinfo.userlist;
    this.setData({storelist:user[0].stores})
  },
  onPostTap: function (event) {
    var postid = event.currentTarget.dataset.postid;
    console.log(postid);
    wx.navigateTo({
      url: '../posts/post-detail/post-detail?id=' + postid,
    })
  }


 
})