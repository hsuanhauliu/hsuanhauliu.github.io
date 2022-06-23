<template>
  <v-row style="position: fixed" align=start>
    <v-col cols="1" style="height: 100vh; display: flex; align-items: center">
      <v-card
        flat
        color="transparent"
      >
        <v-list-item
          v-for="(link, i) in links"
          :key="i"
        >
          <v-list-item-title>
            <a :href="link.link" target="_blank">
              <v-icon>{{ link.icon }}</v-icon>
            </a>
          </v-list-item-title>
        </v-list-item>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

export default {
  name: 'LeftMenu',

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
      {
        "icon": "mdi-file-account",
        "link": "https://drive.google.com/file/d/127lTiCtVaUWMORjv8yNofKC48cBCIJ1G/view"
      }
    ]
  }),
}
</script>

<style scoped>
a {
  font-size: 16px;
  text-decoration: none;
}

</style>