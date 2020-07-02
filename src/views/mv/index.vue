<template>
  <div class="mv-container">
    <div class="mv-wrap">
      <h3 class="title">mv详情</h3>
      <!-- mv -->
      <div class="video-wrap">
        <video
          controls
          :src="mvUrl"
        ></video>
      </div>
      <!-- mv信息 -->
      <div class="info-wrap">
        <div class="singer-info">
          <div class="avatar-wrap">
            <img :src="avatar" alt="" />
          </div>
          <span class="name">{{mvdetail.artistName}}</span>
        </div>
        <div class="mv-info">
          <h2 class="title">{{mvdetail.name}}</h2>
          <span class="date">发布：{{mvdetail.publishTime}}</span>
          <span class="number">播放：{{mvdetail.playCount}}次</span>
          <p class="desc">
            {{mvdetail.desc}}
          </p>
        </div>
      </div>
      <!-- 精彩评论 -->
      <div class="comment-wrap">
        <p class="title">精彩评论<span class="number">({{total}})</span></p>
        <div class="comments-wrap">
          <div class="item" v-for="(item, index) in hotComments" :key="index">
            <div class="icon-wrap">
              <img :src="item.user.avatarUrl" alt="" />
            </div>
            <div class="content-wrap">
              <div class="content">
                <span class="name">{{item.user.nickname}}：</span>
                <span class="comment">{{item.content}}</span>
              </div>
              <div class="re-content" v-if="item.beReplied.length !== 0">
                <span class="name">{{item.beReplied[0].user.nickname}}：</span>
                <span class="comment">{{item.beReplied[0].content}}</span>
              </div>
              <div class="date">{{item.time | datetime}}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 最新评论 -->
      <div class="comment-wrap">
        <p class="title">最新评论<span class="number">({{total}})</span></p>
        <div class="comments-wrap">
          <div class="item" v-for="(item, index) in comments" :key="index">
            <div class="icon-wrap">
              <img :src="item.user.avatarUrl" alt="" />
            </div>
            <div class="content-wrap" >
              <div class="content">
                <span class="name">{{item.user.nickname}}：</span>
                <span class="comment">{{item.content}}</span>
              </div>
              <div class="re-content" v-if="item.beReplied.length !== 0">
                <span class="name">{{item.beReplied[0].user.nickname}}：</span>
                <span class="comment">还{{item.beReplied[0].content}}</span>
              </div>
              <div class="date">{{item.time | datetime}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 分页器 -->
      <el-pagination
        @current-change="handleCurrentChange"
        background
        layout="prev, pager, next"
        :total="total"
        :current-page="page"
        :page-size="5"
        :limit="limit"
      >
      </el-pagination>
    </div>
    <div class="mv-recommend">
      <h3 class="title">相关推荐</h3>
      <div class="mvs">
        <div class="items">
          <div class="item" v-for="(item, index) in mvs" :key="index" @click="$router.push(`/mv?id=${item.id}`)">
            <div class="img-wrap">
              <img :src="item.cover" alt="" />
              <span class="iconfont iconbofang1"></span>
              <div class="num-wrap">
                <div class="iconfont iconbofang1"></div>
                <div class="num">{{item.playCount}}</div>
              </div>
              <span class="time">{{item.duration | time}}</span>
            </div>
            <div class="info-wrap">
              <div class="name">{{item.name}}</div>
              <div class="singer">{{item.artistName}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import './index.css'
import { getMv, geSimitMv, gedetail, geArtists, geMvComment } from '@/api/music.js'
export default {
  name: 'MvIndex',
  props: {},
  components: {},
  data () {
    return {
      mvId: this.$route.query.id,
      mvUrl: '',
      mvs: [],
      mvdetail: {}, // mv信息
      avatar: '', // 歌手头像
      comments: [],
      hotComments: [],
      page: 1,
      total: 100,
      limit: 20
    }
  },
  computed: {},
  watch: {
    $route () {
      this.mvId = this.$route.query.id
    },
    mvId () {
      this.getMv()
      this.geSimitMv()
      this.gedetail()
      this.geMvComment()
    }
  },
  methods: {
    // 获取mv
    async getMv () {
      const { data } = await getMv({
        id: this.mvId
      })
      this.mvUrl = data.data.url
    //   console.log(data)
    }, // 获取相关mv
    async geSimitMv () {
      const { data } = await geSimitMv({
        mvid: this.mvId
      })
      this.mvs = data.mvs
      // 处理播放量
      this.mvs.forEach(value => {
        if (value.playCount >= 100000) {
          value.playCount = parseInt(value.playCount / 10000) + '万'
        }
      })
    //   console.log(data)
    }, // 获取mv信息
    async gedetail () {
      const { data } = await gedetail({
        mvid: this.mvId
      })
      this.mvdetail = data.data
      const res = await geArtists({
        id: data.data.artists[0].id
      })
      this.avatar = res.data.artist.img1v1Url
      console.log(res)
    },
    async geMvComment () {
      const { data } = await geMvComment({
        id: this.mvId,
        limit: this.limit,
        offset: (this.page - 1) * this.limit
      })
      this.comments = data.comments
      this.total = data.total
      this.hotComments = data.hotComments
      console.log(data)
    },
    handleCurrentChange (page) {
      this.page = page
      this.geMvComment()
    }
  },
  created () {
    this.getMv()
    this.geSimitMv()
    this.gedetail()
    this.geMvComment()
  },
  mounted () {},
  beforeDestroy () {}
}
</script>
<style lang='less' scoped>
</style>
