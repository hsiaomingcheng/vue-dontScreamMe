<template>
  <div
    :class="wallWrapClassBind(wall)"
    v-for="wall in wallData"
    :key="wall.image"
  >
    <div class="text-container">
      <p class="title">{{wall.title}}</p>
      <p class="text" v-for="(text, index) in wall.text" :key="index">{{text}}</p>

      <div class="link-button" v-if="wall.buttonLinkId">
        <router-link :to="wall.buttonLinkId">{{wall.buttonLinkName}}</router-link>
      </div>
    </div>

    <img :src="require(`../../assets/images/home/${wall.image}`)" :alt="wall.title">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IntroduceWall',
  data() {
    return {
      wallData: [
        {
          title: '關於 日常茶間',
          text: [
            '品茶本該是件緩慢美好的時光，因為乘夢追夢變得倉促，',
            '好在短暫小歇的日常茶間裡，心能有所依泊可尋。',
            ' ',
            '願人人能在茶與茶之間發現日常的美好，藉由自身向外傳達良善、正面的價值觀。',
          ],
          image: 'wall-1.jpg',
          isHorizontal: true,
          buttonLinkId: 'story',
          buttonLinkName: '閱讀更多',
        },
        {
          title: '品牌堅持',
          text: [
            '加入了大量茶的元素，',
            '與經營超過40年的台灣老茶莊',
            '推出台灣茶或有台灣傳統飲料元素的產品。',
          ],
          image: 'wall-2.jpg',
          isReverse: 'true',
        },
        {
          title: '團隊',
          text: [
            '開店前提供系統化的教育訓練，創造服務價值和分享價值。',
            '成功開店後會由營運督導協助店鋪門市人員，',
            '以利人員更加熟悉流程。',
            '營運督導定期巡各店做店內輔導。',
          ],
          image: 'wall-3.jpg',
        },
      ],
    };
  },
  methods: {
    wallWrapClassBind(e) {
      let className = 'wallWrap';

      if (e.isHorizontal) {
        className = `${className} horizontal`;
      }

      if (e.isReverse) {
        className = `${className} reverse`;
      }
      return className;
    },
  },
});
</script>

<style lang="scss" scoped>
.wallWrap {
  display: flex;
  margin-bottom: 60px;
  &:last-child {
    margin-bottom: 0;
  }
  &.horizontal {
    img {
      width: 57%;
    }

    .text-container {
      width: 43%;
    }
  }
  &.reverse {
    flex-direction: row-reverse;
  }
  img {
    display: block;
    width: 50%;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 6.5%;
    text-align: left;
    width: 50%;

    .title {
      margin-bottom: 18px;
      font-size: 28px;
      line-height: 1.4;
    }

    .text {
      font-size: 13px;
      line-height: 1.8;
      min-height: 13px;
    }

    .link-button > a {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #d4d4d4;
      color: #303030;
      font-size: 14px;
      width: 142px;
      height: 40px;
      transition: all .3s ease;

      &:hover {
        background-color: #7d9174;
        color: #fff;
      }
    }

    .link-button {
      margin-top: 40px;
    }
  }
}
</style>
