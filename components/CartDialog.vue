<template>
  <div >
    <v-dialog
      v-model="dialog"
      persistent
      scrollable
      max-width="350"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn depressed dark rounded color="#9F78FF"
        v-bind="attrs"
        v-on="on"
        >
          <v-icon class="pr-2">mdi-shopping</v-icon>
          <p>{{ getCartCounter }}</p>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">
          購物車
        </v-card-title>

        <CartDialogItem v-for="(item, index) in getCartList" :key="index"
          :itemData="item"
        />

        <v-card-actions>
          <P>
            {{ '共 $ ' +  getTotal }}
          </P>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
     return {
       dialog: false,
     }
  },
  computed: {
    ...mapGetters([
      'getCartCounter',
      'getCartList',
      'getTotal'
    ])
  },
  methods: {
    ...mapActions([
      'prepareMutateCounter'
    ]),
  }
}
</script>

<style lang="css" scoped>
.row {
  flex: auto !important;
}
/*
.v-overlay, .v-dialog {
  display: fixed !important;
  position: absolute !important;
}
*/
</style>
