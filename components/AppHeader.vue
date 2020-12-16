<template lang="html">
  <div data-app>
      //*** app-bar ***//
      <v-app-bar app class="overflow-hidden" color="#fff" elevate-on-scroll scroll-target="#main-carousel">

        <img src="~/assets/img/logo.png" />

        <div class="header-links">

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
        </div>

        <v-spacer  v-show="!isSmallDevice"></v-spacer>

        <v-btn v-show="!isSmallDevice" icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <CartDialog v-show="!isSmallDevice"/>
        <!--
        <v-btn v-show="!isSmallDevice" depressed dark rounded color="#9F78FF">
          <v-icon class="pr-2">mdi-shopping</v-icon>
          <p>{{ chartCount }}</p>
        </v-btn>
      -->
        <v-app-bar-nav-icon class="float-right" v-show="isSmallDevice" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      </v-app-bar>
      //*** navigation-drawer ***//
      <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
      >
        <v-list
        nav
        dense
        >
          <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
          >
            <v-list-item>
              <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
            </v-list-item>

            <v-list-item>
              <!--<v-btn depressed dark rounded color="#9F78FF">
                <v-icon class="pr-2">mdi-shopping</v-icon>
                <p>{{ chartCount }}</p>
              </v-btn>
            -->
              <CartDialog />
            </v-list-item>

            <v-list-item to="/">
              <v-list-item-title>home</v-list-item-title>
            </v-list-item>

            <v-list-item to="/shop">
              <v-list-item-title>shop</v-list-item-title>
            </v-list-item>

            <v-list-item to="/about">
              <v-list-item-title>about</v-list-item-title>
            </v-list-item>

            <v-list-item to="/contact">
              <v-list-item-title>contact</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      //*** dialog ***//

  </div>
</template>

<script>
export default {
  data: () => ({
    linkTitles: ['home', 'shop', 'about', 'contact'],
    linkHrefs: ['/','/shop','/about','/contact'],
    isSmallDevice: false,
    drawer: false,
    group: null
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
.overflow-hidden {
  width: 100vw;
  overflow: hidden;
}
.float-right {
  position: absolute;
  right: 5px;
}
.header-links {
  width:fit-content;
  height:fit-content;
  margin-left: 32px;
}
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
