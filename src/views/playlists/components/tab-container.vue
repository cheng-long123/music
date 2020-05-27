<template>
  <div class='tab-container'>
      <div class="tab-bar">
           <span
          class="item "
          :class="{ active: tag == '全部' }"
          @click="tag = '全部'"
        >
          全部
        </span>
        <span
          class="item"
          :class="{ active: tag == '欧美' }"
          @click="tag = '欧美'"
        >
          欧美
        </span>
        <span
          class="item"
          :class="{ active: tag == '华语' }"
          @click="tag = '华语'"
        >
          华语
        </span>
        <span
          class="item"
          :class="{ active: tag == '流行' }"
          @click="tag = '流行'"
        >
          流行
        </span>
        <span
          class="item"
          :class="{ active: tag == '说唱' }"
          @click="tag = '说唱'"
        >
          说唱
        </span>
        <span
          class="item"
          :class="{ active: tag == '摇滚' }"
          @click="tag = '摇滚'"
        >
          摇滚
        </span>
        <span
          class="item"
          :class="{ active: tag == '民谣' }"
          @click="tag = '民谣'"
        >
          民谣
        </span>
        <span
          class="item"
          :class="{ active: tag == '电子' }"
          @click="tag = '电子'"
        >
          电子
        </span>
        <span
          class="item"
          :class="{ active: tag == '轻音乐' }"
          @click="tag = '轻音乐'"
        >
          轻音乐
        </span>
        <span
          class="item"
          :class="{ active: tag == '影视原声' }"
          @click="tag = '影视原声'"
        >
          影视原声
        </span>
        <span
          class="item"
          :class="{ active: tag == 'ACG' }"
          @click="tag = 'ACG'"
        >
          ACG
        </span>
        <span
          class="item"
          :class="{ active: tag == '怀旧' }"
          @click="tag = '怀旧'"
        >
          怀旧
        </span>
        <span
          class="item"
          :class="{ active: tag == '治愈' }"
          @click="tag = '治愈'"
        >
          治愈
        </span>
        <span
          class="item"
          :class="{ active: tag == '旅行' }"
          @click="tag = '旅行'"
        >
          旅行
        </span>
      </div>
       <div class="content clearfix">
            <div class="playlist" v-for="(item, index) in playlist" :key="index" @click="toSongplay(item.id)">
              <div class="item-img">
              <div class="box">{{item.playCount}}</div>
             <el-image :src="item.coverImgUrl">
            </el-image>
            <span class="iconfont iconicon_play"></span>
              </div>
               <el-tooltip
               class="item"
               effect="dark"
               :content="item.name"
               placement="top"
               :background="true"
               >
                <span>{{item.name}}</span>
                </el-tooltip>
             <!-- <span>123213</span> -->
        </div>
      </div>
      <!-- 分页 -->
      <div>
        <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
         :current-page="page"
         @current-change="currentChange"
        >
     </el-pagination>
      </div>
  </div>
</template>
<script>
import { getPlaylist } from '@/api/music'
export default {
  name: 'TabContainer',
  props: {},
  components: {},
  data () {
    return {
      playlist: [],
      limit: 20,
      tag: '全部',
      total: null,
      page: 1
    }
  },
  computed: {},
  watch: {
    tag () {
      this.getPlaylist()
      this.page = 1
    }
  },
  methods: {
    async getPlaylist () {
      const { data } = await getPlaylist({
        limit: this.limit,
        offset: (this.page - 1) * 20,
        cat: this.tag
      })
      // console.log(data)
      this.playlist = data.playlists
      this.total = data.total
      this.playlist.forEach(value => {
        if (value.playCount >= 100000) {
          value.playCount = parseInt(value.playCount / 10000) + '万'
        }
      })
      this.$emit('tag', this.tag)
    },
    currentChange (page) {
      this.page = page
      this.getPlaylist()
    },
    toSongplay (id) {
      this.$router.push(`/songplay?id=${id}`)
    }
  },
  created () {
    this.getPlaylist()
  },
  mounted () {},
  beforeDestroy () {}
}
</script>
<style lang='less' scoped>
.tab-bar{
    padding:10px;
    .item{
        padding-left: 5px;
        cursor: pointer;
    }
    .active{
      background-image: linear-gradient(135deg,#FC5C7D,#6A82FB);
       background-clip:text;
       -webkit-text-fill-color:transparent;
    }
}
.content{
    // display: flex;
    // flex-wrap: wrap;
    margin: 0 auto;
    width: 1100px;
    // height: 486px;
    padding-top: 20px;
    // overflow: hidden;
    .playlist{
        float: left;
        // flex: 18%;
        display: fle;
        margin-left: 15px;
        margin-bottom: 40px;
        width: 200px;
        height: 200px;
        // background-color: red;
        .item-img{
             position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
             .box{
            padding: 5px;
            box-sizing: border-box;
            position: absolute;
            top: -50px;
            left: 0;
            width: 200px;
            // height: 48px;
            // max-height: 50px;
            // height: 0;
            // background-color: #000;
            // display: none;
            background: rgba(0, 0, 0, .5);
            // opacity: .5;
            z-index: 100;
            font-size: 14px;
            color: #fff;
            transition: all .5s;
            // animation: animate 5s ease infinite;
            //  overflow: hidden;
        }
         .playCount{
          width: 80px;
          border-radius: 10px;
          position: absolute;
          display: inline-block;
          text-align: center;
          background: rgba(0, 0, 0, .5);
          right: 2px;
          bottom: 5px;
          color: #fff;
        }
         /deep/ .iconicon_play{
             background: hsla(0,0%,100%,.8);
             border-radius: 50%;
             cursor: pointer;
                right: 20px;
                width: 40px;
                height: 40px;
                line-height: 40px;
                font-size: 40px;
                position: absolute;
                /* left: 0; */
                bottom: 21px;
                color: #dd6d60;
                opacity: 0;
                transition: all .5s;
            }
        }
        span{
            margin-top: 5px;
            // overflow: none;
            // width: 100%;
            // text-align: center;
            font-size: 14px;
            // z-index: 20;
              overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
        }
    }
}
.playlist:hover .item-img .box{
         top:0;
         max-height: 50px;
      }
  .playlist:hover .item-img .iconicon_play{
       opacity: 1;
      }
.el-pagination{
    margin-bottom: 100px;
    text-align: center;
    margin-top: 20px;
}
.clearfix:before,
        .clearfix:after {
            display: table;
            content: "";    /*不用有内容也可以*/
        }

        .clearfix:after {
            clear: both;
        }

        .clearfix {
            *zoom: 1;
        }
</style>
