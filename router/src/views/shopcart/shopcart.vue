<template>
  <div>
    <NavBar>
      <template v-slot:center>
        <p>我的</p>
      </template>
    </NavBar>
    <router-link to="/login">
      <van-row style="padding: 0.3rem">
        <div class="mineleft">
          <img src="../../assets/img/touxiang/wei.png" alt="" />
        </div>
        <div class="minerighr">
          <h2 class="h2">{{username}}</h2>
        </div>
      </van-row>
    </router-link>
    <van-cell-group>
      <van-cell title="我的接单" is-link></van-cell>
      <van-cell title="信誉分" is-link />
      <van-cell title="私信" is-link />
      <router-link to="/sell">
         <van-cell title="我要卖闲置" is-link />
      </router-link>
     
      <van-cell title="我出售的闲置" is-link />
      <van-cell title="我的需求" is-link />
      <van-cell title="我的二维码" is-link />
      <van-cell title="设置" is-link />

    </van-cell-group>
  </div>
</template>
<script>
import NavBar from "../../components/navbar/NavBar.vue";
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      useravatar:"../../assets/img/touxiang/wei.png",
      username:"登录/注册"
    };
  },
  components: {
    NavBar,
  },
};
</script>
<style >
/* .van-card__title{
  font-size: 0.3rem;
    padding: 0.3rem;
} */
.myname {
  display: inline-block;
}
.mineleft {
  display: inline-block;
  height: 1.5rem;
  width: 1.5rem;
  margin-top: -0.2rem;
}
.mineleft img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
.minerighr {
  display: inline-block;
  margin-left: 0.6rem;
  margin-top: -0.2rem;
}
</style>