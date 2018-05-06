// pages/component/details/details.js
Page({
	data: {
		goodsDetail:{  //商品详情
			name : '美味多汁的苹果',
			price : '2.10',
			stock : '100',
			desc:'美味多汁的苹果的详情美味多汁的苹果的详情美味多汁的苹果的详情美味多汁的苹果的详情美味多汁的苹果的详情美味多汁的苹果的详情美味多汁的苹果的详情美味多汁的苹果的详情美味多汁的苹果的详情',
			parameter:'500g/个',
			after_sales :'不可退换',
			thumb: [
				'/image/goods1.png',
				'/image/goods1.png',
				'/image/goods1.png'
			]
		},
        num: 1,  //加入购物车的数量
        totalNum: 0, //总共加入购物车的数量		
        scaleCart:false, //加入购物车状态
        show : false,//购物车飞入大购物车效果
        hasCarts:false, //购物车是否有商品
        stock : '有货',
        tabCurIndex: 1 //商品tab切换
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

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