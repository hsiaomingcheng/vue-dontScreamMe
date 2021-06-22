<template>
  <div class="news-wall-wrap">

    <section class="news-wall">
      <article
        class="item"
        v-for="item in newsWallData"
        :key="item.id"
        :style="{backgroundImage: `url(${require(`assets/images/news/${item.image}`)})` }"
        @click="newsClick(item.id)"
      >
        <div class="block date">
          <span>{{item.date}}</span>
          <span class="dot"></span>
          <span>{{item.time}}</span>
        </div>
        <div class="block content">
          <h2>{{item.title}}</h2>

          <span class="line"></span>
        </div>
      </article>
    </section>

    <router-link
      class="read-more"
      to="news"
    >
      <p>Read More</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NewsWall',
  data() {
    return {
      newsWallData: [
        {
          id: 'news-1',
          title: '｛，母親哇愛膩捏，｝',
          image: 'news-1.webp',
          date: '5月 7',
          time: '1 分鐘',
        },
        {
          id: 'news-2',
          title: '｛，伊起喝飲料，｝',
          image: 'news-2.webp',
          date: '5月 6',
          time: '1 分鐘',
        },
        {
          id: 'news-3',
          title: '｛，讓我們一起童樂趣，｝',
          image: 'news-3.webp',
          date: '4月 6',
          time: '1 分鐘',
        },
      ],
    };
  },
  methods: {
    newsClick(id) {
      this.$router.push({ name: 'newsContent', params: { newsId: id } });
    },
  },
};
</script>

<style lang="scss" scoped>
.news-wall-wrap {
  .read-more {
    font-size: 26px;
  }

  .news-wall {
    display: flex;
    justify-content: center;
    margin-bottom: 60px;

    .item {
      cursor: pointer;
      position: relative;
      margin: 24px;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      color: #FFF;
      width: 292px;
      height: 292px;

      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        display: block;
        background: rgba(0, 0, 0, .3);
        width: 100%;
        height: 100%;
      }

      .block {
        position: relative;
        z-index: 1;
        padding: 28px 24px;
        text-align: left;
      }

      .date {
        display: flex;
        align-items: center;
        margin-bottom: 100px;
        font-size: 12px;

        .dot {
          display: block;
          margin: 0 7px;
          background: #FFF;
          width: 2px;
          height: 2px;
          border-radius: 50%;
        }
      }

      .content {
        h2 {
          margin-bottom: 12px;
          font-size: 20px;
          line-height: 1.25;
        }

        .line {
          display: block;
          background: #FFF;
          width: 100%;
          height: 1px;
        }
      }
    }
  }
}
</style>
