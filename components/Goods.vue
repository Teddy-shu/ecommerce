<template lang="html">
  <v-card max-width="250">

    <v-btn @click="prepareMutateCounter(setCookieData())" small absolute right fab><v-icon color="gray">mdi-cart-plus</v-icon></v-btn>

    <v-img
      :src="imgSrc"
      height="200px">
    </v-img>

    <v-card-title class="justify-center text-big border-top">
      <nuxt-link :to="'products/' + goodsData.id">
        {{ goodsData.name }}
      </nuxt-link>
    </v-card-title>

    <v-card-subtitle class="justify-center text-md">
      {{ '$ ' + goodsData.price }}
    </v-card-subtitle>

  </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Goods',
  props: {
    goodsDataPayload: Object,
    imgSrc: String
  },
  data: function () {
    return {
      goodsData: this.goodsDataPayload
    }
  },
  methods: {
    ...mapActions([
      'prepareMutateCounter'
    ]),
    setCookieData: function() {
      var rawData = {...this.goodsData}
      rawData.quantity = 1
      return {...rawData}
    }
  }
}
</script>

<style lang="css" scoped>
.justify-center {
  justify-content: center;
  text-align: center;
}
a {
  text-decoration: none;
  color: #343a40;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  transition: 0.5s;
}
a:hover {
  text-decoration: underline;
}
.text-big {
  font-size: 1.5rem;
}
.text-md {
  font-size: 1rem;
}
.border-top {
  border-top: 1px solid rgba(0,0,0,0.2);
  padding-top: 30px;
}
</style>
