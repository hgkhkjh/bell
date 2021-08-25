<template>
  <div>
    <NavBar>
      <template v-slot:center>
        <p>小市场</p>
      </template>
    </NavBar>
    <!-- 下拉菜单 -->
   
    <!-- 导入商品展示 -->
    <foodsshow></foodsshow>
    <foodsshow></foodsshow>
  </div>
</template>
<script>
import NavBar from "../../components/navbar/NavBar.vue";
// 导入商品展示
import foodsshow from "./minechild/foodsshow.vue";
export default {
  name: "mine",
  components: {
    NavBar,
    foodsshow,
  },

};
</script>
<style >

</style>

