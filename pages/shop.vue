<template lang="html">
  <div>
    <div v-for="(item, index) in typeNames" :key="index">
      <div class="absolute-spacing"></div>
      <GoodsList :typeName="item" :title="titles[index]" />
    </div>
    <!--
    <div class="absolute-spacing"></div>
    <GoodsList typeName='new-arrive' title=''/>

    <div class="absolute-spacing"></div>
    <GoodsList typeName='type-cosmetic'/>

    <div class="absolute-spacing"></div>
    <GoodsList typeName='type-lipstick'/>

    <div class="absolute-spacing"></div>
    <GoodsList typeName='type-perfume'/>

    <div class="absolute-spacing"></div>
    <GoodsList typeName='type-accessories'/>
  -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      typeNames: ['new-arrive', 'type-cosmetic', 'type-lipstick', 'type-perfume', 'type-accessories'],
      titles: ['new arrive', 'cosmetic', 'lipstick', 'perfume', 'accessories']
    }
  }
}
</script>

<style lang="css" scoped>
.absolute-spacing {
  width: 100vw;
  height:64px;
}
</style>
