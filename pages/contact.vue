<template lang="html">
<div>
  <div class="absolute-spacing"></div>
  <div class="full-screen">
    <div class="contact-card">
      <img src="/img/head.jpg"/>
      <h1>Teddy SHU</h1>
      <h2>Mail : wne333wne@gmail.com</h2>
      <a href="https://github.com/Teddy-shu"><h2>github</h2></a>
    </div>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.full-screen {
  width:100vw;
  height: calc(100vh - 64px);
  background: url('/img/about-bg.jpg');
  background-position: center;
  background-size: cover;
  margin-bottom: -10vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.contact-card {
  position: relative;
  width:50vw;
  min-width: 350px;
  height:80%;
  box-shadow: 0 15px 35px rgba(0,0,0,0.5);
  border-radius: 15px;
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.contact-card img {
  width:100px;
  height:100px;
  border-radius: 50%;
}
.contact-card h1 {
  margin-bottom: 20px;
}
.contact-card a {
  text-decoration: underline;
  text-decoration-color: #A65E2F;
}
.contact-card h2 {
  line-height: 2rem;
  color: #FFD800;
}
</style>
