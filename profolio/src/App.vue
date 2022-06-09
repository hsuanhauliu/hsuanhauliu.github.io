<template>
  <v-app>
    <v-main>
      <TopBar/>
      <LeftMenu/>
      <HomeSection/>
      <ExperienceSection/>
    </v-main>
  </v-app>
</template>

<script>
import TopBar from './components/TopBar.vue'
import LeftMenu from './components/LeftMenu.vue'
import HomeSection from './components/Home.vue'
import ExperienceSection from './components/Experience.vue'

export default {
  name: 'App',

  components: {
    HomeSection,
    ExperienceSection,
    TopBar,
    LeftMenu
  },

  data: () => ({
  }),
}
</script>

<style>
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