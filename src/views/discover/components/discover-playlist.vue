<template>
  <div class='discover-playlist'>
      <h3>推荐歌单</h3>
      <!-- <div>123</div> -->
      <div class="content">
            <div class="playlist" v-for=" item in Resource" :key="item.id" @click="toSongplay(item.id)" >
              <div class="item-img">
              <div class="box">{{item.copywriter}}</div>
             <el-image :src="item.picUrl">
            </el-image>
            <span class="iconfont iconicon_play"></span>
              </div>
               <el-tooltip
               class="item"
               effect="dark"
               :content="item.name "
               placement="top"
               >
                <span>{{ item.name }}</span>
                </el-tooltip>
             <!-- <span>123213</span> -->
        </div>
      </div>
  </div>
</template>
<script>
import { getResource } from '@/api/music'
export default {
  name: 'DiscoverPlaylist',
  props: {},
  components: {},
  data () {
    return {
      Resource: []
    }
  },
  computed: {},
  watch: {},
  methods: {
    async getResource () {
      const { data } = await getResource({ limit: 10 })
      //   const {}
      //   console.log(result)
      this.Resource.push(...data.result)
    },
    toSongplay (id) {
      this.$router.push(`/songplay?id=${id}`)
    }
  },
  created () {
    this.getResource()
  },
  mounted () {},
  beforeDestroy () {}
}
</script>
<style lang='less' scoped>
h3{
    padding-left: 20px;
    font-weight: 400;
}
.content{
    // display: flex;
    // flex-wrap: wrap;
    margin: 0 auto;
    width: 1100px;
    height: 486px;
    // overflow: hidden;
    .playlist{
        float: left;
        // flex: 18%;
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

</style>
