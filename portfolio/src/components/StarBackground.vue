<template>
  <v-row style="position: fixed">
    <v-col cols="12" style="height: 100vh; width: 100vh" id="sky_background">
      <v-icon id="star-1"  size="x-small" class="star" style="top:  5%; left: 8%">mdi-star-four-points</v-icon>
      <v-icon id="star-2"  size="x-small" class="star" style="top: 15%; left: 18%">mdi-star-four-points</v-icon>
      <v-icon id="star-3"  size="x-small" class="star" style="top:  7%; left: 38%">mdi-star-four-points</v-icon>
      <v-icon id="star-4"  size="x-small" class="star" style="top:  8%; left: 47%">mdi-star-four-points</v-icon>
      <v-icon id="star-5"  size="x-small" class="star" style="top: 12%; left: 59%">mdi-star-four-points</v-icon>
      <v-icon id="star-6"  size="x-small" class="star" style="top:  13%; left: 78%">mdi-star-four-points</v-icon>
      <v-icon id="star-7"  size="x-small" class="star" style="top:  9%; left: 91%">mdi-star-four-points</v-icon>
      <v-icon id="star-8"  size="x-small" class="star" style="top: 32%; left:  5%">mdi-star-four-points</v-icon>
      <v-icon id="star-10" size="x-small" class="star" style="top: 48%; left: 15%">mdi-star-four-points</v-icon>
      <v-icon id="star-11" size="x-small" class="star" style="top: 52%; left: 26%">mdi-star-four-points</v-icon>
      <v-icon id="star-12" size="x-small" class="star" style="top: 33%; left: 44%">mdi-star-four-points</v-icon>
      <v-icon id="star-13" size="x-small" class="star" style="top: 38%; left: 54%">mdi-star-four-points</v-icon>
      <v-icon id="star-14" size="x-small" class="star" style="top: 30%; left: 70%">mdi-star-four-points</v-icon>
      <v-icon id="star-15" size="x-small" class="star" style="top: 48%; left: 89%">mdi-star-four-points</v-icon>
      <v-icon id="star-16" size="x-small" class="star" style="top: 85%; left:  8%">mdi-star-four-points</v-icon>
      <v-icon id="star-17" size="x-small" class="star" style="top: 64%; left: 24%">mdi-star-four-points</v-icon>
      <v-icon id="star-18" size="x-small" class="star" style="top: 89%; left: 27%">mdi-star-four-points</v-icon>
      <v-icon id="star-19" size="x-small" class="star" style="top: 75%; left: 50%">mdi-star-four-points</v-icon>
      <v-icon id="star-20" size="x-small" class="star" style="top: 93%; left: 56%">mdi-star-four-points</v-icon>
      <v-icon id="star-21" size="x-small" class="star" style="top: 67%; left: 63%">mdi-star-four-points</v-icon>
      <v-icon id="star-22" size="x-small" class="star" style="top: 82%; left: 85%">mdi-star-four-points</v-icon>
    </v-col>
  </v-row>
</template>

<script>
import anime from 'animejs/lib/anime.min.js';

export default {
  name: 'StarBackground',

  data: () => ({
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