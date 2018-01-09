<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <div>
        <button @click="goBack">后退</button>
        <button @click="go">前进</button>
        <button @click="goHome">回到首页</button>
      </div>
      <router-link to="/">首页</router-link>
      <router-link to="/hi">HI</router-link>
      <router-link to="/params/198/sp">params</router-link>
      <router-link to="/gohome">gohome</router-link>
      <router-link to="/supeng">alias</router-link>
    </div>
    
      <p>{{ $route.name }}</p>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <router-view name="right" style="float:left;width:50%;height:300px;background:blue;color:#fff"/>
      <router-view name="left" style="float:right;width:50%;height:300px;background:orange;color:#fff"/>
     
      
  </div>
</template>

<script>
export default {
  name: '#app',
  methods:{
    goBack(){
      this.$router.go(-1);
    },
    go(){
      this.$router.go(1);
    },
    goHome(){
     this.$router.push('/'); 
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity .5s;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  opacity: 0;
  transition: opacity .5s;
}
</style>
