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
            "YouTube Billing & Checkout team."
          ],
          tags: ["Web development", "Data Analysis", "Data Visualization"],
          date: "6/20/22 - present",
        },
        {
          role: "Software Robotics Engineer",
          company: "Dexterity",
          location: "Redwood City, CA",
          descriptions: [
            `I joined the company as the 2x-th member, and worked mostly as an individual contributor.
            During my tenure, I built various core libraries and services for both internal development system and production system.
            Some of my notable work include building data pipelines & infrastructure, developing a robot control application to automate camera calibration, implementing software packaging & deployment pipelines.
            The experience exposed me to various aspects of software engineering and helped me grow as a engineer, and I'm truly grateful for that.`
          ],
          tags: [
            "Data Engineering",
            "Full-stack Development",
            "Software Infrastructure",
            "Software Deployment",
            "Distributed System",
            "Cloud Infrastructure",
            "Computer Vision",
          ],
          date: "2/19/20 - 6/3/22",
        },
        {
          role: "Software Development Engineering Intern",
          company: "Playing Forward",
          location: "Santa Monica, CA",
          descriptions: [
            `During the internship, I worked on data processing, data visualization, and Deep Learning model training & evaluation.`
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
            `During the internship, I helped ML model hyper-parameter tuning, data processing and collection ML model visualization, etc.`
          ],
          tags: [
            "Machine Learning",
            "Data Visualization"
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
            "Enrolled in Computer Science Master's degree program."
          ],
          date: "1/8/18 - 12/18/19",
        },
        {
          role: "Bachelor's in CS",
          company: "Auburn University",
          location: "Auburn, AL",
          descriptions: [
            "Enrolled in Computer Science Bachelor's degree program."
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
