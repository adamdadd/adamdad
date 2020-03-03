<template>
    <div id="aboutme">
    <!-- <div id="square"></div> -->
    <h2 id="Exp"> My <span class="name">Experience</span> </h2>

    <!-- <vuetable ref="vuetable" 
        api-url="..\..\public\data.json"
        :fields="['name', 'email', 'date']"
    ></vuetable> -->

    <img id="uni" src="../assets/Uni.jpg" alt="uni">
    <img id="tutor" src="../assets/tutor.jpg" alt="tutor">
    <img id="unilever" src="../assets/Unilever.jpg" alt="unilever">
    <img id="hipy" src="../assets/hipy.jpg" alt="hipy">
    <a href="/" style="text-decoration: none"><span class="buttonh" role="button">
            <img src="../assets/launch.png" style="width: 32px"/>
    </span></a>
    </div>
</template>

<script>
// import Vuetable from 'vuetable-2/src/components/Vuetable';

export default {
    name: "Experience",
    components: {
        // Vuetable
    }
}
</script>

<style scoped>
@-webkit-keyframes rot-hipy {
  from {
    -webkit-transform: rotate(0deg) translatey(-20vw) rotate(0deg);
            transform: rotate(0deg) translatey(-20vw) rotate(0deg);
  }
  to {
    -webkit-transform: rotate(-360deg) translatey(-20vw) rotate(360deg);
            transform: rotate(-360deg) translatey(-20vw) rotate(360deg);
  }
}

#hipy {
    display: flex;
    position: absolute;
    top: 300px;
    left: 30vw;
    width: 10vw;
    max-width: 100px;
    opacity: 0.8;
    border-radius: 50%;
    -moz-animation: rot-hipy 10s infinite linear;
    -webkit-animation: rot-hipy 10s infinite linear;
}

@-webkit-keyframes rot-unilever {
  from {
    -webkit-transform: rotate(0deg) translatey(20vw) rotate(0deg);
            transform: rotate(0deg) translatey(20vw) rotate(0deg);
  }
  to {
    -webkit-transform: rotate(-360deg) translatey(20vw) rotate(360deg);
            transform: rotate(-360deg) translatey(20vw) rotate(360deg);
  }
}

#unilever {
    display: flex;
    position: absolute;
    top: 300px;
    left: 30vw;
    width: 20vw;
    max-width: 200px;
    opacity: 0.8;
    border-radius: 50%;
    -moz-animation: rot-unilever 10s infinite linear;
    -webkit-animation: rot-unilever 10s infinite linear;
}

#tutor {
    display: flex;
    position: absolute;
    top: 300px;
    left: 65vw;
    width: 20vw;
    max-width: 150px;
    opacity: 0.8;
    border-radius: 50%;
}

#uni {
    display: flex;
    position: absolute;
    top: 300px;
    left: 25vw;
    /* width: 30vw; */
    width: 20vw;
    height: 20vw;
    max-width: 300px;
    border-radius: 50%;
    animation: fade 2s;
    -moz-animation: fade 2s; /* Firefox */
    -webkit-animation: fade 2s; /* Safari and Chrome */
    -o-animation: fade 2s; /* Opera */
}

#thg {
    display: flex;
    position: absolute;
    top: 450px;
    left: 60vw;
    /* width: 30vw; */
    width: 30vw;
    max-width: 300px;
    border-radius: 50%;
    animation: fade 2s;
    -moz-animation: fade 2s; /* Firefox */
    -webkit-animation: fade 2s; /* Safari and Chrome */
    -o-animation: fade 2s; /* Opera */
}

#square {
    display: flex;
    position: absolute;
    background-color: #000000;
    opacity: 0.2;
    top: 0px;
    left: 0px;
    padding: 540px 1080px;
    width: 5vw;
    transition: ease-in 4s;
    z-index: -1;
}
#Exp {
    animation: fade 2s;
    -moz-animation: fade 2s; /* Firefox */
    -webkit-animation: fade 2s; /* Safari and Chrome */
    -o-animation: fade 2s; /* Opera */
    font-family: 'Merriweather', serif;
    position: absolute;
    top: 10vw;
    left: 5vw;
    text-align: left;
    font-size: 36px;
    color: #000000;
}
.name {
    opacity: 0.4 /*#ff4e0f*/;
}
p {
    position: relative;
    text-align: left;
    font-size: 16px;
    top: 24vw;
    left: 5vw;
    width: 80vw;
    color: #000000;
    animation: fade 1s;
    -moz-animation: fade 1s; /* Firefox */
    -webkit-animation: fade 1s; /* Safari and Chrome */
    -o-animation: fade 1s; /* Opera */
}
a {
    outline: 0;
}
.buttonh {
    position: absolute;
    top: 600px;
    left: 43vw;
    display: inline-table;
    margin-left: auto;
    margin-right: auto;
    border: none;
    color: #ffffff;
    border-radius: 24px;
    padding: 15px 32px;
    width: 5%;
    font-family: 'Merriweather', serif;
    background-color: #000000/*#008cef*/;
    box-shadow: 0 8px 16px 0 rgba(99,99,99,0.2), 0 6px 20px 0 rgba(99,99,99,0.19);
    animation: fade 5s;
    -moz-animation: fade 7s; /* Firefox */
    -webkit-animation: fade 7s; /* Safari and Chrome */
}
.buttonh:hover {
    background-color: #ffffff /*#ff4e0f*/;
    color: #000000;
}

@keyframes fade {
   0% {
       opacity:0;
   }
   100% {
       opacity:1;
   }
}
@-moz-keyframes fade {
   0% {
       opacity:0;
   }
   100% {
       opacity:1;
   }
}
@-webkit-keyframes fade {
   0% {
       opacity:0;
   }
   100% {
       opacity:1;
   }
}
@-o-keyframes fade {
   0% {
       opacity:0;
   }
   100% {
       opacity:1;
   }
}
</style>
