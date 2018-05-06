// pages/component/user/user.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        avater: '',
        nickname: '',
        orders: [
            {
                id: "A4561245678641685",
                thumb: "/image/c2.png",
                name: "梨花带雨",
                count: 3,
                status: "待付款",
                money: 5.00
            }
        ],
        hasAddress: false,
        address: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //获取头像        
        if (app.globalData.g_userInfo == null) {
            wx.openSetting({
                success: res => {
                    wx.getUserInfo({
                        withCredentials: true,
                        success: res => {
                            this.setData({
                                avater: res.userInfo.avatarUrl,
                                nickname: res.userInfo.nickName
                            });
                        }
                    })
                },
                fail : res=>{
                    this.setData({
                        avater: '/image/tx.jpg',
                        nickname: '用户'
                    })
                }
            });  
        } else {
            this.setData({
                avater: app.globalData.g_userInfo.avatarUrl,
                nickname: app.globalData.g_userInfo.nickName
            })
        }   
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
        var self = this;          
        
        /**
         * 获取本地缓存 地址信息
         */
        wx.getStorage({
            key: 'address',
            success: function (res) {
                self.setData({
                    hasAddress: true,
                    address: res.data
                })
            }
        })
    },
    payOrders() {
        wx.requestPayment({
            timeStamp: 'String1',
            nonceStr: 'String2',
            package: 'String3',
            signType: 'MD5',
            paySign: 'String4',
            success: function (res) {
            },
            fail: function (res) {
                wx.showModal({
                    title: '支付提示',
                    content: '<text>',
                    showCancel: false
                })
            }
        })
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