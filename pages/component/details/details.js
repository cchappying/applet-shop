// pages/component/details/details.js
var goods = require("../../../data/goods.js");
Page({
	data: {
        num : 1,  //加入购物车的数量
        totalNum: 0, //总共加入购物车的数量		
        scaleCart:false, //加入购物车状态
        show : false,//购物车飞入大购物车效果
        hasCarts:false, //购物车是否有商品
        stock : '有货',
        tabCurIndex: 0 //商品tab切换
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
        let id = options.id;
        this.setData({
            goodDetail: goods.goods[id]  //商品详情
        });
	},
    addToCart : function(){
        const self = this;
        const num = this.data.num;
        let total = this.data.totalNum;
        this.setData({
            show : true            
        });
        setTimeout(function(){
            self.setData({
                show:false,
                scaleCart:true
            })
            setTimeout(function () {
                self.setData({
                    scaleCart: false,
                    hasCarts: true,
                    totalNum: num + total
                })
            }, 200)
        },300)
    },
	addCount : function(e){
		let num = this.data.num;
		num++;
		this.setData({
			num : num
		})
	},
	bindTap : function(e){
		const index = parseInt(e.currentTarget.dataset.index);
		this.setData({
			tabCurIndex : index
		})
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