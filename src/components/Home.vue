<template>
  <div class="home">
    <h1>Adam Dad</h1>
    <h2>
        <span>
            RESEARCHER. DEVELOPER. INSTRUCTOR.
        </span>
    </h2>
    <br/>
    <br/>
    <a href="https://github.com/adamdadd" style= "text-decoration: none"><span class="button1" role="button">
            <img src="../assets/GitHub-Mark-64px.png" />
        </span></a>
    <a href="https://www.linkedin.com/in/adam-dad/" style= "text-decoration: none"><span class="button2" role="button">
            <img src="../assets/In-Black-66px-R.png" />
        </span></a>
    <picture>
        <source id="overlay" srcset="../assets/spacetime.png" media="(max-width: 800px)">
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
h1 {
  font-family: 'Merriweather', serif;
  text-align: center;
  font-size: 64px;
  opacity: 0.5;
  color: #000000 /*#ff4e0f*/;
  margin: 64px 0 0;
  animation: fadedown 4s;
  animation: glitch 5s infinite;
  -moz-animation: fadeDown 4s; /* Firefox */
  -webkit-animation: fadeDown 4s; /* Safari and Chrome */
  -o-animation: fadeDown 4s; /* Opera */
}
h2 {
  position: relative;
  top: 40px;
  font-family: 'Merriweather', serif;
  text-align: center;
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
    opacity: 0.1;
    top: -20vw;
    left: 0vw;
    transform: scaleY(1.7);
    width: 100vw;
    animation: fadeo 5s ;
    z-index: -1;
}
#genRel {
  display: flex;
  position: relative;
  opacity: 0;
  width: 25vw;
  top: -22vw;
  left: 15vw;
  font-size: 64px;
  animation: faderight ease-in 4s infinite;
  animation-delay: 4s;
}
#momMat {
  display: flex;
  position: relative;
  opacity: 0;
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
  opacity: 0;
  top: -25vw;
  left: 75vw;
  width: 10vw;
  animation: faderight ease-out 6s infinite;
  animation-delay: 6s;
}
#feynmann {
  display: flex;
  position: relative;
  opacity: 0;
  bottom: 10vw;
  left: 60vw;
  width: 10vw;
  animation: faderight ease-out 7s infinite;
  animation-delay: 7s;
  z-index: -1;
}
.button1 {
    display: flex;
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
    min-width: 5%;
    max-width: 5%;
    font-size: 1.75vw;
    font-family: 'Merriweather', serif;
    text-align: center;
    background-color: #ffffff /*#008cef*/;
    overflow: auto;
    box-shadow: 0 8px 16px 0 rgba(99,99,99,0.2), 0 6px 20px 0 rgba(99,99,99,0.19);
    animation: fade 5s;
    -moz-animation: fade 7s; /* Firefox */
    -webkit-animation: fade 7s; /* Safari and Chrome */
}
.button1:hover {
    outline: 0;
    background-color: #000000 /*#ff4e0f*/;
    color: #000000;
}
.button2 {
    display: flex;
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
    min-width: 5%;
    max-width: 5%;
    font-size: 1.75vw;
    font-family: 'Merriweather', serif;
    text-align: center;
    background-color: #ffffff /*#008cef*/;
    overflow: auto;
    box-shadow: 0 8px 16px 0 rgba(99,99,99,0.2), 0 6px 20px 0 rgba(99,99,99,0.19);
    animation: fade 5s;
    -moz-animation: fade 7s; /* Firefox */
    -webkit-animation: fade 7s; /* Safari and Chrome */
}
.button2:hover {
    outline: 0;
    background-color: #000000 /*#ff4e0f*/;
    color: #000000;
}
a {
    outline: 0;
}
@font-face {
  font-family: Merriweather;
  src: url('https://fonts.googleapis.com/css?family=Merriweather'); 
  font-weight: bold;
}
@keyframes fadeo {
  0%{
    transform: scaleY(1.7);
    opacity:0;
  }
  100%{
    transform: scaleY(1.7);
    opacity:0.1;
  }
}
@keyframes faderight {
  0%{
    opacity:0;
  }
  50%{
    opacity:0.2;
  }
  100%{
    opacity:0;
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
   100% {opacity:1;}
}

@-moz-keyframes fade { /* Firefox */
   0% {opacity:0;}
   100% {opacity:1;}
}

@-webkit-keyframes fade { /* Safari and Chrome */
   0% {opacity:0;}
   100% {opacity:1;}
}

@-o-keyframes fade { /* Opera */
   0% {opacity:0;}
   100% {opacity:1;}
}
</style>
