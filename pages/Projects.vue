<template>
  <v-row class="mx-5 d-flex justify-center">
    <v-col cols="12" class="d-flex">
      <v-card-title style="font-weight: bold; font-size: 2rem" class="ma-5"
        >Projects</v-card-title
      >
      <v-img
        contain
        max-width="20px"
        class="mt-1"
        :src="require('../static/header_dot.png')"
      ></v-img>
    </v-col>
    <v-carousel hide-delimiters v-model="model" style="width: 60vw">
      <v-carousel-item v-for="item in items" :key="item.image">
        <v-card
          flat
          class="d-flex flex-column justify-center align-center"
          width="100%"
          height="100%"
          rounded="lg"
        >
          <v-img
            max-width="60%"
            contain
            :src="require('../static/' + item.image)"
          ></v-img>
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-text>{{ item.text }}</v-card-text>
        </v-card>
      </v-carousel-item>
    </v-carousel>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      model: null,
      items: [
        {
          image: 'project1.png',
          title: 'Wataynikaneyap Power Project',
          text: 'G-Tower provided transmission line engineering services and prepared 30% preliminary Plan & Profile drawings for Phase-1 300km long 230kV S/C Tline in Ontarion.',
        },
      ],
    }
  },
}
</script>

<style></style>