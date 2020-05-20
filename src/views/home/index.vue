<template>
  <div class='home-container'>
  </div>
</template>
<script>
export default {
  name: 'HomeIndex',
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
</style>
