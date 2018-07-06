function callpay(jsparam) {
    if (typeof WeixinJSBridge == "undefined") {
        if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', jsApiCall, false);
        } else if (document.attachEvent) {
            document.attachEvent('WeixinJSBridgeReady', jsApiCall);
            document.attachEvent('onWeixinJSBridgeReady', jsApiCall);
        }
    } else {
        jsApiCall(jsparam);
    }
}

//调用微信JS api 支付
function jsApiCall(jsparam) {
    WeixinJSBridge.invoke(
        'getBrandWCPayRequest', eval("(" + jsparam + ")"), //josn串
        //'getBrandWCPayRequest', jsparam , //josn串
        function (res) {
            if (res.err_msg == "get_brand_wcpay_request:ok") {
                location.href = "../me.html";
            } // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。 
            else {

            }
        }
    );
}
