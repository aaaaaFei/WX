var App = getApp()
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
    var openid = App.globalData.openid
    var that = this
    wx.request({
      url: 'https://www.greatforworld.com/myorder?openid=' + openid,
      success:function(res){
        if(res.data.code == 0){
          that.setData({
            storelist:res.data.data
          })
          for(var i =0;i<res.data.data.length;i++){
            that.getImg(i, res, that)
          }
        }
      }
    })
  },
  getImg: function (i, res, that) {
    wx.downloadFile({
      url: 'https://www.greatforworld.com/common/downLoadFile?id=' + res.data.data[i].pic,
      success: function (responce) {
        if (responce.statusCode != 200) {
          return
        }
        that.data.data[i].pic = responce.tempFilePath
        that.setData({ storelist: that.data.data });
      }

    })
  },
  onPostTap: function (event) {
    var postid = event.currentTarget.dataset.postid;
    console.log(postid);
    wx.navigateTo({
      url: '../posts/post-detail/post-detail?id=' + postid,
    })
  }


 
})