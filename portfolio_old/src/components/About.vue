<template>
  <v-container fluid>

    <v-row style="margin-bottom: 100px">
      <v-spacer></v-spacer>
      <v-col cols=6>
        <v-row>
          <v-col cols=12 lg=6 align="center">
            <div style="height: 300px; width: 300px">
              <div id="profile_overlay" class="overlay" @mouseover="anime_profile_img"></div>
              <v-img id="profile_img" eager max-width="100%" src="../assets/profile.jpg"></v-img>
            </div>
          </v-col>

          <v-col cols=12 lg=6>
            <v-card flat color="transparent" class="px-3">
              <v-card-text class="text-white text-body-1">
                Hey there! My name is Hsuan-Hau Liu, but I go by Howard.
                I'm a software engineer interested in <div class="highlight text-body-1">computer vision</div>, <div class="highlight text-body-1">data engineering</div>, and <div class="highlight text-body-1">software infrastructure</div>.
                Shortly after I finished my Master's, I joined a robotics startup and worked on data pipeline & infrastructure, full-stack development, software deployment, among other things.
                Most recently, I'm working at <div class="highlight text-body-1">Google</div> on web development stuff.
                <br/><br/>
                When I'm not coding or wasting time on YouTube, I enjoy playing tennis, bouldering, playing instruments, video editing and many other things.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script>
import anime from 'animejs/lib/anime.min.js';

export default {
  name: 'AboutSection',

  data: () => ({
  }),

  methods: {
    anime_profile_img() {
      anime({
        targets: '#profile_overlay',
        translateX: 20,
        translateY: 20,
        easing: 'easeInOutQuad',
        opacity: 0
      })
      document.getElementById("profile_img").style.filter = "grayscale(0%)"
    }
  },
}
</script>

<style scoped>
div {
  font-size: 20px;
}

.highlight {
  color: #ffe368;
  display: inline-block;
}

.overlay {
    position: absolute;
    background-color: rgb(251, 255, 21);
    opacity: 0.3;
    height: 300px;
    width: 300px;
    z-index:1;
}

#profile_img {
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
}
</style>
