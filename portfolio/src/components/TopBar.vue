<template>
  <v-app-bar flat color="transparent">
    <v-btn icon disabled>
      <v-img src="../assets/logo.png"></v-img>
    </v-btn>
      
    <v-spacer></v-spacer>
    <div v-for="(section, i) in sections" :key="i">
      <a :href="section.id" class="section underline">{{ section.title }}</a>
    </div>
  </v-app-bar>
</template>

<script>
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
        title: "Experience"
      },
      {
        id: "#contact_section",
        title: "Contact"
      }
    ]
  }),
}
</script>

<style scoped>
.section {
  margin: 0px 8px;
  font-size: 22px;
  font-family: "Gill Sans", sans-serif;
}
</style>
