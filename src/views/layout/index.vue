<template>
    <el-container class='layout-container'>
        <el-header>
          <div class="title-name">
            <el-tag>C</el-tag>
            <el-tag type="success">L</el-tag>
            <el-tag type="info">的</el-tag>
            <el-tag type="warning">音</el-tag>
            <el-tag type="danger">乐</el-tag>
          </div>
           <div class="btn">
              <i class="el-icon-arrow-left" @click="$router.back()"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i class="el-icon-arrow-right" @click="history"></i>
           </div>
            <div class="search">
                <el-input
                v-model="massage"
                size="mini"
                placeholder="搜索"
                @change="toSearch"
                >
                </el-input>
                <i class="iconfont iconsearch"></i>
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
     <!-- <div style="width: 60%">
         <aplayer :music="videoUpload.music"></aplayer>
    </div> -->
</el-container>
</template>
<script>
// import aplayer from 'vue-aplayer'
import AppAside from './components/aside'
// import globalBus from '@/utils/global-bus'
import { mapState } from 'vuex'
export default {
  name: 'LayoutIndex',
  props: {},
  components: {
    AppAside
    // aplayer
  },
  data () {
    return {
      massage: '',
      // musicUrl: '',
      videoUpload: {
        progress: false,
        progressPercent: 0,
        successPercent: 0,
        music: {
          title: '',
          author: '',
          url: '',
          lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
        }
      }
    }
  },
  computed: {
    ...mapState(['musicUrl'])
  },
  watch: {},
  methods: {
    history () {
      history.forward()
    },
    toSearch () {
      if (this.massage === '') {
        this.$message({
          message: '请输入内容',
          type: 'warning'
        })
      } else {
        this.$router.push('/search?q=' + this.massage)
      }
    }
  },
  created () {
    // console.log(this.musicUrl)
  },
  mounted () {
    // globalBus.$on('play-music', (musicUrl) => {
    //   this.musicUrl = musicUrl
    // })
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
      position: relative;
         background-color: hsla(0,0%,98%,.7);
    }
    .el-aside{
       background-color: hsla(0,0%,98%,.7);
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
    width: 200px;
    position: relative;
    .iconsearch{
      position: absolute;
      top: 2px;
      left: 10px;
      color: gray;
    }
    .el-input{
      /deep/ input{
            padding: 0 30px;
      }
    }
}
.play{
   audio{
        width: 100%;
   }
}
.btn{
  position: absolute;
  top: 0;
  left: 203px;
  width: 100px;
  height: 60px;
  font-size: 30px;
  color:grey;
  text-align: center;
  line-height: 60px;
  cursor: pointer;
  i{
    width: 35px;
    height: 35px;
    line-height: 35px;
    border-radius: 50%;
  }
}
i:hover{
  background: rgba(190, 185, 185, 0.9);
}
.title-name{
width: 170px;
float: left;
}
</style>
