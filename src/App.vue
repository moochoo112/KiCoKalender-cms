<template>
  <v-app>
    <v-main>
      <Login v-if="!this.$store.getters.isAuthenticated" />
      <Home v-if="this.$store.getters.isAuthenticated"/>
    </v-main>
  </v-app>
</template>

<script>
  import Login from './components/Login';
  import Home from './components/Home';

export default {
  name: 'App',

  components: {
    Home,
    Login,
  },

  data: () => ({
    //
  }),
  computed: {
    token() {
      return this.$store.state.token;
    }
  }
};
</script>
