//app.js
var util = require('/utils/util.js');
App({
  //当小程序启动时执行
  onLaunch: function () {
    util.showBusy('加载中');
    //登录
    wx.login({
      success: res => {
        //发送 res.code 到后台换取 openId, sessionKey
        if (res.code) {
          //调用获取用户信息接口
          wx.getUserInfo({
            success: function (resu) {
              //console.log({ encryptedData: resu.encryptedData, iv: resu.iv, code: res.code })
              //解密用户信息
              /*
              wx.request({
                url: 'https://aisss5ct.qcloud.la/Emp/mobile/login/login',
                method: 'POST',
                header: {
                  "Content-Type": "application/json"
                },
                data: {
                  code: res.code,
                  encrypteData: resu.encryptedData,
                  iv: resu.iv
                },
                success: function (resz) {
                  util.showSuccess('加载成功');
                  console.log(resz);
                  //关闭当前页面，跳转到page_001页面
                  wx.navigateTo({
                    url: '../page_001/page_001',
                  })
                }
              })
              */
            },
            fail: function () {
              util.showModel('请求失败', error);
              console.log('获取用户信息失败')
            }
          });
          wx.navigateTo({
            url: '../page_001/page_001',
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    })
  },
  globalData: {
   
  }
})