<template>
  <div class="newsinfo-container">

    <mt-header title="新闻">
      <router-link to="/home/newslist"
                   slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more"
                 slot="right"></mt-button>
    </mt-header>

    <h3 class="title">{{ newsinfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ newsinfo.add_time | dateFormat }}</span>
      <span>浏览{{ newsinfo.click }}次</span>
    </p>
    <hr>
    <div class="content">{{ newsinfo.abstract }}</div>
    <comment></comment>
  </div>
</template>

<script>

import { Toast } from 'mint-ui'
import comment from '../subcom/comment.vue'

export default {
  data () {
    return {
      id: this.$route.params.id,
      newsinfo: {}
    }
  },
  created () {
    this.getNewsInfo()
  },
  methods: {
    getNewsInfo () {
      this.$http.get('../../data/newslist.json').then(res => {
        if (res.body.status === 0) {
          this.newsinfo = res.body.message[this.id]
        } else {
          Toast({
            message: '获取新闻失败'
          })
        }
      })
    }
  },
  components: {
    comment
  }
}
</script>

<style lang="scss" scoped>
.newsinfo-container {
  padding: 5px;

  .title {
    font-size: 18px;
    text-align: center;
    color: #000;
    margin: 20px 0px;
  }
  .subtitle {
    color: #226aff;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
  }
  .content {
    font-size: 14px;
  }
}
</style>

