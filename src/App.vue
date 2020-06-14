<template>
  <v-app id="inspire">
    <v-app-bar app color="amber">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <span class="title ml-3 mr-5"
        >Math &nbsp; <span class="font-weight-light">Practise</span>
      </span>
      <v-btn color="amber  lighten-3">
        <v-icon>mdi-apps</v-icon>
        Matrix Exercises
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  components: {},

  data: () => ({
    //
  })
});
</script>
