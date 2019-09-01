<template>
    <div id="aboutme">
    <div id="square"></div>
    <h2 id="Exp"> My <span class="name">Experience</span> </h2>
    <vuetable ref="vuetable" 
        api-url="..\..\public\data.json"
        :fields="['name', 'email', 'birthdate']"
    ></vuetable>
    <img id="avatar" src="../assets/avatar.png" alt="Just Me">
    <a href="/" style="text-decoration: none"><span class="buttonh" role="button">
            <img src="../assets/launch.png" style="width: 32px"/>
    </span></a>
    </div>
</template>

<script>
import Vuetable from 'vuetable-2/src/components/Vuetable';

export default {
    name: "Experience",
    components: {
        Vuetable
    }
}
</script>

<style scoped>
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
#avatar {
    display: flex;
    position: absolute;
    top: 30vw;
    right: -10vw;
    width: 30vw;
    border-radius: 50%;
    animation: fadeLeft 2s;
    -moz-animation: fadeLeft 2s; /* Firefox */
    -webkit-animation: fadeLeft 2s; /* Safari and Chrome */
    -o-animation: fadeLeft 2s; /* Opera */
}
a {
    outline: 0;
}
.buttonh {
    position: relative;
    top: 500px;
    left: 0vw;
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
@keyframes fadeLeft {
   0% {
       transform: translateX(10px);
       opacity:0;
   }
   100% {
       transform: translateX(0px);
       opacity:1;
   }
}
@-moz-keyframes fadeLeft { /* Firefox */
   0% {
       transform: translateX(10px);
       opacity:0;
   }
   100% {
       transform: translateX(0px);
       opacity:1;
   }
}
@-webkit-keyframes fadeLeft { /* Safari and Chrome */
   0% {
       transform: translateX(10px);
       opacity:0;
   }
   100% {
       transform: translateX(0px);
       opacity:1;
   }
}
@-o-keyframes fadeLeft { /* Opera */
   0% {
       transform: translateX(10px);
       opacity:0;
   }
   100% {
       transform: translateX(0px);
       opacity:1;
   }
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
