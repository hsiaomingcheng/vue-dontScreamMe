<template>
  <div class="news">
    <div id="swiper-wrap">
      <p class="title">最新消息</p>
      <swiper
        :slides-per-view="1"
      >
        <swiper-slide>
          <img src="~assets/images/news/banner-1.webp" alt="banner-1">
        </swiper-slide>
        <swiper-slide>
          <img src="~assets/images/news/banner-2.webp" alt="banner-2">
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/swiper.scss';

export default {
  name: 'News',
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang="scss" scoped>
.swiper-wrapper {
  img {
    display: block;
    max-width: 100%;
  }

  .swiper-slide {
    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      display: block;
      background-color: rgba(0, 0, 0, .5);
      width: 100%;
      height: 100%;
    }
  }
}

#swiper-wrap {
  position: relative;

  .title {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 2;
    color: #fff;
    font-size: 40px;
    font-weight: bold;
    transform: translate(-50%, -50%);
  }
}
</style>
