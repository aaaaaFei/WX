var App = getApp()
Page({
  formSubmit: function(event)
  {
    var info = event.detail.value;
    var that = this;
    if (!that.data.path) {
      wx.showToast({
        title: '请上传图片',
        icon: 'loading',
        duration: 1000,
        mask: true
      })
      return
    }
    wx.uploadFile({
      url: 'https://www.greatforworld.com/common/upload',
      method: 'POST',
      filePath: that.data.path,
      name: 'files',
      success: function (res) {
        var data = JSON.parse(res.data)
        var imgID = data.data[0].id
        wx.request({
          url: 'https://www.greatforworld.com/addGodds',
          method: "POST",
          data: {
            storied: App.globalData.storied,
            name: info.name,
            id: imgID,
            price: info.price
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
          },
          success: function (res) {
            console.log(typeof (res.data))
            if (res.data.code == 0) {
              wx.showToast({
                title: '添加成功',
                icon: 'success',
                duration: 1000,
                mask: true,
                success: function () {
                  wx.redirectTo({
                    url: '../../posts/post-detail/post-detail?storeId=' + App.globalData.storied,
                  })
                }
              })

            } else {
              wx.showToast({
                title: res.data.errmsg,
                icon: 'loading',
                duration: 1000,
                mask: true
              })
            }
          },
          fail:function(err){
            debugger
          }

        })
      }
    })
  },
  chooseImage: function () {
    var that=this;
    wx.chooseImage({
      count: 1, 
      sizeType: ['original', 'compressed'], 
      sourceType: ['album', 'camera'], 
      success: function (res) {
        var tempFilePath=res.tempFilePaths[0];
        that.setData({path:tempFilePath});
         console.log(res);
          }
        })
      
    
  },
  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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