<template>
  <div>
    <v-card v-for="paper in papers" :key="paper.id" class="mx-auto my-8" max-width="80%">
      <v-row>
        <v-col cols="7" sm="7" md="7">
          <v-card-title>{{paper.title}}</v-card-title>
          <v-card-text>
            <div class="my-1 subtitle-1">{{paper.authors}}</div>
            <div>{{paper.venue}}</div>
          </v-card-text>
        </v-col>
         <v-col cols="5" sm="5" md="5">
           <LazyYoutubeVideo src="https://www.youtube.com/embed/q_w2XlPaDLM" />
        </v-col>
      </v-row>



      <v-divider class="mx-4"></v-divider>

      <v-card-text>
        <v-chip-group column>
          <v-chip small color="primary" text-color="secondary" v-for="tag in paper.tags" :key="tag"> {{tag}} </v-chip>
        </v-chip-group>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>
      <v-card-actions>
        <v-row>
          <v-col cols="8" sm="8" md="8">
            <span>50+</span>
            <v-icon large color="primary"> mdi-message-text </v-icon>

            <span>  20+</span>
            <v-icon large color="primary"> mdi-account-group </v-icon>

            <span>  Author-Verified</span>
            <v-icon large color="primary"> mdi-shield-check </v-icon>

            <span>  Best Paper</span>
            <v-icon large color="primary"> mdi-medal </v-icon>

          </v-col>
          <v-col cols="4" sm="4" md="4">
            <v-btn class="secondary--text" color="primary" @click="reserve">
              Join Discussion
            </v-btn>
          </v-col>

        </v-row>

      </v-card-actions>
    </v-card>
  </div>
</template>


<script>

import LazyYoutubeVideo from "vue-lazy-youtube-video";


export default {
  components: {
    LazyYoutubeVideo
  },
  data() {
    return {
      papers: [
        {id: 0,
         title: 'Inside the Mind of a CS Undergraduate TA: A Firsthand Account of Undergraduate Peer Tutoring in Computer Labs',
         authors: 'Julia M. Markel and Philip J. Guo',
         venue: 'ACM Technical Symposium on Computer Science Education (SIGCSE), 2021',
         tags: ['Human-Computer Interaction', 'Machine Learning', 'Collective Learning', 'Social Computing', 'CHI', 'Education', 'Statistical Analysis'],
         comments: 50,
         contributions: 25},
        {id: 1,
        title: 'Inside the Mind of a CS Undergraduate TA: A Firsthand Account of Undergraduate Peer Tutoring in Computer Labs',
         authors: 'Julia M. Markel and Philip J. Guo',
         venue: 'ACM Technical Symposium on Computer Science Education (SIGCSE), 2021',
         tags: ['HCI', 'Machine Learning', 'Collective Learning'],
         comments: 50,
         contributions: 25},
         {id: 2,
         title: 'Inside the Mind of a CS Undergraduate TA: A Firsthand Account of Undergraduate Peer Tutoring in Computer Labs',
         authors: 'Julia M. Markel and Philip J. Guo',
         venue: 'ACM Technical Symposium on Computer Science Education (SIGCSE), 2021',
         tags: ['HCI', 'Machine Learning', 'Collective Learning'],
         comments: 50,
         contributions: 25},
         {id: 3,
         title: 'Inside the Mind of a CS Undergraduate TA: A Firsthand Account of Undergraduate Peer Tutoring in Computer Labs',
         authors: 'Julia M. Markel and Philip J. Guo',
         venue: 'ACM Technical Symposium on Computer Science Education (SIGCSE), 2021',
         tags: ['HCI', 'Machine Learning', 'Collective Learning'],
         comments: 50,
         contributions: 25},
      ],


    }
  }
}

</script>

<style scoped>

</style>
