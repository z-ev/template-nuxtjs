<template>
  <v-row
    align="center"
    justify="center"
  >
    <v-col
      cols="12"
      sm="8"
      md="4"
    >
      <v-card class="elevation-12">
        <v-toolbar
          color="primary"
          dark
          flat
        >
          <v-toolbar-title>
            Авторизация
          </v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="authData.email"
              id="email"
              label="E-mail"
              name="email"
              prepend-icon="mdi-account"
              type="email"
              @keyup.enter="login()"
            ></v-text-field>

            <v-text-field
              v-model="authData.password"
              id="password"
              label="Пароль"
              name="password"
              prepend-icon="mdi-lock"
              type="password"
              @keyup.enter="login()"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <span
            v-text="userAgent"
            class="text-caption"
          ></span>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            @click="login()"
          >Войти</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    layout: 'thin',
    name: "login",

    data: function () {
      return {
        authData: {
          email: '',
          password: '',
        }
      }
    },
    computed: {
      userAgent() {
        return this.$store.getters.userAgent;
      }
    },
    methods: {
      login: function () {
        this.$store.dispatch('login', this.authData).then(() => {
          this.$router.push({ name: 'dashboard' })
        });
      }
    }
  }
</script>

<style scoped>

</style>
