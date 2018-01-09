<template>
  <div class="hello">
    <h1>{{ msg }}-{{$route.params.id}}</h1>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hi1',
  data () {
    return {
      msg: 'i am hi1'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
