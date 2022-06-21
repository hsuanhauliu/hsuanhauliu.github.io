<template>
  <v-container-fluid id="about_section" height="100vh">
    <v-row style="margin-bottom: 100px">
      <v-col cols=3></v-col>
      <v-col cols=6 style="height: 100vh; display: flex; align-items: center">
        <v-row>
          <v-col cols=12 md=4 style="display: flex; align-items: center">
            <v-img width=300 src="../assets/logo.png"></v-img>
          </v-col>

          <v-col cols=12 md=8 style="display: flex; align-items: center">
            <v-card flat color="transparent" class="mx-3">
              <v-card-title>
                Hi!
              </v-card-title>
              <v-card-text>
                My name is Hsuan-Hau, but I go by Howard.
                I'm a full-stack software engineer currently working at Google in the Bay Area.
              </v-card-text>
            </v-card>

          </v-col>
        </v-row>

      </v-col>
    </v-row>
  </v-container-fluid>
</template>

<script>

export default {
  name: 'AboutSection',

  data: () => ({
  }),
}
</script>

<style scoped>
div {
  font-size: 20px;
}

.corner_icon {
  transform: rotate(90deg);
}
</style>