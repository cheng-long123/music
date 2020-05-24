<template>
  <div class='songs-container'>
    <div class="nav-bar">
       <span
          class="item "
          :class="{ active: tag == 0 }"
          @click="tag = '0'"
        >
          全部
        </span>
       <span
          class="item "
          :class="{ active: tag == 7 }"
          @click="tag = '7'"
        >
          华语
        </span>
        <span
          class="item "
          :class="{ active: tag == 96}"
          @click="tag = '96'"
        >
          欧美
        </span>
       <span
          class="item "
          :class="{ active: tag == 8 }"
          @click="tag = '8'"
        >
          日本
        </span>
       <span
          class="item "
          :class="{ active: tag == 16 }"
          @click="tag = '16'"
        >
          韩国
        </span>
    </div>
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
          <tr class="tr" v-for="(item, index) in songs" :key="index" @click="playMusic(item.id)">
            <td>{{index+1}}</td>
            <td>
              <div class="img" @click="playMusic(item.id)">
                <img class="image" :src="item.album.picUrl" alt="">
                <span class="iconfont iconicon_play"></span>
              </div>
            </td>
            <td>
              <div class="title">
                <div class="title-text">
                  <span>{{item.name}}</span>
                  <span class="iconfont iconshipin" @click="playMusic(item.id)"></span>
                </div>
                <span class="singer">{{item.name}}</span>
              </div>
            </td>
          <td>{{item.album.artists[0].name}}</td>
          <td>{{item.album.name}}</td>
          <td>{{item.duration |time}}</td>
          </tr>
        </tbody>
      </table>
  </div>
</template>
<script>
import { getNewsongs, playNewMusic } from '@/api/music'
export default {
  name: 'SongsIndex',
  props: {},
  components: {},
  data () {
    return {
      songs: [],
      tag: 0
    }
  },
  computed: {},
  watch: {
    tag () {
      this.getNewsongs()
    }
  },
  methods: {
    async getNewsongs () {
      const { data } = await getNewsongs({
        type: this.tag
      })
      console.log(data)
      this.songs = data.data
    },
    async playMusic (musicId) {
      const { data } = await playNewMusic({
        id: musicId
      })
      const url = data.data[0].url
      // console.log(url)
      this.$store.commit('setMusicUrl', url)
    }
  },
  created () {
    this.getNewsongs()
  },
  mounted () {},
  beforeDestroy () {}
}
</script>
<style lang='less' scoped>
.nav-bar{
   height: 30px;
  float: right;
  color: #434343;
  cursor: pointer;
  margin-bottom: 10px;
  .active{
     background-image: linear-gradient(135deg,#FC5C7D,#6A82FB);
       background-clip:text;
       -webkit-text-fill-color:transparent;
  }
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
</style>
