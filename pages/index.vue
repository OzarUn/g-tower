<template>
  <v-row v-resize="onResize" class="mainRow">
    <v-col style="height: 100%; margin: 0; margin-top: 2rem !important" class="pa-0" cols="12">
      <Banner class="bannerStyle ma-0 pb-6" data-aos="zoom-in" @routeHome="routeHome"></Banner>
      <v-main class="" id="services" data-aos="fade-up">
        <Services></Services>
      </v-main>
      <div id="concat" class="ma-0 pa-0">
        <v-main id="projects" data-aos="fade-down" class="projectStyle">
          <Projects></Projects>
        </v-main>
      </div>

      <v-main class="" id="aboutUs" data-aos="fade-down">
        <AboutUs></AboutUs>
      </v-main>

      <v-main id="ourTeam" data-aos="fade-down" class="">
        <OurTeam></OurTeam>
      </v-main>

      <v-main id="industries">
        <Industries></Industries>
      </v-main>

      <v-main id="contactUs">
        <ContactUs></ContactUs>
      </v-main>
    </v-col>
    <v-col class="ma-0 pa-0" cols="12">
      <v-footer color="#181818" padless style="display: flex; justify-content: center; margin-top: 8rem">
        <v-row class="ma-0 pa-0" style="max-width: 90%">
          <v-col cols="2">
            <a style="text-decoration: none" target="_blank" href="https://www.linkedin.com/company/g-tower/"
              class="mr-3">
              <v-icon color="white">mdi-linkedin</v-icon>
            </a>
            <a style="text-decoration: none" target="_blank" href="https://www.youtube.com/@g-tower6904">
              <v-icon color="white">mdi-youtube</v-icon>
            </a>
          </v-col>
          <v-col cols="10" style="display: flex; justify-content: flex-end">
            <span style="
                font-weight: 450;
                font-size: 1rem;
                line-height: 25px;
                display: flex;
                align-items: center;

                color: #cecece;
              ">[© 2023] G-Tower, All Rights Reserved.</span>
          </v-col>
        </v-row>
      </v-footer>
    </v-col>
  </v-row>
</template>

<script>
import AppBar from './AppBar.vue'
import Banner from './Banner.vue'
import Services from './Services.vue'
import Projects from './Projects.vue'
import AboutUs from './AboutUs.vue'
import OurTeam from './OurTeam.vue'
import Industries from './Industries.vue'
import ContactUs from './ContactUs.vue'

export default {
  name: 'IndexPage',
  components: {
    AppBar,
    Banner,
    Services,
    Projects,
    AboutUs,
    OurTeam,
    Industries,
    ContactUs,
  },
  data() {
    return {
      titleSize: null,
    }
  },
  methods: {
    onResize() {
      if (window.innerWidth < 600) {
        this.titleSize = '15%'
      } else if (window.innerWidth > 600 && window.innerWidth < 900) {
        this.titleSize = '15%'
      } else if (window.innerWidth > 900 && window.innerWidth < 1200) {
        this.titleSize = '10%'
      } else {
        this.titleSize = '7%'
      }
    },
    routeHome() {
      document
        .getElementById('aboutUs')
        .scrollIntoView({ block: 'start', behavior: 'smooth' })
    },
  },
}
</script>

<style>
.mainRow {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-content: center;
}

.projectStyle {
  padding-bottom: 50px !important;
}

#concat {
  background-image: url('https://g-tower.com/concat-background.svg');
  background-repeat: no-repeat, no-repeat;
}
</style>
