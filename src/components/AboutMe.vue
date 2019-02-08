<template>
    <div id="aboutme">
    <h2 id="AboutMe">Who On Earth is <span class="name">Adam Dad</span>?</h2>
    <ul>
        <li> Astrophysics Student at Universty of Liverpool.</li>
        <br/>
            <li> Passionate About Problem Solving.</li>
    </ul>
    <img src="../assets/avatar.png" alt="Just Me">
    <a href="/" style="text-decoration: none"><span class="buttonh" role="button">Home</span></a>
    <a href="/experience" style="text-decoration: none"><span class="buttonb" role="button">Beyond!</span></a>
    </div>
</template>

<script>
export default {
    name: "AboutMe"
}
</script>

<style scoped>
h2 {
    animation: fade 2s;
    -moz-animation: fade 2s; /* Firefox */
    -webkit-animation: fade 2s; /* Safari and Chrome */
    -o-animation: fade 2s; /* Opera */
    font-family: 'Merriweather', serif;
    position: absolute;
    top: 0%;
    left: 4%;
    padding-top: 15%;
    text-align: left;
    font-size: 36px;
    color: #ffffff;
}
.name {
    color: #ff4e0f;
}
ul {
    position: relative;
    text-align: left;
    font-size: 24px;
    top: 300px;
    left: 50px;
    width: 40%;
    animation: fade 5s;
    -moz-animation: fade 5s; /* Firefox */
    -webkit-animation: fade 5s; /* Safari and Chrome */
    -o-animation: fade 5s; /* Opera */
}
img {
    position: absolute;
    align: right;
    top: 25vw;
    right: 50px;
    width: 20%;
    animation: fade 10s;
    -moz-animation: fade 10s; /* Firefox */
    -webkit-animation: fade 10s; /* Safari and Chrome */
    -o-animation: fade 10s; /* Opera */
}
.buttonh {
    position: relative;
    top: 500px;
    left: -675px;
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
.buttonh:hover {
    background-color: #ff4e0f;
}
.buttonb {
    position: relative;
    top: -200px;
    left: 675px;
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
.buttonb:hover {
    background-color: #ff4e0f;
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
