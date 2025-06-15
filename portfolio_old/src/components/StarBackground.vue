<template>
  <v-row style="position: fixed">
    <v-col cols="12" style="height: 100vh; width: 100vh" id="sky_background">
      <v-icon v-for="(el, i) in star_positions" :key="i" :id="'star-' + i"  size="x-small" class="star" :style="'top:' + el.top + ';left:' + el.left">mdi-star-four-points</v-icon>
    </v-col>
  </v-row>
</template>

<script>
import anime from 'animejs/lib/anime.min.js';

export default {
  name: 'StarBackground',

  data: () => ({
    star_positions: [
      { "top":  "5%", "left":  "8%" },
      { "top":  "7%", "left": "38%" },
      { "top":  "8%", "left": "47%" },
      { "top":  "9%", "left": "91%" },
      { "top": "12%", "left": "59%" },
      { "top": "13%", "left": "78%" },
      { "top": "15%", "left": "18%" },
      { "top": "21%", "left": "26%" },
      { "top": "28%", "left": "93%" },
      { "top": "30%", "left": "70%" },
      { "top": "32%", "left":  "5%" },
      { "top": "33%", "left": "44%" },
      { "top": "35%", "left": "22%" },
      { "top": "38%", "left": "54%" },
      { "top": "46%", "left": "73%" },
      { "top": "48%", "left": "15%" },
      { "top": "48%", "left": "89%" },
      { "top": "50%", "left":  "3%" },
      { "top": "52%", "left": "26%" },
      { "top": "54%", "left": "43%" },
      { "top": "64%", "left": "24%" },
      { "top": "65%", "left": "81%" },
      { "top": "67%", "left": "63%" },
      { "top": "72%", "left": "13%" },
      { "top": "72%", "left": "38%" },
      { "top": "74%", "left":  "5%" },
      { "top": "75%", "left": "77%" },
      { "top": "75%", "left": "50%" },
      { "top": "79%", "left": "64%" },
      { "top": "82%", "left": "85%" },
      { "top": "85%", "left":  "8%" },
      { "top": "89%", "left": "27%" },
      { "top": "89%", "left": "40%" },
      { "top": "91%", "left": "77%" },
      { "top": "92%", "left": "91%" },
      { "top": "93%", "left": "56%" },
      { "top": "97%", "left": "18%" },
    ],
  }),

  methods: {
    anime_stars() {
      for (var i = 0; i < document.querySelectorAll(".star").length; i++) {
        anime({
          targets: '#sky_background .star:nth-child(' + (i + 1) + ')',
          loop: true,
          scale: function() {
            return [0, anime.random(3, 6)/10];
          },
          opacity: anime.random(3, 8)/10,
          duration: function() {
            return anime.random(1000, 5000);
          },
        })
      }
    }
  },

  mounted() {
    this.anime_stars()
  }
}
</script>

<style scoped>
.star {
  position: fixed;
  z-index: -1;
}
</style>
