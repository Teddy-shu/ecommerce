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
    typeName: String,
    title: String
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
      switch (this.typeName) {
        case 'new-arrive':
          return '/m/newArrive'
        case 'type-cosmetic':
          return '/m/productsFromType?type=cosmetic&quantity=8'
        case 'type-lipstick':
          return '/m/productsFromType?type=lipstick&quantity=8'
        case 'type-perfume':
          return '/m/productsFromType?type=perfume&quantity=8'
        case 'type-accessories':
          return '/m/productsFromType?type=accessories&quantity=8'
        default:
          return '/m/newArrive'
      }
    }
  }
}
</script>

<style lang="css" scoped>
.center-card {
  margin: auto auto;
}
</style>
