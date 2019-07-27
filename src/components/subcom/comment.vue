<template>
  <div class="comment-container">
    <h3>评论：</h3>
    <textarea placeholder="请输入要评论的内容(最多120个字)"
              name="textarea"
              cols="20"
              rows="6"
              v-model="content"></textarea>
    <mt-button type="primary"
               size="large"
               @click="report">发表</mt-button>

    <ul class="mui-table-view"
        v-for="(item, index) in commentList"
        :key="index">
      <li class="mui-table-view-cell">
        <div class="lou">第{{ item.id }}楼用户：</div>
        <div class="cmt-name">
          {{ item.name }}
        </div>
        <div class="cmt-content">
          {{ item.content }}
        </div>
        <div class="cmt-footer">
          <span class="time">
            {{ item.area }}&nbsp;&nbsp;&nbsp;&nbsp;{{ item.createTime | dateFormat }}
          </span>
          <span>
            <span class="mui-icon-extra mui-icon-extra-like"></span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span class="mui-icon-extra mui-icon-extra-comment"></span>
          </span>
        </div>
      </li>
    </ul>

    <mt-button type="danger"
               size="large"
               plain
               @click="getComment">加载更多</mt-button>
  </div>
</template>

<script>

import { Toast } from 'mint-ui'

export default {
  data () {
    return {
      name: "匿名用户",
      createTime: '',
      content: '',
      commentList: []
    }
  },
  created () {
    this.getCommentList()
  },
  methods: {
    getCommentList () {
      this.$http.get('../../data/commentlist.json').then(res => {
        if (res.body.status === 0) {
          this.commentList = this.commentList.concat(res.body.message)
        } else {
          Toast({
            message: '加载失败',
            duration: 2000,
            position: bottom
          })
        }
      })
    },
    getComment () {
      this.getCommentList()
    },
    report () {
      if (this.content !== '') {
        this.commentList.unshift({
          id: this.commentList.length,
          name: '匿名用户',
          createTime: Date.now(),
          content: this.content.trim(),
          area: '北京'
        })
        this.content = ''
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.comment-container {
  margin-top: 40px;

  textarea {
    color: #333;
  }

  .lou {
    font-size: 12px;
  }

  .cmt-name {
    color: #00f;
    background-color: #ccc;
  }

  .cmt-content {
    padding: 5px;
  }

  .cmt-footer {
    font-size: 12px;
    display: flex;
    justify-content: space-between;
  }

  .mui-table-view {
    .mui-icon-extra {
      color: #ccc;
    }
  }
}
</style>