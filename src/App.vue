<template>
  <div id="app" class="container-fluid">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <SolarSystem id="solar"/>
    <Menu/>
            <router-link class= "nav-link" active-class="active" id="title" to="/"></router-link>
            <router-link class="nav-link" active-class="active" to="/about"></router-link>
            <router-link class="nav-link" active-class="active" to="/experience"></router-link>
    <transition name="fade">
        <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import SolarSystem from './components/SolarSystem.vue'
import Menu from './components/Menu.vue'

export default {
  name: 'app',
  components: {
    SolarSystem,
    Menu
  }
}

</script>

<style>
body {
    overflow-x: hidden;
    touch-action: none;
}
html {
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFFFFF;
}
#title {
  position: absolute;
  font-size: 24px;
  position: relative;
  text-align: center;
  border-width: 64px;/* makes a nice, big 64px square */
  border-style: solid;
  border-color: transparent;
  height: 0;
  top: 0;
}
#solar {
    position: relative;
    z-index: -1;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 5s ease;
  -moz-transition: opacity 5s ease;
}
.fade-leave {}
.fade-leave-active {
  transition: opacity 5s ease;
  -moz-transition: opacity 5s ease;
  opacity: 0;
}
@viewport {
    width: device-width;
    initial-scale: 1;
    zoom: 1;
    min-zoom: 1;
    max-zoom: 3;
    user-zoom: fixed;
}
@media screen and (max-width:400px) {
    @-ms-viewport{
        width:320px;
    }
}
</style>
