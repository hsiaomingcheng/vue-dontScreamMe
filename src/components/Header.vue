<template>
  <header>
    <div class="iconWrap">
      <img src="../assets/logo.webp" alt="不要對我尖叫">
    </div>

    <ul class="navWrap">
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <li v-for="(item) in navLists" :key="item.id">
        <router-link :to="item.path">{{item.name}}</router-link>
      </li>
    </ul>

    <div class="memberWrap">
      <p>Log in</p>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  data() {
    return {
      navLists: [
        {
          id: 'home',
          path: '/',
          name: '首頁',
        },
        {
          id: 'news',
          path: 'news',
          name: '最新消息',
        },
        {
          id: 'story',
          path: 'story',
          name: '品牌故事',
        },
        {
          id: 'drink',
          path: 'drink',
          name: '飲料列表',
        },
        {
          id: 'store',
          path: 'store',
          name: '門市列表',
        },
        {
          id: 'culture',
          path: 'culture',
          name: '企業文化',
        },
        {
          id: 'contact',
          path: 'contact',
          name: '聯絡我們',
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  width: 100%;

  .iconWrap {
    flex: 0 0 auto;
    margin-left: 30px;
    img {
      width: 43px;
      height: 59px;
    }
  }
  .navWrap {
    flex: 1 1 auto;
    display: flex;
    justify-content: center;
    margin: 32px 0 27px;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 110px;
      height: 39px;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  .memberWrap {
    flex: 0 0 auto;
    margin-right: 30px;
  }
}
</style>
