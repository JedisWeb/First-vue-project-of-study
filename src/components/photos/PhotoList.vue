<template>
  <div>

    <mt-header title="图片分享">
      <router-link to="/"
                   slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>

    <!-- 头部导航 -->
    <div id="slider"
         class="mui-slider">
      <div id="sliderSegmentedControl"
           class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a :class="['mui-control-item',item.id ==1?'mui-active':'']"
             v-for="(item, index) in category"
             :key="index">
            {{ item.name }}
          </a>
        </div>
      </div>

    </div>

    <ul class="photo-list">
      <router-link :to="'/home/photolist/' + item.id"
                   tag="li"
                   v-for="(item, index) in imglist"
                   :key="index">
        <img v-lazy="item.img_url">
        <div class="info">
          <h3 class="info-title">{{ item.title }}</h3>
          <div class="info-body">{{ item.abstract }}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import mui from '../../js/mui.js'
// import { Toast, Lazyload } from 'mint-ui'

export default {
  data () {
    return {
      category: [],
      imglist: []
    }
  },
  created () {
    this.getAllCategory()
    this.getImgList()
  },
  mounted () {
    mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0005    }
    );
  },
  methods: {
    getAllCategory () {
      this.$http.get('../../data/category.json').then(res => {
        if (res.body.status === 0) {
          this.category = res.body.message
        } else {
          Toast({
            message: '加载失败',
            duration: 2000,
            position: bottom
          })
        }
      })
    },
    getImgList () {
      this.$http.get('../../data/imginfolist.json').then(res => {
        if (res.body.status === 0) {
          this.imglist = res.body.message
        } else {
          Toast({
            message: '加载失败',
            duration: 2000,
            position: bottom
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  touch-action: pan-y;
}

.photo-list {
  padding: 0px 10px;
  padding-bottom: 0px;
  li {
    background-color: #ccc;
    list-style: none;
    text-align: center;
    box-shadow: 0 0 9px #999;
    position: relative;
    margin-bottom: 10px;
    img {
      width: 100%;
      vertical-align: middle;
    }

    img[lazy="loading"] {
      width: 100px;
      height: 100px;
      margin: auto;
    }
  }

  .info {
    color: #eee;
    position: absolute;
    width: 100%;
    left: 0px;
    bottom: 0px;
    background-color: rgba(0, 0, 0, 0.3);
    text-align: left;
    max-height: 80px;
    padding: 3px;

    .info-title {
      font-size: 18px;
    }
  }
}
</style>
