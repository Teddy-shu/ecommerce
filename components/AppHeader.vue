<template lang="html">
  <div>
      <v-app-bar app color="#fff" elevate-on-scroll scroll-target="#main-carousel">

        <img src="~/assets/img/logo.png" class="my-mr" />

        <v-hover v-show="!isSmallDevice" v-slot="{ hover } " v-for="(link, index) in linkTitles" :key="index">
          <nuxt-link :to="linkHrefs[index]">
            <v-btn text
            class="text-uppercase"
            :color="hover ? '#6f42c1' : 'black'"
            >
              {{ link }}
            </v-btn>
          </nuxt-link>
        </v-hover>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn depressed dark rounded color="#9F78FF">
          <v-icon class="pr-2">mdi-shopping</v-icon>
          <p>{{ chartCount }}</p>
        </v-btn>

        <v-app-bar-nav-icon v-show="isSmallDevice"></v-app-bar-nav-icon>

      </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    linkTitles: ['home', 'shop', 'about', 'contact'],
    linkHrefs: ['/','/shop','/about','/contact'],
    chartCount: 0,
    isSmallDevice: false
  }),
  mounted() {
    this.onResize()

    window.addEventListener('resize', this.onResize, {passive: true})
  },

  methods: {
    onResize() {
      var breakpointWidth = window.innerWidth

      if (breakpointWidth  > 900) {
        this.isSmallDevice = false
      } else {
        this.isSmallDevice = true
      }
    }
  }
}
</script>

<style lang="css" scoped>
.v-btn::before {
  background-color: transparent;
}
.my-mr {
  margin-right: 32px;
}
.pr-2 {
  padding-right: 4px;
}
</style>
