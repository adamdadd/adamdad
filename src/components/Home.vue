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
    <a href="/about" style= "text-decoration: none"><span class="button1" role="button">Launch!</span></a>
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
  color: #ff4e0f;
  margin: 64px 0 0;
  animation: fadedown 2s;
  -moz-animation: fadedown 2s; /* Firefox */
  -webkit-animation: fadedown 2s; /* Safari and Chrome */
  -o-animation: fadedown 2s; /* Opera */
}
h2 {
  font-family: 'Merriweather', serif;
  text-align: center;
  color: #ffffff;
  font-style: normal;
  animation: fade 5s;
  -moz-animation: fade 5s; /* Firefox */
  -webkit-animation: fade 5s; /* Safari and Chrome */
  -o-animation: fade 5s; /* Opera */
}
h3 {
  margin: 40px 0 0;
}
.button1 {
    position: relative;
    top: 50px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border: none;
    color: #ffffff;
    border-radius: 24px;
    padding: 15px 32px;
    width: 10%;
    font-size: 24px;
    font-family: 'Merriweather', serif;
    text-align: center;
    background-color: #008cef;
    box-shadow: 0 8px 16px 0 rgba(99,99,99,0.2), 0 6px 20px 0 rgba(99,99,99,0.19);
    animation: fade 5s;
    -moz-animation: fade 7s; /* Firefox */
    -webkit-animation: fade 7s; /* Safari and Chrome */
}
.button1:hover {
    background-color: #ff4e0f;
}
@font-face {
  font-family: Merriweather;
  src: url('https://fonts.googleapis.com/css?family=Merriweather'); 
  font-weight: bold;
}
@keyframes fadedown{
  0%{
    opacity:0;
    transform:translateY(-20px);
  }
  100%{
    opacity:1;
    transform:translateY(0);
  }
}
@-moz-keyframes fadeDown{
  0%{
    opacity:0;
    transform:translateY(-20px);
  }
  100%{
    opacity:1;
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
