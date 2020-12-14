<template>
  <div >
    <div id="main-carousel" class="absolute-spacing"></div>
    <v-card tile width="90vw" class="justify-center">
      <v-carousel :show-arrows="false"
      width="90vw"
      height="fit-content"
      cycle
      >
       <v-carousel-item
        width="100%"
        min-width="600px"
        min-height="800px"

        v-for="(item,i) in carouselItems"
        :key="i"
        :src="item"
       >
       <!--<img :src="item"   class="carousel-img" />-->
     </v-carousel-item>
     </v-carousel>
     <div class="text-zone">
       <h1>fashion</h1>
       <h1>changing</h1>
       <h1>always</h1>
       <v-btn to="/shop" depressed dark x-large color="#9F78FF" class="rounded-pill">
         <p>Shop Now</p>
       </v-btn>
     </div>
    </v-card>

    <div class="absolute-spacing"></div>

    <CategoryCards />
    <GoodsList typeName='new-arrive' title="new arrive"/>
    <!--
    <div class="title-zone">
      <h1>new</h1>
      <h1>arrival</h1>
    </div>

    <v-row>
      <v-col cols="auto" class="center-card" v-for="(goods,index) in goodsData" :key="index">
        <Goods :goodsDataPayload="goods" :imgSrc=" '/goods/' + goods.id + '.png' "/>
      </v-col>
    </v-row>
    -->
    <div class="about-zone">
      <h1 class="text-uppercase">collection houses <br /> our first-ever</h1>
      <v-btn to="/about" depressed dark x-large color="#9F78FF" class="rounded-pill">
        <p>About Us</p>
      </v-btn>
    </div>

    <ConsumptionPolicy />

  </div>
</template>

<script>
export default {
  data: () => ({
    carouselItems: [
      '/img/arnel-hasanovic-Nl-SXO4FAHw-unsplash.jpg',
      '/img/annie-spratt-CQ2YvMAN7zE-unsplash.jpg',
      '/img/erin-east-14YmL-R6MCc-unsplash.jpg'
    ],
    extend: 12
  }),
  /*
  async asyncData({ $axios }) {
    const goodsData = await $axios.$get('/m/newArrive')
    return { goodsData }
  },
  */
  mounted() {
    this.onResize()

    window.addEventListener('resize', this.onResize, {passive: true})
  },

  methods: {
    onResize() {
      var breakpointWidth = window.innerWidth

      if (breakpointWidth  > 1264) {
        this.extend = 3
      }
      if (breakpointWidth < 1264 && breakpointWidth > 600) {
        this.extend = 6
      }
      if (breakpointWidth < 600) {
        this.extend = 12
      }
    }
  }
}
</script>

<style>
.absolute-spacing {
  width: 100vw;
  height:64px;
}
.justify-center {
  margin: 0 auto;
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
.title-zone {
  width: 100vw;
  height: fit-content;
  text-align: center;
}
.title-zone h1 {
  line-height: 0.8;
  font-size: 70px;
  font-weight: 600;
  font-family: "Cinzel",serif;
  color: #140C40;
  text-transform: uppercase;
  margin: 5vh 0;
}
.about-zone {
  width:90vw;
  height:60vh;
  margin: 10vh auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  background: url('/img/maxeylash-JNuPhasKGbU-unsplash.jpg');
}
.about-zone h1 {
  line-height: 1.5;
  font-size: 8vh;
  font-weight: 300;
  font-family: "Cinzel",serif;
  color: white;
  text-transform: uppercase;
  margin-bottom: 1rem;
}
/*
.center-card {
  margin: auto auto;
}
*/
</style>
