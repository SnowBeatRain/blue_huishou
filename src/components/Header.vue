<template>
    <div class="head">
      <div class="header">
        <img @click="back()" v-if="!isShow" src="../../static/images/return@2x.png" alt="">
        {{tabName}}
      </div>
    </div>
</template>
<script>
export default {
  props: {
    tabName: String,
    isShow: Boolean
  },
  data() {
    return {};
  },
  components: {},
  methods: {
    back() {
      window.history.back();
    }
  },
  mounted() {}
};
</script>
<style scoped lang='scss'>
.head {
  width: 100%;
  height: 3rem;
  font-size: 1.12rem;
  color: #fff;
  position: fixed;
  top: 0rem;
  z-index: 1000;
  background-color: #1d3ab2;
  .header {
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    position: relative;
    img {
      position: absolute;
      left: 0.5rem;
      width: 1.5rem;
      margin-top: 0.75rem;
    }
  }
}
</style>