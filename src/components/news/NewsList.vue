<template>
  <div>

    <mt-header title="新闻资讯">
      <router-link to="/"
                   slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>

    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media"
          v-for="(news, index) in newslist"
          :key="index"
          @click="lookNewsInfo(news.id)">
        <router-link :to="'/home/newslist/' + news.id">
          <img class="mui-media-object mui-pull-left"
               :src="news.img_url">
          <div class="mui-media-body">
            <h5>{{ news.title }}</h5>
            <p class='mui-ellipsis'>
              <span>发表时间：{{ news.add_time | dateFormat }}</span>
              <span>点击：{{ news.click }}次</span>
            </p>
          </div>
        </router-link>
      </li>

    </ul>

  </div>
</template>
<script>

import { Toast } from 'mint-ui'

export default {
  data () {
    return {
      newslist: []
    }
  },
  created () {
    this.getNewsList()
  },
  methods: {
    getNewsList () {
      this.$http.get('../../data/newslist.json').then(res => {
        if (res.body.status === 0) {
          this.newslist = res.body.message
        } else {
          Toast({
            message: '获取新闻数据失败',
            duration: 2000,
            position: middle
          })
        }
      })
    },
    lookNewsInfo (id) {
      this.newslist[id].click++;
    }
  }
}
</script>
<style lang="scss" scoped>
.mui-table-view {
  .mui-table-view-cell {
    h5 {
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: 700;
    }

    .mui-ellipsis {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: #0aa;
    }
  }
}
</style>

