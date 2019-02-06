<template>
  <div class="ui" id="js-ui">
    <nav class="scene_nav">
      <ol class="scene_nav_list">
        <li class="scene_nav_item">
          <button class="scene_nav_button" @click="scene = index" :class="{ 'o-active': scene === index }"></button>
        </li>
        <li class="scene_nav_item">
          <button class="scene_nav_button" @click="scene = index" :class="{ 'o-active': scene === index }"></button>
        </li>
        <li class="scene_nav_item">
          <button class="scene_nav_button" @click="scene = index" :class="{ 'o-active': scene === index }"></button>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
export default {
  el: '#js-ui',
  name: 'navbar',
  data () {
    return {
      scene: 0,
      maxScene: 6 
    }
  },

  mounted () {
    setTimeout(() => {
      this.scene = this.maxScene - 3
    }, 1000)
  }
}
</script>

<style scoped>
body {
  display: flex;
  justify-content: left;
  align-items: left;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
}

.scene_nav {
  position: relative;
}
.scene_nav_list {
  display: flex;
  margin: 0;
  padding: 0;
  -webkit-transform: scaleY(0.6);
          transform: scaleY(0.6);
}
.scene_nav_item {
  display: block;
}
.scene_nav_item:nth-child(even) {
  -webkit-transform: scaleY(-1);
          transform: scaleY(-1);
}
.scene_nav_item:not(:first-child) {
  margin-left: -8px;
}
.scene_nav_button {
  display: block;
  width: 50px;
  height: 50px;
  margin: 0;
  padding: 0;
  border: none;
  background: #0a7896;
  outline: none;
  cursor: pointer;
  transition: 500ms;
  -webkit-clip-path: polygon(25px 0, calc(100% - 25px) 0, 100% 100%, 0 100%);
          clip-path: polygon(25px 0, calc(100% - 25px) 0, 100% 100%, 0 100%);
}
.scene_nav_button.o-active {
  width: 160px;
  background: #64fafa;
}
.scene_nav_button:hover {
  background: #64fafa;
}

</style>
