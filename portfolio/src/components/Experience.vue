<template>
  <v-container fluid>
    <v-row class="mb-10">
      <v-spacer></v-spacer>
      <v-col cols="10">
        <v-timeline side="end" line-thickness=1>
          <v-timeline-item
            v-for="(experience, i) in experiences"
            :key="i"
            size="x-small"
            dot-color="yellow"
            icon="mdi-compass-rose"
          >
            <template v-slot:opposite>
              <span
                class="text-subtitle-2"
                v-text="experience.date"
              ></span>
            </template>
            <v-card elevation="0" border="1" dark class="border-warning">
              <v-card-title class="text-subtitle-1 title_color">
                {{ experience.role }}<v-spacer></v-spacer><p class="text-caption">@{{ experience.company }}</p>
              </v-card-title>
              <v-card-subtitle class="pt-1">
                {{ experience.location }}
              </v-card-subtitle>
              <v-card-text class="white_text" style="text-align: left">
                <!-- description section -->
                <p
                  v-for="(desc, j) in experience.descriptions"
                  :key="j"
                >
                  <v-icon>mdi-menu-right</v-icon>{{ desc }}
                </p>

                <!-- tags section -->
                <v-chip
                  v-for="(tag, j) in experience.tags"
                  :key="j"
                  size="x-small"
                  class="mx-1 mt-3"
                >
                  {{ tag }}
                </v-chip>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
      <v-spacer></v-spacer>
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
            "Full-stack developer at Youtube."
          ],
          tags: ["Full-stack development"],
          date: "6/20/22 - present",
        },
        {
          role: "Robotics Engineer",
          company: "Dexterity",
          location: "Redwood City, CA",
          descriptions: [
            `I joined the company when there were about 25 employees, and worked mostly as an individual contributor.
            Over two years, I built various internal tools, services, and libraries that were used across the company, and also maintained telemetry infrastructure in production.`,
            `As one of the members on the data platform team, I implemented various data pipelines, logging library, and data infrastructure components.
            Some of my other notable contributions include software deployment automation, camera calibration automation, service orchestration tool, etc.
            I also did some data analysis, server provisioning, cloud infra development, and was involved in the engineering hiring effort as well.
            `
          ],
          tags: [
            "Data Engineering",
            "Full-stack Development",
            "Software Infrastructure",
            "Software Deployment",
            "Distributed System",
            "Cloud Infrastructure",
            "Computer Vision",
            "Deep Learning",
          ],
          date: "2/19/20 - 6/3/22",
        },
        {
          role: "Software Development Engineering Intern",
          company: "Playing Forward",
          location: "Santa Monica, CA",
          descriptions: [
            `During the internship, my responsibility was to help our AI engineer build tools and experiment with different Deep Learning models.
            My main contributions include data analysis, processing, visualization, and model implementation.`
          ],
          tags: [
            "Deep Learning",
            "Data Engineering",
            "Game Development",
            "Data Analysis"
          ],
          date: "9/9/19 - 12/9/19",
        },
        {
          role: "Machine Learning Research Intern",
          company: "USC UMLx Project",
          location: "Los Angeles, CA",
          descriptions: [
            `Tuned hyperparameters of neural network model to predict project effort.`,
            `Collected and preprocessed open-sourced Android projects on Github using R.`,
            `Created neural network visualization to better understand the model.`
          ],
          tags: [
            "Machine Learning",
          ],
          date: "5/15/19 - 8/6/19",
        },
        {
          role: "Software Developer Intern",
          company: "CarmaCam",
          location: "Los Angeles, CA",
          descriptions: [
            `Performed object detection using YOLO and Faster RCNN ResNet on TensorFlow to detect vehicles, stop signs, and traffic lights from dashcam recordings.`,
            `Designed automated report review pipeline with multiple machine learning models.`,
            `Pitched our machine learning capability to potential investors.`
          ],
          tags: [
            "Machine Learning",
          ],
          date: "8/29/18 - 11/30/18",
        },
        {
          role: "Master's in CS",
          company: "USC",
          location: "Los Angeles, CA",
          descriptions: [
            "Obtained master's degree in Computer Science."
          ],
          date: "1/8/18 - 12/18/19",
        },
        {
          role: "Bachelor's in CS",
          company: "Auburn University",
          location: "Auburn, AL",
          descriptions: [
            "Obtained bachelor's degree in Computer Science."
          ],
          date: "8/21/13 - 12/16/17",
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