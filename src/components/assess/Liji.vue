<template>
  <div class="root">
    <div class="box1">
      <h4>选择回收方式</h4>
     <div>
        <ul>
          <router-link to="/mine/address">
            <li>
              <div>邮寄回收</div>
              <div>
                <img src="../../../static/images/enter@2x.png" alt="">
              </div>
            </li>
          </router-link>
          <router-link to="/tablist/filladd">
            <li>
              <div>上门回收</div>
              <div>
                <img src="../../../static/images/enter@2x.png" alt="">
              </div>
            </li>
          </router-link>
      </ul>
     </div>
    </div>
    <div class="box2">
       <h4>回收须知</h4>
       <div>
         <p>1.山寨机，高仿机不回收。</p>
        <p>2.屏幕锁未解，iCloud账户未注销不回收。</p>
        <p>拒收并退回以上两种手机，您需承担双向运费</p>
       </div>
    </div>
    <div class="box3">
       <h4>iPhone如何解锁</h4>
       <div>
         <p>Q:iPhone如何取消开机密码</p>
         <p>A:设置-Touch ID和密码-点击关闭密码</p>
         <p>Q:iPhone如何关闭iCloud</p>
         <p>A:设置-进入iCloud-注销-从我的iPhone删除-输入密码-删除</p>
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
  methods: {},
  mounted() {}
};
</script>
<style scoped lang='scss'>
.root{
  padding-top: 3rem;
}
h4 {
  color: #808080;
  font-size: 0.82rem;
  line-height: 2.5rem;
  background-color: #f5f7fa;
  padding-left: 1rem;
}
.box1 {
  li {
    height: 3rem;
    padding: 0 0.5rem 0 1rem;
    background-color: #fff;
    line-height: 3rem;
    border-bottom: 1px solid #e6e6e6;
    div:nth-child(1) {
      float: left;
      color: #333333;
      font-size: 0.95rem;
      font-family: "方正兰亭黑";
      letter-spacing: 0.2rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    div:nth-child(2) {
      float: right;
      height: 3rem;
      img {
        margin-top: 0.3rem;
        width: 1.5rem;
        margin-top: 0.75rem;
      }
    }
  }
}
.box2 {
  div {
    background-color: #fff;
    padding: 1rem;
    p {
      font-size: 0.95rem;
      color: #333;
      line-height: 1.8rem;
    }
    p:nth-child(3) {
      font-size: 0.7rem;
      color: #f96969;
    }
  }
}
.box3 {
  div {
    background-color: #fff;
    padding: 1rem;
    p {
      font-size: 0.95rem;
      color: #333;
      line-height: 1.8rem;
    }
    p:nth-child(1),
    p:nth-child(3) {
      color: #808080;
    }
  }
}
</style>
