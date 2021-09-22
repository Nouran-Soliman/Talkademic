<template>
  <div>
    <v-card class="mx-auto my-8" max-width="80%">
      <v-row>
          <v-chip small color="primary" text-color="secondary" class="ma-2" label>
            <v-icon left> help_outline </v-icon>
              New Question
          </v-chip>

             <v-tooltip bottom color="blue">
              <template v-slot:activator="{ on, attrs }">
                 <v-chip small color="white" class="ma-2">
                  <v-icon small color="blue" v-bind="attrs" v-on="on">people</v-icon>
                </v-chip>
              </template>
              <span>6 followed commented</span>
             </v-tooltip>

             <v-tooltip bottom color="green">
              <template v-slot:activator="{ on, attrs }">
                 <v-chip small color="white" class="ma-2">
                  <v-icon small color="green" v-bind="attrs" v-on="on">check_circle</v-icon>
                </v-chip>
              </template>
              <span>3 trusted commented</span>
             </v-tooltip>

             <v-tooltip bottom color="primary">
              <template v-slot:activator="{ on, attrs }">
                 <v-chip small color="white" class="ma-2">
                  <v-icon small color="primary" v-bind="attrs" v-on="on">article</v-icon>
                </v-chip>
              </template>
              <span>4 other papers mentioned</span>
             </v-tooltip>


        <!-- <v-spacer/>
        <v-chip-group column >
          <v-chip small color="primary" text-color="secondary"> <v-icon small color="secondary"> mdi-message-text </v-icon>  6 followed commented</v-chip>
          <v-chip small color="primary" text-color="secondary">  <v-icon small color="secondary"> mdi-account-group </v-icon> 3 trusted commented</v-chip>
          <v-chip small color="primary" text-color="secondary"> <v-icon small color="secondary"> verified </v-icon> 10 papers mentioned</v-chip>
        </v-chip-group> -->
      </v-row>
      <v-row>
        <v-col cols="3" sm="3" md="3">
           <v-badge bordered bottom color="blue" icon="verified_user" overlap>
            <v-avatar color="primary" size="42">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
            </v-avatar>
           </v-badge>
          <span class="my-1 subtitle-1 font-weight-bold">  John Stewart</span>

        </v-col>
        <v-col cols="9" sm="9" md="9">
          <v-card-title>What is the main contribution of this paper?</v-card-title>
        </v-col>

      </v-row>


      <v-card v-for="paper in papers" :key="paper.id" class="mx-auto my-8" max-width="80%">
        <v-row>
          <v-chip small color="primary" text-color="secondary" class="ma-2" label>
           <img src="https://sigcse.org/files/images/logo/SIGCSE-logo_home.jpg" alt="sigcse" width="100" height="30">
          </v-chip>
        </v-row>
        <v-row>
          <v-col cols="7" sm="7" md="7">
            <v-card-title class="subtitle-2">{{paper.title}}</v-card-title>
            <v-card-text>
              <div class="my-1 body-2">{{paper.authors}}</div>
            </v-card-text>
          </v-col>
          <v-col cols="5" sm="5" md="5">
            <LazyYoutubeVideo src="https://www.youtube.com/embed/q_w2XlPaDLM" />
          </v-col>
        </v-row>

        <v-divider class="mx-4"></v-divider>
        <v-card-text>
          <v-chip-group column>
            <v-chip small color="primary" text-color="secondary"> <v-icon small color="secondary"> mdi-message-text </v-icon>  50 conversations</v-chip>
            <v-chip small color="primary" text-color="secondary">  <v-icon small color="secondary"> mdi-account-group </v-icon> 20 contributors</v-chip>
            <v-chip small color="primary" text-color="secondary"> <v-icon small color="secondary"> verified </v-icon> Author-verified</v-chip>
            <v-chip small color="primary" text-color="secondary"> <v-icon small color="secondary"> mdi-medal </v-icon> Best Paper</v-chip>
          </v-chip-group>
        </v-card-text>
      </v-card>


      <v-card-actions class="justify-end">

          <v-btn class="secondary--text" color="primary" @click="reserve" >
            <v-icon>open_in_new</v-icon> Go to discussion
          </v-btn>
      </v-card-actions>
    </v-card>

     <v-card class="mx-auto my-8" max-width="80%">
      <v-row>
          <v-chip small color="primary" text-color="secondary" class="ma-2" label>
            <v-icon left> question_answer </v-icon>
              New Conversation
          </v-chip>

             <v-tooltip bottom color="blue">
              <template v-slot:activator="{ on, attrs }">
                 <v-chip small color="white" class="ma-2">
                  <v-icon small color="blue" v-bind="attrs" v-on="on">people</v-icon>
                </v-chip>
              </template>
              <span>6 followed commented</span>
             </v-tooltip>

             <v-tooltip bottom color="green">
              <template v-slot:activator="{ on, attrs }">
                 <v-chip small color="white" class="ma-2">
                  <v-icon small color="green" v-bind="attrs" v-on="on">check_circle</v-icon>
                </v-chip>
              </template>
              <span>3 trusted commented</span>
             </v-tooltip>

             <!-- <v-tooltip bottom color="primary">
              <template v-slot:activator="{ on, attrs }">
                 <v-chip small color="white" class="ma-2">
                  <v-icon small color="primary" v-bind="attrs" v-on="on">article</v-icon>
                </v-chip>
              </template>
              <span>4 other papers mentioned</span>
             </v-tooltip> -->


        <!-- <v-spacer/>
        <v-chip-group column >
          <v-chip small color="primary" text-color="secondary"> <v-icon small color="secondary"> mdi-message-text </v-icon>  6 followed commented</v-chip>
          <v-chip small color="primary" text-color="secondary">  <v-icon small color="secondary"> mdi-account-group </v-icon> 3 trusted commented</v-chip>
          <v-chip small color="primary" text-color="secondary"> <v-icon small color="secondary"> verified </v-icon> 10 papers mentioned</v-chip>
        </v-chip-group> -->
      </v-row>
      <v-row>
        <v-col cols="3" sm="3" md="3">

            <v-avatar color="primary" size="42">
              <img src="https://cdn5.vectorstock.com/i/1000x1000/73/04/female-avatar-profile-icon-round-woman-face-vector-18307304.jpg" alt="John">
            </v-avatar>

          <span class="my-1 subtitle-1 font-weight-bold">  Aspen</span>

        </v-col>
        <v-col cols="9" sm="9" md="9">
          <v-card-title>Opinion about clasroom collaboration design</v-card-title>
        </v-col>

      </v-row>
      <v-card-text>I think this paper has really valuable insights about potential collaboration design choices in classroom. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur ducimus odio illum doloremque corrupti totam voluptates modi, saepe dicta repudiandae sed quasi at porro in quis unde iste eaque temporibus?</v-card-text>



      <v-card v-for="paper in papers" :key="paper.id" class="mx-auto my-8" max-width="80%">
        <v-row>
          <v-chip small color="primary" text-color="secondary" class="ma-2" label>
           <img src="https://sigcse.org/files/images/logo/SIGCSE-logo_home.jpg" alt="sigcse" width="100" height="30">
          </v-chip>
        </v-row>
        <v-row>
          <v-col cols="7" sm="7" md="7">
            <v-card-title class="subtitle-2">{{paper.title}}</v-card-title>
            <v-card-text>
              <div class="my-1 body-2">{{paper.authors}}</div>
            </v-card-text>
          </v-col>
          <v-col cols="5" sm="5" md="5">
            <LazyYoutubeVideo src="https://www.youtube.com/embed/q_w2XlPaDLM" />
          </v-col>
        </v-row>

        <v-divider class="mx-4"></v-divider>
        <v-card-text>
          <v-chip-group column>
            <v-chip small color="primary" text-color="secondary"> <v-icon small color="secondary"> mdi-message-text </v-icon>  50 conversations</v-chip>
            <v-chip small color="primary" text-color="secondary">  <v-icon small color="secondary"> mdi-account-group </v-icon> 20 contributors</v-chip>
            <v-chip small color="primary" text-color="secondary"> <v-icon small color="secondary"> verified </v-icon> Author-verified</v-chip>
            <v-chip small color="primary" text-color="secondary"> <v-icon small color="secondary"> mdi-medal </v-icon> Best Paper</v-chip>
          </v-chip-group>
        </v-card-text>
      </v-card>


      <v-card-actions class="justify-end">

          <v-btn class="secondary--text" color="primary" @click="reserve" >
            <v-icon>open_in_new</v-icon> Go to discussion
          </v-btn>
      </v-card-actions>
    </v-card>

<v-card class="mx-auto my-8" max-width="80%">
      <v-row>
        <v-chip small color="primary" text-color="secondary" class="ma-2" label>
           <v-icon left> question_answer </v-icon>
            New Conversation
        </v-chip>
        <v-card-title>Opinion about clasroom collaboration design implications</v-card-title>
        <v-card-text>I think this paper has really valuable insights about potential collaboration design choices in classroom. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur ducimus odio illum doloremque corrupti totam voluptates modi, saepe dicta repudiandae sed quasi at porro in quis unde iste eaque temporibus?</v-card-text>
      </v-row>


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
      ],


    }
  }
}

</script>

<style scoped>

</style>