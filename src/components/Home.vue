<template>
  <div class="hello">
    <!-- 轮播 -->
    <yd-slider autoplay="3000">
      <yd-slider-item>
          <img src="../../static/images/banner@2x.png">
      </yd-slider-item>
    </yd-slider>
    <!-- tabbar -->
    <div class="tab_nav1">
      <ul>
        <li>
          <div>
            <img src="../../static/images/phone_recycling@2x.png" @click="gotoList(1)" alt="">
          </div>
        </li>
        <li>
          <div>
            <img src="../../static/images/tablet_recycling@2x.png" @click="gotoList(2)" alt="">
          </div>
        </li>
      </ul>
    </div>
    <!-- step -->
    <div data-v-fed36922="" class="yd-step yd-step-theme1">
      <div class="title">四步变现</div>
      <ul class="yd-step-content" style="padding-bottom: 42px;padding-top: 10px;color: #5D7ACA;">
        <li data-v-fed36922="" class="yd-step-item">
          <em class="">
            <i>1</i>
          </em>
          <div class="yd-step-item-top">
            <div class="yd-step-item-top-text">
              <span></span>
            </div>
          </div>
          <div class="yd-step-item-bottom">
            <span data-v-fed36922="">设备估价</span>
          </div>
        </li>
        <li data-v-fed36922="" class="yd-step-item">
          <em class="">
            <i>2</i>
          </em>
          <div class="yd-step-item-top">
            <div class="yd-step-item-top-text">
              <span></span>
            </div>
          </div>
          <div class="yd-step-item-bottom">
            <span data-v-fed36922="">在线下单</span>
          </div>
        </li>
        <li data-v-fed36922="" class="yd-step-item">
          <em class="">
            <i>3</i>
          </em>
          <div class="yd-step-item-top">
            <div class="yd-step-item-top-text">
              <span></span>
            </div>
          </div>
          <div class="yd-step-item-bottom">
            <span data-v-fed36922="">顺丰包邮</span>
          </div>
        </li>
        <li data-v-fed36922="" class="yd-step-item">
          <em class="">
            <i>4</i>
          </em>
          <div class="yd-step-item-top">
            <div class="yd-step-item-top-text">
              <span></span>
            </div>
          </div>
          <div class="yd-step-item-bottom">
            <span data-v-fed36922="">坐等收款</span>
          </div>
        </li>
      </ul>
      <p class="btn" @click="estimateBtn()">本机估价</p>
    </div>
    <!-- footer -->
    <div class="tab_nav">
      <ul>
      <div class="title">蓝色回收服务保障</div>
        <li>
          <div>
            <img src="../../static/images/package_mail.png" alt="">
          </div>
          <div>0元包邮</div>
        </li>
        <li>
          <div>
            <img src="../../static/images/collection.png" alt="">
          </div>
          <div>24小时收款</div>
        </li>
        <li>
          <div>
            <img src="../../static/images/privacy.png" alt="">
          </div>
          <div>隐私0泄露</div> 
        </li>
        <li>
          <div>
            <img src="../../static/images/detection.png" alt="">
          </div>
          <div>专业检测</div>
        </li>
      </ul>
    </div>
    <!-- <div class="footer">蓝色回收质检标准</div> -->

  </div>
</template>

<script>
import Vue from "vue";
import { Slider, SliderItem } from "vue-ydui/dist/lib.rem/slider";
/* 使用px：import {Slider, SliderItem} from 'vue-ydui/dist/lib.px/slider'; */
import { Step, StepItem } from "vue-ydui/dist/lib.rem/step";

Vue.component(Slider.name, Slider);
Vue.component(SliderItem.name, SliderItem);
export default {
  name: "Home",
  data() {
    return {};
  },
  mounted() {
    var boxHeight = document.body.clientHeight;
    $(".hello").css({
      "min-height": boxHeight
    });
    if (localStorage.getItem("user")) {
    } else {
      this.$router.push("/mine/login");
    }
    var PName = window.location.href.split("?")[1].split("#")[0];
    localStorage.setItem("PName", unescape(PName));
  },
  methods: {
    estimateBtn() {
      // alert(navigator.userAgent);
      // localStorage.setItem("PTab", this.tab);
      this.$router.push("/tablist/select");
    },
    gotoList(e) {
      this.$router.push("/tablist");
      if (e === 2) {
        localStorage.setItem("listType", 1);
      } else {
        localStorage.setItem("listType", 0);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.hello {
  font-family: "方正兰亭黑";
  padding-top: 3rem;
  letter-spacing: 0.05rem;
  padding-bottom: 3.3rem;
  background-color: #f4f4f4;
}

.tab_nav1 {
  ul {
    overflow: hidden;
    background-color: #fff;
    box-sizing: border-box;
    padding: 1rem 0.5rem;
    margin-bottom: 0.5rem;
    li {
      float: left;
      width: 50%;
      padding: 0 0.5rem;
      text-align: center;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.tab_nav {
  ul {
    overflow: hidden;
    background-color: #fff;
    padding: 1rem 0;
    margin-bottom: 0.1rem;
    li {
      float: left;
      width: 25%;
      font-size: 0.94rem;
      text-align: center;
      img {
        width: 3rem;
        border-radius: 50%;
      }
      div {
        color: #808080;
      }
    }
    .title {
      text-align: center;
      font-size: 1.06rem;
      color: #333;
      margin-bottom: 1rem;
    }
  }
}
.footer {
  width: 100%;
  height: 2.75rem;
  line-height: 2.75rem;
  font-size: 0.94rem;
  color: #4d4d4d;
  text-align: center;
  background-color: #fff;
}
// step
.yd-step {
  background-color: #fff;
  padding: 1rem 0;
  margin-bottom: 0.5rem;
  .title {
    text-align: center;
    color: #333;
    margin-bottom: 1rem;
  }
  .btn {
    text-align: center;
    color: #fff;
    margin-top: 1rem;
    background-color: #1d3ab2;
    width: 90%;
    margin-left: 5%;
    line-height: 2.6rem;
    border-radius: 1.3rem;
    font-size: 1.2rem;
  }
}
.yd-step-item > em {
  background-color: #5d7aca;
  color: #fff;
}
</style>
