<template>
    <div id="aboutme">
    <h2 id="who">Who On Earth is <span class="name">Adam Dad</span>?</h2>
    <div id="square"></div>
    <sunburst :data="data">

  <!-- Add behaviors -->
        <template slot-scope="{ nodes, actions }">
            <highlightOnHover :nodes="nodes" :actions="actions" />
            <zoomOnClick :nodes="nodes" :actions="actions" />
        </template>

  <!-- Add information to be displayed on top the graph -->
        <nodeInfoDisplayer slot="top" slot-scope="{ nodes }" :current="nodes.mouseOver" :root="nodes.root" description="of visits begin with this sequence of pages" />

  <!-- Add bottom legend -->
        <breadcrumbTrail slot="legend" slot-scope="{ nodes, colorGetter, width }" :current="nodes.mouseOver" :root="nodes.root" :colorGetter="colorGetter" :from="nodes.clicked" :width="width" />

    </sunburst>
    <img id="avatar" src="../assets/avatar.png" alt="Just Me">
    <a href="/experience" style="text-decoration: none"><span class="buttonh" role="button">
            <img src="../assets/launch.png" style="width: 32px"/>
    </span></a>
    </div>
</template>

<script>
import {
  breadcrumbTrail,
  highlightOnHover,
  nodeInfoDisplayer,
  sunburst,
  zoomOnClick
} from 'vue-d3-sunburst';
import "vue-d3-sunburst/dist/vue-d3-sunburst.css";

export default {
    name: "AboutMe",
    components: {
    breadcrumbTrail,
    highlightOnHover,
    nodeInfoDisplayer,
    sunburst,
    zoomOnClick
  },
  data() {
    return {
      tree:  {
      "name": "flare",
        "children": [
          {
            "name": "analytics",
            "children": [
              {
                "name": "cluster",
                "children": [
                  { "name": "AgglomerativeCluster", "size": 3938 },
                  { "name": "CommunityStructure", "size": 3812 },
                  { "name": "HierarchicalCluster", "size": 6714 },
                  { "name": "MergeEdge", "size": 743 }
                ]
              },
              {
                "name": "graph",
                "children": [
                  { "name": "BetweennessCentrality", "size": 3534 },
                  { "name": "LinkDistance", "size": 5731 },
                  { "name": "MaxFlowMinCut", "size": 7840 },
                  { "name": "ShortestPaths", "size": 5914 },
                  { "name": "SpanningTree", "size": 3416 }
                ]
              },
              {
                "name": "optimization",
                "children": [
                  { "name": "AspectRatioBanker", "size": 7074 }
                ]
              }
            ]
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
#square {
    display: inline-block;
    position: absolute;
    background-color: #000000;
    opacity: 0.2;
    top: 0px;
    left: 0px;
    padding: 500px 1000px 100vw;
    transition: ease-in 4s;
    z-index: -1;
}
#who {
    animation: fade 2s;
    -moz-animation: fade 2s; /* Firefox */
    -webkit-animation: fade 2s; /* Safari and Chrome */
    -o-animation: fade 2s; /* Opera */
    font-family: 'Merriweather', serif;
    position: absolute;
    top: 10vw;
    left: 5vw;
    max-width:80vw;
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
    font-size: 18px;
    top: 200px;
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
