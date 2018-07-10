<template>
  <div class="hello">
    <div class="userInfo">
      <div>
        <img src="../../static/images/head_portrait@2x.png" alt="">
      </div>
      <!-- <router-link to="/mine/login"> -->
        <div style="color:#fff;">{{userName}}</div>
      <!-- </router-link> -->
    </div>
    <!-- list -->
    <ul>
      <router-link to="/mine/myorder">
        <li>
          <div>
            <img src="../../static/images/my_order@2x.png" alt="">
          </div>
          <div>我的订单</div>
          <div>
            <img src="../../static/images/enter@2x.png" alt="">
          </div>
        </li>
      </router-link>
      <router-link to="/mine/address">
        <li>
          <div>
            <img src="../../static/images/my_address@2x.png" alt="">
          </div>
          <div>邮寄地址</div>
          <div>
            <img src="../../static/images/enter@2x.png" alt="">
          </div>
        </li>
      </router-link>
      <!-- <router-link to="/mine/opinion"> -->
      <li @click="show1 = true">
        <div>
          <img src="../../static/images/contact_customer_service@2x.png" alt="">
        </div>
        <div>联系客服</div>
        <div>
          <img src="../../static/images/enter@2x.png" alt="">
        </div>
      </li>
      <!-- </router-link> -->
      <!-- <router-link to="/mine/aboutus"> -->
      <li @click="show1 = true">
        <div>
          <img src="../../static/images/help_feedback@2x.png" alt="">
        </div>
        <div>帮助和反馈</div>
        <div>
          <img src="../../static/images/enter@2x.png" alt="">
        </div>
      </li>
      <!-- </router-link> -->
      <router-link to="/mine/mineset">
        <li>
          <div>
            <img src="../../static/images/setting@2x.png" alt="">
          </div>
          <div>设置</div>
          <div>
            <img src="../../static/images/enter@2x.png" alt="">
          </div>
        </li>
      </router-link>
    </ul>

    <yd-popup v-model="show1" position="center" width="90%">
      <div class="module" style="background-color:#fff;border-radius: 5px;">
        <div>
          <p>
          <img src="../../static/images/window_customer_service@2x.png" alt="">
        </p>
        <p style="font-size:1rem;">服务时间7*12小时 9:00-19:00</p>
        <a href="tel://400-800-9966">
        <p style="font-size:1.2rem;">
          400-800-9966
        </p>
        </a>
        <p style="text-align: center;" @click="show1 = false">
        </p>
      </div></div>
    </yd-popup>
  </div>
</template>
<script>
import Vue from "vue";
import { Popup } from "vue-ydui/dist/lib.rem/popup";
/* 使用px：import {Popup} from 'vue-ydui/dist/lib.px/popup'; */

Vue.component(Popup.name, Popup);
export default {
  data() {
    return {
      show1: false,
      userName: "点击登录"
    };
  },
  methods: {
    getUserInfo() {
      if (localStorage.getItem("user")) {
        this.userName = JSON.parse(localStorage.getItem("user")).phone;
      } else {
        this.userName = "点击登录";
      }
    }
  },
  mounted() {
    this.getUserInfo();
    if (localStorage.getItem("user")) {
    } else {
      this.$router.push("/mine/login");
    }
  }
};
</script>
<style scoped>
* {
  list-style: none;
}

#app {
  background-color: #f7f7f7 !important;
}

.hello {
  font-family: "方正兰亭黑";
  letter-spacing: 0.05rem;
  padding-top: 3rem;
  background-color: #f7f7f7;
}

.userInfo {
  height: 10.5rem;
  padding: 1rem;
  overflow: hidden;
  background-color: #fff;
  margin-bottom: 0.5rem;
  background-image: url(../../static/images/my_bg@2x.png);
  background-size: 100% 100%;
}

.userInfo div:nth-child(1) {
  text-align: center;
  width: 100%;
  height: 5rem;
}

.userInfo div:nth-child(1) img {
  width: 5rem;
  height: 5rem;
}

.userInfo div:nth-child(2) {
  line-height: 2rem;
  text-align: center;
  color: #fff;
  font-size: 1.065rem;
  letter-spacing: 0.1rem;
}

.userInfo div:nth-child(3) {
  line-height: 6.5rem;
}

.userInfo div:nth-child(3) img {
  width: 2.5rem;
}

li {
  height: 3rem;
  padding: 0 0.5rem 0 1rem;
  background-color: #fff;
  line-height: 3rem;
  border-bottom: 1px solid #e6e6e6;
}

li div:nth-child(1) {
  float: left;
  width: 2rem;
  height: 2rem;
  margin-top: 0.5rem;
}

li div:nth-child(1) img {
  width: 100%;
  height: 100%;
}

li div:nth-child(2) {
  float: left;
  margin-left: 1rem;
  color: #333333;
  font-size: 0.95rem;
  font-family: "方正兰亭黑";
  letter-spacing: 0.2rem;
}

li div:nth-child(3) {
  float: right;
  height: 3rem;
}

li div:nth-child(3) img {
  margin-top: 0.3rem;
  /* width: 50%; */
  width: 1.5rem;
  margin-top: 0.75rem;
}

.module {
  height: 18.05rem;
  padding: 3rem 0;
}
.module div p {
  text-align: center;
}
.module div p img {
  width: 7.8rem;
  /* height: 6.28rem; */
}
</style>
