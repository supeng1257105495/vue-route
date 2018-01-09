<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link :to="{name:'hi1',params:{id:'1257105495'}}">hi1</router-link>
    <router-link :to="{name:'hi2',params:{username:'jspang'}}">hi2</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hi',
  data () {
    return {
      msg: 'i am hi'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
