<template>
  <v-app
    v-resize="resize"
    dark
  >
    <app-bar :board="board"></app-bar>
    <navigator :board="board"></navigator>
    <show-content></show-content>
  </v-app>
</template>

<script>
  import AppBar from "./AppBar";
  import Navigator from "./Navigator";
  import ShowContent from "./ShowContent";
  export default {
    name: "Skeleton",
    components: { ShowContent, Navigator, AppBar },
    data() {
      return {
        board: {
          drawer: null,
          miniVariant: false,
        }
      }
    },
    methods: {
      resize: function () {
        this.$store.dispatch('resize');
      },
    }
  }
</script>

<style scoped>

</style>
