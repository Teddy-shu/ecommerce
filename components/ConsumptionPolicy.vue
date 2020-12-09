<template lang="html">
  <div class="bg-gray">
    <v-row
    width="100vw"
    min-height="50vh"
    background="#f8f9fa"
    >
    <v-col :cols="extend" v-for="(data, index) in cardsData" :key="index">
      <v-icon size="60" color="#212529">{{ data.iconName }}</v-icon>
      <h3>{{ data.title }}</h3>
      <h4>{{ data.content }}</h4>
    </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'ConsumptionPolicy',
  data: () => ({
    cardsData: [
      {
        iconName: 'mdi-truck-fast-outline',
        title: 'Delivery your goods in 24 Hr',
        content: 'Fast & Free Delivery'
      },
      {
        iconName: 'mdi-credit-card-check-outline',
        title: 'Delivery your goods in 24 Hr',
        content: 'Fast & Free Delivery'
      },
      {
        iconName: 'mdi-store-outline',
        title: 'Delivery your goods in 24 Hr',
        content: 'Fast & Free Delivery'
      },
      {
        iconName: 'mdi-earth',
        title: 'Delivery your goods in 24 Hr',
        content: 'Fast & Free Delivery'
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
.bg-gray {
  width: fit-content;
  height: fit-content;
  background: #f8f9fa;
  padding: 50px;
  margin: auto;
}
.bg-gray h3 {
  line-height: 3rem;
}
.bg-gray h4 {
  color: gray;
}
</style>
