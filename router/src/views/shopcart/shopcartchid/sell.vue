<template>
  <div>
    <NavBar>
      <template v-slot:center>
        <p>闲置出售</p>
      </template>
    </NavBar>
    <router-link to="/shopcart">
    <p style="height:20px;font-size:0.05rem;margin-bottom:30px;margin-left:10px">
      返回
    </p>
    </router-link>
    <p style="margin-left: 40%">
      点击出售闲置
      <van-icon name="smile-o" />
    </p>
    <div style="padding-left: 4%">
      <br />
      <van-uploader v-model="fileListone" multiple :max-count="3" /><br />
    </div>
    <div>
      <van-cell-group>
        <van-field
          v-model="message"
          rows="2"
          autosize
          label="闲置描述"
          left-icon="more-o"
          type="textarea"
          maxlength="50"
          placeholder="请输入闲置描述"
          show-word-limit
        />
        <van-field
          v-model="state.value2"
          clearable
          label="闲置价格"
          left-icon="balance-o"
          placeholder="请输入闲置价格"
        />
      </van-cell-group>
    </div>
    <van-button round type="primary" 
    color="rgb(427, 188, 0)"
    style="width:90%;margin-top:1rem;margin-left:5%">发布闲置</van-button>
  </div>
</template>

<script>
import NavBar from "../../../components/navbar/NavBar.vue";
import { reactive } from "vue";
import { ref } from "vue";
export default {
  name: "sell",
  components: {
    NavBar,
  },
  data() {
    return {
      num: 6,
    };
  },
  setup() {
    const fileListone = ref([]);
    const fileListtwo = ref([]);
    const fileListthree = ref([]);
    const fileListfour = ref([]);
    const fileListfive = ref([]);
    const fileListsix = ref([]);
    const state = reactive({
      value1: "",
      value2: "0",
    });
    number: "";
    return {
      state,
      fileListone,
      fileListtwo,
      fileListthree,
      fileListfour,
      fileListfive,
      fileListsix,
      state,
    };
  },
};
</script>

<style>
.sell {
  margin-left: 35%;
}
</style>