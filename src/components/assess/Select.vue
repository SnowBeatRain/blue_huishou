<template>
    <div class="root">
      <div class="header">
        <div><img src="../../../static/images/selected@2x.png" alt=""> <span>iPhone X</span></div>
        <p></p>
      </div>
      <div class="select_list">
        <div>
          <h4>购买渠道</h4>
          <ul>
            <li>大陆国行</li>
            <li>水货无锁</li>
            <li>水货有锁</li>
            <li>港澳行货</li>
          </ul>
        </div>
        <div>
          <h4>购买渠道</h4>
          <ul>
            <li>大陆国行</li>
            <li>水货无锁</li>
            <li>水货有锁</li>
            <li>港澳行货</li>
          </ul>
        </div>
                <div>
          <h4>购买渠道</h4>
          <ul>
            <li>大陆国行</li>
            <li>水货无锁</li>
            <li>水货有锁</li>
            <li>港澳行货</li>
          </ul>
        </div>
      </div>
      <div class="footer">
        <span class="btn1">重新选择</span>
        <span class="btn2" v-if="isOK">查看预估价</span>
        <span class="btn3" v-else @click="lookPrice()">查看预估价</span>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      isOK: false
    };
  },
  components: {},
  methods: {
    lookPrice() {
      this.$router.push("/tablist/price");
    }
  },
  mounted() {}
};
</script>
<style scoped lang='scss'>
// 头部
.header {
  height: 3.5rem;
  width: 100%;
  position: fixed;
  top: 0;
  div {
    height: 3rem;
    background-color: #fff;
    img {
      width: 2rem;
      margin-top: 0.5rem;
      float: left;
    }
    span {
      line-height: 3rem;
      margin-left: 0.5rem;
      font-size: 1rem;
    }
  }
  p {
    width: 100%;
    height: 0.5rem;
    background-color: #f5f7fa;
  }
}
// 选择列表
.select_list {
  width: 100%;
  padding: 3.5rem 0;
  background-color: #fff;
  font-family: "方正兰亭黑";
  div {
    padding: 0.5rem 1rem;
    h4 {
      font-size: 0.85rem;
      color: #f96969;
    }
    li {
      list-style: none;
      height: 2.75rem;
      font-size: 0.94rem;
      line-height: 2.75rem;
      padding-left: 1.5rem;
      color: #4d4d4d;
      margin-top: 0.5rem;
      border-radius: 0.5rem;
      background-color: #f5f7fa;
      border: 1px solid #dadfe7;
    }
  }
}
// 底部
.footer {
  position: fixed;
  bottom: -1px;
  height: 3rem;
  line-height: 3rem;
  width: 100%;
  span {
    font-size: 0.94rem;
    color: #333;
    width: 50%;
    float: left;
    text-align: center;
  }
  .btn1 {
    background-color: #edf0f5;
  }
  .btn2 {
    background-color: #c1c3c7;
  }
  .btn3 {
    color: #fff;
    background-color: #1d3ab2;
  }
}
</style>