<template>
  <div class="root">
    <div class="header">
      <p>您的 {{PName}} 的估价</p>
      <p>
        <span>￥{{price}}</span>
        <span @click="returnSelect()">重新估价></span>
      </p>
      <p>下单既享7天保价服务，最终成交价以工程师检测为准</p>
    </div>
    <div class="tag">
      <ul>
        <li v-for="(l,i) in tagList" :key="i">{{l}}</li>
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
    return {
      PName: "",
      tagList: [],
      price: 0
    };
  },
  components: {},
  methods: {
    liji() {
      var d = new Date();
      var date =
        d.getFullYear() +
        "/" +
        (d.getMonth() + 1) +
        "/" +
        d.getDate() +
        " " +
        d.getHours() +
        ":" +
        d.getMinutes() +
        ":" +
        d.getSeconds();
      var orderInfo = {};
      var orderArr = [];
      orderInfo.name = this.PName;
      orderInfo.price = this.price;
      orderInfo.date = date;
      orderArr.push(orderInfo)
      localStorage.setItem("orderArr", JSON.stringify(orderArr));
      this.$router.push("/tablist/liji");
    },
    returnSelect() {
      window.history.go(-1);
    }
  },
  mounted() {
    this.tagList = localStorage.getItem("tagList").split(",");
    this.PName = localStorage.getItem("PName");
    this.price = Math.floor(Math.random() * 100 + 1726);
  }
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
