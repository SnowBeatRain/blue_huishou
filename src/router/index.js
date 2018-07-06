import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
var Mine = resolve => require(["../components/Mine"], resolve);
var mineSet = resolve =>
  require(["../components/MineList/mineSet.vue"], resolve);
var address = resolve =>
  require(["../components/MineList/address.vue"], resolve);
var myOrder = resolve =>
  require(["../components/MineList/myOrder.vue"], resolve);

var TabList = resolve => require(["../components/tavList"], resolve);
var Select = resolve => require(["../components/assess/Select"], resolve);
var Price = resolve => require(["../components/assess/Price"], resolve);
var Liji = resolve => require(["../components/assess/Liji"], resolve);
var fillAddress = resolve => require(["../components/assess/fillAddress"], resolve);

var Found = resolve => require(["../components/Found"], resolve);
var FoundDetail = resolve => require(["../components/FoundDetail"], resolve);

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      meta: {
        title: "首页"
        // keepAlive: true //
      },
      component: Home
    },
    // ----------------
    {
      path: "/mine",
      meta: {
        title: "我的"
        // keepAlive: true
      },
      component: Mine
    },
    {
      path: "/mine/mineset",
      meta: {
        title: "设置"
        // keepAlive: true
      },
      component: mineSet
    },
    {
      path: "/mine/address",
      meta: {
        title: "邮寄地址"
        // keepAlive: true
      },
      component: address
    },
    {
      path: "/mine/myorder",
      meta: {
        title: "我的订单"
        // keepAlive: true
      },
      component: myOrder
    },
    // ----------------
    {
      path: "/tablist",
      meta: {
        title: "机型"
        // keepAlive: true
      },
      component: TabList
    },
    {
      path: "/tablist/select",
      meta: {
        title: "估价"
        // keepAlive: true
      },
      component: Select
    },
    {
      path: "/tablist/price",
      meta: {
        title: "价格"
        // keepAlive: true
      },
      component: Price
    },
    {
      path: "/tablist/liji",
      meta: {
        title: "立即回收"
        // keepAlive: true
      },
      component: Liji
    },
    {
      path: "/tablist/filladd",
      meta: {
        title: "上门地址"
        // keepAlive: true
      },
      component: fillAddress
    },
    
    // ----------------
    {
      path: "/found",
      meta: {
        title: "发现"
        // keepAlive: true
      },
      component: Found
    },
    {
      path: "/found/founddetail",
      meta: {
        title: "详情"
        // keepAlive: true
      },
      component: FoundDetail
    }
  ]
});
