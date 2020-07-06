<template>
  <div class='songplay'>
      <div class="top-wrap">
        <div class="image">
            <img :src="playlist.coverImgUrl" alt="">
        </div>
        <div class="info">
            <p class="title">{{playlist.name}}</p>
            <div class="user-info">
            <img class="avatar" :src="playlist.creator.avatarUrl" alt="">
            <span class="name">{{playlist.creator.nickname}}</span>
            <span class="time">{{playlist.createTime |datetime}} 创建</span>
            </div>
            <el-button type="danger"> <i class="iconfont iconicon_play"></i><span>播放全部</span></el-button>
             <div class="tag-wrap">
                <span class="label">标签:</span>
                <ul>
                    <li v-for="(item, index) in playlist.tags" :key="index">{{item}}/</li>
                </ul>
            </div>
            <div class="brief">
                <span class="text">简介:</span>
                <span class="brief-text">{{playlist.description}}</span>
            </div>
        </div>
      </div>
      <!-- tab -->
    <el-tabs v-model="activeName">
        <el-tab-pane label="歌曲列表" name="list">
            <table class="table" cellspacing="0" cellpadding="0">
        <thead>
          <tr>
          <th></th>
          <th></th>
          <th>音乐标题</th>
          <th>歌手</th>
          <th>专辑</th>
          <th>时长</th>
          </tr>
        </thead>
        <tbody>
          <tr class="tr" v-for="(item, index) in playlist.tracks" :key="index" @dblclick="playMusic(item.id)">
            <td>{{index+1}}</td>
            <td>
              <div class="img" @click="playMusic(item.id)">
                <img class="image" :src="item.al.picUrl" alt="">
                <span class="iconfont iconicon_play"></span>
              </div>
            </td>
            <td>
              <div class="title">
                <div class="title-text">
                  <span>{{item.name}}</span>
                  <span class="iconfont iconshipin" v-if="item.mv != 0" @click="$router.push(`/mv?id=${item.mv}`)"></span>
                </div>
                <span class="singer">{{item.alia[0]}}</span>
              </div>
            </td>
          <td>{{item.ar[0].name}}</td>
          <td>{{item.al.name}}</td>
          <td>{{item.dt |time}}</td>
          </tr>
        </tbody>
      </table>
       <!-- <el-pagination
          @current-change="handleCurrentChange"
          background
          layout="prev, pager, next"
          :total="100"
          :current-page="page"
          :page-size="5"
        >
        </el-pagination> -->
        </el-tab-pane>
        <el-tab-pane  name="comment">
          <span slot="label">评论({{newtotal}})</span>
            <div class="comment-wrap">
          <p class="title">精彩评论<span class="number">({{hottotal}})</span></p>
          <div class="comments-wrap">
            <div class="item" v-for="(item, index) in hotComment" :key="index">
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
                <div class="date">2020-02-12 17:26:11</div>
              </div>
            </div>
          </div>
        </div>
        <!-- 最新评论 -->
        <div class="comment-wrap">
          <p class="title">最新评论<span class="number">({{newtotal}})</span></p>
          <div class="comments-wrap">
            <div class="item" v-for="(item, index) in newComment" :key="index">
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
                <div class="date">{{item.time| datetime}}</div>
              </div>
            </div>
          </div>
        </div>
         <!-- 分页器 -->
        <el-pagination
          @current-change="handleCurrentChange"
          background
          layout="prev, pager, next"
          :total="newtotal"
          :current-page="page"
          :page-size="5"
        >
        </el-pagination>
        </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { getDdetail, playNewMusic, getHot, getNewComment } from '@/api/music'
export default {
  name: 'SongPlay',
  props: {},
  components: {},
  data () {
    return {
      activeName: 'list',
      limit: 20,
      page: 1,
      playlist: {},
      hotComment: [], // 热门评论
      hottotal: 0,
      newComment: [],
      newtotal: 0
    }
  },
  computed: {},
  watch: {},
  methods: {
    async getDdetail () {
      const { data } = await getDdetail({
        id: this.$route.query.id
      })
      this.playlist = data.playlist
      // console.log(data)
    },
    handleCurrentChange (page) {
      this.page = page
      this.getNewComment()
    }, // 播放音乐
    async playMusic (musicId) {
      const { data } = await playNewMusic({
        id: musicId
      })
      const url = data.data[0].url
      // console.log(url)
      this.$store.commit('setMusicUrl', url)
    },
    // 获取热门评论
    async getHot () {
      const { data } = await getHot({
        id: this.$route.query.id,
        type: 2
      })
      this.hotComment = data.hotComments
      this.hottotal = data.total
      // console.log(data)
    }, // 获取最新评论
    async getNewComment () {
      const { data } = await getNewComment({
        id: this.$route.query.id,
        limit: 10,
        offset: (this.page - 1) * 10
      })
      this.newComment = data.comments
      this.newtotal = data.total
      // console.log(data)
    }
  },
  created () {
    this.getDdetail()
    // 获取评论
    this.getHot()
    // 获取最新评论
    this.getNewComment()
  },
  mounted () {},
  beforeDestroy () {}
}
</script>
<style lang='less' scoped>
.top-wrap{
    display: flex;
    // height: 250px;
    margin-top: 20px;
    // background-color: red;
    .image{
        width: 230px;
        height: 230px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .info{
        margin-left: 30px;
        .title{
            margin: 0;
            margin-bottom: 20px;
        }
       .user-info{
            text-align: center;
           display: flex;
           align-items: center;
           margin-bottom: 25px;
            .avatar{
            width: 35px;
            height: 35px;
            border-radius: 50%;
            margin-right: 10px;
        }
        .time{
            font-size: 14px;
        }
        .name{
            margin-right: 10px;
        }
       }
       .el-button{
           width: 120px;
           display: flex;
           align-items: center;
           margin-bottom: 25px;
           font-size: 16px;
         .iconicon_play{
           margin-right: 5px;
         }
       }
    }
    .tag-wrap{
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        span{
            font-size: 18px;
        }
        ul{
            margin: 0;
            padding: 0;
            li{
            display: inline-block;
            list-style: none;
            margin-left: 10px;
            }
        }
    }
    .brief{
        width: 830px;
        .text{
            font-size: 18px;
            width: 80px;
        }
        .brief-text{
            margin-left: 20px;
        }
    }
}
// tab
.el-tabs{
    margin-top: 30px;
    /deep/ .el-tabs__nav{
        .el-tabs__item{
          font-size: 14px;
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
.table{
  width: 100%;
  font-size: 14px;
  background-color: #fff;
  padding: 20px 10px;
  margin-bottom: 50px;
  // border-collapse:collapse;
   thead{
     padding-bottom: 20px;
     height: 40px;
     color: grey;
     padding: 15px 5px;
     th{
      text-align: left;
     }
     th:first-child{
     width: 50px;
   }
     th:nth-child(2){
     width: 130px;
   }
   thead th:nth-child(3){
       width: 300px;
   }
   thead th:nth-child(4){
     width: 200px;
   }
   }
  tbody{
    .img{
      position: relative;
      width: 70px;
      height: 70px;
      color:#606266;
      padding: 20px 0;
      cursor: pointer;
      .image{
        width: 100%;
        height: 100%;
        border-radius: 5px;
      }
      .iconicon_play{
        position: absolute;
        top: 39px;
        left: 22px;
        font-size: 24px;
        opacity: 0;
        transition: all .5s;
      }
    }
    .img:hover .iconicon_play{
      opacity: 1;
    }
    .title{
      cursor: pointer;
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
tbody .tr:hover {
 background: rgba(235, 231, 231, 0.9);
}
.comment-wrap{
    width: 100%;
    margin-bottom: 50px;
    .title{
        font-size: 20px;
    }
    .comments-wrap{
        .item{
            .date{
                font-size: 14px;
                color: gray;
            }
            display: flex;
            border-bottom: 1px solid #fff;
            margin-top: 20px;
            .icon-wrap{
                width: 50px;
                margin-right: 10px;
                img{
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                }
            }
        }
    }
    .content-wrap{
        margin-bottom: 20px;
        .content{
              font-size: 14px;
              margin-bottom: 10px;
            .name{

                color:#517eaf;

            }
            .content{
                font-size: 14px;
            }
        }
        .re-content{
            // width: 100%;
            font-size: 14px;
            background-color: #e6e5e6;
            border-radius: 5px;
            padding: 10px;
            margin-bottom: 10px;
            .name{
                color:#517eaf;
            }
        }
    }
}
.el-pagination{
    margin-bottom: 100px;
    text-align: center;
    margin-top: 20px;
}
</style>
