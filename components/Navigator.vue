<template>
  <v-navigation-drawer
    v-model="board.drawer"
    :mini-variant="board.miniVariant"
    fixed
    app
    dark
    hide-overlay
  >
    <v-list
      dense
      rounded
      nav
      class="py-0"
    >
<!--      USER ITEM: START-->
      <v-list-item :class="board.miniVariant && 'px-0'">
        <v-list-item-avatar>
          <img src="/ava.png">
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-text="user.name"></v-list-item-title>
          <v-list-item-subtitle v-text="user.email"></v-list-item-subtitle>
        </v-list-item-content>
        <nav-context></nav-context>
      </v-list-item>
<!--      USER ITEM: END-->

      <v-divider class="mb-1"></v-divider>

<!--      SECTIONS: START-->
      <div
        v-for="section in sections"
        :key="keyGen(8)"
      >
        <template v-for="item in section">
          <template v-if="!board.miniVariant">
            <v-subheader
              class="mt-2"
              v-if="item.header"
              :key="keyGen(8)"
              inset
              v-text="item.header"
            ></v-subheader>
            <v-divider
              class="mb-1"
              v-if="item.divider"
              :key="keyGen(8)"
              :inset="!board.miniVariant ? true : false"
            ></v-divider>
          </template>
          <v-list-item
            link
            v-if="item.name"
            :key="keyGen(8)"
            :to="{ name: item.name}"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </div>
<!--      SECTIONS: END-->

    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import NavContext from "./NavContext";
  export default {
    name: "Navigator",
    components: {NavContext},
    props: {
      board: Object
    },
    data() {
      return{
        sections: {
          content: [
            {
              header: 'Контент'
            },
            {
              divider: true
            },
            {
              name: 'dashboard-users',
              text: 'Пользовалели',
              icon: 'mdi-account-multiple'
            }
          ]
        },
      }
    },
    computed: {
      user() {
        return this.$store.getters.user;
      }
    },
  }
</script>

<style scoped>

</style>
