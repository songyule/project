<template>
  <div class="hello">
    <!--<h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>-->
    {{hello}}
    <p>这是一个简单至极的首页，你敢信，就是这么low ！！！</p>
    <p>要那么好干嘛。</p>
    <div>
      下面不是知识点的链接。
    </div>
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<>>>>>>>>>>>>>>><<<<<<<<<<<<<<<>>>>>>>>>>>>>
    <div style="background:pink;" v-for="mes in arr" @click="goto(mes.path)">{{mes.name}}</div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      hello: 'Welcome to Your Vue.js App',
      arr: [{
        name: 'rem配置',
        path: 'explain'
      }]
    }
  },
  methods: {
    goto (data) {
      console.log(data)
      this.$router.push('/' + data)
    }
  }
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
.hello {
  text-align: center;
  margin-top:20px;
}
</style>
