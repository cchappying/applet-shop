// pages/component/address/address.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        addresss: [{  
            name: '小小小',
            phone: '13456789',
            detail: '广东省广州市天河科韵路'
        },
        {
            name: '大大大',
            phone: '13456789',
            detail: '广东省广州市天河科韵路'
        }],
        isAddAddress: false,  //是否新增地址
        addName: '',
        addPhone: '',
        addAddress: '',
        isShowWxAddress : false,  //是否显示获取微信地址
        urlForm : '' //地址页父级地址
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            urlForm : options.from,
            isShowWxAddress : (options.from === 'order') ? true : false //订单显示获取微信地址
        });
    },
    checkAddress: function (e) { //选择地址
        if (this.data.urlForm === 'order'){
            var index = e.currentTarget.dataset.index;
            console.log(index);
            wx.setStorage({
                key: 'address',
                data: this.data.addresss[index],
                success() {
                    wx.navigateBack();
                }
            })
        }        
    },
    addAddress: function () {  
        this.setData({
            isAddAddress: true
        })
    },
    getWxAddress: function () {  //获取微信地址
        wx.chooseAddress({
            success: function (res) {
                //console.log(res);
                wx.setStorage({
                    key: 'address',
                    data: {
                        name: res.userName,
                        phone: res.telNumber,
                        detail: res.provinceName + res.cityName + res.countyName + res.detailInfo
                    },
                    success() {
                        wx.navigateBack();
                    }
                })
            }
        })
    },
    formSubmit: function (e) {  //保存地址
        const value = e.detail.value,
            addresss = this.data.addresss;
        //console.log(value);
        if (value.name && value.phone && value.detail) {
            addresss.push(value);
            this.setData({
                addresss: addresss,
                isAddAddress: false,
                addName: '',
                addPhone: '',
                addAddress: ''
            })
        } else {
            wx.showModal({
                title: '提示',
                content: '请填写完整资料',
                showCancel: false
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