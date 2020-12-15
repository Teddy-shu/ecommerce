<template lang="html">
  <div>
    <div class="absolute-spacing"></div>
    <GoodsList :isAll="isAll" :title="this.$route.query.type" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsData: [],
      isAll: false
    }
  },
  created() {
    var text = '';
    //console.log(this.$route.query.type)
    text = this.$route.query.type

    if(text !== 'cosmetic' && text !== 'lipstick' && text !== 'perfume' && text !== 'accessories'){
      this.$router.push('/shop')
    } else {
      this.isAll = true
    }
  }
}
</script>

<style lang="css" scoped>
</style>
