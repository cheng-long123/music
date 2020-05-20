<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style lang="less">
 html{
   height: 100%;
   body{
     height: 100%;
     margin: 0;
     padding: 0;
     #app{
  height: 100%;
        background-image: url('./assets/bj.jpeg') ;
        background-size: cover;
        /* z-index: 10; */
      }
   }
 }
</style>
