<template>
  <v-container id="experience_section">
    <v-row>
      <v-col col="12">
        <v-timeline>
          <v-timeline-item
            v-for="(experience, i) in experiences"
            :key="i"
            :title="experience.title"
            size="small"
            dot-color="#FDD835"
          >
            <template v-slot:opposite>
              <span
                :class="`headline font-weight-bold`"
                v-text="experience.date"
              ></span>
            </template>
            <v-card elevation="0" border="1" class="border-warning">
              <v-card-title class="text-h5">
                {{ experience.role }} @ {{ experience.company }} - {{ experience.location}}
              </v-card-title>
              <v-card-text>
                {{ experience.description }}
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" style="height: 50vh">
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
          company: "Google LLC",
          location: "Mountain View, CA",
          description: "@youtube",
          date: "June 27, 2022",
        },
        {
          role: "Robotics Engineer",
          company: "Dexterity Inc.",
          location: "Redwood City, CA",
          description: "Worked on various projects as full-stack and data engineer.",
          date: "Feb 19, 2020",
        },
        {
          role: "Software Development Engineering Intern",
          company: "Playing Forward LLC",
          location: "Santa Monica, CA",
          description: "Worked here as AI engineering intern.",
          date: "Sep 09, 2019",
        },
        {
          role: "Master's in CS",
          company: "University of Southern California",
          location: "Los Angeles, CA",
          description: "Obtained my Master's degree here.",
          date: "Jan 08, 2018",
        },
        {
          role: "Bachelor's in CS",
          company: "Auburn University",
          location: "Auburn, AL",
          description: "Got my Bachelor's degree here.",
          date: "Aug 21, 2013",
        }
    ]
  }),
}
</script>
