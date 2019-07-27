<template>
  <div class="home-container">

    <mt-header title="Vue项目实践 · Jedis">
    </mt-header>
    <!-- 轮播图 -->
    <mt-swipe :auto="3000">
      <!-- <mt-swipe-item v-for="(item, index) in swipeList"
                     :key="index">
        <img :src="item.img"
             alt=""> 
             </mt-swipe-item>-->
      <mt-swipe-item></mt-swipe-item>
      <mt-swipe-item></mt-swipe-item>
      <mt-swipe-item></mt-swipe-item>
      <mt-swipe-item></mt-swipe-item>
      <mt-swipe-item></mt-swipe-item>

    </mt-swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../images/news.png"
               alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <img src="../../images/share.png"
               alt="">
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodslist">
          <img src="../../images/goods.png"
               alt="">
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/">
          <img src="../../images/feedback.png"
               alt="">
          <div class="mui-media-body">留言反馈</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/">
          <img src="../../images/video.png"
               alt="">
          <div class="mui-media-body">视频专区</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/">
          <img src="../../images/contact.png"
               alt="">
          <div class="mui-media-body">联系我们</div>
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
      swipeList: []
    }
  },
  created () {
    this.getSwipe()
  },
  methods: {
    getSwipe () {
      // this.$http.get('http://vue.studyit.io/api/getlunbo').then(result => {
      //   // console.log(result.body)
      //   if (result.body.status === 0) {
      //     this.swipeList = result.body.message;
      //   } else {
      //     Toast({
      //       message: '获取失败',
      //       duration: 2000,
      //       position: bottom
      //     })
      //   }
      // })
    }
  }
}
</script>

<style lang="scss" scoped>
.home-container {
  padding-bottom: 50px;
}

.mint-swipe {
  height: 200px;

  .mint-swipe-item {
    &:nth-child(1) {
      background-color: #f00;
    }
    &:nth-child(2) {
      background-color: #0f0;
    }
    &:nth-child(3) {
      background-color: #00f;
    }
    &:nth-child(4) {
      background-color: #ff0;
    }
    &:nth-child(5) {
      background-color: #0ff;
    }
  }
}

.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  img {
    width: 30px;
    height: 30px;
  }

  .mui-media-body {
    font-size: 14px;
  }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
}
</style>
