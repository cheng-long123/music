<template>
  <div class='discover-songs'>
      <h3>最新音乐</h3>
      <el-row :gutter="20">
        <el-col
        v-for=" newsong in  newsongs"
        :key=" newsong.id"
        class="songs"
        :span="12"
        >
           <div class="img" @click="onPlay(newsong.id)">
            <el-image
            :src="newsong.picUrl"
            fit="cover"
            >
            </el-image>
            <span class="iconfont iconicon_play"></span>
           </div>
            <div class="name">
                <span class="song-name">{{newsong.name}}</span>
                <span class="singer">{{newsong.song.artists[0].name}} </span>
            </div>
        </el-col>
    </el-row>
  </div>
</template>
<script>
import { getNewsong, getMusicUrl } from '@/api/music'
export default {
  name: 'DiscoverSongs',
  props: {},
  components: {},
  data () {
    return {
      newsongs: [],
      url: ''
    }
  },
  computed: {},
  watch: {},
  methods: {
    async getNewsong () {
      const { data } = await getNewsong()
      console.log(data)
      this.newsongs = data.result
      this.$emit('singer', data.result)
    },
    async onPlay (playId) {
      const { data } = await getMusicUrl({ id: playId })
      //   console.log(data)
      this.url = data.data[0].url
      this.$store.commit('setMusicUrl', data.data[0].url)
      // this.$emit('play-music', data.data[0].url)
    //   this.$parent.MusicUrl = url
    }
  },
  created () {
    this.getNewsong()
  },
  mounted () {},
  beforeDestroy () {}
}
</script>
<style lang='less' scoped>
h3{
    font-weight: 400;
    padding-left: 20px;
}
.songs{
    position: relative;
     float: left;
    display: flex;
    height: 100px;
    // justify-content: center;
    // background: hsla(0,0%,90%,0.7);
    align-self:flex-end;
    align-items: center;
   /deep/.el-image__inner{
    //    float: left;
       width: 80px;
       height: 80px;
       line-height: 80px;
       padding-left: 20px;
    }
    .iconicon_play{
       position: absolute;
       cursor: pointer;
        width: 30px;
        height: 30px;
        top: 35px;
        left: 55px;
        font-size: 30px;
        background: hsla(0,0%,100%,.8);
          color: #dd6d60;
          border-radius: 50%;
        opacity: 0;
        transition: all .5s;
    }
    .name{
        width: 200px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        // padding: 50px ;
        padding-left: 20px;
        .song-name{
            padding-bottom: 30px;
        }
        .singer{
            color: #808080;
        }
    }
}
.songs:hover {
    background: hsla(0,0%,100%,0.7);
}
 .img:hover /deep/ .iconicon_play{
    opacity: 1;
}
</style>
