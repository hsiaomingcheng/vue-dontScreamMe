<template>
  <div class="hello">
    <div class="banner-wrap">
      <img class="banner" alt="banner" src="../../assets/banner.webp">
    </div>

    <div class="sequence-wrap">
      <p class="title">不要對我尖叫 日常茶間</p>
      <span class="line"></span>
      <div class="text-wrap">
        <p class="text">品茶本該是件緩慢美好的時光，因為乘夢追夢變得倉促，</p>
        <p class="text">好在短暫小歇的日常茶間裡，心能有所依泊可尋。</p>
        <br>
        <p class="text">願人人能在茶與茶之間發現日常的美好，藉由自身向外傳達良善、正面的價值觀。</p>
      </div>
    </div>

    <section class="wall-wrap">
      <IntroduceWall />
    </section>

    <div class="news-wrap">
      <div class="title-container">
        <span></span>
        <p class="title">最新消息</p>
        <span></span>
      </div>

      <NewsWall />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IntroduceWall from './IntroduceWall.vue';
import NewsWall from './NewsWall.vue';

export default defineComponent({
  name: 'Home',
  components: {
    IntroduceWall,
    NewsWall,
  },
  data() {
    return {
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.banner-wrap {
  .banner {
    display: block;
    width: 100%;
  }
}

.sequence-wrap {
  box-sizing: border-box;
  background-color: rgb(36, 35, 35);
  color: rgb(144,144,144);
  height: 301px;
  padding-top: 77px;
  display: flex;
  justify-content: center;
  .title {
    font-size: 16px;
  }
  .text {
    display: block;
    font-size: 13px;
    text-align: left;
    line-height: 1.7;
  }
  .line {
    background-color: rgb(144,144,144);
    margin: 5px 20px 0;
    display: block;
    width: 162px;
    height: 1px;
  }
  .text-wrap {
    width: 410px;
  }
}

.wall-wrap {
  margin-bottom: 150px;
}

.news-wrap {
  .title-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    width: 796px;
    .title {
      font-size: 22px;
    }
    span {
      display: block;
      background-color: rgb(66, 66, 66);
      width: 38.2%;
      max-width: 304px;
      height: 1px;
    }
  }
}
</style>
