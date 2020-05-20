<template>
    <el-container class='layout-container'>
        <el-header>
            <i class="el-icon-arrow-left"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i class="el-icon-arrow-right"></i>
            <div class="search">
                <el-input
                v-model="massage"
                size="mini"
                placeholder="请输入内容"
                >
                </el-input>
            </div>
        </el-header>
   <el-container>
    <el-aside width="200px">
        <app-aside class="aside-menu" />
    </el-aside>
    <el-container>
      <!-- <el-scrollbar style="height:100%"> -->
        <div class="scrollbar">
         <el-main> <router-view /></el-main>
         </div>
      <!-- </el-scrollbar> -->
    </el-container>
  </el-container>
   <div class="play">
         <audio
         :src="musicUrl"
         controls="controls"
         autoplay="autoplay">
            </audio>
        </div>
</el-container>
</template>
<script>
import AppAside from './components/aside'
import globalBus from '@/utils/global-bus'
export default {
  name: 'LayoutIndex',
  props: {},
  components: {
    AppAside
  },
  data () {
    return {
      massage: '',
      musicUrl: ''
    }
  },
  computed: {},
  watch: {},
  methods: {
  },
  created () {
    console.log(this.musicUrl)
  },
  mounted () {
    globalBus.$on('play-music', (musicUrl) => {
      this.musicUrl = musicUrl
    })
  },
  beforeDestroy () {}
}
</script>
<style lang='less' scoped>
// /deep/ body .el-scrollbar__wrap {
//     overflow-x: hidden;
// }
//  /deep/ .el-scrollbar__view{
//     height: 100%;
//     overflow-y: auto;
//     position: fixed;
//         right: 0;
//          overflow-x: hidden;
// }
.el-main{
  position: fixed;
    left: 199px;
    top: 60px;
    bottom: 0;
    right: 0;
    background: hsla(0,0%,90%,0.7);;
}
.scrollbar{
      position: fixed;
    height: 100%;
    overflow-y: auto;
    right: 0;
}
.layout-container{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    .el-header{
         background-color: hsla(0,0%,98%,.5);
    }
    .el-aside{
       background-color: hsla(0,0%,98%,.5);
    }

    .el-header{
        line-height: 60px;
    }
    // .discover-container{
    //  position: fixed;
    // height: 100%;
    // overflow-y: auto;
    // right: 0px;
    // }
}
.search{
    display: flex;
    float: right;
    width: 180px;
}
.play{
   audio{
        width: 100%;
   }
}
</style>
