//app.js
App({
    globalData: {
        g_userInfo: null
    },
    onLaunch: function () {
        var self = this;
        // 登录
        wx.login({
            success: res => {
                wx.getUserInfo({
                    withCredentials: true,
                    success: res => {
                        self.globalData.g_userInfo = res.userInfo
                    }
                })
            }
        }); 
    }
})