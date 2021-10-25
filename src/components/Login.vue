<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center" dense>
          <v-col cols="12" sm="8" md="4" lg="4">
            <v-card elevation="0">
              <v-alert v-if="authData.error" type="error">
                {{ authData.error }}
              </v-alert>
                <v-img src="@/assets/hand.jpg" alt="Fedorae Education Log" contain height="200"></v-img>
              <v-card-text>
                <v-form>
                  <v-text-field v-model="authData.email" label="Enter your email" name="email" prepend-inner-icon="mdi-account" type="email" class="rounded-0" outlined></v-text-field>
                  <v-text-field v-model="authData.password" label="Enter your password" name="password" prepend-inner-icon="mdi-lock" type="password" class="rounded-0" outlined></v-text-field>
                  <v-btn class="rounded-0" color="#000000" x-large block dark @click="login">Login</v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {

  data() {
    return {
      authData: {
        email: "",
        password: "",
        error: "",
      },
    };
  },
  methods: {
   login() {
       this.$store.dispatch('login', this.authData);
    },
  },
};
</script>

<style>
</style>