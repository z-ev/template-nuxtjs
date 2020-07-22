<template>
  <v-menu
    transition="slide-x-transition"
    bottom
    right
  >
    <template v-slot:activator="{ on }">
      <v-btn
        icon
        v-on="on"
      >
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        link
        href="#"
      >
        <v-list-item-icon>
          <v-icon v-text="'mdi-account-edit'"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="'Профиль'"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        link
        @click="logout()"
      >
        <v-list-item-icon>
          <v-icon v-text="'mdi-exit-to-app'"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="'Выйти'"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
  export default {
    name: "NavContext",
    methods: {
      logout: function () {
        this.$store.dispatch('logout').then(() => {
          this.$router.push({ name: 'login' })
        });
      }
    }
  }
</script>

<style scoped>

</style>
