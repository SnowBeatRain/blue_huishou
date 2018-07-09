<template>
  <div class="hello">
    <!-- list -->
    <ul>
      <router-link to="/found/founddetail">
        <li>
          <div class="left">
            <p class="text">iPhone X销量疯狂下滑：苹果狠心砍单！</p>
            <p class="icon"><img src="../../static/images/eye@2x.png" alt=""><span>628</span></p>
          </div>
          <div class="right">
            <img src="../../static/images/detailImg.png" alt="">
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
    getUserInfo() {
      // this.$dialog.loading.open();
      $.ajax({
        type: "get",
        url: domain.baseurl + "/api/User/Info",
        datatype: "json",
        beforeSend: function(xhr) {
          xhr.setRequestHeader("Authorization", getCookie("token"));
        },
        success: function(data) {
          // this.$dialog.loading.close();
          if (data.Status == 1) {
            this.userInfo = data.Result;
            if (this.userInfo.NickName.length >= 16) {
              this.userInfo.NickName =
                this.userInfo.NickName.substring(0, 16) + "...";
            } else {
              this.userInfo.NickName = this.userInfo.NickName;
            }
          } else if (data.Status == 40033) {
            alert(data.Result);
            window.location.href = "#//login";
          } else {
            window.location.href = "#//error";
          }
        }.bind(this),
        error: function() {
          // this.$dialog.loading.close();
          alert("获取数据异常，请检查网络");
        }.bind(this)
      });
    }
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
