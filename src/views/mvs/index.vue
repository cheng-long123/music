<template>
  <div class='mvs-container'>
   <div class="classify">
       <div class="seciton-wrap ">
        <span class="region">地区:</span>
        <ul>
          <li class="tab">
            <span
            class="title"
            :class="{ active: area == '全部' }"
            @click="area = '全部'"
            >全部</span>
          </li>
          <li class="tab">
           <span
            class="title"
            :class="{ active: area == '内地' }"
            @click="area = '内地'"
            >内地</span>
          </li>
          <li class="tab">
            <span
            class="title"
            :class="{ active: area == '港台' }"
            @click="area = '港台'"
            >港台</span>
          </li>
          <li class="tab">
            <span
            class="title"
            :class="{ active: area == '欧美' }"
            @click="area = '欧美'"
            >欧美</span>
          </li>
          <li class="tab">
            <span
            class="title"
            :class="{ active: area == '日本' }"
            @click="area = '日本'"
            >日本</span>
          </li>
          <li class="tab">
           <span
            class="title"
            :class="{ active: area == '韩国' }"
            @click="area = '韩国'"
            >韩国</span>
          </li>
        </ul>
    </div>
    <div class="type-wrap">
      <span class="type">类型:</span>
      <ul>
         <li class="tab">
            <span
            class="title"
            :class="{ active: type == '全部' }"
            @click="type = '全部'"
            >全部</span>
          </li>
         <li class="tab">
            <span
            class="title"
            :class="{ active: type == '官方版' }"
            @click="type = '官方版'"
            >官方版</span>
          </li>
         <li class="tab">
            <span
            class="title"
            :class="{ active: type == '原生' }"
            @click="type = '原生'"
            >原生</span>
          </li>
         <li class="tab">
            <span
            class="title"
            :class="{ active: type == '现场版' }"
            @click="type = '现场版'"
            >现场版</span>
          </li>
         <li class="tab">
            <span
            class="title"
            :class="{ active: type == '网易出品' }"
            @click="type = '网易出品'"
            >网易出品</span>
          </li>
      </ul>
    </div>
    <div class="order-wrap">
      <span class="type">排序:</span>
      <ul>
         <li class="tab">
            <span
            class="title"
            :class="{ active: order == '上升最快' }"
            @click="order = '上升最快'"
            >上升最快</span>
          </li>
         <li class="tab">
            <span
            class="title"
            :class="{ active: order == '最热' }"
            @click="order = '最热'"
            >最热</span>
          </li>
         <li class="tab">
            <span
            class="title"
            :class="{ active: order == '最新' }"
            @click="order = '最新'"
            >最新</span>
          </li>
      </ul>
    </div>
   </div>
   <el-row :gutter="20">
    <el-col class="mvs" :xs="12" :lg="6" :span="6" v-for="(item, index) in mvs" :key="index" @click.native="toMV(item.id)">
       <el-image :src="item.cover"></el-image>
       <div class="plays">
         <i class="iconfont iconbofang1"></i>
         {{item.playCount}}
       </div>
      <div>{{item.name}}</div>
      <div class="singer">{{item.artistName}}</div>
    </el-col>
  </el-row>
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
import { getAllMvs } from '@/api/music'
export default {
  name: 'MvsIndex',
  props: {},
  components: {},
  data () {
    return {
      mvs: [],
      area: '全部',
      type: '全部',
      order: '上升最快',
      limit: 32,
      playCount: null,
      page: 1, // 分页
      count: 0 // 总数据

    }
  },
  computed: {},
  watch: {
    area () {
      this.getAllMvs()
      this.page = 1
    },
    type () {
      this.getAllMvs()
      this.page = 1
    },
    order () {
      this.getAllMvs()
      this.page = 1
    }
  },
  methods: {
    async getAllMvs () {
      const { data } = await getAllMvs({
        area: this.area, // 地区
        type: this.type, // 类别
        order: this.order, // 排序
        limit: this.limit, // 每页多少条
        offset: (this.page - 1) * this.limit // 分页
      })
      this.mvs = data.data
      // 处理播放量
      this.mvs.forEach(value => {
        if (value.playCount >= 100000) {
          value.playCount = parseInt(value.playCount / 10000) + '万'
        }
      })
      if (data.count) {
        this.count = data.count
      }
      // console.log(data)
    }, // 分页
    handleCurrentChange (page) {
      this.page = page
      this.getAllMvs()
    }, // 跳转到mv详情
    toMV (id) {
      this.$router.push(`/mv?id=${id}`)
    }
  },
  created () {
    this.getAllMvs()
  },
  mounted () {},
  beforeDestroy () {}
}
</script>
<style lang='less' scoped>
.classify {
  height: 120px;
}
 ul{
    font-size: 14px;
    padding: 0;
    margin: 0;
     display: inline-block;
     margin-bottom: 25px;
    .tab{
      height: 20px;
      list-style: none;
       display: inline-block;
       text-align: center;
       padding-right:  30px;
       margin: 0 20px;
       color: grey;
       cursor: pointer;
       border-right: 1px solid #fff;
       .title{
         padding: 5px 20px;
       }
    }
    .tab:last-child{
      border: none;
    }
  }
  .active{
    // background-image: linear-gradient(135deg,#FC5C7D,#6A82FB);
    //    background-clip:text;
    //    -webkit-text-fill-color:transparent;
    color:#dd6d60;;
    background-color: #fcf6f5;
    border-radius: 20px;

  }
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
  }
  }
  .el-pagination{
    text-align: center;
    margin-bottom: 50px;
    // .active{
    //   background-color: red;
    // }
  }
</style>
