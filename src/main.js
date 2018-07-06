// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

import YDUI from "vue-ydui"; /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
// import 'vue-ydui/dist/ydui.rem.css';
/* 使用px：import 'vue-ydui/dist/ydui.px.css'; */
// import 'vue-ydui/dist/ydui.base.css';
// 设置域名
import domain from "./domain.js";
global.domain = domain;

// 设置路由页面标题
import VueTitle from "vue-wechat-title";
Vue.use(VueTitle);
// 引入弹框
import {
  Confirm,
  Alert,
  Toast,
  Notify,
  Loading
} from "vue-ydui/dist/lib.rem/dialog";
// 引入是按
import { DateTime } from "vue-ydui/dist/lib.rem/datetime";

Vue.prototype.$dialog = {
  confirm: Confirm,
  alert: Alert,
  toast: Toast,
  notify: Notify,
  loading: Loading
};
Vue.component(DateTime.name, DateTime);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});

// 改变html字体大小

window.onresize = function() {
  calcRam();
};
function calcRam() {
  var html = document.querySelector("html");
  var w = document.documentElement.clientWidth;
  // 字体16px
  html.style.fontSize = w / 23.5 + "px";
}
calcRam();
//alert去除网址
var wAlert = window.alert;
window.alert = function(message) {
  try {
    var iframe = document.createElement("IFRAME");
    iframe.style.display = "none";
    iframe.setAttribute("src", "data:text/plain,");
    document.documentElement.appendChild(iframe);
    var alertFrame = window.frames[0];
    var iwindow = alertFrame.window;
    if (iwindow == undefined) {
      iwindow = alertFrame.contentWindow;
    }
    iwindow.alert(message);
    iframe.parentNode.removeChild(iframe);
  } catch (exc) {
    return wAlert(message);
  }
};
