<template>
  <div id="app">
    <transition name="tabani" v-if="isShow">
      <div class='nav-bar'>
        <router-link class="nav-a" to="/">
          <div class="span">
            <p class="home_nav">
            </p>
            <p class="bottom">
              <span class="titleName">首页</span>
            </p>
          </div>
        </router-link>
        <!-- <router-link class="nav-a" to="/tablist"> -->
          <div class="span" @click="gotoClick()">
            <p class="model_nav">
            </p>
            <p class="bottom">
              <span class="titleName">机型</span>
            </p>
          </div>
        <!-- </router-link> -->
        <router-link class="nav-a" to="/found">
          <div class="span">
            <p class="foundl_nav">
            </p>
            <p class="bottom">
              <span class="titleName">发现</span>
            </p>
          </div>
        </router-link>
        <router-link class="nav-a" to="/mine">
          <div class="span">
            <p class="mine_nav">
            </p>
            <p class="bottom">
              <span class="titleName">我的</span>
            </p>
          </div>
        </router-link>

      </div>
    </transition>
    <!-- 有缓存 -->
    <!-- <keep-alive>
      <router-view v-wechat-title="$route.meta.title" v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-wechat-title="$route.meta.title" v-if="!$route.meta.keepAlive"></router-view> -->

      <router-view v-wechat-title="$route.meta.title"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      animationType: "",
      isShow: false
    };
  },
  methods: {
    gotoClick() {
      localStorage.setItem("listType", 0);
      this.$router.push("/tablist");
    }
  },
  // 判断url长度 决定导航条的隐藏
  created: function() {
    // console.log(this.$route);
    if (this.$route.path.split("/").length > 2) {
      this.isShow = false;
    } else {
      this.isShow = true;
    }
  },
  watch: {
    $route: function(to, from) {
      if (!(to.path == from.path)) {
        $(".mobileSelect-show").hide();
      }
      window.scrollTo(0, 0);
      var toNum = to.path.split("/").length;
      var fromNum = from.path.split("/").length;
      if (toNum == fromNum) {
        //平级切换
        this.animationType = "qqq";
      } else if (toNum > fromNum) {
        //进入
        this.animationType = "routein";
      } else {
        //退出
        this.animationType = "routeout";
      }
      if (toNum > 2) {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    }
  }
};
</script>

<style>
body {
  background-color: #fff;
  margin: 0px !important;
  font-family: "方正兰亭黑";
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  letter-spacing: 0.05rem;
}

input[type="button"],
input[type="submit"],
input[type="file"],
button {
  cursor: pointer;
  -webkit-appearance: none;
}

.nav-bar {
  position: fixed !important;
  bottom: 0px;
  text-align: center;
  height: 3.065rem;
  width: 100%;
  background-color: white;
  border-top: 2px solid #f1f1f1;
  z-index: 1000;
}

.nav-bar .span {
  text-align: center;
  display: inline-block;
  width: 24%;
}

.nav-a .titleName {
  color: gray;
}

.bottom {
  position: relative;
  top: -0.2rem;
}

.bottom span {
  font-size: 0.65rem;
}

.router-link-exact-active .titleName {
  color: #3470cb;
}

.home_nav {
  height: 2rem;
  background-image: url(../static/images/home_page@2x.png);
  background-size: 2rem 2rem;
  background-repeat: no-repeat;
  background-position: 50%, 50%;
}

.router-link-exact-active .home_nav {
  background-image: url(../static/images/home_page_selected@2x.png);
}
.model_nav {
  height: 2rem;
  background-image: url(../static/images/model@2x.png);
  background-size: 2rem 2rem;
  background-repeat: no-repeat;
  background-position: 50%, 50%;
}

.router-link-exact-active .model_nav {
  background-image: url(../static/images/model_selected@2x.png);
}
.foundl_nav {
  height: 2rem;
  background-image: url(../static/images/foundl@2x.png);
  background-size: 2rem 2rem;
  background-repeat: no-repeat;
  background-position: 50%, 50%;
}

.router-link-exact-active .foundl_nav {
  background-image: url(../static/images/foundl_selected@2x.png);
}
.mine_nav {
  height: 2rem;
  background-image: url(../static/images/my@2x.png);
  background-size: 2rem 2rem;
  background-repeat: no-repeat;
  background-position: 50%, 50%;
}

.router-link-exact-active .mine_nav {
  background-image: url(../static/images/my_selected@2x.png);
}

.backTop {
  position: fixed;
  right: 2rem;
  bottom: 5rem;
  text-align: center;
  display: none;
}

.backTopImg {
  width: 2.5rem;
  height: 2.5rem;
  animation: arrowScroll 1.5s infinite;
}

@keyframes arrowScroll {
  0% {
    transform: translateY(0);
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    transform: translateY(-0.5rem);
    opacity: 0;
  }
}
.yd-tab-box {
  position: fixed !important;
  height: 3rem !important;
  width: 100%;
  z-index: 1500 !important;
  border: none !important;
}
.yd-tab-nav {
  border: none !important;
}
.yd-tab-nav-item {
  height: 3rem !important;
  border: none !important;
  line-height: 3rem !important;
}
.yd-tab-nav-item > a {
  color: #000 !important;
  font-size: 1.2rem !important;
}
.yd-tab-nav .yd-tab-active:before {
  border: 2px solid #1d3ab2;
}
.yd-tab-panel {
  position: absolute;
  top: 3rem;
  margin-bottom: 6.5rem !important;
  z-index: 999 !important;
}
.yd-step-item-bottom span {
  font-size: 0.94rem;
}
.yd-step-theme1 .yd-step-item > em {
  width: 1.5rem;
  height: 1.5rem;
  line-height: 1.5rem;
  font-size: 1rem;
  margin-top: -0.75rem;
  margin-left: -0.75rem;
}
</style>
