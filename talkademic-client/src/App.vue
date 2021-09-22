<template>
  <v-app>
    <NavigationBar />
    <v-content>
      <router-view>  </router-view>
    </v-content>
  </v-app>
</template>

<script>
import NavigationBar from '@/components/layout/NavigationBar'

export default {
  name: 'App',
  components: {NavigationBar},
  data: () => ({
    //
  }),
};
</script>
