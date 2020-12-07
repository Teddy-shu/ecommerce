<template>
  <div class="container">
    <div class="absolute-spacing"></div>
    <v-card>
      <v-carousel :show-arrows="false"
      width="90vww"
      height="fit-content"
      cycle
      >
       <v-carousel-item
        width="90vww"
        height=""
        v-for="(item,i) in carouselItems"
        :key="i"
       >
       <img :src="item" class="carousel-img" />
     </v-carousel-item>
     </v-carousel>
     <div class="text-zone">
       <h1>fashion</h1>
       <h1>changing</h1>
       <h1>always</h1>
       <v-btn depressed dark x-large color="#9F78FF" class="rounded-pill">
         <p>Shop Now</p>
       </v-btn>
     </div>
    </v-card>

  </div>
</template>

<script>
export default {
  data: () => ({
    carouselItems: [
      '/img/arnel-hasanovic-Nl-SXO4FAHw-unsplash.jpg',
      '/img/annie-spratt-CQ2YvMAN7zE-unsplash.jpg',
      '/img/erin-east-14YmL-R6MCc-unsplash.jpg'
    ]
  })
}
</script>

<style>
.absolute-spacing {
  width: 100vw;
  height:64px;
}
.carousel-img {
  max-width:100%;
  height:auto;
}
.text-zone {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  max-width: 50vw;
  max-height: 50vh;
}
.text-zone h1 {
  font-size: 8vw;
  font-weight: 700;
  color: rgba(255,255,255,0.87);
  line-height: 8vw;
  margin-bottom: calc(8vw / 10);
  font-family: "Cinzel",serif;
  text-transform: uppercase;
}
.text-zone p {
  font-size: 1.25rem;
  line-height: 1.25rem;
}

</style>
