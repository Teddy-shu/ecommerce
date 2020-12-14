<template lang="html">
  <div>
    <div class="absolute-spacing"></div>
    <v-row width="100%" min-height="500">
      <v-col>
        <v-img :src="'/goods/' + productData._id + '.png'" max-width="600px" height="auto"></v-img>
      </v-col>
      <v-col md="6">
        <p>{{ productData.name }}</p>
        <p>{{ productData.describe }}</p>
        <p>{{ '$ ' + productData.price }}</p>
        <form id="addToChart" @submit.prevent="checkForm">
          <label>數量</label>
          <select class="border" name="amount" id="amount" v-model="selected">
            <option label="Please select one" disabled value="">Please select one</option>
            <option :label="i" v-for="i in maxAmount" v-bind:value="i">
              {{ i }}
            </option>
          </select>
          <input  type="submit" value="加入購物車" class="border">
        </form>
        <v-alert
          color="#C51162"
          dark
          type="warning"
          v-if="formError"
        >
          please select one
        </v-alert>
      </v-col>
    </v-row>
    <div v-if="dataError">
      Somthing wrong with our web.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productData: {},
      dataError: false,
      formError: false,
      maxAmount: 10,
      selected: 0,
    }
  },
  async created() {
    try {
      const res = await this.$axios.$get(`/m/product?id=${this.$route.params.id}`)
      if(res.length > 0)
        this.productData = res[0]
      else
        dataError = true
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    checkForm: function() {
      if(this.selected) {
        this.formError = false
        console.log(this.selected)
      } else {
        this.formError = true
      }
    }
  }
}
</script>

<style lang="css" scoped>
.absolute-spacing {
  width: 100vw;
  height:64px;
}
.border {
  border: 1px solid black;
}
input[type=submit] {
  padding:5px 10px;
  background-color: #A598EB;
  color: white;
}
input[type=submit]:hover {
  background-color: #4D35D4;
}
</style>
