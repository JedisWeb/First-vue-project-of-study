<template>
  <div class="goodsinfo-container">
    <mt-header title="商品">
      <router-link to="/home/goodslist"
                   slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more"
                 slot="right"></mt-button>
    </mt-header>

    <img :src="goodsinfo.img"
         alt="">

    <p class="price">
      <span class="now">￥{{ goodsinfo.nowPrice }}</span>
      <span class="old">￥{{ goodsinfo.oldPrice }}</span>
    </p>
    <h3 class="title">{{ goodsinfo.name }}</h3>
    <!-- <comment></comment> -->
  </div>
</template>

<script>

import { Toast } from 'mint-ui'
import comment from '../subcom/comment.vue'

export default {
  data () {
    return {
      id: this.$route.params.id,
      goodsinfo: {}
    }
  },
  created () {
    this.getGoodsInfo()
  },
  methods: {
    getGoodsInfo () {
      this.$http.get('../../data/goodslist.json').then(res => {
        if (res.body.status === 0) {
          this.goodsinfo = res.body.message[this.id]
        } else {
          Toast({
            message: '获取商品失败'
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
.goodsinfo-container {
  margin-bottom: 10px;

  img {
    width: 100%;
  }

  .price {
    margin: 5px 0px;
    .now {
      color: #f40;
      font-size: 20px;
      font-weight: 700;
    }

    .old {
      text-decoration: line-through;
    }
  }
}
</style>
