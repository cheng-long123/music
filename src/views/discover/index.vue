<template>
  <div class='discover-container'>
    <!-- 轮播图 -->
      <template>
        <el-carousel
        class="banner"
        :interval="4000"
        type="card"
        height="240px"
        autoplay
        >
        <el-carousel-item v-for="(banner, index) in banners" :key="index">
             <!-- <el-carousel-item v-for="item in 6" :key="item"> -->
        <!-- <h3 class="medium">{{ item }}</h3> -->
          <img  class="banner-img" :src="banner.imageUrl" alt="">
        </el-carousel-item>
    </el-carousel>
  </template>
  <!-- 轮播图 -->
  <!-- 推荐歌单 -->
     <discover-playlist />
      <!-- 最新音乐 -->
      <discover-songs
      @play-music="onPlayMusic"
      />
       <!-- <div class="play">
         <audio
         :src="musicUrl"
         controls="controls"
         autoplay="autoplay">
            </audio>
        </div> -->
  </div>
</template>
<script>
import DiscoverPlaylist from './components/discover-playlist'
import DiscoverSongs from './components/discover-songs'
import { getBanner } from '@/api/music'
import globalBus from '@/utils/global-bus'
export default {
  name: 'DiscoverIndex',
  props: {},
  components: {
    DiscoverPlaylist,
    DiscoverSongs
  },
  data () {
    return {
      banners: [],
      musicUrl: ''
    }
  },
  computed: {},
  watch: {},
  methods: {
    async getBanner () {
      const { data } = await getBanner()
      console.log(data)
      this.banners = data.banners
    },
    onPlayMusic (url) {
      this.musicUrl = url
      globalBus.$emit('play-music', url)
      this.$parent.musicUrl = url
      console.log(this.$parent.musicUrl)
    }
  },
  created () {
    this.getBanner()
  },
  mounted () {},
  beforeDestroy () {}
}
</script>
<style lang='less' scoped>
// .play{
//    position: fixed;
//     top: 570px;
//     bottom: 0px;
//     left: 0;
//     right: 0;
//    audio{
//         width: 100%;
//    }
// }
.banner{
    .banner-img{
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
}
</style>
