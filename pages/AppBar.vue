<template>
  <v-app-bar min-height="12vh" width="100vw" v-resize="onResize" app class="ma-0 pa-0">
    <v-row class="mainRow">
      <v-col cols="1" class="centerize imageSize">
        <v-img :max-height="windowWidth < 700 ? '130%' : largeScreen ? '90%' : '100%'
          " :max-width="windowWidth < 700 ? '130%' : largeScreen ? '90%' : '100%'" contain
          :src="'https://g-tower.com/main-logo.svg'"></v-img>
      </v-col>
      <div class="ma-0 pa-0">
        <LocaleSwitcher />
      </div>

      <!-- mobile -->
      <v-col v-if="appBarSize" class="centerize" cols="8">
        <v-card text flat class="mx-auto" max-width="70vw">
          <v-slide-group style="background-color: #f5f5f5" multiple show-arrows>
            <v-slide-item v-for="item in items" :key="item.route" v-slot="{ active }">
              <v-btn class="mx-2 buttonFont" depressed text small :input-value="active"
                active-class="purple white--text" @click="routePage(item.route)">
                {{ item.name }}
              </v-btn>
            </v-slide-item>
            <v-btn color="#43D000" class="buttonFont" small @click="routePage('contactUs')"><span style="color: white">
                Contact Us</span></v-btn>
          </v-slide-group>
        </v-card>
      </v-col>

      <!-- large screen -->
      <v-col v-if="!appBarSize" cols="8" :class="largeScreen ? 'largeScreen' : 'centerize'">

        <v-btn v-for="item in items" :key="item.route" depressed text small class="buttonFont"
          @click="routePage(item.route)">{{ item.name }}</v-btn>
        <v-btn color="#43D000" class="buttonFont" small @click="routePage('contactUs')"><span style="color: white">
            Contact Us</span></v-btn>
        <div class="ma-0 pa-0">
          <v-divider class="mx-4" style="color: #0a1551 !important" inset vertical></v-divider>
        </div>

        <a style="text-decoration: none" target="_blank" href="https://www.linkedin.com/company/g-tower/">
          <v-icon class="mr-4" large style="color: #0a1551">mdi-linkedin</v-icon>
        </a>
        <a style="text-decoration: none" target="_blank" href="https://www.youtube.com/@g-tower6904">
          <v-icon large style="color: #0a1551">mdi-youtube</v-icon>
        </a>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
import Vue from '@/setup'; 
import LocaleSwitcher from "@/components/LocaleSwitcher"
import VueScrollTo from 'vue-scrollto';

import i18n from "@/i18n"

console.log("Active locale: ", i18n.locale)

Vue.use(VueScrollTo);

export default {
  components: { LocaleSwitcher },
  props: {
    marketing: Boolean,
  },
  data() {
    return {
      model: null,
      appBarSize: false,
      largeScreen: false,
      items: [

        { name: 'Home', route: 'home' },
        { name: 'Services', route: 'services' },
        { name: 'Projects', route: 'projects' },
        { name: 'About Us', route: 'aboutUs' },
        { name: 'Our Team', route: 'ourTeam' },
        { name: 'Industries', route: 'industries' },
      ],
      windowWidth: '',
    }
  },
  mounted() {
    if (!this.marketing && this.$route.params.scroll) {
      setTimeout(() => {
        this.routePage(this.$route.params.scroll)
      }, 500)
    }
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale
    },
    onResize() {
      this.windowWidth = window.innerWidth
      window.innerWidth < 970
        ? (this.appBarSize = true)
        : (this.appBarSize = false)
      window.innerWidth > 970
        ? (this.largeScreen = true)
        : (this.largeScreen = false)
    },

    routePage(pageName) {
      const options = {
        // container: '#container',
        easing: 'ease-in',
        lazy: false,
        offset: 0,
        force: true,
        cancelable: true,
        onStart: function (element) {
          // scrolling started
        },
        onDone: function (element) {
          // scrolling is done
        },
        onCancel: function () {
          // scrolling has been interrupted
        },
        x: false,
        y: true,
      }
      if (this.marketing) {
        this.$router.push({ name: 'index', params: { scroll: pageName } })
        return
      }

      if (pageName === 'industries') {
        VueScrollTo.scrollTo(
          document.getElementById('industries'),
          1100,
          options
        )
      } else if (pageName === 'contactUs') {
        VueScrollTo.scrollTo(
          document.getElementById('contactUs'),
          1100,
          options
        )
      } else {
        document
          .getElementById(pageName)
          .scrollIntoView({ block: 'start', behavior: 'smooth' })
      }
    },
  },
}
</script>

<style scoped>
.v-btn {
  text-transform: unset !important;
}

::v-deep .v-toolbar__content {
  padding: 0px !important;
  margin: 0px !important;
  height: 12vh !important;
}

::v-deep .theme--light.v-divider {
  border-color: #0a1551;
  height: 5vh;
  margin-bottom: 0.2rem;
}

.mainRow {
  height: 12vh;
  width: 100%;
  justify-content: space-around;
}

.centerize {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.largeScreen {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.imageSize {
  height: 100%;
  width: 100%;
}

.buttonFont {
  font-size: 0.9rem;
  font-weight: 600;
}
</style>
