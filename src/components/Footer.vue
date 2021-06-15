<template>
  <footer>
    <div class="footer-container">
      <div class="name-wrap">
        <p>DONT YELL AT ME</p>
        <p>不要對我尖叫-日常茶間</p>
      </div>

      <div class="informtaion-wrap">
        <a
          class="text mail"
          :href="'mailto:' + mail"
        >{{mail}}</a>
        <p class="text">Tel. {{phoneNumber}}</p>
        <p class="text">Adr. {{address}}</p>
        <p class="text">GMT+8 10:00-19:00</p>
      </div>

      <div class="social-wrap">
        <div class="socialmedia-wrap">
          <img
          v-for="item in socialMedias"
          :key="item.name"
          :src="require(`@/assets/${item.image}`)"
          :alt="item.name">
        </div>
        <p>©DONT YELL AT ME 不要對我尖叫</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer',
  data() {
    return {
      mail: 'dontyellatme169@gmail.com',
      phoneNumber: '02-2753-5530',
      address: '台北市信義區忠孝東路四段553巷22弄6-1號',
      socialMedias: [
        {
          name: 'facebook',
          image: 'facebook.webp',
        },
        {
          name: 'instagram',
          image: 'instagram.webp',
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
footer {
  min-height: 272px;
  font-size: 11px;
  text-align: left;

  .footer-container {
    margin: 0 auto;
    width: 980px;
    display: flex;
    justify-content: center;
  }

  .name-wrap {
    margin-top: 165px;
    width: 160px;
    p {
      line-height: 14px;
    }
  }

  .informtaion-wrap {
    margin: 77px auto 0 0;
    width: 293px;
    .text {
      margin-bottom: 18px;
      line-height: 18px;
      display: block;
    }

    .mail {
      text-decoration: underline;
    }
  }

  .social-wrap {
    margin-top: 120px;
    width: 201px;

    .socialmedia-wrap {
      margin: 0 8px 15px 0;
      display: flex;
      justify-content: flex-end;

      img {
        margin-left: 10px;
      }
    }
  }
}
</style>
