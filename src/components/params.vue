<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>newsId:{{$route.params.newsID}}</h2>
    <h2>newsTitle:{{$route.params.newsTitle}}</h2>
  </div>
</template>

<script>
export default {
  name: 'params',
  data () {
    return {
      msg: 'i am params'
    }
  },
  beforeRouteEnter: (to, from, next) => {
        console.log("准备进入路由")
        next();
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("准备离开路由模板")
     next();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
