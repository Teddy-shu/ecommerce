<template>
  <div>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
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
          Use Google's location service?
        </v-card-title>
        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Disagree
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  data () {
     return {
       dialog: false,
     }
  },
  computed: {
    ...mapGetters([
      'getCartCounter'
    ])
  }
}
</script>

<style lang="css" scoped>
.row {
  flex: auto !important;
}
</style>
