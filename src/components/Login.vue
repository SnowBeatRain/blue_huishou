<template>
    <div class="root">
    <div class="userInfo">
      <div>
        <img src="../../static/images/head_portrait@2x.png" alt="">
      </div>
    </div>
        <!--登陆  -->
        <div class="login">
            <div>
                <label>
                   <img src="../../static/images/phone.png" alt="">                  
                </label>
                <input @input="changeVal()" class="tell" type="number" name="tell" placeholder="请输入手机号码">
                <img class="del" v-show="isShowDel" @click="delAll()" src="../assets/tabbar/delete@2x.png">
            </div>
            <p style="margin-left:2.3rem;" class="tellCheck">请输入手机号</p>
            <div>
                <label>
                    <img src="../../static/images/verification_code.png" alt="">       
                </label>
                <input class="yz" @input="changeCodeVal()" type="number" name="yz" placeholder="请输入验证码">
                <button class="yanzheng" id="btn" @click="getYZ()">验证码</button>
            </div>
            <p style="margin-left:2.3rem;"  class="codeCheck">请输入验证码</p>
            <input @click="onSubmit()" class="submit" type="submit" value="登录">
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isAgree: true,
      isShowDel: false,
      serverUrl: "",
      iskong1: false,
      iskong2: false
    };
  },
  methods: {
    delAll() {
      var phone = $(".tell").val("");
      this.isShowDel = false;
      this.iskong1 = false;
    },
    changeVal() {
      var reg = /^1[0-9][0-9]\d{8}$/;
      if ($(".tell").val() == "") {
        this.isShowDel = false;
        this.iskong1 = false;
      } else {
        this.isShowDel = true;
        if (reg.test($(".tell").val())) {
          $(".tellCheck").fadeOut(500);
          this.iskong1 = true;
        } else {
          $(".tellCheck").fadeIn(500);
          $(".tellCheck").text("请检查手机号");
          this.iskong1 = false;
        }
      }
    },
    changeCodeVal() {
      if ($(".yz").val() == "") {
        $(".codeCheck").fadeIn(500);
        $(".codeCheck").text("请输入验证码");
        this.iskong2 = false;
      } else {
        $(".codeCheck").fadeOut(500);
        this.iskong2 = true;
      }
    },
    // 获取验证码
    getYZ() {
      var reg = /^1[0-9][0-9]\d{8}$/;
      if (reg.test($(".tell").val())) {
        $(".tellCheck").fadeOut(500);
        var countdown = 30;
        var tt = this;
        function invokeSettime(obj) {
          settime(obj);
          function settime(obj) {
            if (countdown == 0) {
              $(obj).attr("disabled", false);
              $(obj).html("验证码");
              countdown = 30;

              return;
            } else {
              $(obj).attr("disabled", true);
              $(obj).html("(" + countdown + ") s ");
              countdown--;
            }
            setTimeout(function() {
              settime(obj);
            }, 1000);
          }
          var phone = $(".tell").val();
          // 获取验证嘛
          tt.$dialog.toast({
            mes: "发送成功",
            timeout: 3000,
            icon: "success"
          });
          // $.ajax({
          //   type: "get",
          //   url: domain.baseurl + "/api/VerifyCode/Send?phone=" + phone,
          //   success: function(data) {
          //     if (data.Status == 1) {

          //     } else {
          //       alert(data.Result);
          //     }
          //   }.bind(this)
          // });
        }
        new invokeSettime("#btn");
      } else {
        $(".tellCheck").fadeIn(500);
        $(".tellCheck").text("请检查手机号");
      }
    },
    onSubmit() {
      var phone = $(".tell")
        .val()
        .trim();
      var yz = $(".yz")
        .val()
        .trim();
      // 判断单选框是否选中
      if (this.isAgree == true) {
        // 判断手机号
        if (phone == "") {
          this.iskong1 = false;
          $(".tellCheck").text("请输入手机号");
          $(".tellCheck").fadeIn(500);
        } else {
          var reg = /^1[0-9][0-9]\d{8}$/;
          if (reg.test($(".tell").val())) {
            $(".tellCheck").fadeOut(500);
            this.iskong1 = true;
          } else {
            $(".tellCheck").fadeIn(500);
            $(".tellCheck").text("请检查手机号");
            this.iskong1 = false;
          }
        }
        // 判断验证码
        if (yz == "") {
          $(".codeCheck").fadeIn(500);
          this.iskong2 = false;
        } else {
          this.iskong2 = true;
        }

        setTimeout(() => {
          if (this.iskong1 == this.iskong2) {
            if (this.iskong1) {
              var user={
                'phone':phone,
                'code':yz
              }
              localStorage.setItem("user",JSON.stringify(user))
              this.$dialog.toast({
                mes: "登录成功",
                timeout: 1500,
                icon: "success"
              });
              window.location.href = "#/mine";
              // $.ajax({
              //   type: "get",
              //   url:
              //     domain.baseurl +
              //     "/api/User/BindingPhone?phone=" +
              //     phone +
              //     "&code=" +
              //     yz +
              //     "&openid=" +
              //     getCookie("openid"),
              //   datatype: "json",
              //   success: function(data) {
              //     if (data.Status == 1) {
              //       setCookie("token", data.Result.Token);
              //       alert("绑定成功");
              //       window.location.href = "#/passcode";
              //     } else if (data.Status == 1) {
              //       alert(data.Result);
              //     } else {
              //       alert(data.Result);
              //     }
              //   },
              //   error: function() {
              //     window.location.href = "#//error";
              //   }
              // });
            } else {
              console.log("no");
            }
          } else {
            console.log("no");
          }
        }, 0);
      } else {
        alert("请先同意服务协议");
      }
    }
    // 服务协议请求
  },
  mounted() {
    var boxHeight = document.body.clientHeight;
    $(".root").css({
      height: boxHeight
    });
    // this.changeVal();
    // 服务协议
    // $.ajax({
    //   type: "get",
    //   url: domain.baseurl + "/api/Sys/Agreement",
    //   success: function(data) {
    //     if (data.Status == 1) {
    //       this.serverUrl = domain.baseurl + "/content/web/Agreement.html";
    //     } else {
    //       alert("获取失败");
    //     }
    //   }.bind(this)
    // });
  }
};
</script>

<style scoped>
.root {
  background-color: #fff;
  width: 100%;
  height: 100%;
  padding-top: 3rem;
}
.userInfo {
  height: 10.5rem;
  padding: 2rem 0;
  overflow: hidden;
  background-color: #fff;
  margin-bottom: 0.5rem;
  background-image: url(../../static/images/my_bg@2x.png);
  background-size: 100% 100%;
}
.userInfo div {
  text-align: center;
  width: 100%;
  height: 5rem;
}

.userInfo div img {
  width: 5rem;
  height: 5rem;
}
.del {
  height: 1rem;
  position: absolute;
  right: 1rem;
  top: 1rem;
}

.agree {
  height: 0.8rem;
  position: relative;
  top: 0rem;
}

.login {
  padding: 2rem 2.5rem;
}

.login > div {
  height: 3rem;
  padding: 0 0.3rem;
  position: relative;
  border-bottom: 1px solid #c4d5f0;
}
.login > div:nth-child(2) {
  margin-top: 1rem;
}
.login label {
  float: left;
  height: 100%;
  padding-top: 0.75rem;
}
.login label img {
  height: 1.5rem;
}
.login > div input {
  color: #4d4d4d;
  font-size: 0.875rem;
  font-family: "微软雅黑";
}
.login .yanzheng {
  height: 2.06rem;
  width: 4.375rem;
  border-radius: 2.18rem;
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
  background-color: #1d3ab2;
  color: #efefef;
  font-size: 0.75rem;
  font-family: "方正兰亭黑";
  border: none;
  line-height: 2.06rem;
}

.login span {
  font-size: 1rem;
}

.submit {
  width: 100%;
  height: 2.75rem;
  border-radius: 1.375rem;
  background-color: #1d3ab2;
  color: white;
  font-size: 1rem;
  font-family: "方正兰亭黑";
  border: none;
  margin-top: 5rem;
}

.tell {
  width: 82%;
}

.tell,
.yz {
  height: 100%;
  padding-left: 0.5rem;
  border: none;
  /* line-height: 3rem; */
  background-color: #fff;
}

.tellCheck,
.codeCheck {
  color: red;
  display: none;
}
</style>
