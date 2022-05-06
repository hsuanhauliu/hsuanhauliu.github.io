<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="8" style="height: 100vh; display: flex; align-items: center">
        <v-card flat color="transparent">
          <v-card-title>
          Howard Liu
          </v-card-title>
          <v-card-text>
            I'm a software engineer and deep learning & computer vision enthusiast with experience in full stack development and data engineering currently working @ Google.
          </v-card-text>
          <v-card-actions>
            <v-btn class="btn-border" href="https://drive.google.com/file/d/127lTiCtVaUWMORjv8yNofKC48cBCIJ1G/view?usp=sharing">
              Resume
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="8" style="height: 25vh">
      </v-col>
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
}

</style>