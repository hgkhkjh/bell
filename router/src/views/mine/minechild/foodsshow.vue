
<template>
  <div>
    <div>
      <van-row style="padding: 0.3rem; margin-top: 0rem">
        <div class="bmineleft">
          <img src="../../../assets/img/touxiang/1.png" alt="" />
        </div>
        <div class="bminerighr">
          <p>心动的猫咪</p>
        </div>
      </van-row>
    </div>
    <div class="foods">
      <img src="../../../assets/img/foods/2.png" alt="" />
      <p>一元</p>
      <van-divider />
      <img src="../../../assets/img/foods/3.png" alt="" />
      <p>一元</p>
      <van-divider />
      <img src="../../../assets/img/foods/2.png" alt="" />
      <p>一元</p>
      <van-divider />
      <img src="../../../assets/img/foods/1.png" alt="" />
      <p>一元</p>
      <van-divider />
    </div>
  </div>
</template>

<script>
export default {
  name: "foodsshow",
};
</script>

<style>
.myname {
  display: inline-block;
  margin-top: -2rem;
}
.bmineleft {
  display: inline-block;
  height: 0.9rem;
  width: 0.9rem;
}
.bmineleft img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
.bminerighr {
  display: inline-block;
  margin-left: 0.2rem;
}
.foods img {
  width: 100%;
  height: 100%;
}
.foods {
  padding: 0.3rem;
}
.foods p {
  text-align: center;
  margin-top: 0px;
}

</style>
