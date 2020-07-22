<template>
  <v-app-bar
    color="primary"
    fixed
    app
    dark
  >
    <v-btn
      icon
      @click.stop="onDrawer()"
      @mouseover="icon = board.miniVariant || !board.drawer ? 'mdi-forwardburger' : 'mdi-backburger'"
      @mouseleave="icon = 'mdi-menu'"
    >
      <v-icon v-text="icon"></v-icon>
    </v-btn>
    <router-link :to="{ name: 'dashboard' }">
      <v-avatar tile>
        <img src="/v.png">
      </v-avatar>
    </router-link>
  </v-app-bar>
</template>

<script>
  export default {
    name: "AppBar",
    props: {
      board: Object
    },
    data() {
      return {
        icon: 'mdi-menu',
      }
    },
    computed: {
      breakpoint() {
        return this.$store.getters.breakpoint;
      }
    },
    methods: {
      onDrawer: function() {
        if (this.breakpoint != 'xs' && this.breakpoint != 'sm' && this.breakpoint != 'md') {
          this.board.miniVariant = !this.board.miniVariant;
        } else {
          this.board.miniVariant = false;
          this.board.drawer = !this.board.drawer;
        }
      },
    }
  }
</script>

<style scoped>

</style>
