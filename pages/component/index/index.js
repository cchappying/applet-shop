//index.js
//获取应用实例
const app = getApp()
var goods = require("../../../data/goods.js");

Page({
	data: {
		imgUrls: [
			'/image/b1.jpg',
			'/image/b2.jpg',
			'/image/b3.jpg'
		],
		goodsList : goods.goods,
		userInfo: {}
	},
	onLoad: function () {
        //背景音乐
        /*wx.playBackgroundAudio({
            dataUrl: 'http://ws.stream.qqmusic.qq.com/C100003507bR0gDKBm.m4a?fromtag=38',
            title: '',
            coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R150x150M000001TEc6V0kjpVC.jpg?max_age=2592000'
        })*/

	}
})
