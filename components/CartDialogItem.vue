<template lang="html">
<div>
  <v-row>
    <v-col>
      <v-btn icon @click="DeleteItemInCart(itemData.id)"><v-icon>mdi-close-circle</v-icon></v-btn>
    </v-col>
    <v-col> {{ itemData.name }} </v-col>
    <v-col> {{ selected + '件' }} </v-col>
    <v-col> {{ itemData.price + '/件' }} </v-col>
    <v-col>
      <v-select
         :items="options"
         v-model="selected"
         v-on:change="quantityChangeHandler"
       ></v-select>
    </v-col>
  </v-row>
</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: function() {
    return {
      selected: 0,
      options: [1,2,3,4,5,6,7,8,9,10]
    }
  },
  props: {
    itemData: Object
  },
  methods: {
    ...mapActions([
      'prepareMutateCounter',
      'DeleteItemInCart'
    ]),
    quantityChangeHandler() {
      var newData = {...this.itemData}
      newData.quantity = this.selected
      this.prepareMutateCounter({...newData})
    }
  },
  created() {
    this.selected = this.itemData.quantity
  }
}
</script>

<style lang="css" scoped>
</style>
