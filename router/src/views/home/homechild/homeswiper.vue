<template>
  <div>
    <swiper>
      <swiperitem v-for="(item, index) in swiperbanners" :key="index">
        <a :href="item.link">
          <img :src="item.image" class="img" />
        </a>
      </swiperitem>
    </swiper>
  </div>
</template>
<script>
import swiper from "../../../components/Swiper/Swiper.vue";
import swiperitem from "../../../components/Swiper/SwiperItem.vue";
export default {
  name: " homeswiper",
  components: {
    swiper,
    swiperitem,
  },

  
};
</script>
