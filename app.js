var get = require('model/getopenid.js')
App({

/**
 *定义全局变量 
 userType用来控制登陆人是商户还是普通用户
 storeList 用来记录登陆商户拥有的商店
 */
  globalData: {
    userType: 1, 
    storeList:[],
    openid:'',
    session_key:''
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    var that = this
    get.getOpenIdTap(that, function () {
      wx.request({
        url: 'http://127.0.0.1/begin',
        method: "GET",
        data: {
          openid: that.globalData.openid,
        },
        success: function (response) {
          console.log(response);
          var res = response.data;
          if (res.storeslist && res.storeslist.length != 0)
            that.setData({ userType: 1, storeList: res.storelist });
          else
            that.setData({ userType: 0 });
        }
      })
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    // console.log(msg)
  }
})
