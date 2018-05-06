// pages/component/cart/cart.js
Page({
    data: {
        carts: [],   //购物车数据
        hasList:false , //列表是否有数据
		selectAllStatus : true ,
		totalPrice : 0
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
        this.setData({
			hasList: true,
            carts: [{
                id: 1,
                title: '梨',
                image: '/image/s5.png',
                num: 4,
                price: 2.10,
                selected: true
			}, {
				id: 2,
				title: '梨2梨2梨2梨2梨2梨2梨2梨2梨2梨2',
				image: '/image/s5.png',
				num: 2,
				price: 10.01,
				selected: true
			}]
        });
		this.getTotalPrice();
    },
	getTotalPrice() {
		let carts = this.data.carts;
		let total = 0;
		for (let i = 0, len = carts.length; i < len; i++) {
			if (carts[i].selected == true) {
				total += carts[i].price * carts[i].num;
			}
		}
		total = total.toFixed(2);
		if (total == 0.00){
			total = 0;
		}
		this.setData({
			totalPrice: total
		});
		
	},
	selectList : function(e){
		let index = parseInt(e.currentTarget.dataset.index);
		let carts = this.data.carts;
		const selected = carts[index].selected;
		carts[index].selected = !selected;	
        this.setData({
			carts:carts
		});
        //全选状态设定
        let selectAllStatus = this.data.selectAllStatus;
        if (selectAllStatus) {
            if (selected){
                this.setData({
                    selectAllStatus: false
                });
            }        
                
        } else if (!selected){
            let selectAlls = true;
            for (let i = 0,len = carts.length; i < len; i++) {
                if (!carts[i].selected) {
                    selectAlls = false;
                    break;
                }
            }
            if (selectAlls) {
                this.setData({
                    selectAllStatus: true
                });
            }
        }
		this.getTotalPrice();
	},
	dealCount : function(e){
		let index = parseInt(e.currentTarget.dataset.index),
			dealNum = parseInt(e.currentTarget.dataset.dealnum),
			carts = this.data.carts,
			num = carts[index].num;		
		num = num + dealNum;
		if (num < 1) {
			num = 1;
		}
		carts[index].num = num;
		this.setData({
			carts: carts
		});
		this.getTotalPrice();
	},
	deleteList : function(e){
		let self = this,
            index = parseInt(e.currentTarget.dataset.index),
			carts = this.data.carts;
        
        wx.showModal({
            content: '确认删除该商品吗？',
            success: function (res) {
                if (res.confirm) {
                    carts.splice(index, 1);
                    self.setData({
                        carts: carts
                    });

                    if (!carts.length) {
                        self.setData({
                            hasList: false
                        })
                    } else {
                        self.getTotalPrice();
                    }
                }
            }
        });		
	},
	checkAllCart : function(){
		let ischeckAll = this.data.selectAllStatus,
			carts = this.data.carts;
		ischeckAll = !ischeckAll;
		for(let i = 0,len = carts.length;i<len;i++){
			carts[i].selected = ischeckAll;
		}
		this.setData({
			carts:carts,
			selectAllStatus: ischeckAll
		})
		this.getTotalPrice();
	},
	goOrder : function(){
		const totalPrice = this.data.totalPrice;
		if(!totalPrice){
			wx.showModal({
				title: '你还没选择宝贝哦'
			})	
		}else{
			let ordersCode = 'fasdfhajsdf';
			wx.navigateTo({
				url: '../orders/orders?ordersCode=' + ordersCode
			})
			
		}
		

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