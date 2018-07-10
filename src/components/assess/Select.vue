<template>
    <div class="root">
      <div class="header">
        <div><img src="../../../static/images/selected@2x.png" alt=""> <span>{{PName}}</span></div>
        <p></p>
      </div>
      <div class="select_list">
        <div v-if="tab == 0" class="li0">
          <h4>购买渠道</h4>
          <ul>
            <li>
              <input type="radio" name="li0" id="dlgh" value="大陆国行" />
              <label for="dlgh">大陆国行</label>
            </li>
            <li>
              <input type="radio" name="li0" id="shws" value="水货无锁" />
              <label for="shws">水货无锁</label>
            </li>
            <li>
               <input type="radio" name="li0" id="shys" value="水货有锁" />
              <label for="shys">水货有锁</label>
            </li>
            <li>
               <input type="radio" name="li0" id="gahh" value="港澳行货" />
              <label for="gahh">港澳行货</label>
            </li>
          </ul>
        </div>
        <div  class="li1">
          <h4>存储容量</h4>
          <ul>
            <li>
              <input type="radio" name="li1" id="li1_1"  value="32GB" />
              <label for="li1_1">32GB</label>
            </li>
            <li>
              <input type="radio" name="li1" id="li1_2"  value="64GB" />
              <label for="li1_2">64GB</label>
            </li>
            <li>
              <input type="radio" name="li1" id="li1_3"  value="128GB" />
              <label for="li1_3">128GB</label>
            </li>
            <li>
              <input type="radio" name="li1" id="li1_4"  value="256GB" />
              <label for="li1_4">256GB</label>
            </li>
          </ul>
        </div>
        <div  class="li2">
          <h4>保修期</h4>
          <ul>
            <li>
              <input type="radio" name="li2" id="li2_1"  value="保修一个月以上" />
              <label for="li2_1">保修一个月以上</label>
            </li>
            <li>
              <input type="radio" name="li2" id="li2_2"  value="保修一个月以下或过保" />
              <label for="li2_2">保修一个月以下或过保</label>
            </li>
          </ul>
        </div>
        <div  class="li3">
          <h4>维修</h4>
          <ul>
            <li>
              <input type="radio" name="li3" id="li3_1"  value="修主板/换外壳/严重拆修" />
              <label for="li3_1">修主板/换外壳/严重拆修</label>
            </li>
            <li>
              <input type="radio" name="li3" id="li3_2"  value="小维修" />
              <label for="li3_2">小维修</label>
            </li>
            <li>
              <input type="radio" name="li3" id="li3_3"  value="无拆机无维修" />
              <label for="li3_3">无拆机无维修</label>
            </li>
            <li>
              <input type="radio" name="li3" id="li3_4"  value="港澳行货" />
              <label for="li3_4">港澳行货</label>
            </li>
          </ul>
        </div>
        <div  class="li4">
          <h4>屏幕显示</h4>
          <ul>
            <li>
              <input type="radio" name="li4" id="li4_1"  value="亮点/色差/发黄" />
              <label for="li4_1">亮点/色差/发黄</label>
            </li>
            <li>
              <input type="radio" name="li4" id="li4_2"  value="严重老化/色斑" />
              <label for="li4_2">严重老化/色斑</label>
            </li>
            <li>
              <input type="radio" name="li4" id="li4_3"  value="换过屏幕/断线/显示不正常" />
              <label for="li4_3">换过屏幕/断线/显示不正常</label>
            </li>
            <li>
              <input type="radio" name="li4" id="li4_4"  value="显示正常" />
              <label for="li4_4">显示正常</label>
            </li>
          </ul>
        </div>
        <div  class="li5">
          <h4>屏幕外观</h4>
          <ul>
            <li>
              <input type="radio" name="li5" id="li5_1"  value="屏幕完好，无任何划痕" />
              <label for="li5_1">屏幕完好，无任何划痕</label>
            </li>
            <li>
              <input type="radio" name="li5" id="li5_2"  value="有划痕" />
              <label for="li5_2">有划痕</label>
            </li>
            <li>
              <input type="radio" name="li5" id="li5_3"  value="屏幕有缺角/碎裂" />
              <label for="li5_3">屏幕有缺角/碎裂</label>
            </li>
            <li>
              <input type="radio" name="li5" id="li5_4"  value="屏幕失灵" />
              <label for="li5_4">屏幕失灵</label>
            </li>
          </ul>
        </div>
        <div  class="li6">
          <h4>机身外观</h4>
          <ul>
            <li>
              <input type="radio" name="li6" id="li6_1"  value="外观完好，无任何划痕" />
              <label for="li6_1">外观完好，无任何划痕</label>
            </li>
            <li>
              <input type="radio" name="li6" id="li6_2"  value="外观有划痕" />
              <label for="li6_2">外观有划痕</label>
            </li>
            <li>
              <input type="radio" name="li6" id="li6_3"  value="外观有磕碰/掉漆" />
              <label for="li6_3">外观有磕碰/掉漆</label>
            </li>
            <li>
              <input type="radio" name="li6" id="li6_4"  value="外观掉漆" />
              <label for="li6_4">外观掉漆</label>
            </li>
          </ul>
        </div>
        <div  class="li7">
          <h4>其他问题 （可多选或不选）</h4>
          <ul>
            <li>
              <input type="checkbox" name="li7" id="li7_1"  value="机身变形或断裂" />
              <label for="li7_1">机身变形或断裂</label>
            </li>
            <li>
              <input type="checkbox" name="li7" id="li7_2"  value="全新（未使用/未激活）" />
              <label for="li7_2">全新（未使用/未激活）</label>
            </li>
            <li>
              <input type="checkbox" name="li7" id="li7_3"  value="不能正常开机/掉漆" />
              <label for="li7_3">不能正常开机/掉漆</label>
            </li>
            <li>
              <input type="checkbox" name="li7" id="li7_4"  value="WIFI不正常" />
              <label for="li7_4">WIFI不正常</label>
            </li>
            <li>
              <input type="checkbox" name="li7" id="li7_5"  value="通话不正常" />
              <label for="li7_5">通话不正常</label>
            </li>
            <li>
              <input type="checkbox" name="li7" id="li7_6"  value="ID/账户无法解除" />
              <label for="li7_6">ID/账户无法解除</label>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer">
        <span class="btn1" @click="cancel()">重新选择</span>
        <span class="btn2" v-if="isOK == 0">查看预估价</span>
        <span class="btn3" v-else-if="isOK == 1" @click="lookPrice()">查看预估价</span>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      PName: "",
      tab: 0,
      isOK: 0
    };
  },
  components: {},
  methods: {
    cancel() {
      var radioArr = $("input[type=radio]:checked");
      scrollTo(0, 0);
      for (let i = 0; i < radioArr.length; i++) {
        const re = radioArr[i];
        // console.log($(re));
        $(re)[0].checked = false;
      }
    },
    lookPrice() {
      var tagList = [];
      var radioArr = $("input[type=radio]:checked");
      var checkboxArr = $("input[type=checkbox]:checked");
      for (let i = 0; i < radioArr.length; i++) {
        const re = radioArr[i];
        tagList.push($(re).val());
      }
      for (let j = 0; j < checkboxArr.length; j++) {
        const ce = checkboxArr[j];
        tagList.push($(ce).val());
      }
      setTimeout(() => {
        localStorage.setItem("tagList", tagList);
        this.$router.push("/tablist/price");
      }, 100);
    }
  },
  beforeMount() {
    this.tab = localStorage.getItem("PTab"); // 根据tab判断是手机还是pad
    console.log(this.tab)
    this.PName = localStorage.getItem("PName");
  },
  mounted() {
    var _this = this;

    $("label").click(function(e) {
      setTimeout(() => {
        var radioArr = $("input[type=radio]:checked");
        if (_this.tab == 0) {
          if (radioArr.length === 7) {
            _this.isOK = 1;
          } else {
            _this.isOK = 0;
          }
        } else if (_this.tab == 1) {
          if (radioArr.length === 6) {
            _this.isOK = 1;
          } else {
            _this.isOK = 0;
          }
        }
      }, 0);
    });
  }
};
</script>
<style scoped lang='scss'>
// 头部
.header {
  height: 3.5rem;
  width: 100%;
  position: fixed;
  top: 3rem;
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
  margin-top: 3rem;
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
      color: #4d4d4d;
      margin-top: 0.5rem;
      border-radius: 0.5rem;
      background-color: #f5f7fa;
      input {
        display: none;
      }
      label {
        padding-left: 1.5rem;
        display: inline-block;
        width: 100%;
      }
      input:checked + label {
        border-radius: 0.5rem;
        color: #1d3ab2;
        border: 1px solid #1d3ab2;
      }
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