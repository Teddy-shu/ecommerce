<template lang="html">
  <div class="footer">
    <v-row justify="end">
      <v-col :cols="extend">
        <img src="/img/logo-footer.png"/>
        <p class="footer-content">Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
        <v-row align-content="start" justify="start">
          <v-col>
            <a class="social-link" href="https://www.facebook.com/">
              <img class="social-icon" src="/icon/facebook-f-brands.svg"/>
            </a>
          </v-col>
          <v-col>
            <a class="social-link" href="https://twitter.com/">
              <img class="social-icon" src="/icon/twitter-brands.svg"/>
            </a>
          </v-col>
          <v-col>
            <a class="social-link" href="https://www.instagram.com/">
              <img class="social-icon" src="/icon/instagram-brands.svg"/>
            </a>
          </v-col>
        </v-row>
      </v-col>

      <v-col :cols="extend" class="felx-center">
        <p class="footer-title">Quick links</p>
        <a class="footer-content">Image Licensin</a>
        <a class="footer-content">Style Guide</a>
        <a class="footer-content">Privacy Policy</a>
      </v-col>

      <v-col :cols="extend" class="felx-center">
        <p class="footer-title">Shop Category</p>
        <a class="footer-content">Image Licensin</a>
        <a class="footer-content">Style Guide</a>
        <a class="footer-content">Privacy Policy</a>
      </v-col>

      <v-col :cols="extend" class="felx-center">
        <p class="footer-title">Pertners</p>
        <a class="footer-content">Image Licensin</a>
        <a class="footer-content">Style Guide</a>
        <a class="footer-content">Privacy Policy</a>
      </v-col>

      <v-col :cols="extend" class="felx-center">
        <p class="footer-title">Get in touch</p>
        <a class="footer-content">(89) 982-278 356</a>
        <a class="footer-content">demo@colorlib.com</a>
        <a class="footer-content">67/A, Colorlib, Green road, NYC</a>
      </v-col>

      <v-col cols="12" class="felx-center">
        <p>Copyright ©2020 All rights reserved | This template is made with
          <br v-if="extend === 12"/>
          <v-icon small color="#6610f2">mdi-heart</v-icon>
          by
          <a class="company" href="https://colorlib.com">Colorlib</a>
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
  data: () => ({
    extend: 12
  }),
  mounted() {
    this.onResize()

    window.addEventListener('resize', this.onResize, {passive: true})
  },

  methods: {
    onResize() {
      var breakpointWidth = window.innerWidth

      if (breakpointWidth  > 1264) {
        this.extend = 2.5
      }
      if (breakpointWidth < 1264 && breakpointWidth > 600) {
        this.extend = 4
      }
      if (breakpointWidth < 600) {
        this.extend = 12
      }
    }
  }
}
</script>

<style lang="css" scoped>
.footer {
  background: #1D2547;
  width: 100vw;
  height: fit-content;
  padding: 5vh;
  margin-top: 10vh;
}
.felx-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
}
.felx-center a{
  margin-bottom: 15px;
  transition: 0.5s;
}
.felx-center p {
  margin-bottom: 30px;
}
.felx-center a:hover{
  color: #6610f2;
  text-decoration: underline;
  transform-origin: top center;
}
img {
  margin-top: 24px;
  margin-bottom: 24px;
}
.social-icon {
  color: white;
  width: 30px;
  height: 30px;
  padding: 5px;
  border-radius: 50%;
  border: 1px solid white;
  transition: 0.25s;
}
.social-icon:hover {
  background: #6610f2;
  border: none;
}
.footer-title {
  font-weight: 800;
}
.footer-content {
  color:#C2C5DB;
}
p, a {
  color: white;
  display: block;
}
.social-link {
  margin: 0;
}
.company {
  display: inline-block;
  text-decoration: none;
  color: #6610f2;
  margin: auto;
}
</style>
