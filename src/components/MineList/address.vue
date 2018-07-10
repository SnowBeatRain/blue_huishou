<template>
    <div class="root">
      <div class="icon"><img src="../../../static/images/mailing_address@2x.png" alt=""></div>
      <div class="address">
        <p><span class="left left1">邮寄地址</span><span class="right">深圳市南山区科技园威新软件园 8号楼7号楼</span></p>
        <p><span class="left">联系人</span><span class="right">蓝色回收（收）</span></p>
        <p><span class="left">电话</span><span class="right">13540149007</span></p>
      </div>
      <div class="footer">
        长按地址或电话拷贝内容
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
  mounted() {
    var boxHeight = document.body.clientHeight;
    $(".root").css({
      "min-height": boxHeight
    });
  }
};
</script>
<style scoped lang='scss'>
.root {
  // background-color: #fff;
  position: relative;
  .icon {
    width: 100%;
    height: 15rem;
    padding-top: 3rem;
    img {
      width: 70%;
      margin-left: 15%;
    }
  }

  .address {
    font-size: 0.94rem;
    overflow: hidden;
    line-height: 3rem;
    padding: 2rem;
    .left {
      // float: left;
      display: inline-block;
      width: 5rem;
      color: #808080;
    }
    .left1 {
      position: relative;
      top: -1.5rem;
    }
    .right {
      display: inline-block;
      // float: right;
      width: calc(100% - 5rem);
      color: #333333;
      line-height: 1.5rem;
    }
  }

  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: #f5f7fa;
    font-size: 0.82rem;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    color: #999;
  }
}
</style>