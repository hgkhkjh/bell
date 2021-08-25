<template>
  <div style="padding-bottom:40px">
    <NavBar>
      <template v-slot:center>
        <p>消 &nbsp; 息</p>
      </template>
  
    </NavBar>
    <van-search
  v-model="value"
  shape="round"
  placeholder="请输入搜索关键词,列如：未接單，快遞..."
/>
<van-card
  price="2.00"
  desc="找人代取中通快递，送到六舍楼下，感谢"
  title="找人代取快递"
  thumb="https://s10.mogucdn.com/mlcdn/c45406/180919_3f62ijgkj656k2lj03dh0di4iflea_750x390.jpg"
>
  <template #tags>
    <van-tag plain type="danger">15分钟</van-tag>
  </template>
  <template #footer>
    已接单
  </template>
</van-card>

<van-card
  price="2.00"
  desc="食堂三楼懒人焖饭方便的同学帮一下帮"
  title="找人带饭"
  thumb="https://s10.mogucdn.com/mlcdn/c45406/180917_18l981g6clk33fbl3833ja357aaa0_750x390.jpg"
>
  <template #tags>
    <van-tag plain type="danger">15分钟</van-tag>
  </template>
  <template #footer>
    <van-button size="mini" ><span style="color:red">未接单</span></van-button>
  </template>
</van-card>

<van-card
  price="2.00"
  desc="收夏季军训帽子56号"
  title="收帽子"
  thumb="https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg"
>
  <template #tags>
    <van-tag plain type="danger">15分钟</van-tag>
  </template>
  <template #footer>
    <van-button size="mini"><span style="color:red">未接单</span></van-button>
  </template>
</van-card>
<van-card
  price="2.00"
  desc="食堂三楼懒人焖饭方便的同学帮一下帮"
  title="找人带饭"
  thumb="https://s10.mogucdn.com/mlcdn/c45406/180917_18l981g6clk33fbl3833ja357aaa0_750x390.jpg"
>
  <template #tags>
    <van-tag plain type="danger">15分钟</van-tag>
  </template>
  <template #footer>
    <van-button size="mini" ><span style="color:red">未接单</span></van-button>
  </template>
</van-card>

<van-card
  price="2.00"
  desc="收夏季军训帽子56号"
  title="收帽子"
  thumb="https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg"
>
  <template #tags>
    <van-tag plain type="danger">15分钟</van-tag>
  </template>
  <template #footer>
    <van-button size="mini"><span style="color:black">已接单</span></van-button>
  </template>
</van-card>
<van-card
  price="2.00"
  desc="食堂三楼懒人焖饭方便的同学帮一下帮"
  title="找人带饭"
  thumb="https://s10.mogucdn.com/mlcdn/c45406/180917_18l981g6clk33fbl3833ja357aaa0_750x390.jpg"
>
  <template #tags>
    <van-tag plain type="danger">15分钟</van-tag>
  </template>
  <template #footer>
    <van-button size="mini" ><span style="color:black">已接单</span></van-button>
  </template>
</van-card>

<van-card
  price="2.00"
  desc="收夏季军训帽子56号"
  title="收帽子"
  thumb="https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg"
>
  <template #tags>
    <van-tag plain type="danger">15分钟</van-tag>
  </template>
  <template #footer>
    <van-button size="mini"><span style="color:red">未接单</span></van-button>
  </template>
</van-card>
  </div>
</template>

<style >
.img {
  width: 100%;
}
.tabcon {
  position: sticky;
  top: 20px;
  z-index: 100;
}


.van-card__content{
  padding-left: 0.35rem;
  line-height: 1rem;
 
} 
.van-search{
    position: fixed;
    top: 30px;
    z-index: 2;
    width: 100%;
    height: 37px;
  }
  .van-card:not(:first-child){
    margin-top: 45px;
    margin-bottom: -35px;
  }
  .van-field__control[type=search]{
    font-size: 0.1rem;
  }
</style>
<script>
import NavBar from "../../components/navbar/NavBar.vue";
export default {
  name: "home",
  components: {
    NavBar,
  },
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  methods: {
   
  }
};
</script>

