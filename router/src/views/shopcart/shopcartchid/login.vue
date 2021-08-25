<template>
  <div>
    <NavBar>
      <template v-slot:center>
        <p>登录</p>
      </template>
    </NavBar>
    <div class="logintop">
      <img src="../../../assets/img/login/1.png" alt="" />
    </div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="state.username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="state.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit"  color="rgb(427, 188, 0)">
          提交
        </van-button>
      </div>
    </van-form>
    <div class="other">
      <router-link to="/enroll">
      <van-button round plain type="default" size="mini" icon="flower-o"
        >点我注册</van-button
      ></router-link>
      <van-button round plain type="default" size="mini" icon="warning-o"
        >忘记密码</van-button
      >
      <router-link to="/shopcart">
        <van-button round plain type="default" size="mini" icon="share-o"
          >返回上一级</van-button
        >
      </router-link>
    </div>
  </div>
</template>

<script>
import NavBar from "../../../components/navbar/NavBar.vue";
import { reactive } from "vue";
export default {
  name: "login",
  components: {
    NavBar,
  },
  setup() {
    const state = reactive({
      username: "",
      password: "",
    });
    const onSubmit = (values) => {
      console.log("submit", values);
      this.$emit("loginmess", state);
      console.log(state.password);
    };

    return {
      state,
      onSubmit,
    };
  },
};
</script>

<style>
.logintop img {
  width: 100%;
  height: 100%;
}
.logintop {
  margin-top: -0.5rem;
}
.van-button {
  flex: 1;
}
.other {
  display: flex;
  margin: 0.2rem 10%;
  height: 5px;
}
</style>