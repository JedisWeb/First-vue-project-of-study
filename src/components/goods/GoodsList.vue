<template>
  <div class="goods-container">

    <mt-header title="商品列表">
      <router-link to="/"
                   slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>

    <div class="goods-list">
      <router-link :to="'/home/goodslist/' + item.id"
                   class="goods-item"
                   v-for="(item, index) in goodslist"
                   :key="index"
                   tag="div">
        <img :src="item.img"
             alt="">
        <h4 class="title">【{{ item.name }}】</h4>
        <div class="info">
          <p class="price">
            <span class="now">￥{{ item.nowPrice }}</span>
            <span class="old">￥{{ item.oldPrice }}</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩{{ item.remain }}件</span>
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>

import { Toast } from 'mint-ui'

export default {
  data () {
    return {
      goodslist: []
    }
  },
  created () {
    this.getGoodsList()
  },
  methods: {
    getGoodsList () {
      this.$http.get('../../data/goodslist.json').then(res => {
        if (res.body.status === 0) {
          this.goodslist = res.body.message
        } else {
          Toast('加载失败')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.goods-container {
  padding-bottom: 50px;

  .goods-list {
    display: flex;
    flex-wrap: wrap;
    padding: 3px 0px;

    .goods-item {
      width: 50%;
      padding: 3px;

      .info {
        .now {
          color: #f40;
          font-size: 20px;
          font-weight: 700;
        }

        .old {
          text-decoration: line-through;
        }

        .sell {
          display: flex;
          justify-content: space-between;
        }
      }

      img {
        width: 100%;
      }
    }
  }
}
</style>