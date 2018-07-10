<template>
  <div class="hello">
    <!-- list -->
    <ul>
      <router-link to="/found/founddetail/num=1">
        <li>
          <div class="left">
            <p class="text">用热门大型手游测试华为“很吓人技术”，体验果然不同凡响</p>
            <p class="icon"><img src="../../static/images/eye@2x.png" alt=""><span>1056</span></p>
          </div>
          <div class="right">
            <img src="../../static/images/num1.png" alt="">
          </div>
        </li>
      </router-link>
      <router-link to="/found/founddetail/num=2">
        <li>
          <div class="left">
            <p class="text">OPPO再推高价低配新手机，网友表示果然还是原来的配方</p>
            <p class="icon"><img src="../../static/images/eye@2x.png" alt=""><span>981</span></p>
          </div>
          <div class="right">
            <img src="../../static/images/num2.png" alt="">
          </div>
        </li>
      </router-link>
      <router-link to="/found/founddetail/num=3">
        <li>
          <div class="left">
            <p class="text">VIVO 欲通过NEX打通全球市场，本月底将在这几个国家上市</p>
            <p class="icon"><img src="../../static/images/eye@2x.png" alt=""><span>45</span></p>
          </div>
          <div class="right">
            <img src="../../static/images/num3.png" alt="">
          </div>
        </li>
      </router-link>
      <router-link to="/found/founddetail/num=4">
        <li>
          <div class="left">
            <p class="text">小米上市雷军这么说，网友表示不枉一直支持</p>
            <p class="icon"><img src="../../static/images/eye@2x.png" alt=""><span>176</span></p>
          </div>
          <div class="right">
            <img src="../../static/images/num4.png" alt="">
          </div>
        </li>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userInfo: {}
    };
  },
  methods: {
  }
};
</script>
<style scoped lang="scss">
.hello {
  font-family: "方正兰亭黑";
  letter-spacing: 0.05rem;
  padding-top: 3rem;
  margin-bottom: 3.3rem;
  background-color: #f5f7fa;
}

li {
  height: 6.25rem;
  margin: 1rem 0 0 0;
  padding: 0 1rem;
  background-color: #fff;
  position: relative;
  .left {
    float: left;
    padding: 0.625rem 0;
    width: calc(100% - 8rem);
    .text {
      font-size: 0.8rem;
      color: #4d4d4d;
      line-height: 1.2rem;
    }
    .icon {
      position: absolute;
      height: 2rem;
      bottom: 0;
      img {
        width: 2rem;
        float: left;
        height: 2rem;
      }
      span {
        line-height: 2rem;
        color: #b3b3b3;
      }
    }
  }
  .right {
    float: right;
    img {
      width: 7rem;
      height: 5rem;
      margin-top: 0.625rem;
    }
  }
}
</style>
