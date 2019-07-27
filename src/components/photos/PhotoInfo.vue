<template>
  <div class="photoinfo-container">

    <mt-header title="图片">
      <router-link to="/home/photolist"
                   slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more"
                 slot="right"></mt-button>
    </mt-header>

    <h3 class="title">{{ photoinfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ photoinfo.createTime }}</span>
      <span>浏览{{ photoinfo.click }}次</span>
    </p>
    <hr>
    <div class="thumbs">
      <!-- <vue-preview :slides="imglist"></vue-preview> -->
      <img class="preview-img"
           v-for="(item, index) in imglist"
           :key="index"
           :src="item.src"
           :height="item.h"
           :width="item.w"
           @click="$preview.open(index, list)"
           alt="">
    </div>
    <div class="content">
      {{ photoinfo.abstract }}
    </div>
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
      photoinfo: {},
      imglist: []
    }
  },
  created () {
    this.getPhotoInfo()
    this.getThumbs()
  },
  methods: {
    getPhotoInfo () {
      this.$http.get('../../data/imginfolist.json').then(res => {
        if (res.body.status === 0) {
          this.photoinfo = res.body.message[this.id]
        } else {
          Toast("加载失败")
        }
      })
    },
    getThumbs () {
      this.$http.get('../../data/imglist.json').then(res => {
        if (res.body.status === 0) {
          res.body.message.forEach(item => {
            item.w = 80
            item.h = 60
          })
          this.imglist = res.body.message
        } else {
          Toast("加载失败")
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
.photoinfo-container {
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

  .thumbs {
    img {
      margin: 5px;
      box-shadow: 0 0 6px #ccc;
    }
  }

  .content {
    font-size: 14px;
  }
}
</style>