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
    <a href="https://github.com/adamdadd" style= "text-decoration: none"><span class="button1" role="button">--></span></a>
    <img id="eqn1" src="../assets/einfield.svg" border="0"/>
    <img id="eqn2" src="../assets/4mom.svg" border="0" />
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
  -moz-animation: fadedown 4%; /* Firefox */
  -moz-animation-delay: 2s;
  -webkit-animation: fadedown 4s; /* Safari and Chrome */
  -o-animation: fadedown 4s; /* Opera */
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
#eqn1 {
  position: absolute;
  opacity: 0;
  width: 15vw;
  top: 5vw;
  left: 2vw;
  font-size: 64px;
  animation: faderight ease-in 4s infinite;
  animation-delay: 9s;
}
#eqn2 {
  position: absolute;
  opacity: 0;
  width: 20vw;
  top: -8vw;
  left: 2vw;
  font-size: 64px;
  animation: faderight ease-out 8s infinite;
  animation-delay: 4s;
}
#calabi {
  position: absolute;
  opacity: 0;
  top: -10vw;
  right: 5vw;
  width: 10vw;
  animation: faderight ease-out 5s infinite;
  animation-delay: 7s;
}
#feynmann {
  position: absolute;
  opacity: 0;
  top: 5vw;
  right: 2vw;
  width: 10vw;
  animation: faderight ease-out 10s infinite;
  animation-delay: 9s;
}
.button1 {
    position: relative;
    top: 80px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border: none;
    color: #ffffff;
    border-radius: 24px;
    padding: 15px 32px;
    width: 100%;
    min-width: 10%;
    max-width: 10%;
    font-size: 1.75vw;
    font-family: 'Merriweather', serif;
    text-align: center;
    background-color: #000000 /*#008cef*/;
    overflow-wrap: break-word;
    box-shadow: 0 8px 16px 0 rgba(99,99,99,0.2), 0 6px 20px 0 rgba(99,99,99,0.19);
    animation: fade 5s;
    -moz-animation: fade 7s; /* Firefox */
    -webkit-animation: fade 7s; /* Safari and Chrome */
}
.button1:hover {
    outline: 0;
    background-color: #ffffff /*#ff4e0f*/;
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
@keyframes faderight {
  0%{
    opacity:0;
  }
  50%{
    opacity:0.4;
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
