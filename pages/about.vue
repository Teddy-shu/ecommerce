<template lang="html">
<div>
  <div class="absolute-spacing"></div>
  <div class="about-flex">
    <div class="title-zone relative">
      <h1>Our Story</h1>
    </div>
    <div class="about-text-zone">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>
    <div class="img-zone img-1">
      <div id="bg"></div>
    </div>

    <div class="title-zone relative">
      <h1>Journey start from</h1>
    </div>
    <div class="about-text-zone">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>
    <div class="img-zone img-2">
      <div id="bg"></div>
    </div>

    <div class="title-zone relative">
      <h1>2020</h1>
    </div>
    <div class="about-text-zone">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>

  </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.relative {
  position: relative !important;
}
.about-flex {
  position: relative;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
}
.about-text-zone {
  position: relative;
  width: 100vw !important;
  padding: 0 10%;
  text-align: center;
}
.about-text-zone p {
  font-size: 20px;
  line-height: 1.7;
  color: #646D77;
}
.img-zone{
  position: relative;
  width: 90vw;
  height: 500px;
  overflow: hidden;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
}
.img-1 {
  background-image: url('/img/candice-picard-1dwRuFgDr0o-unsplash.jpg');
  background-repeat: no-repeat;
  background-position: center;
}
.img-2 {
  background-image: url('/img/kevin-laminto-LL1vA5sUs6g-unsplash.jpg');
  background-repeat: no-repeat;
  background-position: center;
}
.img-zone img{
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: auto;
  min-height:300px;
  /*object-fit: cover;*/
}
.img-zone #bg{
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fff url('/img/Group 9.svg');
  background-repeat: no-repeat;
  background-position: center;
  /*background-size: 1000px;*/
  mix-blend-mode: screen;
}
</style>
