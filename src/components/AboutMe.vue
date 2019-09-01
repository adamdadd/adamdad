<template>
    <div id="aboutme">
    <div id="square"></div>
    <h2 id="who">Who On Earth is <span class="name">Adam Dad</span>?</h2>
    <p>
        <br/>
        Currently a final year masters student in astrophysics 
        at the University of Liverpool. (Grad. 2020)
        <br />
        <br />
        The best part of working in research is pushing 
        on the edges of our understanding of the world around us.
        <br/>
        <br/>
        I look forward to learning something new everyday.
    </p>
    <img id="avatar" src="../assets/avatar.png" alt="Just Me" />
    <a href="/experience" style="text-decoration: none">
        <span class="buttonh" role="button">
            <img src="../assets/launch.png" style="width: 32px"/>
        </span>
    </a>
    </div>
</template>

<script>

export default {
    name: "AboutMe",
    components: {
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
#who {
    font-family: 'Merriweather', serif;
    position: absolute;
    top: 10vw;
    left: 5vw;
    max-width:80vw;
    text-align: left;
    font-size: 36px;
    color: #000000;
    animation: fadeRight 2s;
    -moz-animation: fadeRight 2s; /* Firefox */
    -webkit-animation: fadeRight 2s; /* Safari and Chrome */
    -o-animation: fadeRight 2s; /* Opera */
}
.name {
    opacity: 0.4 /*#ff4e0f*/;
    animation: fadeRight 2s;
    -moz-animation: fadeRight 2s; /* Firefox */
    -webkit-animation: fadeRight 2s; /* Safari and Chrome */
    -o-animation: fadeRight 2s; /* Opera */
}
p {
    position: relative;
    text-align: left;
    font-size: 24px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    word-wrap: break-word;
    top: 240px;
    left: 5vw;
    width: 50vw;
    color: #ffffff;
    background-color: #000000;
    opacity: 0.8;
    animation: fadeRight 2s;
    -moz-animation: fadeRight 2s; /* Firefox */
    -webkit-animation: fadeRight 2s; /* Safari and Chrome */
    -o-animation: fadeRight 2s; /* Opera */
}
#avatar {
    display: flex;
    position: absolute;
    overflow: hidden;
    top: 400px;
    right: -10vw;
    width: 30vw;
    min-width: 200px;
    border-radius: 100vw;
    animation: fadeLeft 2s;
    -moz-animation: fadeLeft 2s; /* Firefox */
    -webkit-animation: fadeLeft 2s; /* Safari and Chrome */
    -o-animation: fadeLeft 2s; /* Opera */
}
a {
    outline: 0;
}
.buttonh {
    display: inline-table;
    position: relative;
    bottom: -275px;
    left: 0vw;
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
    animation: fadeUp 2s;
    -moz-animation: fadeUp 2s; /* Firefox */
    -webkit-animation: fadeUp 2s; /* Safari and Chrome */
}
.buttonh:hover {
    background-color: #ffffff /*#ff4e0f*/;
    color: #000000;
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
@-webkit-keyframes fadeUp { /* Safari and Chrome */
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
@keyframes fadeLeft {
   0% {
       transform: translateX(20px);
       opacity:0;
   }
   100% {
       transform: translateX(0px);
       opacity:1;
   }
}
@-moz-keyframes fadeRight { /* Firefox */
   0% {
       transform: translateX(20px);
       opacity:0;
   }
   100% {
       transform: translateX(0px);
       opacity:1;
   }
}
@-webkit-keyframes fadeLeft { /* Safari and Chrome */
   0% {
       transform: translateX(20px);
       opacity:0;
   }
   100% {
       transform: translateX(0px);
       opacity:1;
   }
}
@-o-keyframes fadeLeft { /* Opera */
   0% {
       transform: translateX(20px);
       opacity:0;
   }
   100% {
       transform: translateX(0px);
       opacity:1;
   }
}
@keyframes fadeRight {
   0% {
       transform: translateX(-20px);
       opacity:0;
   }
   100% {
       transform: translateX(0px);
       opacity:1;
   }
}
@-webkit-keyframes fadeRight {
   0% {
       transform: translateX(-20px);
       opacity:0;
   }
   100% {
       transform: translateX(0px);
       opacity:1;
   }
}
@-moz-keyframes fadeRight {
   0% {
       transform: translateX(-20px);
       opacity:0;
   }
   100% {
       transform: translateX(0px);
       opacity:1;
   }
}
@-o-keyframes fadeRight {
   0% {
       transform: translateX(-20px);
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
