<template>
  <div class="hello">
    <!-- list -->
    <ul>
        <li>
          <div class="left">
            <img src="../../../static/images/banner@2x.png" alt="">
          </div>
          <div class="right">
            <p><span>iphone7 plus</span><span class="red_color" style="float:right">已下单</span></p>
            <p><span>评估价: <span class="red_color">￥2400</span></span></p>
            <p><span class="time">2018/07/04  09:25:11</span> <button>取消</button></p>
          </div>
          
        </li>
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
  methods: {},
  mounted() {
    var boxHeight = document.body.clientHeight;
    $(".hello").css({
      "min-height": boxHeight
    });
  }
};
</script>
<style scoped lang="scss">
.hello {
  font-family: "方正兰亭黑";
  letter-spacing: 0.05rem;
  // padding-bottom: 3.3rem;
  margin-bottom: 3.3rem;
  background-color: #f5f7fa;
}
ul {
  overflow: hidden;
}
li {
  height: 6.25rem;
  margin: 1rem 0 0 0;
  padding: 0.9375rem 1rem;
  background-color: #fff;
  .left {
    float: left;
    img {
      width: 4.375rem;
      height: 4.375rem;
    }
  }
  .right {
    float: right;
    width: calc(100% - 5rem);
    color: #333;
    font-size: 0.94rem;
    p {
      line-height: 1.5rem;
      .red_color {
        color: #f96969;
      }
      .time{
        color: #808080;
        font-size: 0.7rem;
      }
      button {
        border: none;
        color: #fff;
        width: 3.75rem;
        height: 1.625rem;
        border-radius: 3px;
        background-color: #1d3ab2;
        position: relative;
        top: -1rem;
        float: right;
        font-size: 0.8rem;
      }
    }
  }
}
</style>
