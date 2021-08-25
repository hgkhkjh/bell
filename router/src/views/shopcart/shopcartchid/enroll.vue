<template>
  <div>
    <NavBar>
      <template v-slot:center>
        <p>注 &nbsp; 册</p>
      </template>
    </NavBar>
<div class="logintop">
      <img src="../../../assets/img/login/1.png" alt="" />
    </div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="state.username"
        name="用户名"
        label="用户名:"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="state.password"
        type="password"
        name="密码"
        label="密码:"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="state.surepassword"
        type="password"
        name="确认密码"
        label="确认密码:"
        placeholder="确认密码"
        :rules="[{ required: true, message: '确认密码' }]"
      />
         <van-field
        v-model="state.number"
        type="number"
        name="电话号"
        label="电话号:"
        placeholder="电话号"
        :rules="[{ required: true, message: '电话号' }]"
      />
      <van-field name="radio" label="性别:">
        <template #input>
          <van-radio-group v-model="checked" direction="horizontal">
            <van-radio name="1">男</van-radio>
            <van-radio name="2">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        v-model="state.value"
        readonly
        clickable
        name="area"
        label="地区选择"
        placeholder="点击选择省市区"
        @click="state.showArea = true"
      />
      <van-popup v-model:show="state.showArea" position="bottom">
        <van-area
          :area-list="areaList"
          @confirm="onConfirm"
          @cancel="state.showArea = false"
        />
      </van-popup>
    
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit"  color="rgb(427, 188, 0)" >
          提交
        </van-button>
      </div>
    </van-form>
 
    <router-link to="/login" style="  margin:0rem 3rem">
        <van-button round plain type="default" size="mini" icon="share-o"
          >返回上一级</van-button
        >
      </router-link>
  </div>
</template>

<script>
import NavBar from "../../../components/navbar/NavBar.vue";
import { reactive } from "vue";
import { ref } from 'vue';
// import { areaList } from '@vant/area-data';
export default {
  name: "enroll",
  components: {
    NavBar,
  },
  setup() {
    const state = reactive({
      username: "",
      password: "",
      surepassword: "",
      number:"",
      //地区选择
      value: "",
      showArea: false,
    });

    const onSubmit = (values) => {
      console.log("submit", values);
      //地区选择
    };

    const onConfirm = (values) => {
      state.showArea = false;
      state.value = values
        .filter((item) => !!item)
        .map((item) => item.name)
        .join("/");
    };
    //单选框
    const checked = ref("1");

    return {
      // 单选框
      checked,
      state,
      onSubmit,
      //地区选择
      areaList: {
        province_list: {
          110000: "北京市",
          120000: "天津市",
        },
        city_list: {
          110100: "北京市",
          120100: "天津市",
        },
        county_list: {
          110101: "东城区",
          110102: "西城区",
          // ....
        },
      }, // 数据格式见 Area 组件文档
      onConfirm,
    };
  },
};
</script>

<style>
.logintop img {
  width: 100%;
  height: 100%;
  margin-top: -0.2rem;
}
</style>