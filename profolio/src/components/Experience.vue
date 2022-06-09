<template>
  <v-container id="experience_section">
    <v-row>
      <v-col col="12">
        <v-timeline line-thickness=1>
          <v-timeline-item
            v-for="(experience, i) in experiences"
            :key="i"
            size="x-small"
            dot-color="#ffe262"
            fill-dot
          >
            <template v-slot:opposite>
              <span
                :class="`headline`"
                v-text="experience.date"
              ></span>
            </template>
            <v-card elevation="0" border="1" dark class="border-warning">
              <v-card-title class="text-h6 title_color">
                {{ experience.role }}<v-spacer></v-spacer><p class="text-subtitle-2">@ {{ experience.company }}</p>
              </v-card-title>
              <v-card-subtitle class="pt-1">
                {{ experience.location }}
              </v-card-subtitle>
              <v-card-text class="white_text" style="text-align: left">
                <p
                  v-for="(desc, j) in experience.descriptions"
                  :key="j"
                >
                  <v-icon>mdi-menu-right</v-icon>{{ desc }}
                </p>
                <br>
                <v-chip
                  v-for="(tag, j) in experience.tags"
                  :key="j"
                  size="x-small"
                  class="ma-1"
                >
                  {{ tag }}
                </v-chip>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" style="height: 25vh">
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "ExperienceSection",

  data: () => ({
    experiences: [
        {
          role: "Software Engineer",
          company: "Google",
          location: "Mountain View, CA",
          descriptions: [
            "Joining as a full-stack developer at Youtube."
          ],
          tags: ["Full-stack development"],
          date: "June 20, 2022",
        },
        {
          role: "Robotics Engineer",
          company: "Dexterity",
          location: "Redwood City, CA",
          descriptions: [
            `I joined the company when there were about 25 employees, and worked mostly as an individual contributor.
            Over two years, I built various internal tools, services, and libraries that were used across the company, and also maintained telemetry infrastructure in production.
            As one of the members on the data platform team, I implemented various data pipelines, logging library, and data infrastructure components.
            Some of my other notable contributions include software deployment automation, camera calibration automation, service orchestration tool, etc.
            I also did some data analysis, server provisioning, cloud infra development, and was involved in the engineering hiring effort as well.
            `
          ],
          tags: ["Data engineering", "Full-stack development", "Developer toolings", "Software infrastructure", "Computer Vision"],
          date: "Feb 19, 2020 - June 3, 2022",
        },
        {
          role: "Software Development Engineering Intern",
          company: "Playing Forward",
          location: "Santa Monica, CA",
          descriptions: [
            `During the internship, my responsibility was to help our AI engineer build tools and experiment with different Deep Learning models.
            My main contributions include data analysis, processing, visualization, and model implementation.`
          ],
          tags: ["Machine Learning", "Game Development", "Data engineering", "Data analysis"],
          date: "Sep 9, 2019 - Dec 9, 2019",
        },
        {
          role: "Master's in CS",
          company: "USC",
          location: "Los Angeles, CA",
          descriptions: [
            "Obtained master's degree in Computer Science."
          ],
          date: "Jan 8, 2018 - Dec 18, 2019",
        },
        {
          role: "Bachelor's in CS",
          company: "Auburn University",
          location: "Auburn, AL",
          descriptions: [
            "Obtained bachelor's degree in Computer Science."
          ],
          date: "Aug 21, 2013 - Dec 16, 2017",
        }
    ]
  }),
}
</script>

<style scoped>
.title_color {
  background-color: #ffe368;
  color: black;
}

.white_text {
  color: white;
}
</style>