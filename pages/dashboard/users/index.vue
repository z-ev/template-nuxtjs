<template>
  <div :id="this.$route.name">
    <v-card outlined>
      <v-card-title>
        <v-layout>
          <v-flex md8>
            Таблица
            <v-chip
              v-if="usersIndex.data"
              v-text="'Кол:' + usersIndex.data.length"
            ></v-chip>
          </v-flex>
          <v-flex md4>
            <v-text-field
              single-line
              hide-details
              v-model="search"
              append-icon="mdi-magnify"
              label="Поиск"
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-card-title>
      <v-card-text>
        <v-data-table
          :show-select="!isEmpty(usersIndex)"
          v-model="selected"
          :single-select="singleSelect"
          :headers="usersIndex.headers"
          :items="usersIndex.data"
          :search="search"
          :loading="isEmpty(usersIndex)"
          :loading-text="'Пожалуйста подождите...'"
          :no-data-text="'Элементов не найдено...'"
          hide-default-footer
        >
          <template v-slot:item.action="{ item }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  v-on="on"
                  color="primary"
                  :to="{ name: 'dashboard-users-create'}"
                >
                  <v-icon>mdi-information-outline</v-icon>
                </v-btn>
              </template>
              <span>Просмотр информации</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  v-on="on"
                  color="warning"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>
              <span>Редактировать</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                  <v-icon color="error">mdi-delete</v-icon>
                </v-btn>
              </template>
              <span>Удалить</span>
            </v-tooltip>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
  export default {
    layout: 'dashboard',
    name: "index",
    data() {
      return {
        // Search
        search: '',

        // Table
        selected: [],
        singleSelect: false,
      };
    },
    created() {
      this.$store.dispatch('usersIndex');
    },
    computed: {
      usersIndex() {
        return this.$store.getters.usersIndex;
      }
    },
    methods: {
      //
    }
  }
</script>

<style scoped>

</style>
