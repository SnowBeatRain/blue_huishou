<template>
  <div class="hello">
    <div class="content">
      <div class="list">
        <span class="leftName">姓&nbsp;&nbsp;&nbsp;名：</span>
        <input type="text" v-model="userName" placeholder="请输入您的姓名" autofocus="true">
      </div>
      <div class="list">
        <span class="leftName">手机号：</span>
        <input type="number" v-model="userPhone"  placeholder="请输入您的手机号码">
      </div>
      <div class="list">
        <span class="leftName">地&nbsp;&nbsp;&nbsp;址：</span>
        <!-- <input type="address" v-model="userAddress"  placeholder="请输入您的取件地址">  -->
        <textarea v-model="userAddress" class="address" placeholder="请输入您的取件地址"></textarea>
      </div>
    </div>
    <div class="footer" @click="saveBtn()">
      保存
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: "",
      userPhone: "",
      userAddress: ""
    };
  },
  methods: {
    saveBtn() {
      var _this = this
      if (
        this.userName == "" ||
        this.userPhone == "" ||
        this.userAddress == ""
      ) {
        this.$dialog.toast({
          mes: "请完善信息",
          timeout: 1000,
          icon: "error"
        });
      } else {
        var userInfo = {
          userName: this.userName,
          userPhone: this.userPhone,
          userAddress: this.userAddress
        };
        localStorage.setItem("mailUsetAddress", JSON.stringify(userInfo));
        this.$dialog.toast({
          mes: "设置成功",
          timeout: 1000,
          icon: "success"
        });
        setTimeout(() => {
          _this.$router.push("/mine")
        }, 1000);
      }
    }
  },
  mounted() {
    var boxHeight = document.body.clientHeight;
    $(".hello").css({
      "min-height": boxHeight
    });
  },
  beforeMount() {
    var mailUsetAddress = JSON.parse(localStorage.getItem("mailUsetAddress"));
    if (mailUsetAddress) {
      this.userName = mailUsetAddress.userName;
      this.userPhone = mailUsetAddress.userPhone;
      this.userAddress = mailUsetAddress.userAddress;
    }
  },
  mounted() {}
};
</script>
<style scoped>
.hello {
  background: #f5f7fa;
}
.list {
  padding: 0 1rem;
  /* height: 3rem; */
  line-height: 3rem;
  font-size: 1rem;
  border-bottom: 1px solid #e6e6e6;
  background-color: #fff;
}

input {
  height: 3rem;
  border: none;
  width: calc(100% -4rem);
  padding-left: 0.5rem;
  color: #b3b3b3;
  font-family: "方正兰亭黑"
}

select {
  width: 5rem;
  border: none;
  height: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  /* appearance: none; */
  cursor: pointer;
  color: #b3b3b3;
  background-color: #fff;
  margin-left: 0.5rem;
}
.leftName {
  float: left;
}
.address {
  color: #b3b3b3;
  border: none;
  height: 100%;
  width: 60%;
  line-height: 2rem;
  font-size: 1rem;
  margin-top: 0.5rem;
  border-radius: 0.5rem;
  font-family: "方正兰亭黑";
  padding-left: 0.5rem;
  outline: none;
  -webkit-appearance: none;
}
.sanjiao {
  display: inline-block;
  background-color: #666;
  border-top: 10px solid transparent;
  border-left: 10px solid #fff;
  border-right: 10px solid #fff;
  position: relative;
  left: -20px;
}
.footer {
  position: fixed;
  bottom: 0;
  height: 3rem;
  width: 100%;
  line-height: 3rem;
  font-size: 1rem;
  color: #1D3AB2;
  text-align: center;
  background-color: #fff;
}
</style>
