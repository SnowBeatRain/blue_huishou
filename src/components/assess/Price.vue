<template>
  <div class="root">
    <div class="header">
      <p>您的iPhone X 的估价</p>
      <p>
        <span>￥1880</span>
        <span>重新估价></span>
      </p>
      <p>下单既享7天保价服务，最终成交价以工程师检测为准</p>
    </div>
    <div class="tag">
      <ul>
        <li>机身完好</li>
        <li>大陆国行</li>
        <li>保修一个月以上</li>
        <li>全新</li>
        <li>正常开机</li>
        <li>非官换机</li>
        <li>液晶正常</li>
        <li>64G</li>
        <li>指纹功能正常</li>
        <li>WIFI正常</li>
        <li>无进水</li>
        <li>修主板/换外壳</li>
        <li>通话正常</li>
      </ul>
    </div>
    <div class="line"></div>
    <div style="width:100%;margin-bottom: 3.5rem; ">
      <img style="width:100%;" src="../../../static/images/service_commitment@2x.png" alt="">
    </div>
    <div class="footer">
      <div class="line"></div>
      <div class="box">
        <a href="tel://400-800-9966">
        <div>
          <img src="../../../static/images/online_customer_service@2x.png" alt="">
          <p>客服</p>
        </div>
        </a>
        <div @click="liji()">立即回收</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    liji(){
      this.$router.push("/tablist/liji")
    }
  },
  mounted() {}
};
</script>
<style scoped lang='scss'>
.header {
  width: 100%;
  height: 7.5rem;
  line-height: 2.5rem;
  padding: 0 1rem;
  background-color: #1d3ab2;
  color: #fff;
  p:nth-child(1) {
    font-size: 0.94rem;
  }
  p:nth-child(2) {
    font-size: 1.625rem;
    span:nth-child(2) {
      font-size: 0.94rem;
      float: right;
    }
  }
  p:nth-child(3) {
    font-size: 0.75rem;
  }
}

.line {
  width: 100%;
  height: 0.5rem;
  background-color: #f5f7fa;
}

.tag {
  width: 100%;
  padding: 1rem 1rem 0;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      width: 31%;
      line-height: 1.6rem;
      font-size: 0.8rem;
      text-align: center;
      border: 1px solid #ccc;
      border-radius: 0.3rem;
      margin-bottom: 0.6rem;
    }
  }
}
// 底部
.footer {
  position: fixed;
  bottom: -1px;
  height: 3.5rem;
  width: 100%;
  .box {
    width: 100%;
    height: 100%;
    background-color: #fff;
    div:nth-child(1) {
      float: left;
      width: 4.5rem;
      text-align: center;
      font-size: 0.61rem;
      img {
        width: 1.5rem;
      }
    }
    div:nth-child(2) {
      float: left;
      width: calc(100% - 4.5rem);
      text-align: center;
      line-height: 3rem;
      font-size: 0.94rem;
      color: #fff;
      background-color: #1d3ab2;
    }
  }
}
</style>
