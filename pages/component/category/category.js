// pages/component/category/category.js
var category = require("../../../data/category.js");
var categoryData = category.category; 
Page({
	data: {
        cataType: categoryData,   //列表分类
        categorys: categoryData[0],  //分类数据
		curIndex : 0,
		isScroll: false  //是否滚动右边模块
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
	switchTab(e) {
		const self = this;
        let index = e.currentTarget.dataset.id;
		this.setData({
			isScroll: true
		})
		setTimeout(function () { 
			self.setData({
                curIndex: index,
                categorys: categoryData[index]
			})
			

		}, 0)
		setTimeout(function () {
			self.setData({
				isScroll: false
			})
		}, 1)
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