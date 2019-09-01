<template>
  <div class="home">
    <div id="square"></div>
    <h1>Adam Dad</h1>
    <h2>
        <span>
            RESEARCHER. DEVELOPER. INSTRUCTOR.
        </span>
    </h2>
    <br/>
    <br/>
    <a href="https://github.com/adamdadd" style= "text-decoration: none"><span class="button1" role="button">
            <img src="../assets/GitHub-Mark-64px.png" style="width: 32px"/>
        </span></a>
    <a href="https://www.linkedin.com/in/adamdad/" style= "text-decoration: none"><span class="button2" role="button">
            <img src="../assets/In-Black-66px-R.png" style="width:32px" />
        </span></a>
    <a href="/about" style= "text-decoration: none"><span class="button_launch" role="button">
            <img src="../assets/launch.png" style="width:32px" />
        </span></a>
    <picture>
        <source id="overlay" srcset="../assets/spacetime.png" media="(max-width: 80px)">
        <img id="overlay" src="../assets/overlay.png" />
    </picture>
    <img id="genRel" src="../assets/einfield.svg" border="0"/>
    <img id="momMat" src="../assets/4mom.svg" border="0" />
    <img id="calabi" src="../assets/Calabi_yau.png" border="0" />
    <img id="feynmann" src="../assets/Feynmann.png" border="0" />
  </div>
</template>

<script>
export default {
  name: 'Home',
  beforeRouteUpdate(to, from, next){
      to( '/about'),
      from('/'),
      next()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.home {
    position: relative;
    top: 150px;
}
#square {
    position: absolute;
    background-color: #000000;
    opacity: 0.2;
    top: 0px;
    left: 23vw;
    padding: 120px 18px;
    width: 50vw;
    z-index: -1;
}
h1 {
  font-family: 'Merriweather', serif;
  text-align: center;
  font-size: 64px;
  opacity: 0.5;
  color: #000000 /*#ff4e0f*/;
  margin: 64px 0 0;
  animation: fadedown 2s;
  -moz-animation: fadeDown 2s; /* Firefox */
  -webkit-animation: fadeDown 2s; /* Safari and Chrome */
  -o-animation: fadeDown 2s; /* Opera */
}
h2 {
  position: relative;
  top: 40px;
  font-family: 'Merriweather', serif;
  text-align: center;
  outline: #ffffff;
  color: #000000/*#ffffff*/;
  font-style: normal;
  animation: fade 10s;
  -moz-animation: fade 10s; /* Firefox */
  -webkit-animation: fade 10s; /* Safari and Chrome */
  -o-animation: fade 10s; /* Opera */
}
h3 {
  margin: 40px 0 0;
}
#overlay {
    display: flex;
    position: absolute;
    opacity: 0.25;
    top: -20vw;
    left: 0vw;
    transform: scaleY(1);
    width: 100vw;
    animation: fadeo 5s ;
    z-index: -1;
}
#genRel {
  display: flex;
  position: relative;
  opacity: 0.1;
  width: 40vw;
  top: -22vw;
  left: 15vw;
  font-size: 64px;
  animation: faderight ease-in 4s infinite;
  animation-delay: 4s;
}
#momMat {
  display: flex;
  position: relative;
  opacity: 0.3;
  width: 20vw;
  bottom: -8vw;
  left: 5vw;
  font-size: 64px;
  animation: faderight ease-out 5s infinite;
  animation-delay: 5s;
  z-index: -1;
}
#calabi {
  display: flex;
  position: relative;
  opacity: 0.25;
  top: -25vw;
  left: 75vw;
  width: 10vw;
  animation: faderight ease-out 6s infinite;
  animation-delay: 6s;
}
#feynmann {
  display: flex;
  position: relative;
  opacity: 0.5;
  bottom: 10vw;
  left: 60vw;
  width: 10vw;
  animation: faderight ease-out 7s infinite;
  animation-delay: 7s;
  z-index: -1;
}
.button1 {
    display: inline-table;
    position: absolute;
    top: 250px;
    right: 20vw;
    margin-left: auto;
    margin-right: auto;
    border: none;
    color: #ffffff;
    border-radius: 24px;
    padding: 15px 32px;
    width: auto;
    font-size: 1.75vw;
    font-family: 'Merriweather', serif;
    text-align: center;
    background-color: #ffffff /*#008cef*/;
    overflow: auto;
    box-shadow: 0 8px 16px 0 rgba(99,99,99,0.2), 0 6px 20px 0 rgba(99,99,99,0.19);
    -webkit-tap-highlight-color: transparent; /* For some Androids */
    animation: fadeUp 2s;
    -moz-animation: fadeUp 2s; /* Firefox */
    -webkit-animation: fadeUp 2s; /* Safari and Chrome */
}
.button1:hover {
    outline: 0;
    background-color: #000000 /*#ff4e0f*/;
    color: #000000;
}
.button2 {
    display: inline-table;
    position: absolute;
    top: 250px;
    left: 20vw;
    margin-left: auto;
    margin-right: auto;
    border: none;
    color: #ffffff;
    border-radius: 24px;
    padding: 15px 32px;
    width: auto;
    font-size: 1.75vw;
    font-family: 'Merriweather', serif;
    text-align: center;
    background-color: #ffffff /*#008cef*/;
    box-shadow: 0 8px 16px 0 rgba(99,99,99,0.2), 0 6px 20px 0 rgba(99,99,99,0.19);
    -webkit-tap-highlight-color: transparent; /* For some Androids */
    animation: fadeUp 2s;
    -moz-animation: fadeUp 2s; /* Firefox */
    -webkit-animation: fadeUp 2s; /* Safari and Chrome */
}
.button2:hover {
    outline: 0;
    background-color: #000000 /*#ff4e0f*/;
    color: #000000;
}
.button_launch {
    display: inline-table;
    position: relative;
    top: 150px;
    left: 0vw;
    margin-left: auto;
    margin-right: auto;
    border: none;
    color: #ffffff;
    border-radius: 24px;
    padding: 15px 32px;
    width: 5%;
    max-height: 64px;
    font-size: 1.75vw;
    font-family: 'Merriweather', serif;
    background-color: #000000 /*#008cef*/;
    box-shadow: 0 8px 16px 0 rgba(99,99,99,0.2), 0 6px 20px 0 rgba(99,99,99,0.19);
    animation: fadeUp 2s;
    -moz-animation: fadeUp 2s; /* Firefox */
    -webkit-animation: fadeUp 2s; /* Safari and Chrome */
    -o-animation: fadeUp 2s;
}
.button_launch:hover {
    outline: 0;
    background-color: #ffffff /*#ff4e0f*/;
}
a {
    outline: 0;
}
@font-face {
  font-family: Merriweather;
  src: url('https://fonts.googleapis.com/css?family=Merriweather'); 
  font-weight: bold;
}
@keyframes fadeUp {
   0% {
       transform: translateY(20px);
       opacity:0;
   }
   100% {
       transform: translateY(0px);
       opacity:1;
   }
}
@-moz-keyframes fadeUp { /* Firefox */
   0% {
       transform: translateY(20px);
       opacity:0;
   }
   100% {
       transform: translateY(0px);
       opacity:1;
   }
}
@-webkit-keyframes fadeUp {
   0% {
       transform: translateY(20px);
       opacity:0;
   }
   100% {
       transform: translateY(0px);
       opacity:1;
   }
}
@-o-keyframes fadeUp { /* Opera */
   0% {
       transform: translateY(20px);
       opacity:0;
   }
   100% {
       transform: translateY(0px);
       opacity:1;
   }
}
@keyframes fadeo {
  0%{
    transform: scaleY(2);
    opacity:0;
  }
  100%{
    transform: scaleY(2);
    opacity:0.15;
  }
}
@keyframes fadedown{
  0%{
    opacity:0;
    transform:translateY(-20px);
  }
  50%{
    opacity:1;
  }
  100%{
    opacity:0.5;
    transform:translateY(0);
  }
}
@-moz-keyframes fadeDown{
  0%{
    opacity:0;
    transform:translateY(-20px);
  }
  50%{
      opacity:1;
  }
  100%{
    opacity:0.8;
    transform:translateY(0);
  }
}
  @-webkit-keyframes fadeDown{
  0%{
    opacity:0;
    transform:translateY(-20px);
  }
  100%{
    opacity:1;
    transform:translateY(0);
  }
}
@-o-keyframes fadeDown{
  0%{
    opacity:0;
    transform:translateY(-20px);
  }
  100%{
    opacity:1;
    transform:translateY(0);
  }
}
@keyframes fade {
   0% {opacity:0;}
   100% {opacity:0.8;}
}

@-moz-keyframes fade { /* Firefox */
   0% {opacity:0;}
   100% {opacity:0.8;}
}

@-webkit-keyframes fade { /* Safari and Chrome */
   0% {opacity:0;}
   100% {opacity:0.8;}
}

@-o-keyframes fade { /* Opera */
   0% {opacity:0;}
   100% {opacity:0.8;}
}
</style>
