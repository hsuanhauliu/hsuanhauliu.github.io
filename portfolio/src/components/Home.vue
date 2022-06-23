<template>
  <v-container fluid>
    <v-row class="background_color" justify="center">
      <v-col cols="2">
      </v-col>
      <v-col cols="8" style="height: 100vh; display: flex; align-items: center">
        <v-card flat color="transparent">
          <v-card-title>
          Howard Liu
          </v-card-title>
          <v-card-text>
            Software engineer with industry experience in data engineering & full-stack development currently @<a class="yellow_text">Google</a>.
          </v-card-text>
          <v-card-actions>
            <v-btn class="btn-border" href="https://drive.google.com/file/d/127lTiCtVaUWMORjv8yNofKC48cBCIJ1G/view?usp=sharing" target="_blank">
              Resume
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'HomeSection',

  data: () => ({
  }),
}
</script>


<style scoped>
.v-card-title {
  font-size: 100px;
  font-family: "Gill Sans", sans-serif;
}

.v-card-text {
  font-size: 26px;
  line-height: 1.2;
  margin: 8px 0px;
}

.v-card-action {
  font-size: 20px;
}

.v-btn {
  font-size: 16px;
  padding: 0px 10px;
  margin: 0px 20px;
  border-color: #ffdc3e;
  background-color: #ffdc3e;
  color: rgb(88, 88, 88);
}

.yellow_text {
  color: #ffe46e;
}

.corner_icon {
  transform: rotate(-90deg);
}
</style>