pageurl = location.href;
signature = '';
var nonceStr; //在全局 定义验证码  
function createCode() {
	nonceStr = "";
	var codeLength = 16; //验证码的长度  
	var selectChar = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'l', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的  
	for (var i = 0; i < codeLength; i++) {
		var charIndex = Math.floor(Math.random() * 60);
		nonceStr += selectChar[charIndex];
	}
}
createCode();

bkl(getCookie("api_ticket"))
function bkl(ticket) {
	var timestamp1 = Date.parse(new Date());
	signature = "jsapi_ticket=" + ticket + "&noncestr=" + nonceStr + "&timestamp=" + timestamp1 + "&url=" + pageurl
	signature = hex_sha1(signature);
	wx.config({
		debug: false,
		appId: 'wx54ae4168b59ab799',
		timestamp: timestamp1,
		nonceStr: nonceStr,
		signature: signature,
		jsApiList: [
			'checkJsApi',
			'onMenuShareTimeline',
			'onMenuShareAppMessage',
			'onMenuShareQQ',
			'onMenuShareWeibo',
			'onMenuShareQZone',
			'hideMenuItems',
			'showMenuItems',
			'hideAllNonBaseMenuItem',
			'showAllNonBaseMenuItem',
			'translateVoice',
			'startRecord',
			'stopRecord',
			'onVoiceRecordEnd',
			'playVoice',
			'onVoicePlayEnd',
			'pauseVoice',
			'stopVoice',
			'uploadVoice',
			'downloadVoice',
			'chooseImage',
			'previewImage',
			'uploadImage',
			'downloadImage',
			'getNetworkType',
			'openLocation',
			'getLocation',
			'hideOptionMenu',
			'showOptionMenu',
			'closeWindow',
			'scanQRCode',
			'chooseWXPay',
			'openProductSpecificView',
			'addCard',
			'chooseCard',
			'openCard'
		],
	});
	wx.error(function (res) {
		console.log(res);
		// alert("微信appid授权错误");
		// config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，
		// 也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
	});


}