<template>
  <div id="app">
    <section class="pen">
<div class="panel top">
  <img src="./assets/met.svg" alt="" class="logo-met">

  <img src="./assets/brand.png" alt="" class="logo-principal">

<div class="cube-wrapper">
  <div class="cube-folding">
    <span class="leaf1"></span>
    <span class="leaf2"></span>
    <span class="leaf3"></span>
    <span class="leaf4"></span>
  </div>
  <span class="loading" data-name="Loading">En Construcción</span>
</div>
</div>
  <img src="./assets/imagen_fondo.png" alt="" style="margin-top: -24px">
<!-- <youtube class="embed-container" :video-id="'zIfCcxeR-XA'"></youtube> -->
<modal name="hello-world" height="auto" :adaptive="true" :before-close="stop">
   <div slot="top-right">
      <button @click="$modal.hide('foo')">
        ❌
      </button>
    </div>
 <youtube class="embed-container" :video-id="'zIfCcxeR-XA'" @ready="ready" @playing="playing" :player-vars="{autoplay: 1}"></youtube>
</modal>
  <a class="button is-danger is-large is-rounded" style="width:100%" @click="show">  Mirá nuestro video promocional!  </a>

</section>
  </div>
</template>

<script>


export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
  

  },
  props: {
    
  },
methods: {
  ready (player) {
      this.player = player
    },
    playing (player) {
      // The player is playing a video.
    },
    change () {
      // when you change the value, the player will also change.
      // If you would like to change `playerVars`, please change it before you change `videoId`.
      // If `playerVars.autoplay` is 1, `loadVideoById` will be called.
      // If `playerVars.autoplay` is 0, `cueVideoById` will be called.
      this.videoId = 'another video id'
    },
    stop () {
      this.player.stopVideo()
    },
    pause () {
      this.player.pauseVideo()
    },
  show () {
    this.$modal.show('hello-world');
  },
  hide () {
    this.$modal.hide('hello-world');
  }
},
    created(){
      // this.start()
    }


}
</script>
<style lang="scss">
  @import '~bulma/bulma.sass'
  // @import './scss/devices.min.css'

</style>
<style lang="scss">
  // @import '~bulma/bulma.sass'
  @import './scss/devices.min.css'

</style>
<style lang="css">
.cube-folding {
  width: 50px;
  height: 50px;
  display: inline-block;
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  font-size: 0;
}
.cube-folding span {
  position: relative;
  width: 25px;
  height: 25px;
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  display: inline-block;
}
.cube-folding span::before {
  content: '';
  background-color: white;
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 25px;
  height: 25px;
  -moz-transform-origin: 100% 100%;
  -ms-transform-origin: 100% 100%;
  -webkit-transform-origin: 100% 100%;
  transform-origin: 100% 100%;
  -moz-animation: folding 2.5s infinite linear both;
  -webkit-animation: folding 2.5s infinite linear both;
  animation: folding 2.5s infinite linear both;
}
.cube-folding .leaf2 {
  -moz-transform: rotateZ(90deg) scale(1.1);
  -ms-transform: rotateZ(90deg) scale(1.1);
  -webkit-transform: rotateZ(90deg) scale(1.1);
  transform: rotateZ(90deg) scale(1.1);
}
.cube-folding .leaf2::before {
  -moz-animation-delay: 0.3s;
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
  background-color: #f2f2f2;
}
.cube-folding .leaf3 {
  -moz-transform: rotateZ(270deg) scale(1.1);
  -ms-transform: rotateZ(270deg) scale(1.1);
  -webkit-transform: rotateZ(270deg) scale(1.1);
  transform: rotateZ(270deg) scale(1.1);
}
.cube-folding .leaf3::before {
  -moz-animation-delay: 0.9s;
  -webkit-animation-delay: 0.9s;
  animation-delay: 0.9s;
  background-color: #f2f2f2;
}
.cube-folding .leaf4 {
  -moz-transform: rotateZ(180deg) scale(1.1);
  -ms-transform: rotateZ(180deg) scale(1.1);
  -webkit-transform: rotateZ(180deg) scale(1.1);
  transform: rotateZ(180deg) scale(1.1);
}
.cube-folding .leaf4::before {
  -moz-animation-delay: 0.6s;
  -webkit-animation-delay: 0.6s;
  animation-delay: 0.6s;
  background-color: #e6e6e6;
}

@-moz-keyframes folding {
  0%, 10% {
    -moz-transform: perspective(140px) rotateX(-180deg);
    transform: perspective(140px) rotateX(-180deg);
    opacity: 0;
  }
  25%, 75% {
    -moz-transform: perspective(140px) rotateX(0deg);
    transform: perspective(140px) rotateX(0deg);
    opacity: 1;
  }
  90%, 100% {
    -moz-transform: perspective(140px) rotateY(180deg);
    transform: perspective(140px) rotateY(180deg);
    opacity: 0;
  }
}
@-webkit-keyframes folding {
  0%, 10% {
    -webkit-transform: perspective(140px) rotateX(-180deg);
    transform: perspective(140px) rotateX(-180deg);
    opacity: 0;
  }
  25%, 75% {
    -webkit-transform: perspective(140px) rotateX(0deg);
    transform: perspective(140px) rotateX(0deg);
    opacity: 1;
  }
  90%, 100% {
    -webkit-transform: perspective(140px) rotateY(180deg);
    transform: perspective(140px) rotateY(180deg);
    opacity: 0;
  }
}
@keyframes folding {
  0%, 10% {
    -moz-transform: perspective(140px) rotateX(-180deg);
    -ms-transform: perspective(140px) rotateX(-180deg);
    -webkit-transform: perspective(140px) rotateX(-180deg);
    transform: perspective(140px) rotateX(-180deg);
    opacity: 0;
  }
  25%, 75% {
    -moz-transform: perspective(140px) rotateX(0deg);
    -ms-transform: perspective(140px) rotateX(0deg);
    -webkit-transform: perspective(140px) rotateX(0deg);
    transform: perspective(140px) rotateX(0deg);
    opacity: 1;
  }
  90%, 100% {
    -moz-transform: perspective(140px) rotateY(180deg);
    -ms-transform: perspective(140px) rotateY(180deg);
    -webkit-transform: perspective(140px) rotateY(180deg);
    transform: perspective(140px) rotateY(180deg);
    opacity: 0;
  }
}
.cube-wrapper {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -130px;
  margin-left: -50px;
  width: 120px;
  height: 100px;
  text-align: center;
}
.cube-wrapper:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -20px;
  margin: auto;
  width: 90px;
  height: 6px;
  background-color: rgba(0, 0, 0, 0.1);
  -webkit-filter: blur(2px);
  filter: blur(2px);
  -moz-border-radius: 100%;
  -webkit-border-radius: 100%;
  border-radius: 100%;
  z-index: 1;
  -moz-animation: shadow 0.5s ease infinite alternate;
  -webkit-animation: shadow 0.5s ease infinite alternate;
  animation: shadow 0.5s ease infinite alternate;
}
.cube-wrapper .loading {
  font-size: 12px;
  letter-spacing: 0.1em;
  display: block;
  color: white;
  position: relative;
  top: 25px;
  z-index: 2;
  -moz-animation: text 0.5s ease infinite alternate;
  -webkit-animation: text 0.5s ease infinite alternate;
  animation: text 0.5s ease infinite alternate;
}

@-moz-keyframes text {
  100% {
    top: 35px;
  }
}
@-webkit-keyframes text {
  100% {
    top: 35px;
  }
}
@keyframes text {
  100% {
    top: 35px;
  }
}
@-moz-keyframes shadow {
  100% {
    bottom: -18px;
    width: 100px;
  }
}
@-webkit-keyframes shadow {
  100% {
    bottom: -18px;
    width: 100px;
  }
}
@keyframes shadow {
  100% {
    bottom: -18px;
    width: 100px;
  }
}
html, body {
  min-height: 100%;
}

body {
  background: #00c6ff;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #00c6ff, #0072ff);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #00c6ff, #0072ff);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  font-family: arial;
}

h1 {
  font-size: 26px;
  display: block;
  text-align: center;
  color: #fff;
  padding: 50px 20px;
  font-weight: 300;
  font-family: 'Archivo Narrow', sans-serif;
}

.made-with-love {
  position: fixed;
  left: 0;
  width: 100%;
  bottom: 10px;
  text-align: center;
  font-size: 10px;
  z-index: 9999;
  font-family: arial;
  color: #fff;
}
.made-with-love i {
  font-style: normal;
  color: #F50057;
  font-size: 14px;
  position: relative;
  top: 2px;
}
.made-with-love a {
  color: #fff;
  text-decoration: none;
}
.made-with-love a:hover {
  text-decoration: underline;
}

*, *:before, *:after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

.logo-principal{
  margin: 0 auto;
  text-align: center;
  display: block;
  margin-top: -20px;
}
.logo-met{
  width: 20vw;
  display: block;
  margin-top: -40px;

}
@-webkit-keyframes scrollBad {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 5020px;
  }
}
@keyframes scrollBad {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 5020px;
  }
}
@-webkit-keyframes scrollGood {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 5020px, 0);
            transform: translate3d(0, 5020px, 0);
  }
}
@keyframes scrollGood {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 5020px, 0);
            transform: translate3d(0, 5020px, 0);
  }
}
.pen {
  /*background-color: blue;*/
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
}

.panel {
  padding: 3rem;
  height: 50%;
}

.top {
  background-color: #05ADD2;
  background-image: url(assets/chispas.png);
  background-position: center center;
  background-size: contain;
  -webkit-animation: scrollBad 65s linear infinite;
  animation: scrollBad 65s linear infinite;
}



#app{
  /*padding:40px;*/
}
.embed-container { position: relative; padding-bottom: 56.25%; height: 570px; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 570px }

body, html {
  /*background: rgba(189,61,153,1);*/


}
.head-azul{
  width: 100%;
  background-size: cover;
  background-image: url('assets/chispas.svg');
  /*background-color: #05ADD2;*/
 -webkit-filter: sepia(1);
    filter: sepia(1);
  height: 500px;
}

.yala-intro{
      text-align: center;
    padding: 20px;
    font-size: 30px;
    line-height: 1.2;
    font-weight: 300;
}
.bg-yala{
  background: rgba(173,59,141,1);
background: -moz-linear-gradient(left, rgba(173,59,141,1) 0%, rgba(166,45,132,1) 41%, rgba(134,23,102,1) 100%);
background: -webkit-gradient(left top, right top, color-stop(0%, rgba(173,59,141,1)), color-stop(41%, rgba(166,45,132,1)), color-stop(100%, rgba(134,23,102,1)));
background: -webkit-linear-gradient(left, rgba(173,59,141,1) 0%, rgba(166,45,132,1) 41%, rgba(134,23,102,1) 100%);
background: -o-linear-gradient(left, rgba(173,59,141,1) 0%, rgba(166,45,132,1) 41%, rgba(134,23,102,1) 100%);
background: -ms-linear-gradient(left, rgba(173,59,141,1) 0%, rgba(166,45,132,1) 41%, rgba(134,23,102,1) 100%);
background: linear-gradient(to right, rgba(173,59,141,1) 0%, rgba(166,45,132,1) 41%, rgba(134,23,102,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ad3b8d', endColorstr='#861766', GradientType=1 );
}

.vue-typer .custom.char.typed {
  color: white;
}
.vue-typer .custom.char.selected {
  color: #333;
}

.vue-typer .custom.caret {
  animation: rocking 1s ease-in-out 0s infinite;
}
.vue-typer .custom.caret.typing {
  background-color: #A2D136;
}
.vue-typer .custom.caret.selecting {
  display: inline-block;
  background-color: #A2D136;
}

.vue-typer .custom.char.selected {
  background-color: #A2D136;
}
@media screen and (max-width: 1024px){
  #mobile-is{
    display: block;

  }
  #dest-is{
    display: none;
  }
}
@media screen and (min-width: 1024px){
  #mobile-is{
    display: none;
  }
  #dest-is{
    display: block;
  }
}
</style>



