<template lang="html">
  <div>
    <div class="title-zone">
      <h1>{{ this.title }}</h1>
      <!--
      <h1>new</h1>
      <h1>arrival</h1>
    -->
    </div>

    <v-row>
      <v-col cols="auto" class="center-card" v-for="(goods,index) in goodsData" :key="index">
        <Goods :goodsDataPayload="goods" :imgSrc=" '/goods/' + goods.id + '.png' "/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsData: []
    }
  },
  props: {
    title: String,
    isAll: Boolean
  },
  async created() {
    try {
      var path = this.getLinkPath()
      const res = await this.$axios.$get(path)
      if(res.length > 0)
        this.goodsData = res
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    getLinkPath: function() {
      var link
      switch (this.title) {
        case 'new arrive':
          link = '/m/newArrive'
          break;
        case 'cosmetic':
          link = '/m/productsFromType?type=cosmetic'
          break;
        case 'lipstick':
          link = '/m/productsFromType?type=lipstick'
          break;
        case 'perfume':
          link = '/m/productsFromType?type=perfume'
          break;
        case 'accessories':
          link = '/m/productsFromType?type=accessories'
          break;
        default:
          link = '/m/newArrive'
          break;
      }

      if(!this.isAll && link !== '/m/newArrive') {
        link = link + '&quantity=8'
      }
      return link
    }
  }
}
</script>

<style lang="css" scoped>
.center-card {
  margin: auto auto;
}
</style>
