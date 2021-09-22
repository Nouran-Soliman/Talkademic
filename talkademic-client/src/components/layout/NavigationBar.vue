<template>
    <nav>
        <v-toolbar app light color="primary">
            <!-- <v-app-bar-nav-icon @click = "drawer = !drawer"> </v-app-bar-nav-icon> -->
            <v-toolbar-title class="text-uppercase black--text">
                <span class="font-weight-light">Talk</span>
                <span>ademic</span>
            </v-toolbar-title>

            <v-spacer> </v-spacer>
            <v-text-field label="Search" placeholder="Type in your search keywords" outlined dense prepend-inner-icon="search"> </v-text-field>
            <v-spacer> </v-spacer>

            <v-dialog v-model="showLoginPopout" width="500">

                <template v-slot:activator="{ on, attrs }">
                    <v-btn @click = "showLoginPopout = !showLoginPopout" flat v-bind="attrs" v-on="on">
                        <v-icon left>person</v-icon>
                        <span>Login</span>
                    </v-btn>
                </template>

                <login-card/>
            </v-dialog>


            <template v-slot:extension>
                <v-tabs v-model="tab" align-with-title>
                    <v-tabs-slider color="secondary"></v-tabs-slider>
                    <v-tab :key="Explore" class="secondary--text" to="/explore/nouran"> Explore </v-tab>
                    <v-tab :key="Feed" class="secondary--text" to="/newsfeed/nouran"> Feed </v-tab>
                    <v-tab :key="Profile" class="secondary--text" to="/profile/nouran"> Profile </v-tab>
                </v-tabs>
            </template>

        </v-toolbar>


    </nav>
</template>

<script>
import LoginCard from './LoginCard.vue'


export default {
  components: { LoginCard },
    data(){
           return {
            showLoginPopout: false,

            tab: null,
        }
    }
}
</script>

<style scoped>

</style>
