<template>
  <v-container fluid id="contact_section">
    <v-row class="mb-2">
      <v-col cols=12 align="center">
        <!-- icons -->
        <div>
          <a
            v-for="(link, i) in links"
            :key="i"
            :href="link.link"
            target="_blank"
            class="mx-3 link"
          >
            <v-icon>{{ link.icon }}</v-icon>
          </a>
        </div>
        <!-- name and email -->
        <div class="text-caption">Built by Hsuan-Hau Liu - <a href="mailto: hsuanhauliu@gmail.com">hsuanhauliu@gmail.com</a></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'ContactSection',

  data: () => ({
    links: [
      {
        "icon": "mdi-github",
        "link": "https://github.com/hsuanhauliu"
      },
      {
        "icon": "mdi-linkedin",
        "link": "https://www.linkedin.com/in/hsuanhauliu/"
      },
      {
        "icon": "mdi-youtube",
        "link": "https://www.youtube.com/channel/UC_nJcU3CiKaa8b27n2dvsoQ"
      },
    ]
  }),
}
</script>

<style scoped>
div {
  font-size: 14px;
}

.link {
  text-decoration: none;
}
</style>