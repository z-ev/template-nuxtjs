<template>
  <div :id="this.$route.name">
    <v-card outlined>
      <v-card-title>
        <v-layout>
          <v-flex md8>
            Таблица
            <v-chip
              v-if="!isEmpty(collect)"
              v-text="'Кол:' + collect.meta.total"
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
          :show-select="!isEmpty(collect)"
          v-model="selected"
          :single-select="singleSelect"
          :headers="collect.headers"
          :items="collect.data"
          :search="search"
          :loading="isEmpty(collect)"
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
          <template
            v-if="!isEmpty(collect)"
            v-slot:footer
          >
            <div class="text-center pt-2">
              <v-pagination
                v-model="page"
                :length="collect.meta['last_page']"
                @input="pagination()"
                circle
              ></v-pagination>
            </div>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
  export default {
    layout: 'dashboard',
    name: 'usersIndex',
    data() {
      return {
        // Search
        search: '',

        // Table
        selected: [],
        singleSelect: false,

        // Paginate
        page: 1,
      };
    },
    created() {
      if (this.$route.query.page) {
        this.page = Number(this.$route.query.page);
      }
      this.request();
    },
    computed: {
      collect() {
        return this.$store.getters[this.$options.name]({ page: this.page });
      }
    },
    methods: {
      request: function () {
        let payload = { config: { params: { page: this.page } } }
        this.$store.dispatch(this.$options.name, payload);
      },
      pagination: function() {
        this.$router.replace({ name: this.$route.name, query: { page: String(this.page) } });
        this.request();
      },
    }
  }
</script>

<style scoped>

</style>
