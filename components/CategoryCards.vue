<template lang="html">
  <v-container fluid>
    <v-row>
      <v-col :cols="extend" v-for="(Category, index) in CategoryData" :key="index">
        <v-hover v-slot="{ hover }">
        <v-card tile flat elevation="0" class="pa-0" height="fit-content">
          <img tile :src="Category.imgSrc" width="100%" height="auto"/>

              <div class="card-title" v-show="hover">
                {{ Category.title }}
              </div>
              <v-btn v-show="hover" depressed dark x-large color="#9F78FF" class="rounded-pill center-card-btn">
                <p>Shop Now</p>
              </v-btn>

        </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'CategoryCards',
  data: () => ({
    CategoryData: [{
        imgSrc: '/img/category-cosmetic.jpg',
        title: 'cosmetic'
      },
      {
        imgSrc: '/img/category-lipstick.jpg',
        title: 'lipstick'
      },
      {
        imgSrc: '/img/category-perfume.jpg',
        title: 'perfume'
      },
      {
        imgSrc: '/img/category-accessories.jpg',
        title: 'accessories'
      }
    ],
    extend: 12
  }),
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

<style lang="css" scoped>
.card-title {
  position: absolute;
  bottom: 4px;
  background: rgba(0,0,0,0.5);
  width: 100%;
  height: fit-content;
  line-height: 4rem;
  text-align: center;
  font-size: 2rem;
  color: white;
  text-transform: capitalize;
}
.center-card-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>
