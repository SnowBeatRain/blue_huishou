<template>
  <div>
    <yd-tab v-model="tab">
      <yd-tab-panel label="手机">
        <div class="tablist">
          <div class="listLeft">
            <ul>
              <li :class="Phactive == i?'click_active':''" v-for="(l,i) in PhoneList" :key="i" @click="clickTab(i)">
                <span>{{l.name}}</span>
              </li>
            </ul>
          </div>
          <div class="listRight">
            <ul>
                <li @click="touchstart(l.name)" v-for="(l,i) in PhoneList[Phactive].children"  :key="i">
                  <span v-if="i+1 ==1" class="first">{{i+1}}</span>
                  <span v-else-if="i+1 ==2" class="second">{{i+1}}</span>
                  <span v-else-if="i+1 ==3" class="three">{{i+1}}</span>
                  <span v-else>{{i+1}}</span>
                  {{l.name}}
                </li>
            </ul>
          </div>
          <div class="clear"></div>
        </div>
      </yd-tab-panel>
      <yd-tab-panel label="平板">
        <div class="tablist">
          <div class="listLeft">
            <ul>
               <li :class="Padactive == i?'click_active':''" v-for="(l,i) in PadList" :key="i" @click="clickPad(i)">
                <span>{{l.name}}</span>
              </li>
            </ul>
          </div>
          <div class="listRight">
            <ul>
                <li @click="touchstart(l.name)" v-for="(l,i) in PadList[Padactive].children"  :key="i">
                  <span v-if="i+1 ==1" class="first">{{i+1}}</span>
                  <span v-else-if="i+1 ==2" class="second">{{i+1}}</span>
                  <span v-else-if="i+1 ==3" class="three">{{i+1}}</span>
                  <span v-else>{{i+1}}</span>
                  {{l.name}}
                </li>
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

import pList from "../../static/js/phone.js";
import padList from "../../static/js/pad.js";
export default {
  data() {
    return {
      PhoneList: [],
      PadList: [],
      tab: 0,
      Phactive: 0, // 判断点击的是哪一个手机
      Padactive: 0 // 判断点击的是哪一个手机
    };
  },
  components: {},
  methods: {
    clickTab(e) {
      this.Phactive = e;
    },
    clickPad(e) {
      this.Padactive = e;
    },
    touchstart(e) {
      localStorage.setItem("PName",e)
      localStorage.setItem("PTab",this.tab)
      this.$router.push("/tablist/select")
    }
  },
  beforeMount() {
    this.PhoneList = pList;
    this.PadList = padList;
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
