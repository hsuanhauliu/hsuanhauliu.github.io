<template>
  <v-app-bar flat color="transparent">
    <v-btn id="top_icon" icon href="https://hsuanhauliu.github.io/">
      <v-img src="../assets/logo.png"></v-img>
    </v-btn>
      
    <v-spacer></v-spacer>
    <div v-for="(section, i) in sections" :key="i">
      <a :href="section.id" class="section underline">{{ section.title }}</a>
    </div>
  </v-app-bar>
</template>

<script>
import anime from 'animejs/lib/anime.min.js';

export default {
  name: 'TopBar',

  data: () => ({
    sections: [
      {
        id: "#about_section",
        title: "About"
      },
      {
        id: "#experience_section",
        title: "Work"
      },
      {
        id: "#contact_section",
        title: "Contact"
      }
    ]
  }),
  
  methods: {
    anime_icon() {
      anime({
        targets: '#top_icon',
        translateX: {
          value: [-100, 0],
          duration: 100
        },
        rotate: {
          value: 360,
          duration: 1000,
          easing: 'easeInOutSine'
        },
        scale: {
          value: 1.2,
          duration: 1600,
          delay: 800,
          easing: 'easeInOutQuart'
        }
      });
    }
  },

  mounted() {
    this.anime_icon()
  }
}
</script>

<style scoped>
.section {
  margin: 0px 8px;
  font-size: 18px;
  font-family: "Gill Sans", sans-serif;
}
</style>
