<template lang="html">
  <div>
    <v-card class="overflow-hidden">
      <v-app-bar absolute color="#fff" elevate-on-scroll scroll-target="#scrolling-techniques-7">
        <!--
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Title</v-toolbar-title>
        -->
        <img src="~/assets/img/logo.png" class="my-mr" />

        <v-hover v-slot="{ hover } " v-for="(link, index) in linkTitles" :key="index">
          <v-btn text
           class="text-uppercase"
           :color="hover ? '#6f42c1' : 'black'"
          >
            {{ link }}
          </v-btn>
        </v-hover>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn depressed dark rounded color="#9F78FF">
          <v-icon class="pr-2">mdi-shopping</v-icon>
          <p>{{ chartCount }}</p>
        </v-btn>

      </v-app-bar>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    linkTitles: ['home', 'shop', 'about', 'contact'],
    chartCount: 0
  })
}
</script>

<style lang="css" scoped>
.v-btn::before {
  background-color: transparent;
}
.my-mr {
  margin-right: 32px;
}
.pr-2 {
  padding-right: 4px;
}
</style>
