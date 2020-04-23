<template>
  <div class="hello">
   <aplayer autoplay :music="music" /> 
  </div>
</template>

<script>
import VueAplayer from 'vue-aplayer'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      music: {
        title: '平凡之路',
        artist: '朴树',
        src: '../../static/audio/road.mp3',
        pic: '../../static/img/road.jpg'
      },

    }
  },
  components: {
    //别忘了引入组件
    'aplayer': VueAplayer
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
