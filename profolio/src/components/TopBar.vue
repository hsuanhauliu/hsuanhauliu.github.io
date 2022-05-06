<template>
  <v-card>
    <v-app-bar fixed flat color="transparent">

      <v-spacer></v-spacer>

      <div v-for="(section, i) in sections" :key="i">
        <a :href="section.id" class="section underline">{{ section.title }}</a>
      </div>
    </v-app-bar>
  </v-card>
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
  margin: 0px 10px;
  font-size: 30px;
  font-weight: bold;
  font-family: 'Cormorant Garamond', serif;
}
</style>
