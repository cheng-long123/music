<template>
  <div class='app-aside'>
      <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      router
      active-text-color="#d3a78e"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="/discover">
        <i class="iconfont iconyinle1 "></i>
        <span slot="title">发现音乐</span>
      </el-menu-item>
      <el-menu-item index="/playlists">
        <i class="iconfont icongedan"></i>
        <span slot="title">推荐歌单</span>
      </el-menu-item>
      <el-menu-item index="/songs" >
        <i class="iconfont iconyinyue"></i>
        <span slot="title">最新音乐</span>
      </el-menu-item>
      <el-menu-item index="/mvs">
        <i class="iconfont iconmv1"></i>
        <span slot="title">最新MV</span>
      </el-menu-item>
      <el-menu-item index="/collect">
        <i class="iconfont iconshoucang"></i>
        <span slot="title">收藏音乐</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'App-aside',
  props: {},
  components: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  created () {},
  mounted () {},
  beforeDestroy () {}
}
</script>
<style lang='less' scoped>
.el-menu-vertical-demo{
    background-color: unset;
    height: 100%;
}
.iconfont{
  font-size: 20px;
  margin-right: 20px;
}
.el-menu-item {
  font-size: 18px;
}
</style>
