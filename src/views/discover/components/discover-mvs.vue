<template>
  <div class='discover-mvs'>
      <h3>推荐MV</h3>
      <el-row class="mv" :gutter="20">
        <el-col :xs="12" :lg="6" v-for="mv in mvs" :key="mv.id">
           <div class="mv-img">
                <div class="box">{{mv.copywriter}}</div>
                <el-image :src="mv.picUrl"/>
                <span class="iconfont iconicon_play"></span>
                <span class="playCount">  <i class="iconfont iconluxiang"></i>   {{mv.playCount}}</span>
           </div>
             <el-tooltip
               class="item"
               effect="dark"
               :content="mv.name "
               placement="top"
               >
                <span>{{ mv.name }}</span>
                </el-tooltip>
        </el-col>
      </el-row>

  </div>
</template>
<script>
import { getMvs } from '@/api/music'
export default {
  name: 'DiscoverMvs',
  props: {},
  components: {},
  data () {
    return {
      mvs: []
    }
  },
  computed: {},
  watch: {},
  methods: {
    async getMvs () {
      const { data } = await getMvs()
      this.mvs.push(...data.result)
      // console.log(this.mvs)
    }
  },
  created () {
    this.getMvs()
  },
  mounted () {},
  beforeDestroy () {}
}
</script>
<style lang='less' scoped>
.discover-mvs{
  margin-bottom: 100px;
}
  h3{
    padding-left: 20px;
    font-weight: 400;
 }
 .mv{
     height: 150px;
      .mv-img{
          width: 262px;
          position: relative;
          overflow: hidden;
          .box{
            padding: 5px;
            box-sizing: border-box;
            position: absolute;
            top: -50px;
            left: 0px;
            width: 262px;
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
                right: 111px;
                bottom: 54px;
                width: 40px;
                height: 40px;
                line-height: 40px;
                font-size: 40px;
                position: absolute;
                /* left: 0; */
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
     .mv:hover .mv-img .box{
         top:0;
         max-height: 50px;
      }
      .mv:hover .mv-img .iconicon_play{
       opacity: 1;
      }
</style>
