<template>
  <div class='playlists-container'>
    <div class="play-title">
      <!-- <div class="song-bg"></div> -->
      <div class="image">
        <img :src="playlists.coverImgUrl">
      </div>
      <div class="song-info ">
        <div class="tag">精品歌单</div>
        <div class="title">{{playlists.name}}</div>
        <div class="info">
          {{playlists.description}}
        </div>
      </div>
      <!-- <img src="./listCover.jpg" alt=""> -->
    </div>
    <tab-container
    @tag="tag = $event"
    />
    </div>
</template>
<script>
import TabContainer from './components/tab-container'
import { getHighquality } from '@/api/music'
export default {
  name: 'PlaylistsIndex',
  props: {},
  components: {
    TabContainer
  },
  data () {
    return {
      playlists: {},
      tag: '全部'
    }
  },
  computed: {},
  watch: {
    tag () {
      this.getHighquality()
    }
  },
  methods: {
    async getHighquality () {
      const { data } = await getHighquality({
        limit: 1,
        cat: this.tag
      })
      // console.log(data)
      this.playlists = data.playlists[0]
    }
  },
  created () {
    this.getHighquality()
    // this.tag()
  },
  mounted () {},
  beforeDestroy () {}
}
</script>
<style lang='less' scoped>
html,body{
  padding:0;
  margin:0;
}
.play-title {
  display: flex;
  position: relative;
  height: 200px;
  width: 1100px;
    border-radius: 10px;
  // background-color: rgba(0, 0, 0, .8);
  background: linear-gradient(45deg, #BE93C5,#7BC6CC, transparent);
  // .song-bg{
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   z-index: 0;
  // background: url('./listCover.jpg') no-repeat;
  // background-size: cover;
  // }
  .image{
    // float: left;
    // display: inline-block;
  width: 160px;
  height: 160px;
  z-index: 1;
   margin-left: 20px;
   margin-right: 0;
   padding-top: 20px;
  img{
    width: 100%;
    height: 100%s;
  }
}
.song-info{
  float: right;
  width: 870px;
  margin-top: 20px;
  // margin-right: 30px;
  margin-left: 20px;
  z-index: 1;
   .tag{
     width: 100px;
     height: 30px;
     line-height: 30px;
     text-align: center;
     color: #dfac67;
     border: 1px solid #dfac67;
     border-radius: 10px;
   }
   .title{
     padding-top: 10px;
     color: #fff;
   }
   .info{
      padding-top: 5px;
      font-size: 14px;
      color: #888482;
     overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
     -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
   }
}
}

</style>
