<template>
  <v-app>
    <v-main>
      <StarBackground/>
      <TopBar/>
      <LeftMenu/>
      <HomeSection/>
      <v-row class="mb-3" id="about_section">
        <v-spacer></v-spacer>
        <v-col cols=10>
          <div class="text-h5"><v-icon size="x-small" color="#f8d22a">mdi-music-clef-treble</v-icon> About Me</div>
          <v-divider inset></v-divider>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
      <AboutSection/>
      <v-row class="mb-3" id="experience_section">
        <v-spacer></v-spacer>
        <v-col cols=10>
          <div class="text-h5"><v-icon size="x-small" color="#f8d22a">mdi-music-clef-bass</v-icon> Work Experience</div>
          <v-divider inset></v-divider>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
      <ExperienceSection/>
      <ContactSection/>
    </v-main>
  </v-app>
</template>

<script>
import TopBar from './components/TopBar.vue'
import LeftMenu from './components/LeftMenu.vue'
import HomeSection from './components/Home.vue'
import AboutSection from './components/About.vue'
import ExperienceSection from './components/Experience.vue'
import ContactSection from './components/Contact.vue'
import StarBackground from './components/StarBackground.vue'

export default {
  name: 'App',

  components: {
    HomeSection,
    AboutSection,
    ExperienceSection,
    ContactSection,
    TopBar,
    LeftMenu,
    StarBackground
  },

  data: () => ({
  }),
}
</script>

<style>
html {
  scroll-behavior: smooth;
}

a, a:visited, a:hover, a:active {
  color: inherit;
}

a {
  user-select: none;
}

.underline {
  text-decoration: underline;
  text-decoration-color: #f8d22a;
}

.yellow {
  color: #f8d22a;
}

.btn-border {
  border: 2px solid;
}

</style>