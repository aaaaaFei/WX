exports.getOpenIdTap=function (that,callback) {
  const APP_ID = 'wxeb4ada740a5cea84';//输入小程序appid
  const APP_SECRET = 'be6725bab23542e63079f3cd4d683948';//输入小程序app_secret
  // const APP_SECRET = '0f77e244c4afa0f3afacfc1e4560070e';//输入小程序app_secret
  var OPEN_ID = ''//储存获取到openid
  var SESSION_KEY = ''//储存获取到session_key
  wx.login({
    success: function (res) {
      wx.request({
        //获取openid接口
        url: 'https://api.weixin.qq.com/sns/jscode2session',
        data: {
          appid: APP_ID,
          secret: APP_SECRET,
          js_code: res.code,
          grant_type: 'authorization_code'
        },
        method: 'GET',
        success: function (res) {
          if (res.data.openid && res.data.session_key) {
          console.log(res.data)
          OPEN_ID = res.data.openid;//获取到的openid
          SESSION_KEY = res.data.session_key;//获取到session_key
          console.log(OPEN_ID.length)
          console.log(SESSION_KEY.length)
          that.globalData.openid = res.data.openid.substr(0, 10) + '********' + res.data.openid.substr(res.data.openid.length - 8, res.data.openid.length)
          that.globalData.session_key = res.data.session_key.substr(0, 8) + '********' + res.data.session_key.substr(res.data.session_key.length - 6, res.data.session_key.length)

            // that.setData({
            //   openid: res.data.openid.substr(0, 10) + '********' + res.data.openid.substr(res.data.openid.length - 8, res.data.openid.length),
            //   session_key: res.data.session_key.substr(0, 8) + '********' + res.data.session_key.substr(res.data.session_key.length - 6, res.data.session_key.length)

            // })
          callback();
          }          
        }
      })
    }
  })

}
