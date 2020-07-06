<template>
  <div class='search-container'>
      <div class="title">
          <h1 class="search-text">{{$route.query.q}}</h1>
          <span class="search-result">找到{{count}}个结果</span>
      </div>
      <el-tabs v-model="activeName">
          <!-- 音乐 -->
        <el-tab-pane label="歌曲" name="songs">
            <table class="table" cellspacing="0" cellpadding="0">
        <thead>
          <tr>
          <th></th>
          <th>音乐标题</th>
          <th>歌手</th>
          <th>专辑</th>
          <th>时长</th>
          </tr>
        </thead>
        <tbody>
          <tr class="tr" v-for="(item, index) in songs" :key="index" @dblclick="playMusic(item.id)">
            <td>{{index + 1}}</td>
            <td>
              <div class="title">
                <div class="title-text">
                  <span>{{item.name}}</span>
                   <span class="iconfont iconshipin" v-if="item.mvid != 0" @click="$router.push(`/mv?id=${item.mvid}`)"></span>
                </div>
                <span class="singer" v-if="item.alias.length != 0">{{item.alias[0]}}</span>
              </div>
            </td>
          <td>{{item.artists[0].name}}</td>
          <td>{{item.album.name}}</td>
          <td>{{item.duration |time}}</td>
          </tr>
        </tbody>
      </table>
        </el-tab-pane>
        <!-- 歌单 -->
        <el-tab-pane label="歌单" name="playlist">
             <div class="content clearfix" >
            <div class="playlist" v-for="(item, index) in playlists" :key="index" @click="toSongplay(item.id)">
              <div class="item-img">
             <el-image :src="item.coverImgUrl">
            </el-image>
             <span class="box">播放量:{{item.playCount}}</span>
            <span class="iconfont iconicon_play"></span>
              </div>
                <span>{{item.name}}</span>
             <!-- <span>123213</span> -->
        </div>
      </div>
        </el-tab-pane>
        <!-- mv -->
        <el-tab-pane label="MV" name="mvs">
      <el-row :gutter="20">
        <el-col class="mvs" :xs="12" :lg="6" :span="6" v-for="(item, index) in mvs " :key="index" @click.native="$router.push(`/mv?id = ${item.id}`)">
        <el-image :src="item.cover"></el-image>
         <span class="iconfont iconicon_play"></span>
         <span class="time">{{item.duration |time}}</span>
        <div class="plays">
            <i class="iconfont iconbofang1"></i>
           {{item.playCount}}
        </div>
        <div>{{item.name}}</div>
        <div class="singer">{{item.artistName}}</div>
        </el-col>
      </el-row>
        </el-tab-pane>
     </el-tabs>
       <!-- 分页 -->
    <el-pagination
    background
    layout="total, prev, pager, next, jumper"
    :total="count"
    :current-page="page"
    @current-change="handleCurrentChange"
    >
  </el-pagination>
  </div>
</template>
<script>
import { getSearchResult, playNewMusic } from '@/api/music'
export default {
  name: 'SearchIndex',
  props: {},
  components: {},
  data () {
    return {
      massage: this.$route.query.q,
      songs: [],
      playlists: [],
      mvs: [],
      activeName: 'songs',
      count: null,
      limit: 30,
      type: 1,
      total: null,
      page: 1
    }
  },
  computed: {},
  watch: {
    $route () {
      this.massage = this.$route.query.q
    },
    massage () {
      this.getSearchResult()
    },
    activeName () {
      switch (this.activeName) {
        case 'songs':
          this.type = 1
          this.page = 1
          break
        case 'playlist':
          this.type = 1000
          this.page = 1
          break
        case 'mvs':
          this.type = 1004
          this.page = 1
          this.limit = 32
          break
        default:
          break
      }
      this.getSearchResult()
    }
  },
  methods: {
    async getSearchResult () {
      const { data } = await getSearchResult({
        keywords: this.massage,
        limit: this.limit,
        offset: (this.page - 1) * this.limit,
        type: this.type
      })
      if (this.type === 1) {
        // 歌曲
        this.massage = this.$route.query.q
        this.songs = data.result.songs
        this.count = data.result.songCount
      } else if (this.type === 1000) {
        // 歌单
        this.playlists = data.result.playlists
        this.count = data.result.playlistCount
        this.playlists.forEach(value => {
          if (value.playCount >= 100000) {
            value.playCount = parseInt(value.playCount / 10000) + '万'
          }
        })
      } else if (this.type === 1004) {
        // MV
        this.mvs = data.result.mvs
        this.count = data.result.mvCount
        this.mvs.forEach(value => {
          if (value.playCount >= 100000) {
            value.playCount = parseInt(value.playCount / 10000) + '万'
          }
        })
      }
      // console.log(data)
    },
    async playMusic (musicId) {
      const { data } = await playNewMusic({
        id: musicId
      })
      const url = data.data[0].url
      // console.log(url)
      this.$store.commit('setMusicUrl', url)
    },
    handleCurrentChange (page) {
      this.page = page
      this.getSearchResult()
    },
    toSongplay (id) {
      this.$router.push(`/songplay?id=${id}`)
    }
  },
  created () {
    this.getSearchResult()
  },
  mounted () {},
  beforeDestroy () {}
}
</script>
<style lang='less' scoped>
.title {
    .search-text{
        font-size: 26px;
        display: inline-block;
        margin: 0;
        margin-right: 10px;
    }
    .search-result{
        color: gray;
    }
}
.el-tabs{
    margin-top: 30px;
    /deep/ .el-tabs__nav{
        .el-tabs__item{
          font-size: 18px;
        }
        .is-active{
            color: #c3473a;
        }
      /deep/ .el-tabs__active-bar{
            background-color:#c3473a ;
        }
    }
}
 /deep/.el-tabs__item:hover{
     color: #c3473a;
}
// 音乐
.table{
  width: 100%;
  font-size: 14px;
  background-color: #fff;
  padding: 20px 10px;
  margin-bottom: 50px;
  // border-collapse:collapse;
   thead{
     padding-bottom: 20px;
     height: 60px;
     color: grey;
     padding: 15px 5px;
     margin-bottom: 10px;
     th{
      text-align: left;
     }
     th:first-child{
     width: 40px;
   }
     th:nth-child(2){
     width: 300px;
   }
   thead th:nth-child(3){
     width: 300px;
   }
   thead th:nth-child(4){
     width: 500px;
   }
   }
   tbody{
    .title{
      cursor: pointer;
      margin-top: 20px;
      .title-text{
        padding-bottom: 20px;
        .iconshipin{
          color:#dd6d60;
        }
      }
      .singer{
        color: grey;
      }
    }
  }
}
// MV
.el-row{
    margin: 30px 0;
    .mvs{
    position: relative;
    height: 140px;
    font-size: 14px;
    margin-bottom: 80px;
    cursor: pointer;
    .singer{
      color: gray;
    }
    .plays{
      position: absolute;
      padding: 5px;
      right: 20px;
      top: 0px;
      color: #fff;
    }
    .iconicon_play{
        position: absolute;
        top: 63px;
        left: 131px;
        font-size: 30px;
        opacity: 0;
        transition: all .5s;
    }
    .time{
      position: absolute;
      bottom: 0;
      right: 15px;
      color: #fff;
    }
  }
  }
  .el-pagination{
    text-align: center;
    margin-bottom: 50px;
    // .active{
    //   background-color: red;
    // }
  }
  .mvs:hover .iconicon_play{
      opacity: 1;
  }
//  歌单
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
        .box{
          position: absolute;
           top: 0px;
           right: 10px;
           color: #fff;
        }
         /deep/ .iconicon_play{
             background: hsla(0,0%,100%,.8);
             border-radius: 50%;
             cursor: pointer;
                right: 75px;
                width: 40px;
                height: 40px;
                line-height: 40px;
                font-size: 40px;
                position: absolute;
                /* left: 0; */
                bottom: 80px;
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
