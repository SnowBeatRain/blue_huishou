<template>
  <div class="hello">
    <ul>
        <li @click="cleanBtn()">
          <div >清理缓存</div>
          <div>
            <img src="../../../static/images/enter@2x.png" alt="">
          </div>
        </li>
        <li>
          <div>关于我们</div>
          <div>
            <img src="../../../static/images/enter@2x.png" alt="">
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
  methods: {
    cleanBtn() {
      this.$dialog.loading.open("清理缓存中");
      localStorage.clear()
      setTimeout(() => {
        this.$dialog.loading.close();
      }, 1500);
    }
  }
};
</script>
<style scoped>
* {
  list-style: none;
}

#app {
  background-color: #f7f7f7 !important;
}

.hello {
  font-family: "方正兰亭黑";
  letter-spacing: 0.05rem;
  /* padding-bottom: 3.3rem; */
  background-color: #f7f7f7;
}

li {
  height: 3rem;
  padding: 0 0.5rem 0 1rem;
  background-color: #fff;
  line-height: 3rem;
  border-bottom: 1px solid #e6e6e6;
}

li div:nth-child(1) {
  float: left;
  color: #333333;
  font-size: 0.95rem;
  font-family: "方正兰亭黑";
  letter-spacing: 0.2rem;
}

li div:nth-child(1) img {
  width: 100%;
  height: 100%;
}

li div:nth-child(2) {
  float: right;
  height: 3rem;
}

li div:nth-child(2) img {
  margin-top: 0.3rem;
  /* width: 50%; */
  width: 1.5rem;
  margin-top: 0.75rem;
}
</style>
