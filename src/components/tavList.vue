<template>
  <div>
    <yd-tab v-model="tab">
      <yd-tab-panel label="手机">
        <div class="tablist">
          <div class="listLeft">
            <ul>
              <li class="click_active">
                <span>苹果</span>
              </li>
              <li>
                <span>华为</span>
              </li>
              <li>
                <span>三星</span>
              </li>
              <li>
                <span>oppo</span>
              </li>
              <li>
                <span>vivo</span>
              </li>
              <li>
                <span>小米</span>
              </li>
              <li>
                <span>荣耀</span>
              </li>
              <li>
                <span>魅族</span>
              </li>
              <li>
                <span>酷派</span>
              </li>
              <li>
                <span>联想</span>
              </li>
              <li>
                <span>金立</span>
              </li>
              <li>
                <span>乐视</span>
              </li>
              <li>
                <span>锤子</span>
              </li>
            </ul>
          </div>
          <div class="listRight">
            <ul>
              <router-link to="/tablist/select">
                <li @touchstart="touchstart($event)">
                  <span class="first">1</span>IPhone X</li>
              </router-link>
              <li>
                <span class="second">2</span>IPhone 8 Plus</li>
              <li>
                <span class="three">3</span>IPhone 8</li>
              <li>
                <span>4</span> IPhone 7 Plus</li>
              <li>
                <span>5</span> IPhone 7</li>
              <li>
                <span>6</span> IPhone 6s Plus</li>
              <li>
                <span>7</span> IPhone 6s</li>
              <li>
                <span>8</span> IPhone SE</li>
              <li>
                <span>9</span> IPhone 6 Plus</li>
              <li>
                <span>10</span> IPhone 6</li>
              <li>
                <span>11</span> IPhone 5s</li>
              <li>
                <span>12</span> IPhone 5c</li>
              <li>
                <span>13</span> IPhone 5</li>
              <li>
                <span>14</span> IPhone 4s</li>
              <li>
                <span>15</span> IPhone 4</li>
            </ul>
          </div>
          <div class="clear"></div>
        </div>
      </yd-tab-panel>
      <yd-tab-panel label="平板">
        <div class="tablist">
          <div class="listLeft">
            <ul>
              <router-link to="/tablist/select">
                <li class="click_active">
                  <span>苹果</span>
                </li>
              </router-link>
              <li>
                <span>华为</span>
              </li>
              <li>
                <span>三星</span>
              </li>
              <li>
                <span>华硕</span>
              </li>
              <li>
                <span>小米</span>
              </li>
              <li>
                <span>华硕</span>
              </li>
              <li>
                <span>荣耀</span>
              </li>
              <li>
                <span>联想</span>
              </li>
              <li>
                <span>诺基亚</span>
              </li>
              <li>
                <span>戴尔</span>
              </li>
              <li>
                <span>海尔</span>
              </li>
            </ul>
          </div>
          <div class="listRight">
            <ul>
              <li @touchstart="touchstart($event)">
                <span class="first">1</span>iPad Pro(12.9寸) 2017年</li>
              <li>
                <span class="second">2</span>iPad Pro(10.5寸) 2017年</li>
              <li>
                <span class="three">3</span>iPad Pro</li>
              <li>
                <span>4</span>Apple iPad(iPad 5th gen)</li>
              <li>
                <span>5</span>iPad 2018年新款9.7寸</li>
              <li>
                <span>6</span>iPad Air 2</li>
              <li>
                <span>7</span>iPad Air 2</li>
              <li>
                <span>8</span>iPad mini 4</li>
              <li>
                <span>9</span>iPad Air 1</li>
              <li>
                <span>10</span>iPad mini 2</li>
              <li>
                <span>11</span>iPad 4</li>
              <li>
                <span>12</span>iPad mini 1</li>
              <li>
                <span>13</span>iPad 3</li>
              <li>
                <span>14</span>iPad 2</li>
              <li>
                <span>15</span>iPad 1</li>
            </ul>
          </div>
        </div>
      </yd-tab-panel>
    </yd-tab>
  </div>
</template>
<script>
import Vue from "vue";
import { Tab, TabPanel } from "vue-ydui/dist/lib.rem/tab";
/* 使用px：import {CellGroup, CellItem} from 'vue-ydui/dist/lib.px/cell'; */
import "vue-ydui/dist/ydui.base.css";
Vue.component(Tab.name, Tab);
Vue.component(TabPanel.name, TabPanel);

export default {
  data() {
    return {
      tab: 0
    };
  },
  components: {},
  methods: {
    touchstart(e) {
      console.log(e.target);
    }
  },
  mounted() {
    var type = localStorage.getItem("listType");
    this.tab = Number(type);
  }
};
</script>
<style scoped lang='scss'>
@mixin li-style {
  list-style: none;
}

li {
  @include li-style;
}

.clear {
  clear: both;
}

.tablist {
  font-size: 0.85rem;
  .listLeft {
    float: left;
    width: 6rem;
    height: 31.5rem;
    text-align: center;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    ul {
      overflow-y: scroll;
    }
    li {
      height: 3.75rem;
      padding: 0.75rem 0;
      box-sizing: border-box;
      line-height: 2.25rem;
      border-bottom: 1px solid #efefef;
      border-right: 1px solid #efefef;
      span {
        display: inline-block;
        width: 100%;
        border-bottom-right-radius: 1.125rem;
        border-top-right-radius: 1.125rem;
      }
    }
    .click_active {
      color: #fff;
      font-size: 0.85rem;
      span {
        display: inline-block;
        width: 100%;
        border-bottom-right-radius: 1.125rem;
        border-top-right-radius: 1.125rem;
        background-color: #1d3ab2;
      }
    }
  }
  .listRight {
    float: left;
    width: calc(100% - 6rem);
    height: 31.5rem;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    ul {
      overflow-y: scroll;
    }
    li {
      line-height: 3rem;
      padding-left: 1.5rem;
      width: 100%;
      margin-bottom: 1px;
      span {
        display: inline-block;
        width: 2rem;
        height: 1.5rem;
        line-height: 1.5rem;
        text-align: center;
        font-size: 0.8rem;
        margin-right: 0.5rem;
        color: #fff;
        background-color: #d2d3d6;
      }
      .first {
        background-color: #f96969;
      }
      .second {
        background-color: #f9b069;
      }
      .three {
        background-color: #78e1ac;
      }
    }
  }
}
</style>
